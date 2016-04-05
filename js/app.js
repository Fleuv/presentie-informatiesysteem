(function(win, doc) {
    'use strict';

    // Commonly used variables
    var $user = Cookies.getJSON('user');
    var app = doc.getElementById('app');

    if (typeof $user !== 'undefined') {
        app.firstname = $user.first;
        app.isGuest = $user.role === 0;
        app.isStudent = $user.role === 1;
        app.isTeacher = $user.role === 2;
        app.isAdvisor = $user.role === 3;
        app.isDean = $user.role === 4;
    } else {
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
                first: 'Student',
                last: 'Example',
                email: 'student.example@student.hu.nl',
                role: 1
            };

            // Create a cookie with the user information
            Cookies.set('user', tmpUserInfo, {expires: 7, path: ''});

            // Reload the page so we will see the right elements
            location.reload();
        });
    });

})(window, document);