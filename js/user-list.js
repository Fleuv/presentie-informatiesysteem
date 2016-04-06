Polymer({
    is: 'user-list',
    ready: function() {
        this.users = [
            {id: 1, name: 'John Doe', absent: false},
            {id: 2, name: 'Sally Johnson', absent: true},
            {id: 3, name: 'Willem Alexander', absent: false},
            {id: 4, name: 'Freek Willem', absent: false}
        ];
    },
    present: function (e) {
        var button = e.target.parentElement;

        if (button.classList.contains('present')) {
            button.classList.remove('present');
        } else {
            button.classList.add('present');
        }
    }
});