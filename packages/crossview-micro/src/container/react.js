import { Component } from 'react';
import loadjs from 'loadjs';

export class CrossViewApp extends Component {

    constructor(props) {
        super(props);
        this.state = { isReady: false };
    }

    async componentDidMount() {
        const { resources = [] } = window.crossviewApps.apps[this.props.name] || {};
        await loadjs(resources, {
            returnPromise: true,
        });
        this.setState({
            isReady: true,
        });
    }

    render() {
        const { isReady } = this.state;
        const appName = this.props.name || 'crossviewapp-unknown';
        if (!isReady) {
            return null;
        }
        return `<${appName}></${appName}>`;
    }
}