const exec = require('@actions/exec');

let eclint = async function (args) {
  await exec.exec('npm run eclint ' + args);
}

module.exports = eclint;
