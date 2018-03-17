var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var raju = new Person('Raju');
var andal = new Person('Andal');
var anu = new Person('Anushka');
var dil = new Person('Dileepan');

var people = [raju, andal, anu, dil];

people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said  ' + msg);
    });
});

raju.emit('speak', 'hey dudes');
raju.emit('speak', 'Hello appa');
raju.emit('speak', 'I am goint to School');
raju.emit('speak', 'I want Chickedn Nuggets');