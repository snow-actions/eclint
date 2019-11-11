const core = require('@actions/core');
const eclint = require('./eclint');

async function run() {
  try {
    const args = core.getInput('args');
    await eclint(args);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
