#!/usr/bin/env node

const tlsCheck = require('./index');
const versions = require('./methods');

async function main() {
    const args = process.argv.slice(2);
    console.log(`Checking TLS against ${args.length} website(s)...\n`);

    for (let arg of args) {
        if (!arg.startsWith('http')) {
            arg = 'https://' + arg;
        }
        let { hostname, port } = new URL(arg);
        for (let version of versions) {
            const res = await getFormattedResult({ hostname, port, version });
            console.log(res);
        }
        console.log(' ');
    }
}

/**
 * Get the formatted result with emoji and all.
 * @param {string} hostname 
 * @param {number} port 
 * @param {string} version 
 */
async function getFormattedResult({ hostname, port, version }) {
    let emoji = '✅'
    let message = 'Enabled.';
    try {
        await tlsCheck({ hostname, port, version });
    } catch (e) {
        if (e.code === 'ERR_TLS_INVALID_PROTOCOL_VERSION') {
            emoji = '🔶';
            message = 'Your client had a problem. Try updating OpenSSL.';
        } else if (e.code === 'ECONNRESET') {
            emoji = '❌';
            message = 'Disabled.';
        } else {
            emoji = '🤦‍♀️';
            message = e.toString();
        }
    }
    const origin = port ? `${hostname}:${port}` : hostname;
    return `${emoji} ${origin} ${version} ${message}`;
}

main();
