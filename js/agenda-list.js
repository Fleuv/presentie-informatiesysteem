Polymer({
    is: 'agenda-list',
    properties: {
        isStudent: {
            type: Boolean,
            value: Cookies.getJSON('user').role === 1
        },
        notStudent: {
            type: Boolean,
            value: Cookies.getJSON('user').role !== 1
        }
    },
    ready: function() {
        this.schedule = [
            {id: 123, subject: 'OODC', date: 'van 10:30 tot 12:00', teacher: 'John Doe', class: 'HBO-ICTQ9S'},
            {id: 321, subject: 'AUIX', date: 'van 12:30 tot 14:00', teacher: 'Sally Johnson', class: 'HBO-ICTQ9S'}
        ];
    }
});