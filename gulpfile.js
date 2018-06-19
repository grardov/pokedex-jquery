const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync  = require('browser-sync').create();

//Styles task
gulp.task('styles', () => {
  gulp.src('./assets/scss/master.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      versions: 'last 2 versions'
    }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.reload({stream: true}));
});

//Server task
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  //Watchers
  gulp.watch('./assets/scss/*.scss', ['styles']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

//Default task
gulp.task('default', ['styles', 'serve']);