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
    const newDependencies = null;
    const newDevDependencies = null;
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
                newDependencies = Object.assign({}, dependencies[0], originalPackage.dependencies)
                console.log('new dependencies: ', newDependencies);
            }
            console.log(originalPackage.devDependencies)
            if(devDependencies.length !==0) {
                newDevDependencies = Object.assign({}, devDependencies[0], originalPackage.devDependencies)
                console.log('new devDependencies: ', newDevDependencies);
            }
        const newPackageFile = Object.assign({}, originalPackage);
        newPackageFile.dependencies = newDependencies;
        newPackageFile.devDependencies = newDevDependencies;
        console.log(newPackageFile);
        }))
        // .pipe(concat('./output/package.json'))
    // .pipe(dest('./output'));
    // .pipe(exec('npm run start'));
});
