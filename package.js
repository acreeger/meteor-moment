Package.describe({
  summary: "Moment.js, a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor. See http://momentjs.com."
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('moment');
  }
  where = where || ['client', 'server'];
  api.add_files('lib/moment/moment.js', where);
  api.add_files('export-moment.js', where);
  api.add_files('lib/moment/lang/ar-ma.js', 'client');
  api.add_files('lib/moment/lang/ar.js', 'client');
  api.add_files('lib/moment/lang/bg.js', 'client');
  api.add_files('lib/moment/lang/br.js', 'client');
  api.add_files('lib/moment/lang/ca.js', 'client');
  api.add_files('lib/moment/lang/cs.js', 'client');
  api.add_files('lib/moment/lang/cv.js', 'client');
  api.add_files('lib/moment/lang/da.js', 'client');
  api.add_files('lib/moment/lang/de.js', 'client');
  api.add_files('lib/moment/lang/el.js', 'client');
  api.add_files('lib/moment/lang/en-ca.js', 'client');
  api.add_files('lib/moment/lang/en-gb.js', 'client');
  api.add_files('lib/moment/lang/eo.js', 'client');
  api.add_files('lib/moment/lang/es.js', 'client');
  api.add_files('lib/moment/lang/et.js', 'client');
  api.add_files('lib/moment/lang/eu.js', 'client');
  api.add_files('lib/moment/lang/fa.js', 'client');
  api.add_files('lib/moment/lang/fi.js', 'client');
  api.add_files('lib/moment/lang/fr-ca.js', 'client');
  api.add_files('lib/moment/lang/fr.js', 'client');
  api.add_files('lib/moment/lang/gl.js', 'client');
  api.add_files('lib/moment/lang/he.js', 'client');
  api.add_files('lib/moment/lang/hi.js', 'client');
  api.add_files('lib/moment/lang/hr.js', 'client');
  api.add_files('lib/moment/lang/hu.js', 'client');
  api.add_files('lib/moment/lang/id.js', 'client');
  api.add_files('lib/moment/lang/is.js', 'client');
  api.add_files('lib/moment/lang/it.js', 'client');
  api.add_files('lib/moment/lang/ja.js', 'client');
  api.add_files('lib/moment/lang/ka.js', 'client');
  api.add_files('lib/moment/lang/ko.js', 'client');
  api.add_files('lib/moment/lang/lv.js', 'client');
  api.add_files('lib/moment/lang/ml.js', 'client');
  api.add_files('lib/moment/lang/mr.js', 'client');
  api.add_files('lib/moment/lang/ms-my.js', 'client');
  api.add_files('lib/moment/lang/nb.js', 'client');
  api.add_files('lib/moment/lang/ne.js', 'client');
  api.add_files('lib/moment/lang/nl.js', 'client');
  api.add_files('lib/moment/lang/nn.js', 'client');
  api.add_files('lib/moment/lang/pl.js', 'client');
  api.add_files('lib/moment/lang/pt-br.js', 'client');
  api.add_files('lib/moment/lang/pt.js', 'client');
  api.add_files('lib/moment/lang/ro.js', 'client');
  api.add_files('lib/moment/lang/ru.js', 'client');
  api.add_files('lib/moment/lang/sk.js', 'client');
  api.add_files('lib/moment/lang/sl.js', 'client');
  api.add_files('lib/moment/lang/sq.js', 'client');
  api.add_files('lib/moment/lang/sv.js', 'client');
  api.add_files('lib/moment/lang/th.js', 'client');
  api.add_files('lib/moment/lang/tr.js', 'client');
  api.add_files('lib/moment/lang/tzm-la.js', 'client');
  api.add_files('lib/moment/lang/tzm.js', 'client');
  api.add_files('lib/moment/lang/uk.js', 'client');
  api.add_files('lib/moment/lang/zh-cn.js', 'client');
  api.add_files('lib/moment/lang/zh-tw.js', 'client');
});
