import { isFunction, isUndefined } from '../../utils/shared';
class CrossViewStateMap {
  options: any;
  readRecord: any;
  notifyChange: any;
  value: any;
  constructor({ options, readRecord, notifyChange }) {
    this.options = options;
    this.readRecord = readRecord;
    this.notifyChange = notifyChange;
    this.value = undefined;
  }

  get() {
    this.readRecord();
    return this.value;
  }

  canSetValue(value) {
    return this.value !== value;
  }

  set(value) {
    this.value = value;
    this.notifyChange();
  }
}

export const stateMap = (options: any = {}) => {
  return (wcElement) => ({
    kind: 'field',
    key: Symbol(),
    placement: 'own',
    descriptor: {},
    initializer() {
      if (isFunction(wcElement.initializer)) {
        this[wcElement.key] = wcElement.initializer.call(this);
      }
    },
    finisher(crossViewStateClass) {
      if (wcElement.kind === 'method') {
        options.propertyMethod = wcElement;
      }

      if (isUndefined(crossViewStateClass.stateVars)) {
        crossViewStateClass.stateVarOptions = {};
      }

      crossViewStateClass.stateVarOptions[wcElement.key] = options;
    },
  });
};
export default CrossViewStateMap;
