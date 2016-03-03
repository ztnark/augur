var crypto = require("crypto");
//var keyth = require("keythereum");

const constants = {

  // Suppress logging
  quiet: false,

  // Symmetric cipher for private key encryption
  cipher: "aes-128-ctr",

  // Initialization vector size in bytes
  ivBytes: 16,

  // ECDSA private key size in bytes
  keyBytes: 32,

  // Key derivation function parameters
  pbkdf2: {
      c: 65536,
      dklen: 32,
      hash: "sha256",
      prf: "hmac-sha256"
  },
  scrypt: {
      dklen: 32,
      n: 65536,
      r: 1,
      p: 8
  }
};

function deriveKeyOriginal(password, salt, options = { kdfparams: {  }}) {

  var prf = options.kdfparams.prf || constants.pbkdf2.prf;
  if (prf === "hmac-sha256") prf = "sha256";

  return crypto.pbkdf2Sync(
      password,
      salt,
      options.kdfparams.c || constants.pbkdf2.c,
      options.kdfparams.dklen || constants.pbkdf2.dklen,
      prf
  );
}

function deriveKey(password, salt, options = { kdfparams: { c: 1000 }}, cb) {

  var prf = options.kdfparams.prf || constants.pbkdf2.prf;
  if (prf === "hmac-sha256") prf = "sha256";

  var passesPerIteration = 100;
  var totalIterations = 100000;
  var numIterationsComplete = 0;
  var derivedKey = password;

  runIteration();

  function runIteration() {
    setTimeout(() => {
      derivedKey = crypto.pbkdf2Sync(
          derivedKey,
          salt,
          passesPerIteration,
          options.kdfparams.dklen || constants.pbkdf2.dklen,
          prf
      );

      numIterationsComplete++;

      if (numIterationsComplete < totalIterations) {
        runIteration();
      }
      else {
        cb(derivedKey);
      }
    }, 0);
  }
}

var scrypt = require("./scrypt")(280000000);
var scryptAsync = require('scrypt-async');
var scryptsy = require('scryptsy')

var scryptAsync = require('scrypt-async');

var password = 'aaaa';
var salt = 'bbbb';
var N = Math.pow(2, 20);
var r = 8;
var p = 1;
var finalHashLength = 32;
var chunkSize = 10000;

console.time('time-scrypt');
scryptAsync(password, salt, Math.log2(N), r, finalHashLength, chunkSize, (derivedKey) => {
  console.log('---->', derivedKey);
  console.timeEnd('time-scrypt')
}, 'hex');

/*
console.time('#1');
var res = new Buffer(scrypt.to_hex(scrypt.crypto_scrypt(
    password,
    salt,
    N,
    r,
    p,
    32
)), "hex");
console.log('----->', res.toString('hex'));
console.timeEnd('#1');
*/

// #2
//console.time('#2');
//scryptAsync(password, salt, Math.log2(N), r, 32, 1000, (res2) => { console.log('=====>', res2); console.timeEnd('#2') }, 'hex');
//

/* #3
var res3 = scryptsy(password, salt, N, 1, 8, 32, (current, total, percent) => {
  console.log(current, total, percent);
})
console.log('=====>', res3.toString('hex'))
/*


//var res3 = scryptJS.crypto_scrypt(password, salt, { r: 8, size: 32, cost: 65536 });

//console.log('______>', res3.toString('hex'));

/*
password - password (string or array of bytes)
salt - salt (string or array of bytes)
logN - CPU/memory cost parameter (1 to 31)
r - block size parameter
dkLen - length of derived key
interruptStep - (optional) steps to split calculation with timeouts (defaults to 1000)
callback - callback function (function (array|string))
encoding - (optional) result encoding ("base64", "hex", or null/undefined).$
*/
/*
console.log('------------------');

console.log(crypto.pbkdf2Sync('aaaa', 0xbbbb, 2, 32, 'sha256').toString('hex'));
var result1 = crypto.pbkdf2Sync('aaaa', 0xbbbb, 1, 32, 'sha256');
console.log(crypto.pbkdf2Sync(result1, result1, 1, 32, 'sha256').toString('hex'));



console.log('************');
console.log('>>>>', deriveKeyOriginal('aaaaa', 'bbbbbbb', { kdfparams: { c: 1000 }}).toString('hex'));
deriveKey('aaaaa', 'bbbbbbb', undefined, (derivedKey) => {
 console.log('====', derivedKey.toString('hex'));
});


// a2c962cb17cd361a92ced793cc52cb27a7b6f137613514daf01550eefbca0f8e (1000)
*/