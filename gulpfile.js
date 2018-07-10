const gulp =require('gulp')
const babel =require('gulp-babel')
const watch =require('gulp-watch')
const minify =require('gulp-minify')
// const concat =require('gulp-concat')

gulp.task('builddev', ()=> {
    return watch('./src/nodeuii/**/*.js',{
        ignoreInitial:false
    },()=>{
        gulp.src('./src/nodeuii/**/*.js')
            .pipe(babel({
                babelrc:false,
                'plugins':['babel-plugin-transform-es2015-modules-commonjs']
            }))
            .pipe(minify())
            // .pipe(concat())
            .pipe(gulp.dest('build'))
    })
})

gulp.task('default',['builddev'])