import utc from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
dayjs.extend(utc);

const dateUtil = {
  dateFormat(date: string, format: string = 'YYYY.MM.DD') {
    return dayjs(date).format(format);
  },
};

export default dateUtil;