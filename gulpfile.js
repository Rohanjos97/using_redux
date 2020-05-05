const { src, dest } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const exec = require('gulp-exec');
const map = require('gulp-map');

// gulp.task('task1', () => {
//     console.log('gulp here');
//     src('./node_modules/archy/package.json');
// });

// gulp.task('task2', () => {
//     src('./node_modules/archy/package.json')
//         .pipe(dest('./output2.txt'));
// });

// gulp.task('task3', () => {
//     src('./**/*.json') //get all the json files
//         .pipe(concat('package.json'))
//         .pipe(dest('./output'))
// });

gulp.task('task4', () => {
    const originalPackage = require('./package.json');
    const dependencies = [];
    const devDependencies = [];
    src('./**/babel-jest/package.json')
        // .pipe(concat('./package.json'))
        .pipe(map(function (file) {
            var obj = require(file.path);
            if (obj.dependencies !== null) {
                // adding the dependency from the parent package.json to our local array
                dependencies.push(obj.dependencies);
            }
            if (obj.devDependencies !== null) {
                // adding the devDependency from the parent package.json to our local array
                devDependencies.push(obj.devDependencies);
            }
            console.log(dependencies.length)
            if(dependencies.length !==0) {
                console.log('inside if')
                console.log(dependencies)
                dependencies.map( item => {
                    console.log('inside loop')
                })
                // console.log('before adding new dependencies: ', originalPackage.dependencies)
                // originalPackage.dependencies = originalPackage.dependencies + obj.dependencies;
                // console.log('after adding new dependencies: ', originalPackage.dependencies)
            }
        }))
        // .pipe(concat('./output/package.json'))
    // .pipe(dest('./output'));
    // .pipe(exec('npm run start'));
});
