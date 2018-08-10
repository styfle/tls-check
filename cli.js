#!/usr/bin/env node

const tlsCheck = require('./index');
const methods = require('./methods');

async function main() {
    const [_node, _file, ...args] = process.argv;
    console.log(`Checking TLS against ${args.length} website(s)...\n`);

    for (let arg of args) {
        if (!arg.startsWith('http')) {
            arg = 'https://' + arg;
        }
        let { hostname, port } = new URL(arg);
        for (let secureProtocol of methods) {
            const res = await getFormattedResult(hostname, port, secureProtocol);
            console.log(res);
        }
        console.log(' ');
    }
}

/**
 * Get the formatted result with emoji and all.
 * @param {string} hostname 
 * @param {number} port 
 * @param {string} secureProtocol 
 */
async function getFormattedResult(hostname, port, secureProtocol) {
    let emoji = '✔'
    try {
        await tlsCheck({hostname, port, secureProtocol});
    } catch (e) {
        emoji = '❌';
    }
    const origin = port ? `${hostname}:${port}` : hostname;
    return `${emoji} ${origin} ${secureProtocol}`;
}

main();