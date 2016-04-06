var weekdays = new Array("Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag");
var day = new Date();

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
        },
        day: {
            type: Number,
            value: day.getDay()
        },
        theDay: {
            type: String,
            value: weekdays[day.getDay()]
        },
        lessons: {
            type: Array,
            value: function() {
                return [
                    {id: 1, subject: 'OODC', date: 1, time: '10:30 - 12:00', teacher: 'John Doe', class: 'HBO-ICTQ9S'},
                    {id: 2, subject: 'OODC', date: 1, time: '12:30 - 14:00', teacher: 'John Doe', class: 'HBO-ICTQ9S'},
                    {id: 3, subject: 'AUIX', date: 2, time: '10:30 - 12:00', teacher: 'Sally Johnson', class: 'HBO-ICTQ9S'},
                    {id: 4, subject: 'AUIX', date: 2, time: '12:30 - 14:00', teacher: 'Sally Johnson', class: 'HBO-ICTQ9S'},
                    {id: 3, subject: 'GP', date: 3, time: '10:30 - 12:00', teacher: 'Willem Alexander', class: 'HBO-ICTQ9S'},
                    {id: 4, subject: 'GP', date: 3, time: '12:30 - 14:00', teacher: 'Willem Alexander', class: 'HBO-ICTQ9S'},
                    {id: 3, subject: 'MOD', date: 4, time: '10:30 - 12:00', teacher: 'Freek Willem', class: 'HBO-ICTQ9S'},
                    {id: 4, subject: 'MOD', date: 4, time: '12:30 - 14:00', teacher: 'Freek Willem', class: 'HBO-ICTQ9S'},
                    {id: 3, subject: 'CSN', date: 5, time: '10:30 - 12:00', teacher: 'Freek Willem', class: 'HBO-ICTQ9S'},
                    {id: 4, subject: 'CSN', date: 5, time: '12:30 - 14:00', teacher: 'Freek Willem', class: 'HBO-ICTQ9S'}
                ];
            }
        }
    },

    increaseDay: function() {
        day.setDate(day.getDate()+1);
        this.day = day.getDay();
        this.theDay = weekdays[day.getDay()];
    },

    decreaseDay: function() {
        day.setDate(day.getDate()-1);
        this.day = day.getDay();
        this.theDay = weekdays[day.getDay()];
    },

    computeLessons: function(day) {
        return function (lesson) {
            return lesson.date === day;
        }
    }

});