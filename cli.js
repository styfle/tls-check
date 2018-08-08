#!/usr/bin/env node

const tlsCheck = require('./index');
const methods = require('./methods');

async function main() {
    const [_node, _file, ...args] = process.argv;
    console.log(`Checking TLS against ${args.length} websites`);

    for (let arg of args) {
        if (arg.startsWith('http://')) {
            arg = arg.slice(7);
        } else if  (arg.startsWith('https://')) {
            arg = arg.slice(8);
        }
        const [host, port=443] = arg.split(':');
        for (let method of methods) {
            const res = await getFormattedResult(host, port, method);
            console.log(res);
        }
    }
}

/**
 * Get the formatted result with emoji and all.
 * @param {string} host 
 * @param {number} port 
 * @param {string} secureProtocol 
 */
async function getFormattedResult(host, port, secureProtocol) {
    let emoji = '✔'
    try {
        await tlsCheck({host, port, secureProtocol});
    } catch (e) {
        emoji = '❌';
    }
    return `${emoji} ${host}:${port} ${secureProtocol}`;
}

main();