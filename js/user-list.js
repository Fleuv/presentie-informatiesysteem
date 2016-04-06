Polymer({
    is: 'user-list',
    ready: function() {
        this.users = [
            {id: 123, name: 'John Doe', absent: false},
            {id: 321, name: 'Sally Johnson', absent: true}
        ];
    },
    present: function (e) {
        if (this.className.indexOf('present')) {
            this.className = this.className.replace(new RegExp('\bpresent\\b', ''))
        } else {
            this.className += ' present'
        }
    }
});