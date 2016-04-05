window.addEventListener('WebComponentsReady', function() {

    // Removes end / from app.baseUrl which page.base requires for production
    if (window.location.port === '') {  // if production
        page.base(app.baseUrl.replace(/\/$/, ''));
    }

    // Block all page when not logged in
    if (app.isGuest) {
        page.redirect(app.baseUrl + 'login');
    }

    // Routes

    page(app.baseUrl, function () {
        app.route = 'home';
    });

    page('/', function () {
        app.route = 'home';
    });

    page('/login', function (data) {
        if (app.isStudent) {
            page.redirect(app.baseUrl);
        } else {
            app.route = 'login';
        }
    });

    page('/report', function () {
        app.route = 'report';
    });

    page('/logout', function () {
        Cookies.remove('user', { path: '' });

        // Check if the cookie still exists
        if (typeof Cookies.get('user') === 'undefined') {
            // Reload the page so we will see the right elements
            location.reload();
        } else {
            app.$.toast.text = 'Het is niet gelukt om uit te loggen.';
            app.$.toast.show();
        }
    });

    // 404
    page('*', function () {
        app.$.toast.text = 'Pagina niet gevonden: "' + window.location.hash.substr(3)+ '"';
        app.$.toast.show();
        if (app.isGuest) {
            page.redirect(app.baseUrl + 'login');
        } else {
            page.redirect(app.baseUrl);
        }
    });

    // add #! before urls
    page({
        hashbang: true
    });

});