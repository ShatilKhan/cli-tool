#!/usr/bin/env node
const logger = require('../src/logger')('bin');
const arg = require('arg');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');


try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    logger.debug('Receieved args', args);

    if (args['--start']) {
        const config = getConfig();
        start(config);
    }
} catch (e) {
   
        logger.warning(e.message);
        console.log();
        usage();
    
}

function usage() {
    import('chalk').then((chalk) => {
        console.log(`${chalk.default.whiteBright('tool [CMD]')}
        ${chalk.default.greenBright('--start')}\tStarts the app
        ${chalk.default.greenBright('--build')}\tBuilds the app`);
    });
}