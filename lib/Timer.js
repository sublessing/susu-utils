
const zero = (num) => {
    return num < 10 ? '0'+num : num;
}
const weekName = (day) => {
    let names = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return names[day];
}
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


module.exports = {
    timeFormat,
    zero,
    weekName
}