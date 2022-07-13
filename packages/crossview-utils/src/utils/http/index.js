import { usessionStorage } from '../storage';
import { winSearch } from '../shared';

const qs = require('qs');

/**
 * @description 格式化httpcode信息
 * @module http
 */

const enableCache = qs.parse(winSearch.slice(1)).cache !== '0';

const promises = {};
/**
 * @description 将httpcode转化为1xx，2xx等
 * @param {*} httpcode
 * @returns {string} 返回对应的1xx,2xx等
 */
export const normalizeHttpCode = (httpcode) => {
  const numberedHttpCode = Number(httpcode);
  if (isNaN(numberedHttpCode)) {
    return 'unknown';
  }
  let httpType = '2xx';
  if (httpcode < 200) {
    httpType = '1xx';
  } else if (httpcode >= 200 && httpcode < 300) {
    httpType = '2xx';
  } else if (httpcode >= 300 && httpcode < 400) {
    httpType = '3xx';
  } else if (httpcode >= 400 && httpcode < 500) {
    httpType = '4xx';
  } else if (httpcode >= 500) {
    httpType = '5xx';
  }
  return httpType;
};

// https://stackoverflow.com/questions/46946380/fetch-api-request-timeout
/**
 * @description 请求超时
 * @param {*} promise
 * @param {Number} ms
 */
export const fetchTimeout = (promise, ms) => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout'));
  }, ms);
  promise.then(resolve, reject);
});

/**
 * @description fetchJson
 * @param {*} url
 * @return {Object}
 */
export const fetchJson = async (url) => {
  try {
    const res = await fetch(url);
    const body = await res.json();
    return body;
  } catch (e) {
    console.error(e);
  }
  return {};
};

/**
 * @description fetchJsonWithSessionStorage
 * @param {*} url
 */
export const fetchJsonWithSessionStorage = async (url) => {
  const cacheKey = `fetch_${url}`;
  if (usessionStorage.getItem(cacheKey) && enableCache) {
    return usessionStorage.getItem(cacheKey);
  }
  if (!promises[cacheKey]) {
    promises[cacheKey] = fetchJson(url);
  }
  const body = await promises[cacheKey];
  if (enableCache) {
    usessionStorage.setItem(cacheKey, body);
  }
  return body;
};

/**
 * @description 查找与Cache匹配的对象,如果找到，则删除该Cache对象并返回Promise解析为true
 * @param {*} url
 */
export const deletedPromiseFromCache = (url) => {
  const cacheKey = `fetch_${url}`;
  if (promises[cacheKey]) {
    promises[cacheKey] = undefined;
  }
};

/**
 * @description 不请求直接保存结果，可用于后端直出数据
 * @param {*} url
 * @param {*} body
 */
export const saveJsonWithSessionStorage = async (url, body) => {
  const cacheKey = `fetch_${url}`;
  usessionStorage.setItem(cacheKey, body);
};

/**
 * @description 在usessionStorage里存储时间戳，每个session里不更新url
 */
export const getSessionDate = () => {
  let v = usessionStorage.getItem('sessionDate');
  if (!v) {
    v = new Date().getTime();
    usessionStorage.setItem('sessionDate', v);
  }
  return v;
};
