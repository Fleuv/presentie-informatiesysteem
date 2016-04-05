(function(document) {
    'use strict';

    // Grab a reference to our auto-binding template
    // and give it some initial binding values
    var app = document.querySelector('#app');

    // Sets app default base URL
    app.baseUrl = '/';
    if (window.location.port === '') {  // if production
        // Uncomment app.baseURL below and
        // set app.baseURL to '/your-pathname/' if running from folder in production
        app.baseUrl = '/education/presentie-informatiesysteem/';
    }

    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {
        // Our app is ready to rock!
    });

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
    });

    var pages = document.querySelector('iron-pages');
    var nav = document.querySelector('paper-menu');
    var navItems = document.querySelectorAll('paper-item');

    for (var i = 0; i < navItems.length; ++i) {
        var navItem = navItems[i];
        navItem.addEventListener('click', function(e) {
            pages.select('agenda');
        });
    }

    app.firstname='gast';

})(document);