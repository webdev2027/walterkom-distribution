var gulp = require('gulp'); //default
var sass = require('gulp-sass');//sass complie
var concat = require('gulp-concat'); //compile js plugins into one file
var concatCss = require('gulp-concat-css');//compile css plugins into one file
var watch = require('gulp-watch'); //sass compile to css

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('css/'));
});
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('concat', function () {
    return gulp.src(
            [
                'bower_components/jquery/dist/jquery.min.js',
                'bootstrap/dist/js/bootstrap.bundle.min.js',
                'js/jquery.easing.min.js',
                'bower_components/pushy/js/pushy.min.js',
                'bower_components/waypoints/lib/jquery.waypoints.min.js',
                'bower_components/wow/dist/wow.min.js',
                'js/jquery.preloader.min.js',
                'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
                'bower_components/owl.carousel/dist/owl.carousel.min.js',
                'bower_components/jarallax/dist/jarallax.min.js',
                'bower_components/jarallax/dist/jarallax-video.min.js',
                'js/smooth-scroll.min.js',
                'bower_components/masonry/dist/masonry.pkgd.min.js'
            ])
            .pipe(concat('plugins.js'))
            .pipe(gulp.dest('js/plugins/'));
});

gulp.task('concatCss', function () {
    return gulp.src([
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/themify-icons/css/themify-icons.css',
        'css/animate.css',
        'bower_components/pushy/css/pushy.css',
        'bower_components/magnific-popup/dist/magnific-popup.css',
        'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
        'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
        'et-line-font/style.css',
        'bootstrap/dist/css/bootstrap.min.css'
    ])
            .pipe(concatCss("plugins/plugins.css"))
            .pipe(gulp.dest('css/'));
});