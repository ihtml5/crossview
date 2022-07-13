import { isObject, isString, isArray } from '../shared';
/**
 * @module traversal
 * @description 按照给定的配置(数组或者字符串)来获取对应的cgi返回码
 */

/**
 * 遍历并获取指定值
 * @param {Object} data 响应信息
 * @param {String|Array} data 要过滤的响应信息字段
 * @param {String} defaultValue 默认值
 */
export const traversal = (data, path, defaultValue = '') => {
  let returnedValue = void 0;
  String(path)
    .split('.')
    .forEach((key) => {
      try {
        if (typeof returnedValue !== 'undefined') {
          returnedValue = returnedValue[key];
        } else {
          returnedValue = data[key];
        }
      } catch (err) {
        returnedValue = void 0;
      }
    });
  if (typeof returnedValue === 'undefined') {
    return defaultValue;
  }
  return returnedValue;
};
/**
 * 获取响应状态码和信息
 * @param {Object} param 过滤前响应信息和要过滤的字段
 * @param {Object} param.data 响应信息
 * @param {String|Array} param.path 要过滤的响应信息字段
 */
export const getRetCodeOrMsg = ({ data = {}, path = '' }) => {
  let finalReturnedValue = '';
  if (isObject(data)) {
    if (isString(path)) {
      return traversal(data, path, '');
    }
    if (isArray(path)) {
      path.forEach((pk) => {
        if (traversal(data, pk, '') !== '') {
          finalReturnedValue = traversal(data, pk);
          return false;
        }
      });

      return finalReturnedValue;
    }
  }
  return '';
};

/**
 * 过滤cgi响应信息（响应状态码和响应信息）
 * @param {String|Object} curResponseText 服务器返回的文本数据
 * @return {Object} resp 响应状态码和响应信息
 * @return {Number|String} resp.bizcode 响应状态码
 * @return {String} resp.bizmsg 响应信息
 */
export const filterCgiResp = (curResponseText, cgiOptions = {}) => {
  const cgiCfg = cgiOptions || {};
  const { code, msg } = cgiCfg;
  let responseData = {};
  if (isObject(curResponseText)) {
    responseData = curResponseText;
  } else {
    try {
      responseData = JSON.parse(curResponseText);
    } catch (err) {
      responseData = {};
    }
  }
  const bizcode = getRetCodeOrMsg({
    data: responseData,
    path: code,
  });
  const bizmsg = getRetCodeOrMsg({
    data: responseData,
    path: msg,
  });
  return { bizcode, bizmsg };
};
