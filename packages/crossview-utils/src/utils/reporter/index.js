import { formatParams } from '../params/index';

/**
 * @module reporter
 * @description 上报器
 */
/**
 * @description 创建一个图片上报
 */
export const createImageReporter = () => {
  let img = new Image();
  img.onerror = () => {
    img = null;
  };
  img.onload = () => {
    img = null;
  };
  return img;
};
/**
 * @description 创建一个ajax上报器
 */
export const createAjaxReporter = () => ({ url, data }) => {
  try {
    let _xmlhttp = null;
    if (window.XMLHttpRequest) {
      _xmlhttp = new XMLHttpRequest();
    } else {
      _xmlhttp = new window.ActiveXObject('Microsoft.XMLHTTP');
    }
    _xmlhttp.open('POST', url, true);
    _xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    _xmlhttp.send(formatParams(data));
  } catch (err) {
    console.warn('xmlhttp error', err);
  }
};
