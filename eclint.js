const exec = require('@actions/exec');

let eclint = async function (args) {
  await exec.exec('node ./node_modules/eclint/bin/eclint.js ' + args);
}

module.exports = eclint;
