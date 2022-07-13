import { getUrlParam } from '../build/index.es.js';

describe('emonitor.getUrlParam', () => {
    test('test getUrlParam', () => {
        expect(getUrlParam({
            name: 'dir',
            url: 'http://wizard2.webdev.com/cgi-bin/material/material_list?dir=images/'
        })).toBe('images/');
        expect(getUrlParam({
            name: 'debug',
            url: 'http://127.0.0.1:8080/examples/?debug=1'
        })).toBe('1');
        expect(getUrlParam({
            name: 'debug',
            url: 'http://127.0.0.1:8080/examples/?debug=1#redirect'
        })).toBe('1');
        expect(getUrlParam({
            name: 'file',
            url: 'file://127.0.0.1:8080/examples/?file=[object Object]&file=#redirect'
        })).toBe('[object Object]');
    });
});
