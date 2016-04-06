(function(win, doc) {
    'use strict';

    // Commonly used variables
    var $user = Cookies.getJSON('user');
    var app = doc.getElementById('app');

    if (typeof $user !== 'undefined') {
        app.uid = $user.id;
        app.firstname = $user.first;
        app.isGuest = $user.role === 0;
        app.isLoggedIn = $user.role >= 1;
        app.notStudent = $user.role > 1;
        app.isStudent = $user.role === 1;
        app.isTeacher = $user.role === 2;
        app.isAdvisor = $user.role === 3;
        app.isDean = $user.role === 4;
    } else {
        app.uid = 0;
        app.firstname = 'bezoeker';
        app.isGuest = true;
        app.isStudent = app.isTeacher = app.isAdvisor = app.isDean = false;
    }

    // Sets app default base URL
    app.baseUrl = '/';
    if (win.location.port === '') {
        app.baseUrl = '/education/presentie-informatiesysteem/';
    }

    app.addEventListener('dom-change', function() {
        //console.log('dom-change');
    });

    win.addEventListener('WebComponentsReady', function() {
        var login = doc.getElementById('login');

        login.addEventListener('click', function() {
            /**
             * @todo get and use relevant information
             */
            var tmpUserInfo = {
                id: 6,
                first: 'Docent',
                last: 'Example',
                email: 'student.example@student.hu.nl',
                role: 2
            };

            // Create a cookie with the user information
            Cookies.set('user', tmpUserInfo, {expires: 5, path: ''});

            // Reload the page so we will see the right elements
            location.reload();
        });
    });

})(window, document);