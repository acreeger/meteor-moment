# Moment v2.6.0 for Meteor

[Moment.js](http://momentjs.com/), a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor.

Installation
-------------

`mrt add moment`

Usage
-------------
Just like the [moment docs](http://momentjs.com/docs/) tell you:

`var oneMomentPlease = moment();`

Helper
-------------
In the template, format date to string. Html:

```
{{moment time_number 'YYYY-MM-DD HH:mm:ss'}}
{{moment time_date 'YYYY-MM-DD HH:mm:ss'}}
```
the first paramet is a number of  milliseconds since the Unix Epoch (Jan 1 1970 12AM UTC) or a Date type. for example:

```
Template.hello.time_number = function () {
  return new Date().getTime();
};

Template.hello.time_date = function(){
  return new Date();
}
```