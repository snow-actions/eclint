const eclint = require('./eclint');

test('eclint --version', async() => {
  await eclint('--version');
});

test('eclint check *.js', async() => {
  await eclint('check *.js');
});
