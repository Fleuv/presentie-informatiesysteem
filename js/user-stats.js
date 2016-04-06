Polymer({
    is: 'user-stats',
    ready: function() {
        this.stats = [
            {id: 1, name: 'John Doe', class: 'HBO-ICTQ9S', absent: 5},
            {id: 2, name: 'Sally Johnson', class: 'HBO-ICTQ9S', absent: 10},
            {id: 3, name: 'Willem Alexander', class: 'HBO-ICTQ9S', absent: 15},
            {id: 4, name: 'Freek Willem', class: 'HBO-ICTQ9S', absent: 20}
        ];
    },
    present: function (e) {
        var button = e.target.parentElement;
    }
});