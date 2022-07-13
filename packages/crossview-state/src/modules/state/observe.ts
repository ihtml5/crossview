import CrossViewStateRecorder from "../recorder";

const observe = (SuperElement) => {
    class baseElement extends SuperElement {
        constructor() {
            super();
            this._observersList = [];
        }

        connectedCallback() {
            super.connectedCallback();
            if (this._isConnected) {
                this.requestUpdate();
                this._isConnected = undefined;
            }
        }

        disconnectedCallback() {
            super.disconnectedCallback();
            this._isConnected = true;
            this._clearObserveList();
        }
        update(changedProperties) {
            console.warn('changedProperties', changedProperties);
            CrossViewStateRecorder.start();
            super.update(changedProperties);
            this._initStateObservers();
        }
        private _initStateObservers() {
            this._clearObserveList();
            if (!this.isConnected) {
                return;
            }
            const oberser = CrossViewStateRecorder.complete();
            this._addStateObservers(oberser);
        }
        private _addStateObservers(stateMap) {
            stateMap.forEach((keys, state) => {
                const observer = () => this.requestUpdate();
                this._observersList.push([state, observer]);
                state.addObserver(observer, keys);
            });
        }
        private _clearObserveList() {
            for (let [state, observer] of this._observersList) {
                state.removeObserver(observer);
            }
            this._observersList = [];
        }
    }

    return baseElement;
}

export {
    observe,
};