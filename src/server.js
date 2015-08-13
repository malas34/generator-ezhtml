/*jslint indent: 4, nomen: true */
/*global require, __dirname, console */
(function () {

    'use strict';

    var // variables
        server, paths,
        port = 9080,
        lr_port = 35729,
        // requires
        path = require('path'),
        // chalk = require('chalk'),
        express = require('express'),
        bodyParser = require('body-parser'),
        compression = require('compression'),
        serveFavicon = require('serve-favicon'),
        livereload = require('express-livereload');

    paths = {
        www: path.join(__dirname, 'public')
    };
    //
    // express
    server = express();
    //
    // express middlewares
    if (server.get('env') === 'development') {
        livereload(server, {
            watchDir: paths.www,
            exclusions: ['git/', '.svn/'],
            exts: ['html', 'css', 'js', 'png', 'gif', 'jpg']
        });
    }
    server.use(compression()); // gzip
    server.use(serveFavicon(path.join(paths.www, 'favicon.ico'))); // utilisation du favicon
    server.use(bodyParser.json()); // for parsing application/json
    server.use(bodyParser.urlencoded({ // for parsing application/x-www-form-urlencoded
        extended: true
    }));
    //
    //
    server.use('/docs', express.static(path.join(paths.www, '..', 'docs')));
    server.use('/', express.static(paths.www));
    //
    //
    server.listen(port, function () {
        console.log('Serve running under http://localhost:%d', port);
        console.log('Livereload is running on port %d\n', lr_port);
    });

}());
