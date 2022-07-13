class CrossViewStateBaseRecorder {
    _recorderLogs: any;
    constructor() {
        this._recorderLogs = null;
    }
    start() {
        this._recorderLogs = new Map();
    }

    read(stateInfo, key) {
        if (this._recorderLogs === null) {
            return;
        }
        const keys = this._recorderLogs.get(stateInfo) || [];
        if (!keys.includes(key)) {
            keys.push(key);
        }
        this._recorderLogs.set(stateInfo, keys);
    }

    complete() {
        const stateMap = this._recorderLogs;
        this._recorderLogs = null;
        return stateMap;
    }
}

export default new CrossViewStateBaseRecorder();