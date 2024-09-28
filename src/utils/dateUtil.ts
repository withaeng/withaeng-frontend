import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const dateUtil = {
  dateFormat(date: string, format: string = 'YYYY.MM.DD') {
    return dayjs(date).format(format);
  },

  formatSchedule(startDate: Date, endDate: Date = new Date()): string {
    const startDt = dayjs(startDate);
    const endDt = dayjs(endDate);
    const duration = endDt.diff(startDt, 'days') + 1;

    let startDateStr = '';

    if (duration > 0) {
      startDateStr = `${startDt.format('YY.MM.DD')}~${endDt.format('YY.MM.DD')}`;
    } else {
      startDateStr = startDt.format('YY.MM.DD');
    }

    return `${startDateStr}(${duration}일)`;
  },
};

export default dateUtil;
