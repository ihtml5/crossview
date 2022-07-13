/**
 * @description 数据的存、取、移除
 * @module storage
 */

/**
 * @description 存储浏览器数据
 * @class {*} storage
 */
// 如何判断是否存在某个item https://stackoverflow.com/questions/3262605/how-to-check-whether-a-storage-item-is-set
class Storage {
  constructor(options) {
    const {
      type,
      prefix = 'crossviewUtils',
      message = {
        setItem: '写入',
        getItem: '读取',
        removeAll: '移除所有',
        removeItem: '移除',
      },
    } = options;
    this.type = type;
    this.message = message;
    this.prefix = prefix;
    if (type === 'local') {
      this.storageEs = window.localStorage;
    } else if (type === 'session') {
      this.storageEs = window.sessionStorage;
    }
  }
  doItem(func, action) {
    try {
      if (typeof func === 'function') {
        return func();
      }
    } catch (err) {
      this.warnEs(action);
      return null;
    }
    return true;
  }
  setItem(key, value) {
    if (typeof key === 'object') {
      Object.keys(key).forEach((k) => {
        this.doItem(
          () => this.storageEs.setItem(
            `${this.prefix}.${k}`,
            JSON.stringify(key[k])
          ),
          'setItem'
        );
      });
    } else {
      this.doItem(
        () => this.storageEs.setItem(
          `${this.prefix}.${key}`,
          JSON.stringify(value)
        ),
        'setItem'
      );
    }
  }
  has(...keys) {
    return keys.every(key => this.storageEs.getItem(`${this.prefix}.${key}`));
  }
  get(...keys) {
    const result = {};
    keys.forEach((key) => {
      if (`${this.storageEs.getItem(`${this.prefix}.${key}`)}` !== 'null') {
        try {
          result[key] = JSON.parse(this.storageEs.getItem(`${this.prefix}.${key}`));
        } catch (err) {
          console.warn(this.warnEs('getItem'));
        }
      }
    });
    return result;
  }
  getItem(key) {
    return this.doItem(
      () => JSON.parse(this.storageEs.getItem(`${this.prefix}.${key}`)),
      'getItem'
    );
  }
  removeAll() {
    this.doItem(() => this.storageEs.removeAll(), 'removeAll');
  }
  removeItem(...keys) {
    keys.forEach(key => this.doItem(
      () => this.storageEs.removeItem(`${this.prefix}${key}`),
      'removeItem'
    ));
  }
}
const createStorage = ({ type }) => new Storage({
  type,
});

export { createStorage };
export const ulocalStorage = createStorage({ type: 'local' });
export const usessionStorage = createStorage({ type: 'session' });
