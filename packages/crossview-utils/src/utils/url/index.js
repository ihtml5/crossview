const qs = require('qs');
/**
 * @description 解析url信息
 * @module url
 */

/**
 * @description 获取url参数
 * @param {String} url
 * @return {String} sum of stringify(newParms)
 */
export const getUrlParams = url => qs.parse(url || window.location.search.slice(1));
export const combineParams = (keys) => {
  const nativeHasOwn = Object.prototype.hasOwnProperty;
  const params = getUrlParams();
  const newParms = {};
  let rules = keys;
  if (!Array.isArray(keys)) {
    rules = [keys];
  }
  rules.forEach((key) => {
    if (nativeHasOwn.call(params, key)) {
      newParms[key] = params[key];
    }
  });
  return qs.stringify(newParms);
};

/**
 * @description 解析link
 * @param {String} url
 * @returns {Object}
 */
export const parseLink = (url) => {
  if (!url) {
    return {};
  }
  const aTag = document.createElement('a');
  aTag.href = url;
  return {
    host: aTag.host,
    hash: aTag.hash,
    path: aTag.pathname,
    search: aTag.search.slice(1),
    protocol: aTag.protocol.slice(0, -1),
  };
};

/**
 * @description 删除路径上的指定参数
 * @param {Object} name
 * @param {String} link
 * @param {String} url
 */
export const delUrlParams = (name = [], link = window.location.href) => {
  let url = link;
  try {
    const href = parseLink(link);
    const bSearchs = qs.parse(href.search);
    const aSearchs = {};
    Object.keys(bSearchs).forEach((item) => {
      if ([...name].indexOf(item) < 0) {
        aSearchs[item] = bSearchs[item];
        url = `${href.protocol}://${href.host}${href.path}?${qs.stringify(aSearchs)}${href.hash}`;
      }
    });
    return url;
  } catch (e) {
    console.error(e);
    return url;
  }
};
