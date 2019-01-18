const gulp = require("gulp");
const purgecss = require("gulp-purgecss");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const rename = require("gulp-rename");
var server = require('gulp-server-livereload');

var theme = "bax";

gulp.task("js", () => {
  return gulp.src("./js/*.js")
    // .pipe(concat(theme + ".js"))
    .pipe(uglify())
    .on("error", function (err) { console.log(err); })
    .pipe(gulp.dest("./public/js/"));
})

gulp.task("css", () => {
  return gulp
    .src("./scss/" + theme + ".scss")
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: "compressed"
        }).on("error", sass.logError)
      )
      .pipe(autoprefixer({
          browsers: ["last 2 versions"],
          cascade: false
      }))
      .pipe(purgecss({
       content: ["./public/*.html", "./js/*.js"],
       whitelist: ["ul", "ol", "li"]
      }))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./public/css/"))
});

gulp.task("watch", ["css", "js"], () => {
  gulp.watch("./scss/**/*.scss", ["css"]);
  gulp.watch("./js/*.js", ["js"]);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      path: "public/index.html",
      livereload: false,
      directoryListing: true,
      open: true,
      host: "0.0.0.0"
    }));
});

gulp.task("default", ["watch", "webserver"]);
