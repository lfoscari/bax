/*
  Cliccando gli swatches cambia il backgroundColor del container
  il colore viene salvato nel local storage
*/

var colorsources = document.querySelectorAll(".swatches span");
document.body.style.backgroundColor = localStorage.getItem("backgroundColor");

colorsources.forEach((s, index) => {
  s.addEventListener("click", () => {
    document.body.style.transition = "background-color linear .25s";
    var c = colorsources[index].style.backgroundColor;
    document.body.style.backgroundColor = c;
    localStorage.setItem("backgroundColor", c);
  });
});

/*
  Prendo i post di instagram
*/

var posts = document.querySelector(".social"),
    name = 'andrea_bax',
    howManyPosts = 100;

async function instagramPhotos(tag) {
  posts.innerHTML = ''

  const res = []

  console.log(`Source => https://www.instagram.com/${name}/`)

  try {
    const userInfoSource = await axios.get(`https://www.instagram.com/${name}/`)

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

      var isWorkMedia = node.edge_media_to_caption.edges[0].node.text.includes(tag);

      console.log(media);

      if (isWorkMedia) {

        const p = []
        if (node.display_url) {
          p.push(node.display_url)

          try {
            p.push(node.edge_media_to_caption.edges[0].node.text) // caption
          } catch (e) {}

          try {
            p.push(`https://www.instagram.com/p/${node.shortcode}`)
          } catch (e) {}
        }

        res.push(p)

      }
    }
  } catch (e) {
    console.error(`Unable to retrieve photos. Reason: ${e.toString()}`)
  }

  for (i = 0; i < res.length; i++) {
    posts.innerHTML += `
      <div class="cell">
        <img src="${res[i][0]}"/>
      </div>
    `;
  }
}
