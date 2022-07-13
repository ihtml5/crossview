// https://developer.mozilla.org/zh-CN/docs/Web/API/Network_Information_API
// http://www.honglei.net/?p=340
/**
 * @module error
 * @description 错误处理
 */
/**
 * @description 分析错误堆栈信息
 * @param {*} error
 * @returns {string} 返回经过格式化的错误信息字符串
 */
export const processStackMsg = (error) => {
  let stack = error.stack
    .replace(/\n/gi, '')
    .replace(/\bat\b/gi, '@')
    .split('@')
    .slice(0, 9)
    .map(v => v.replace(/^\s*|\s*$/g, ''))
    .join('~')
    .replace(/\?[^:]+/gi, '');
  const msg = error.toString();
  if (stack.indexOf(msg) < 0) {
    stack = `${msg}@${stack}`;
  }
  return stack;
};
