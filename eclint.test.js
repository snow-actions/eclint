const eclint = require('./eclint');

test('eclint check *.js', async() => {
  await eclint('check', '*.test.js');
});
