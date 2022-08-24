import * as CryptoJS from "crypto-js";

export function Encription(value, key) {
  return CryptoJS.AES.encrypt(value, key).toString();
}

export function Decription(value, key) {
  const decrypted = CryptoJS.AES.decrypt(value, key);
  if (decrypted) {
    try {
      const str = decrypted.toString(CryptoJS.enc.Utf8);
      if (str.length > 0) {
        return str;
      } else {
        return "error 1";
      }
    } catch (e) {
      return "error 2";
    }
  }
  return "error 3";
}
