/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/oidc-token-hash";
exports.ids = ["vendor-chunks/oidc-token-hash"];
exports.modules = {

/***/ "(rsc)/./node_modules/oidc-token-hash/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/oidc-token-hash/lib/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { strict: assert } = __webpack_require__(/*! assert */ \"assert\");\nconst { createHash } = __webpack_require__(/*! crypto */ \"crypto\");\nconst { format } = __webpack_require__(/*! util */ \"util\");\nconst shake256 = __webpack_require__(/*! ./shake256 */ \"(rsc)/./node_modules/oidc-token-hash/lib/shake256.js\");\nlet encode;\nif (Buffer.isEncoding(\"base64url\")) {\n    encode = (input)=>input.toString(\"base64url\");\n} else {\n    const fromBase64 = (base64)=>base64.replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n    encode = (input)=>fromBase64(input.toString(\"base64\"));\n}\n/** SPECIFICATION\n * Its (_hash) value is the base64url encoding of the left-most half of the hash of the octets of\n * the ASCII representation of the token value, where the hash algorithm used is the hash algorithm\n * used in the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is\n * RS256, hash the token value with SHA-256, then take the left-most 128 bits and base64url encode\n * them. The _hash value is a case sensitive string.\n */ /**\n * @name getHash\n * @api private\n *\n * returns the sha length based off the JOSE alg heade value, defaults to sha256\n *\n * @param token {String} token value to generate the hash from\n * @param alg {String} ID Token JOSE header alg value (i.e. RS256, HS384, ES512, PS256)\n * @param [crv] {String} For EdDSA the curve decides what hash algorithm is used. Required for EdDSA\n */ function getHash(alg, crv) {\n    switch(alg){\n        case \"HS256\":\n        case \"RS256\":\n        case \"PS256\":\n        case \"ES256\":\n        case \"ES256K\":\n            return createHash(\"sha256\");\n        case \"HS384\":\n        case \"RS384\":\n        case \"PS384\":\n        case \"ES384\":\n            return createHash(\"sha384\");\n        case \"HS512\":\n        case \"RS512\":\n        case \"PS512\":\n        case \"ES512\":\n            return createHash(\"sha512\");\n        case \"EdDSA\":\n            switch(crv){\n                case \"Ed25519\":\n                    return createHash(\"sha512\");\n                case \"Ed448\":\n                    if (!shake256) {\n                        throw new TypeError(\"Ed448 *_hash calculation is not supported in your Node.js runtime version\");\n                    }\n                    return createHash(\"shake256\", {\n                        outputLength: 114\n                    });\n                default:\n                    throw new TypeError(\"unrecognized or invalid EdDSA curve provided\");\n            }\n        default:\n            throw new TypeError(\"unrecognized or invalid JWS algorithm provided\");\n    }\n}\nfunction generate(token, alg, crv) {\n    const digest = getHash(alg, crv).update(token).digest();\n    return encode(digest.slice(0, digest.length / 2));\n}\nfunction validate(names, actual, source, alg, crv) {\n    if (typeof names.claim !== \"string\" || !names.claim) {\n        throw new TypeError(\"names.claim must be a non-empty string\");\n    }\n    if (typeof names.source !== \"string\" || !names.source) {\n        throw new TypeError(\"names.source must be a non-empty string\");\n    }\n    assert(typeof actual === \"string\" && actual, `${names.claim} must be a non-empty string`);\n    assert(typeof source === \"string\" && source, `${names.source} must be a non-empty string`);\n    let expected;\n    let msg;\n    try {\n        expected = generate(source, alg, crv);\n    } catch (err) {\n        msg = format(\"%s could not be validated (%s)\", names.claim, err.message);\n    }\n    msg = msg || format(\"%s mismatch, expected %s, got: %s\", names.claim, expected, actual);\n    assert.equal(expected, actual, msg);\n}\nmodule.exports = {\n    validate,\n    generate\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvb2lkYy10b2tlbi1oYXNoL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEVBQUVBLFFBQVFDLE1BQU0sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUNuQyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHRCxtQkFBT0EsQ0FBQztBQUMvQixNQUFNLEVBQUVFLE1BQU0sRUFBRSxHQUFHRixtQkFBT0EsQ0FBQztBQUUzQixNQUFNRyxXQUFXSCxtQkFBT0EsQ0FBQztBQUV6QixJQUFJSTtBQUNKLElBQUlDLE9BQU9DLFVBQVUsQ0FBQyxjQUFjO0lBQ2xDRixTQUFTLENBQUNHLFFBQVVBLE1BQU1DLFFBQVEsQ0FBQztBQUNyQyxPQUFPO0lBQ0wsTUFBTUMsYUFBYSxDQUFDQyxTQUFXQSxPQUFPQyxPQUFPLENBQUMsTUFBTSxJQUFJQSxPQUFPLENBQUMsT0FBTyxLQUFLQSxPQUFPLENBQUMsT0FBTztJQUMzRlAsU0FBUyxDQUFDRyxRQUFVRSxXQUFXRixNQUFNQyxRQUFRLENBQUM7QUFDaEQ7QUFFQTs7Ozs7O0NBTUMsR0FFRDs7Ozs7Ozs7O0NBU0MsR0FDRCxTQUFTSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDdkIsT0FBUUQ7UUFDTixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztZQUNILE9BQU9aLFdBQVc7UUFFcEIsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztZQUNILE9BQU9BLFdBQVc7UUFFcEIsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztZQUNILE9BQU9BLFdBQVc7UUFFcEIsS0FBSztZQUNILE9BQVFhO2dCQUNOLEtBQUs7b0JBQ0gsT0FBT2IsV0FBVztnQkFDcEIsS0FBSztvQkFDSCxJQUFJLENBQUNFLFVBQVU7d0JBQ2IsTUFBTSxJQUFJWSxVQUFVO29CQUN0QjtvQkFFQSxPQUFPZCxXQUFXLFlBQVk7d0JBQUVlLGNBQWM7b0JBQUk7Z0JBQ3BEO29CQUNFLE1BQU0sSUFBSUQsVUFBVTtZQUN4QjtRQUVGO1lBQ0UsTUFBTSxJQUFJQSxVQUFVO0lBQ3hCO0FBQ0Y7QUFFQSxTQUFTRSxTQUFTQyxLQUFLLEVBQUVMLEdBQUcsRUFBRUMsR0FBRztJQUMvQixNQUFNSyxTQUFTUCxRQUFRQyxLQUFLQyxLQUFLTSxNQUFNLENBQUNGLE9BQU9DLE1BQU07SUFDckQsT0FBT2YsT0FBT2UsT0FBT0UsS0FBSyxDQUFDLEdBQUdGLE9BQU9HLE1BQU0sR0FBRztBQUNoRDtBQUVBLFNBQVNDLFNBQVNDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUViLEdBQUcsRUFBRUMsR0FBRztJQUMvQyxJQUFJLE9BQU9VLE1BQU1HLEtBQUssS0FBSyxZQUFZLENBQUNILE1BQU1HLEtBQUssRUFBRTtRQUNuRCxNQUFNLElBQUlaLFVBQVU7SUFDdEI7SUFFQSxJQUFJLE9BQU9TLE1BQU1FLE1BQU0sS0FBSyxZQUFZLENBQUNGLE1BQU1FLE1BQU0sRUFBRTtRQUNyRCxNQUFNLElBQUlYLFVBQVU7SUFDdEI7SUFFQWhCLE9BQU8sT0FBTzBCLFdBQVcsWUFBWUEsUUFBUSxDQUFDLEVBQUVELE1BQU1HLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUN4RjVCLE9BQU8sT0FBTzJCLFdBQVcsWUFBWUEsUUFBUSxDQUFDLEVBQUVGLE1BQU1FLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztJQUV6RixJQUFJRTtJQUNKLElBQUlDO0lBQ0osSUFBSTtRQUNGRCxXQUFXWCxTQUFTUyxRQUFRYixLQUFLQztJQUNuQyxFQUFFLE9BQU9nQixLQUFLO1FBQ1pELE1BQU0zQixPQUFPLGtDQUFrQ3NCLE1BQU1HLEtBQUssRUFBRUcsSUFBSUMsT0FBTztJQUN6RTtJQUVBRixNQUFNQSxPQUFPM0IsT0FBTyxxQ0FBcUNzQixNQUFNRyxLQUFLLEVBQUVDLFVBQVVIO0lBRWhGMUIsT0FBT2lDLEtBQUssQ0FBQ0osVUFBVUgsUUFBUUk7QUFDakM7QUFFQUksT0FBT0MsT0FBTyxHQUFHO0lBQ2ZYO0lBQ0FOO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLy4vbm9kZV9tb2R1bGVzL29pZGMtdG9rZW4taGFzaC9saWIvaW5kZXguanM/YzgyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHN0cmljdDogYXNzZXJ0IH0gPSByZXF1aXJlKCdhc3NlcnQnKTtcbmNvbnN0IHsgY3JlYXRlSGFzaCB9ID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5jb25zdCB7IGZvcm1hdCB9ID0gcmVxdWlyZSgndXRpbCcpO1xuXG5jb25zdCBzaGFrZTI1NiA9IHJlcXVpcmUoJy4vc2hha2UyNTYnKTtcblxubGV0IGVuY29kZTtcbmlmIChCdWZmZXIuaXNFbmNvZGluZygnYmFzZTY0dXJsJykpIHtcbiAgZW5jb2RlID0gKGlucHV0KSA9PiBpbnB1dC50b1N0cmluZygnYmFzZTY0dXJsJyk7XG59IGVsc2Uge1xuICBjb25zdCBmcm9tQmFzZTY0ID0gKGJhc2U2NCkgPT4gYmFzZTY0LnJlcGxhY2UoLz0vZywgJycpLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xuICBlbmNvZGUgPSAoaW5wdXQpID0+IGZyb21CYXNlNjQoaW5wdXQudG9TdHJpbmcoJ2Jhc2U2NCcpKTtcbn1cblxuLyoqIFNQRUNJRklDQVRJT05cbiAqIEl0cyAoX2hhc2gpIHZhbHVlIGlzIHRoZSBiYXNlNjR1cmwgZW5jb2Rpbmcgb2YgdGhlIGxlZnQtbW9zdCBoYWxmIG9mIHRoZSBoYXNoIG9mIHRoZSBvY3RldHMgb2ZcbiAqIHRoZSBBU0NJSSByZXByZXNlbnRhdGlvbiBvZiB0aGUgdG9rZW4gdmFsdWUsIHdoZXJlIHRoZSBoYXNoIGFsZ29yaXRobSB1c2VkIGlzIHRoZSBoYXNoIGFsZ29yaXRobVxuICogdXNlZCBpbiB0aGUgYWxnIEhlYWRlciBQYXJhbWV0ZXIgb2YgdGhlIElEIFRva2VuJ3MgSk9TRSBIZWFkZXIuIEZvciBpbnN0YW5jZSwgaWYgdGhlIGFsZyBpc1xuICogUlMyNTYsIGhhc2ggdGhlIHRva2VuIHZhbHVlIHdpdGggU0hBLTI1NiwgdGhlbiB0YWtlIHRoZSBsZWZ0LW1vc3QgMTI4IGJpdHMgYW5kIGJhc2U2NHVybCBlbmNvZGVcbiAqIHRoZW0uIFRoZSBfaGFzaCB2YWx1ZSBpcyBhIGNhc2Ugc2Vuc2l0aXZlIHN0cmluZy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldEhhc2hcbiAqIEBhcGkgcHJpdmF0ZVxuICpcbiAqIHJldHVybnMgdGhlIHNoYSBsZW5ndGggYmFzZWQgb2ZmIHRoZSBKT1NFIGFsZyBoZWFkZSB2YWx1ZSwgZGVmYXVsdHMgdG8gc2hhMjU2XG4gKlxuICogQHBhcmFtIHRva2VuIHtTdHJpbmd9IHRva2VuIHZhbHVlIHRvIGdlbmVyYXRlIHRoZSBoYXNoIGZyb21cbiAqIEBwYXJhbSBhbGcge1N0cmluZ30gSUQgVG9rZW4gSk9TRSBoZWFkZXIgYWxnIHZhbHVlIChpLmUuIFJTMjU2LCBIUzM4NCwgRVM1MTIsIFBTMjU2KVxuICogQHBhcmFtIFtjcnZdIHtTdHJpbmd9IEZvciBFZERTQSB0aGUgY3VydmUgZGVjaWRlcyB3aGF0IGhhc2ggYWxnb3JpdGhtIGlzIHVzZWQuIFJlcXVpcmVkIGZvciBFZERTQVxuICovXG5mdW5jdGlvbiBnZXRIYXNoKGFsZywgY3J2KSB7XG4gIHN3aXRjaCAoYWxnKSB7XG4gICAgY2FzZSAnSFMyNTYnOlxuICAgIGNhc2UgJ1JTMjU2JzpcbiAgICBjYXNlICdQUzI1Nic6XG4gICAgY2FzZSAnRVMyNTYnOlxuICAgIGNhc2UgJ0VTMjU2Syc6XG4gICAgICByZXR1cm4gY3JlYXRlSGFzaCgnc2hhMjU2Jyk7XG5cbiAgICBjYXNlICdIUzM4NCc6XG4gICAgY2FzZSAnUlMzODQnOlxuICAgIGNhc2UgJ1BTMzg0JzpcbiAgICBjYXNlICdFUzM4NCc6XG4gICAgICByZXR1cm4gY3JlYXRlSGFzaCgnc2hhMzg0Jyk7XG5cbiAgICBjYXNlICdIUzUxMic6XG4gICAgY2FzZSAnUlM1MTInOlxuICAgIGNhc2UgJ1BTNTEyJzpcbiAgICBjYXNlICdFUzUxMic6XG4gICAgICByZXR1cm4gY3JlYXRlSGFzaCgnc2hhNTEyJyk7XG5cbiAgICBjYXNlICdFZERTQSc6XG4gICAgICBzd2l0Y2ggKGNydikge1xuICAgICAgICBjYXNlICdFZDI1NTE5JzpcbiAgICAgICAgICByZXR1cm4gY3JlYXRlSGFzaCgnc2hhNTEyJyk7XG4gICAgICAgIGNhc2UgJ0VkNDQ4JzpcbiAgICAgICAgICBpZiAoIXNoYWtlMjU2KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFZDQ0OCAqX2hhc2ggY2FsY3VsYXRpb24gaXMgbm90IHN1cHBvcnRlZCBpbiB5b3VyIE5vZGUuanMgcnVudGltZSB2ZXJzaW9uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYWtlMjU2JywgeyBvdXRwdXRMZW5ndGg6IDExNCB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnJlY29nbml6ZWQgb3IgaW52YWxpZCBFZERTQSBjdXJ2ZSBwcm92aWRlZCcpO1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VucmVjb2duaXplZCBvciBpbnZhbGlkIEpXUyBhbGdvcml0aG0gcHJvdmlkZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZSh0b2tlbiwgYWxnLCBjcnYpIHtcbiAgY29uc3QgZGlnZXN0ID0gZ2V0SGFzaChhbGcsIGNydikudXBkYXRlKHRva2VuKS5kaWdlc3QoKTtcbiAgcmV0dXJuIGVuY29kZShkaWdlc3Quc2xpY2UoMCwgZGlnZXN0Lmxlbmd0aCAvIDIpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGUobmFtZXMsIGFjdHVhbCwgc291cmNlLCBhbGcsIGNydikge1xuICBpZiAodHlwZW9mIG5hbWVzLmNsYWltICE9PSAnc3RyaW5nJyB8fCAhbmFtZXMuY2xhaW0pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduYW1lcy5jbGFpbSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBuYW1lcy5zb3VyY2UgIT09ICdzdHJpbmcnIHx8ICFuYW1lcy5zb3VyY2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduYW1lcy5zb3VyY2UgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGFzc2VydCh0eXBlb2YgYWN0dWFsID09PSAnc3RyaW5nJyAmJiBhY3R1YWwsIGAke25hbWVzLmNsYWltfSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ2ApO1xuICBhc3NlcnQodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgJiYgc291cmNlLCBgJHtuYW1lcy5zb3VyY2V9IG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nYCk7XG5cbiAgbGV0IGV4cGVjdGVkO1xuICBsZXQgbXNnO1xuICB0cnkge1xuICAgIGV4cGVjdGVkID0gZ2VuZXJhdGUoc291cmNlLCBhbGcsIGNydik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG1zZyA9IGZvcm1hdCgnJXMgY291bGQgbm90IGJlIHZhbGlkYXRlZCAoJXMpJywgbmFtZXMuY2xhaW0sIGVyci5tZXNzYWdlKTtcbiAgfVxuXG4gIG1zZyA9IG1zZyB8fCBmb3JtYXQoJyVzIG1pc21hdGNoLCBleHBlY3RlZCAlcywgZ290OiAlcycsIG5hbWVzLmNsYWltLCBleHBlY3RlZCwgYWN0dWFsKTtcblxuICBhc3NlcnQuZXF1YWwoZXhwZWN0ZWQsIGFjdHVhbCwgbXNnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbGlkYXRlLFxuICBnZW5lcmF0ZSxcbn07XG4iXSwibmFtZXMiOlsic3RyaWN0IiwiYXNzZXJ0IiwicmVxdWlyZSIsImNyZWF0ZUhhc2giLCJmb3JtYXQiLCJzaGFrZTI1NiIsImVuY29kZSIsIkJ1ZmZlciIsImlzRW5jb2RpbmciLCJpbnB1dCIsInRvU3RyaW5nIiwiZnJvbUJhc2U2NCIsImJhc2U2NCIsInJlcGxhY2UiLCJnZXRIYXNoIiwiYWxnIiwiY3J2IiwiVHlwZUVycm9yIiwib3V0cHV0TGVuZ3RoIiwiZ2VuZXJhdGUiLCJ0b2tlbiIsImRpZ2VzdCIsInVwZGF0ZSIsInNsaWNlIiwibGVuZ3RoIiwidmFsaWRhdGUiLCJuYW1lcyIsImFjdHVhbCIsInNvdXJjZSIsImNsYWltIiwiZXhwZWN0ZWQiLCJtc2ciLCJlcnIiLCJtZXNzYWdlIiwiZXF1YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/oidc-token-hash/lib/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/oidc-token-hash/lib/shake256.js":
/*!******************************************************!*\
  !*** ./node_modules/oidc-token-hash/lib/shake256.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const crypto = __webpack_require__(/*! crypto */ \"crypto\");\nconst [major, minor] = process.version.substring(1).split(\".\").map((x)=>parseInt(x, 10));\nconst xofOutputLength = major > 12 || major === 12 && minor >= 8;\nconst shake256 = xofOutputLength && crypto.getHashes().includes(\"shake256\");\nmodule.exports = shake256;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvb2lkYy10b2tlbi1oYXNoL2xpYi9zaGFrZTI1Ni5qcyIsIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUV2QixNQUFNLENBQUNDLE9BQU9DLE1BQU0sR0FBR0MsUUFBUUMsT0FBTyxDQUFDQyxTQUFTLENBQUMsR0FBR0MsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQyxTQUFTRCxHQUFHO0FBQ3RGLE1BQU1FLGtCQUFrQlQsUUFBUSxNQUFPQSxVQUFVLE1BQU1DLFNBQVM7QUFDaEUsTUFBTVMsV0FBV0QsbUJBQW1CWCxPQUFPYSxTQUFTLEdBQUdDLFFBQVEsQ0FBQztBQUVoRUMsT0FBT0MsT0FBTyxHQUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmcvLi9ub2RlX21vZHVsZXMvb2lkYy10b2tlbi1oYXNoL2xpYi9zaGFrZTI1Ni5qcz84MjQ1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyeXB0byA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuXG5jb25zdCBbbWFqb3IsIG1pbm9yXSA9IHByb2Nlc3MudmVyc2lvbi5zdWJzdHJpbmcoMSkuc3BsaXQoJy4nKS5tYXAoKHgpID0+IHBhcnNlSW50KHgsIDEwKSk7XG5jb25zdCB4b2ZPdXRwdXRMZW5ndGggPSBtYWpvciA+IDEyIHx8IChtYWpvciA9PT0gMTIgJiYgbWlub3IgPj0gOCk7XG5jb25zdCBzaGFrZTI1NiA9IHhvZk91dHB1dExlbmd0aCAmJiBjcnlwdG8uZ2V0SGFzaGVzKCkuaW5jbHVkZXMoJ3NoYWtlMjU2Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2hha2UyNTY7XG4iXSwibmFtZXMiOlsiY3J5cHRvIiwicmVxdWlyZSIsIm1ham9yIiwibWlub3IiLCJwcm9jZXNzIiwidmVyc2lvbiIsInN1YnN0cmluZyIsInNwbGl0IiwibWFwIiwieCIsInBhcnNlSW50IiwieG9mT3V0cHV0TGVuZ3RoIiwic2hha2UyNTYiLCJnZXRIYXNoZXMiLCJpbmNsdWRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/oidc-token-hash/lib/shake256.js\n");

/***/ })

};
;