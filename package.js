Package.describe({
  name: 'acreeger:moment',
  summary: "Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.8.1",
  git: "https://github.com/acreeger/meteor-moment.git"
});

Package.onUse(function (api, where) {
  where = where || ['client', 'server'];
  api.export('moment', where);
  api.addFiles('lib/moment/moment.js', where);
  api.addFiles('export-moment.js', where);
});

Package.on_test(function (api) {
  if (Package.onTest) {
    api.use(['mrt:moment@2.8.1', 'tinytest', 'test-helpers'], ['client', 'server']);
  } else {
    api.use(['moment', 'tinytest', 'test-helpers'], ['client', 'server']);
  }
  api.addFiles('test-mrt-moment.js', ['client', 'server']);
});
