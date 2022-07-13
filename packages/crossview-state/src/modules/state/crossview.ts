import CrossViewStateMap from "./map";
import crossViewStateRecorder from "../recorder";

class CrossViewState {
    _observersList: any[];
    constructor() {
        this._observersList = [];
        this._initStateMaps();
    }
    _initStateMap(key: string, options: any) {
        if (this.hasOwnProperty(key)) {
            return;
        }
        const newOptions = this._parseOptions(options);

        const internalStateMap = new newOptions.handler({
            options: newOptions,
            readRecord: () => this._readRecord(key),
            notifyChange: () => this._notifyChange(key),
        });
        
        Object.defineProperty(
            this,
            key,{
                get(): any {
                    return internalStateMap.get();
                },
                set(value: any): any {
                    if (internalStateMap.canSetValue(value)) {
                        internalStateMap.set(value);
                    }
                },
                configurable: true,
                enumerable: true,
            }
        );
    }

    private _readRecord(key: string): any {
        crossViewStateRecorder.read(this, key);
    }

    private _notifyChange(key: string): any {
        for (const observerInfo of this._observersList) {
            if (!observerInfo.keys || observerInfo.keys.includes(key)) {
                observerInfo.observer(key);
            }
        }
    }

    private _parseOptions(options: any) {
        if (!options.handler) {
            options.handler = CrossViewStateMap;
        } else {
            if (options?.propertyMehod?.kind === 'method') {
                Object.assign(options, options.propertyMethod.descriptor.value.call(this));
            }
        }
        return options;
    }

    public addObserver(observer: any, keys: any) {
        this._observersList.push({ observer, keys });
    }

    public removeObserver(observer: any) {
        this._observersList = this._observersList.filter(observerInfo => observerInfo.observer !== observer);
    }

    private _initStateMaps() {
        const { stateVarOptions, stateVars } = this.constructor;

        if (stateVarOptions) {
            for (let [key, options] of Object.entries(stateVarOptions)) {
                this._initStateMap(key, options);
            }
        }
        if (stateVars) {
            for (let [key, value] of Object.entries(stateVars)) {
                this._initStateMap(key, {});
                this[key] = value;
            }
        }
    }
}

export default CrossViewState;
