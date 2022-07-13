import {
  getNumber,
  formateDuration,
  formateDurationByMs,
  formatePlayCount,
  getDetailByDay,
  getDateByDot,
  getWeekByDay,
  getEnWeekByDay,
  getMonthByDay,
  transformDuration,
  sliceDuration,
  getTimeText,
  getTimeDetail,
} from '@/utils/formatter';

describe('测试：src/utils/formatter/index', () => {
  test('getNumber: shoule return defaultValue', () => {
    expect(getNumber(10)).toBe(10);
    expect(getNumber('20')).toBe(20);
    expect(getNumber(undefined, 5)).toBe(5);
    expect(getNumber(false)).toBe(0);
    expect(getNumber(true)).toBe(1);
  });
  test('formateDuration', () => {
    const res1 = formateDuration('00:00:54');
    expect(res1).toBe('00:54');
    const res2 = formateDuration('00:54');
    expect(res2).toBe('00:54');
  });
  test('formateDurationByMs', () => {
    const res1 = formateDurationByMs('54');
    const res2 = formateDurationByMs('00:54');
    const res3 = formateDurationByMs('00:00:54');
    const res4 = formateDurationByMs('');
    expect(res1).toBe('54秒');
    expect(res2).toBe('54秒');
    expect(res3).toBe('54秒');
  });
  test('formatePlayCount', () => {
    const res1 = formatePlayCount('1212231');
    const res2 = formatePlayCount('1000000001');
    const res3 = formatePlayCount('2');
    const res4 = formatePlayCount();
    expect(res1).toBe('121.22万次播放');
    expect(res2).toBe('100000.00万次播放');
    expect(res3).toBe('2次播放');
  });
  test('getCurDateStr: shoule return [object Object]', () => {
    const { week, enMonth, day, year, month } = getDetailByDay(new Date(1595422873945));
    expect(week).toBe('星期三');
    expect(enMonth).toBe('JULY');
    expect(day).toBe(22);
    expect(year).toBe(2020);
    expect(month).toBe(6);
  });
  test('getDateByDot: shoule return 2020622', () => {
    const curDateStr = getDateByDot(new Date(1595422873945));
    expect(curDateStr).toBe('2020.07.22');
  });

  test('getWeekByDay: shoule return 星期三', () => {
    const curDateStr = getWeekByDay(new Date(1595422873945));
    expect(curDateStr).toBe('星期三');
  });
  test('ggetEnWeekByDay: shoule return WEDNESDAY', () => {
    const curDateStr = getEnWeekByDay(new Date(1595422873945));
    expect(curDateStr).toBe('WEDNESDAY');
  });
  test('getMonthByDay: shoule return JULY', () => {
    const curDateStr = getMonthByDay(new Date(1595422873945));
    expect(curDateStr).toBe('JULY');
  });
  test('transformDuration: shoule return JULY', () => {
    const nullDuration = transformDuration();
    const duration0200 = transformDuration('00:02:02')
    expect(nullDuration).toBe(0);
    expect(duration0200).toBe(122);
  });
  test('sliceDuration: shoule return JULY', () => {
    const duration00 = sliceDuration('00:02');
    expect(duration00).toBe('02');
  });
  test('sliceDuration: shoule return JULY', () => {
    const { hours, minutes } = getTimeDetail(1595422873945);
    expect(hours).toBe('20');
    expect(minutes).toBe('32')
  });
  test('sliceDuration: shoule return JULY', () => {
    const duration00 = getTimeText(2000000);
    expect(duration00).toBe('33分钟前');
  });
});
