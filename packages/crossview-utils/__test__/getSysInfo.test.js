import { getSysInfo } from '../build/index.es.js';

describe('emonitor.getSysInfo', () => {
    test('test getSysInfo iphone Safari', () => {
        const sysInfo = getSysInfo('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1');
        const { browser, os} = sysInfo;
        expect(browser.name).toBe('Safari');
        expect(browser.version).toBe('604.1');
        expect(os.iphone).toBe(true);
        expect(os.version).toBe('13.2.3');
    });
    test('test getSysInfo android wechat', () => {
        const sysInfo = getSysInfo('Mozilla/5.0 (Linux; Android 8.1.0; vivo Y85 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML\, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045131 Mobile Safari/537.36 MMWEBID/7928 MicroMessenger/7.0.13.1640(0x27000D39) Process/tools NetType/WIFI Language/zh_CN ABI/arm64 WeChat/arm64');
        const { browser, os} = sysInfo;
        expect(browser.name).toBe('WeChat');
        expect(browser.version).toBe('7.0');
        expect(os.android).toBe(true);
        expect(os.version).toBe('8.1.0');
    });
    test('test getSysInfo iphone wechat', () => {
        const sysInfo = getSysInfo('Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML\, like Gecko) Mobile/15E148 MicroMessenger/7.0.12(0x17000c2b) NetType/WIFI Language/zh_CN');
        const { browser, os} = sysInfo;
        expect(browser.name).toBe('WeChat');
        expect(browser.version).toBe('7.0');
        expect(os.iphone).toBe(true);
        expect(os.version).toBe('13.3.1');
    });
    test('test getSysInfo qqnews', () => {
        const sysInfo = getSysInfo('Mozilla/5.0 (Linux; Android 8.1.0; PBCM10 Build/OPM1.171019.011; wv) AppleWebKit/537.36 (KHTML\, like Gecko) Version/4.0 Chrome/62.0.3202.84 Mobile Safari/537.36 qqnews/6.0.82 TADChid/2 AppVersion/6.0.82 NetType/WWAN');
        const { browser, os} = sysInfo;
        expect(browser.name).toBe('qqnews');
        expect(browser.version).toBe('6.0.82');
        expect(os.android).toBe(true);
        expect(os.version).toBe('8.1.0');
    });
});