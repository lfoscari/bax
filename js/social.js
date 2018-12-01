var posts = document.querySelector(".social")
howManyPosts = 100
name = 'andrea_bax'

instagramPhotos()

async function instagramPhotos() {
  posts.innerHTML = ''

  const res = []

  console.log('Sto prendendo le immagini da https://www.instagram.com/' + name + '/')

  try {
    const userInfoSource = await axios.get('https://www.instagram.com/' + name + '/')

    // userInfoSource.data contains the HTML from axios
    const jsonObject = userInfoSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

    const userInfo = JSON.parse(jsonObject)
    // Retrieve only the first 10 results
    const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, howManyPosts)
    for (let media of mediaArray) {
      const node = media.node

      if ((node.__typename && node.__typename !== 'GraphImage')) {
        continue
      }

      const p = []
      if (node.display_url) {
        p.push(node.display_url)

        try {
          p.push(node.edge_media_to_caption.edges[0].node.text) // caption
        } catch (e) {}

        try {
          p.push('https://www.instagram.com/p/' + node.shortcode)
        } catch (e) {}
      }

      res.push(p)
    }
  } catch (e) {
    console.error('Unable to retrieve photos. Reason: ' + e.toString())
  }

  for (i = 0; i < res.length; i++) {
    posts.innerHTML += `
      <div class="cell">
        <img src="${res[i][0]}"/>
      </div>
    `;
    // <p>${res[i][1]}</p>
    // posts.innerHTML += '<div><img src="' + res[i][0] + '"/>'
    // if (res[i][1])
    //   posts.innerHTML += '<p>' + res[i][1] + '</p>'
    // if (res[i][2])
    //   posts.innerHTML += '<p><a href="' + res[i][2] + '">' + res[i][2] + '<a/></p>'
    // posts.innerHTML += '</div>';
  }
}
