import { emitter } from './utils/emitter';
const { on, off, once, trigger: emit } = emitter;
export {
  isObject,
  isString,
  isArray,
  isFunction,
  isUndefined,
  isError,
  isNumber,
  debounce,
  isPerfTiming,
  nativeHasOwn,
  nativeToString,
  noop,
  hasProp,
} from './utils/shared';
export { processStackMsg } from './utils/error';
export { getCookie } from './utils/cookie';
export { getUrlParam, formatParams } from './utils/params';
export { isWeixin, getSysInfo } from './utils/ua';
export { traversal, getRetCodeOrMsg, filterCgiResp } from './utils/traversal';
export { createImageReporter, createAjaxReporter } from './utils/reporter';
export { normalize } from './utils/normalize';
export {
  normalizeHttpCode,
  fetchTimeout,
  fetchJson,
  fetchJsonWithSessionStorage,
  saveJsonWithSessionStorage,
} from './utils/http';
export {
  getUrlParams,
  combineParams,
  parseLink,
  delUrlParams,
} from './utils/url';
export { autoRetain } from './utils/helper';
export { on, off, once, emit };
export { createStorage, ulocalStorage, usessionStorage } from './utils/storage';
export { copyToClip, toCopy } from './utils/clipboard';
export { getNumber, formateDuration, formatterNum } from './utils/formatter';
