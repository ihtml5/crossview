import { isObject, hasProp } from '../shared/index';
/**
 * @description 格式化按照emonitor协议采集过来的信息,方便业务二次扩展
 * @module normalize
 */

/**
 * 规格化上报之前异常或者数据请求的数据
 *
 * @param {object} data 上报的数据
 * @return {object} res 结果数据
 * @return {string} res.type 上报类型
 * @return {string} res.url 请求链接
 * @return {string|number} res.code 请求状态，默认为空
 * @return {boolean} res.isErr 是否是异常上报
 * @return {object} res.source 上报的原始数据
 */
export const normalize = (data) => {
  const res = {
    type: '',
    url: '',
    code: '',
    isErr: false,
    source: data,
  };
  if (!isObject(data)) {
    return res;
  }
  if (hasProp(data, 'err_type')) {
    // 错误异常数据标准化
    res.type = data.err_type;
    try {
      if (data.err_desc) {
        const desc = JSON.parse(data.err_desc);
        res.url = desc.url || desc.fileName || data.s_url;
      } else {
        res.url = data.s_url;
      }
    } catch (err) {
      res.url = data.s_url;
      console.warn(err);
    }
    res.isErr = true;
  } else if (hasProp(data, 'cgiurl')) {
    // cgi质量数据标准化
    res.type = 'cgi';
    res.url = data.cgiurl;
    res.code = data.httpcode;
  } else if (hasProp(data, 'resurl')) {
    // cdn质量数据标准化
    res.type = 'cdn';
    res.url = data.resurl;
    res.code = data.httpcode;
  } else if (hasProp(data, 'time_domready')) {
    // 页面质量数据标准化
    res.type = 'pagepf';
    res.url = data.s_url;
    res.code = 200;
  } else if (hasProp(data, 'json_entries')) {
    // 慢日志数据标准化
    res.type = 'slowlog';
    res.url = data.s_url;
    res.code = 200;
  } else if (hasProp(data, 'log')) {
    // 流水日志标准化
    res.type = 'flowlog';
    res.url = data.s_url;
    res.code = 200;
  }
  return res;
};
