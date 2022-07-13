import { isString } from '../shared';
import { getCookie } from '../cookie';
import { getUrlParam } from '../params';

/**
 * @description 提供辅助方法
 * @module helper 
 */
/**
 * @description 从url或者cookie中获取对应name的值
 * @param {*} name 
 * @param {*} param1 
 */
export const autoRetain = (name, { url = '', cookie = '' } = {}) => {
  let returnedValue = '';
  if (!isString(name)) {
    console.warn('name is not string');
    return returnedValue;
  }
  try {
    returnedValue = getUrlParam({
      name,
      url,
    });
    if (returnedValue.length === 0) {
      returnedValue = getCookie(name, cookie) || '';
    }
    return returnedValue;
  } catch (err) {
    console.error(`Automatically get the value of the corresp onding name from the url or 
      cookie ${err}`);
    return returnedValue;
  }
};
