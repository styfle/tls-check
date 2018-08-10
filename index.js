const tls = require('tls');

/**
 * 
 * @param {{hostname: string, port: number, secureProtocol: string}} o 
 */
function tlsCheck(o) {
    return new Promise((resolve, reject) => {
        const opt = {
            host: o.hostname,
            port: o.port || 443,
            secureContext: tls.createSecureContext({ secureProtocol: o.secureProtocol })
        }
        const socket = tls.connect(opt, () => {
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
