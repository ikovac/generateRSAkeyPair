const crypto = require("crypto");
const fs = require('fs');

crypto.generateKeyPair(
  "rsa",
  {
    modulusLength: 2048,
    publicExponent: 65537,
    publicKeyEncoding: {
      type: "spki",
      format: "pem"
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem"
    }
  },
  (err, publicKey, privateKey) => {
    fs.writeFileSync('public.txt', publicKey);
    fs.writeFileSync('private.txt', privateKey);
  }
);
