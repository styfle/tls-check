const tls = require('tls');

/**
 * 
 * @param {{host: string, port: number, secureProtocol: string}} o 
 */
function tlsCheck(o) {
    return new Promise((resolve, reject) => {
        const opt = {
            host: o.host,
            port: o.port,
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
