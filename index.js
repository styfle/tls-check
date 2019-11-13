const { createSecureContext, connect }  = require('tls');

/**
 * 
 * @param {{hostname: string, port: number, version: string}} o 
 */
function tlsCheck({ hostname, port, version }) {
    return new Promise((resolve, reject) => {
        const secureContext = createSecureContext({ minVersion: version, maxVersion: version });
        const opt = {
            host: hostname,
            servername: hostname,
            port: port || 443,
            secureContext,
        }
        const socket = connect(opt, () => {
            if (!socket.authorized) {
                reject(socket.authorizationError);
                return;
            }
            const cipher = socket.getCipher();
            cipher.tlsProtocol = socket.getProtocol();
            socket.end();
            resolve(cipher);
        });
    
        socket.on('error', e => reject(e));
    });
}

module.exports = tlsCheck;
