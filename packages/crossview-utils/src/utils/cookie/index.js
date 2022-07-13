/**
 * @description cookie获取相关
 * @module cookie
 */
/**
 * @description 按照cookie名字获取对应的cookie
 * @param {*} name 
 * @param {*} cookies
 * @returns {*} 按照给定的name返回对应的cookie值
 */
export const getCookie = (name, cookies = '') => {
  const nameEQ = `${encodeURIComponent(name)}=`;
  const ca = cookies.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
};
