/**
 * Based on systemjs.config.js in angular.io
 */
(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app'               : 'build/app',
        '@angular'          : 'node_modules/@angular',
        'rxjs'              : 'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app'               : { main: 'main.js', defaultExtension: 'js' },
        'rxjs'              : { defaultExtension: 'js' },
        '@angular/router'   : { main: 'index.js', defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router-deprecated',
        'upgrade',
        'forms'
    ];

    // add map entries for each angular package
    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'node_modules/@angular/' + pkgName;
    });

    // add package entries for angular packages
    ngPackageNames.forEach(function (pkgName) {
        // Bundled (~40 requests):
        packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

        // Individual files (~300 requests):
        //packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);