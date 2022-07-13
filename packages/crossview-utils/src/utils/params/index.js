/**
 *
 * @module params
 */

/**
 * @description 将数据转化为可url发送格式
 * @param {*} data
 */
export const formatParams = (data) => {
  const arr = [];
  for (const name in data) {
    arr.push(`${encodeURIComponent(name)}=${encodeURIComponent(data[name])}`);
  }
  return arr.join('&');
};

/**
 * @description 从特定url中按name获取对应的value
 * @param {*} data
 */
export const getUrlParam = ({ name, url }) => {
  const formatterName = String(name).replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${formatterName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) {
    return '';
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
