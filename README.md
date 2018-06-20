# Pokédex jQuery

Hello! This is a Pokédex application that uses the jQuery library and some other tools to develop this application. Thanks to [Pokeapi](https://pokeapi.co/) for the pokemon data and be able to use them.

## Live demo

Thank you to [Github Pages](https://pages.github.com/) I was able to upload the pokédex application for you.

* [**Pokédex jQuery**](https://grardovr.github.io/pokedex-jquery/) here.

## Browsers supported

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
✔ | ✔ | ✔ | ✔ | ✔ | [8+](#internet-explorer-8) ✔ |

## Used technologies 

Pokédex jQuery is made with HTML/CSS and Javascript.

### jQuery

All the logic of the application was made with [jQuery](https://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

### Sass

I used [Sass](https://sass-lang.com/) in development for organize the styles in the project using [Sass 7-1 Patter](https://gist.github.com/rveitch/84cea9650092119527bc) it consists in organizing the files in seven differents folder, example:

* `base`
* `components`
* `layout`
* `pages`
* `themes`
* `utils`
* `vendors`

### Gulp

[Gulp](https://gulpjs.com/) is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

#### Gulp plugins

* `gulp-sass`
* `gulp-autoprefixer`

#### Gulpfile

Task for compile `.scss` files,

```javascript
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
```

Task for the server.

```javascript
//Styles task
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
```

### Endpoints from the Pokeapi

I used two different endpoint from the Pokeapi.

* Get the first 150 pokemons from the Pokeapi: `https://pokeapi.co/api/v2/pokemon/?limit=150`
* Get all data about the pokémon: `https://pokeapi.co/api/v2/pokemon/`

### Thanks

Thank you to [jgthms](https://github.com/jgthms) for the great project [minirest](https://github.com/jgthms/minireset.css) that helped me in this project and to [Yellowme](https://github.com/yellowme) for the challenge.