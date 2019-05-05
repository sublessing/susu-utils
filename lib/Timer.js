
const zero = (num) => {
    return num < 10 ? '0'+num : num;
}

const weekName = (day) => {
    let names = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return names[day];
}

//  format
const timeFormat = (date, format) => {
    try {
        format = format || 'yyyy-MM-dd hh:mm:ss ww';
        date = date || new Date();
        let nDate = new Date(date),
            year = nDate.getFullYear(),
            month = zero(nDate.getMonth()+1),
            day = zero(nDate.getDate()),
            hours = zero(nDate.getHours()),
            minute = zero(nDate.getMinutes()),
            second = zero(nDate.getSeconds()),
            week = nDate.getDay();
        return format.replace(/yyyy/g, year)
                     .replace(/MM/g, month)
                     .replace(/dd/g, day)
                     .replace(/hh/g, hours)
                     .replace(/mm/g, minute)
                     .replace(/ss/g, second)
                     .replace(/ww/g, weekName(week));
    } catch (error) {
        throw error
    }
}

//  get the first and last day of the month
//  Getting the specified date is what day of the week
const getDayOfMonth = (day, month) => {
    day = day || 1;
    month = month || new Date().getMonth();
    let nDate = new Date();
        nDate.setMonth(month);
    if (day === 1) {
        nDate.setDate(1)
    } else {
        nDate.setMonth(month+1);
        nDate.setDate(0);
    }
    let year = nDate.getFullYear(),
        mon = zero(nDate.getMonth()+1),
        dd = zero(nDate.getDate()),
        week = nDate.getDay();
    return year + '-' + mon + '-' + dd + ' ' + weekName(week);
}

module.exports = {
    timeFormat,
    getDayOfMonth,
    zero,
    weekName
}