//Tests
Tinytest.add('Moment can be initalized', function (test) {
  test.isNotNull(moment, 'moment should exist');
  test.isTrue(typeof(moment) === "function", 'moment should be a function');
});

Tinytest.add('Moment version is correct', function (test) {
  test.equal(moment.version, "2.8.1", 'moment version was not correct');
});
