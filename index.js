const core = require('@actions/core');
const eclint = require('./eclint');

async function run() {
  try {
    const command = core.getInput('command');
    const files = core.getInput('files');
    await eclint(command, files);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
