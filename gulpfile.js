const gulp = require("gulp");
const rename = require("gulp-rename");
const minifyJS = require("gulp-uglify");
const minifyCSS = require("gulp-clean-css");

const paths = {
  src: "./src",
  dist: "./dist"
};

gulp.task("js", done => {
  gulp
    .src(paths.src + "/*.js")
    .pipe(minifyJS())
    .pipe(
      rename(name => {
        name.extname = ".min.js";
      })
    )
    .pipe(gulp.dest(paths.dist));
  done();
});

gulp.task("css", done => {
  gulp
    .src(paths.src + "/*.css")
    .pipe(minifyCSS())
    .pipe(
      rename(name => {
        name.extname = ".min.css";
      })
    )
    .pipe(gulp.dest(paths.dist));
  done();
});

gulp.task("build", gulp.series("js", "css", done => done()));
