const exec = require('@actions/exec');

let eclint = async function (command, path = '') {
  await exec.exec('./node_modules/.bin/eclint ' + command + ' ' + path);
}

module.exports = eclint;
