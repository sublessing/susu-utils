
const zero = (num) => {
    return num < 10 ? '0'+num : num;
}

const weekName = (day) => {
    let names = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return names[day];
}

const formatDate = (date, format) => {
    let year = date.getFullYear(),
        month = zero(date.getMonth()+1),
        day = zero(date.getDate()),
        hours = zero(date.getHours()),
        minute = zero(date.getMinutes()),
        second = zero(date.getSeconds()),
        week = date.getDay();
    return format.replace(/yyyy/g, year)
                 .replace(/MM/g, month)
                 .replace(/dd/g, day)
                 .replace(/hh/g, hours)
                 .replace(/mm/g, minute)
                 .replace(/ss/g, second)
                 .replace(/ww/g, weekName(week));
}

const getQuarterStartMonth = () => { 
    let nowMonth = new Date().getMonth();
    var quarterStartMonth = 0; 
    if(nowMonth<3){ 
        quarterStartMonth = 0; 
    } 
    if(2<nowMonth && nowMonth<6){ 
        quarterStartMonth = 3; 
    } 
    if(5<nowMonth && nowMonth<9){ 
        quarterStartMonth = 6; 
    } 
    if(nowMonth>8){ 
        quarterStartMonth = 9; 
    } 
    return quarterStartMonth; 
} 

//  format
const timeFormat = (date, format) => {
    try {
        format = format || 'yyyy-MM-dd hh:mm:ss ww';
        date = date || new Date();
        let nDate = new Date(date);
        return formatDate(nDate, format);
    } catch (error) {
        throw error
    }
}

//  get the first and last day of the month
//  Getting the specified date is what day of the week
const getMonth = (format, month, year) => {
    try {
        month = month || new Date().getMonth();
        year = year || new Date().getFullYear();
        format = format || 'yyyy-MM-dd ww';
        let fDate = new Date();
            fDate.setFullYear(year);
            fDate.setMonth(month);
            fDate.setDate(1)
            fDate.setHours(0);
            fDate.setMinutes(0);
            fDate.setSeconds(0);
        let firstDay = formatDate(fDate, format);
        let lDate = new Date();
            lDate.setFullYear(year);
            lDate.setMonth(month+1);
            lDate.setDate(0);
            lDate.setHours(23);
            lDate.setMinutes(59);
            lDate.setSeconds(59);
        let lasetDay = formatDate(lDate, format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error
    }
}

//  Gets the date of the first and last day of the specified year.
const getYear = (format, year) => {
    try {
        year = year || new Date().getFullYear();
        format = format || 'yyyy-MM-dd ww';
        let fDate = new Date();
            fDate.setFullYear(year);
            fDate.setMonth(0);
            fDate.setDate(1);
            fDate.setHours(0);
            fDate.setMinutes(0);
            fDate.setSeconds(0);
        let firstDay = formatDate(fDate, format);
        let lDate = new Date();
            lDate.setFullYear(year+1);
            lDate.setMonth(0);
            lDate.setDate(0);
            lDate.setHours(23);
            lDate.setMinutes(59);
            lDate.setSeconds(59);
        let lasetDay = formatDate(lDate, format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error
    }
}

//  Gets the date of the first and last day of the current week.
const getCurrentWeek = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            curMonth = date.getMonth(),
            curDay = date.getDay(),
            curDate = date.getDate(),
            firstDay = formatDate(new Date(curYear, curMonth, curDate - curDay+1, 0, 0, 0), format),
            lasetDay = formatDate(new Date(curYear, curMonth, curDate + (7 - curDay), 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error
    }
}

//  Gets the date of the first and last day of the previous week.
const getPreviousWeek = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            curMonth = date.getMonth(),
            curDay = date.getDay(),
            curDate = date.getDate(),
            firstDay = formatDate(new Date(curYear, curMonth, curDate - curDay - 6, 0, 0, 0), format),
            lasetDay = formatDate(new Date(curYear, curMonth, curDate + (7 - curDay) - 7, 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error
    }
}

//  Gets the date of the first and last day of the next week.
const getNextWeek = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            curMonth = date.getMonth(),
            curDay = date.getDay(),
            curDate = date.getDate(),
            firstDay = formatDate(new Date(curYear, curMonth, curDate - curDay + 8, 0, 0, 0), format),
            lasetDay = formatDate(new Date(curYear, curMonth, curDate + (7 - curDay) + 7, 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error
    }
}

//  Gets the date of the first and last day of the week before the day.
const getDayBeforeWeek = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            curMonth = date.getMonth(),
            curDate = date.getDate(),
            firstDay = formatDate(new Date(curYear, curMonth, curDate - 7, 0, 0, 0), format),
            lasetDay = formatDate(new Date(curYear, curMonth, curDate - 1, 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error
    }
}

//  Gets the date of the first and last day of the week after the day.
const getDayAfterWeek = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            curMonth = date.getMonth(),
            curDate = date.getDate(),
            firstDay = formatDate(new Date(curYear, curMonth, curDate + 1, 0, 0, 0), format),
            lasetDay = formatDate(new Date(curYear, curMonth, curDate + 7, 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error
    }
}

//  Gets the date of the first and last day of the current quarter.
const getCurrentQuarter = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            startMonth = getQuarterStartMonth(),
            lastMonth = startMonth+2,
            lastDate = new Date();
            lastDate.setMonth(lastMonth+1);
            lastDate.setDate(0);
            let firstDay = formatDate(new Date(curYear, startMonth, 1, 0, 0, 0), format),
                lasetDay = formatDate(new Date(curYear, lastMonth, lastDate.getDate(), 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error;
    }
}

//  Gets the date of the first and last day of the previous quarter.
const getPreviousQuarter = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            startMonth = getQuarterStartMonth() - 3,
            lastMonth = startMonth + 2,
            lastDate = new Date();
            lastDate.setMonth(lastMonth+1);
            lastDate.setDate(0);
            let firstDay = formatDate(new Date(curYear, startMonth, 1, 0, 0, 0), format),
                lasetDay = formatDate(new Date(curYear, lastMonth, lastDate.getDate(), 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error;
    }
}

//  Gets the date of the first and last day of the next quarter.
const getNextQuarter = (format) => {
    try {
        format = format || 'yyyy-MM-dd';
        let date = new Date(),
            curYear = date.getFullYear(),
            startMonth = getQuarterStartMonth() + 3,
            lastMonth = startMonth + 2,
            lastDate = new Date();
            lastDate.setMonth(lastMonth+1);
            lastDate.setDate(0);
            let firstDay = formatDate(new Date(curYear, startMonth, 1, 0, 0, 0), format),
                lasetDay = formatDate(new Date(curYear, lastMonth, lastDate.getDate(), 23, 59, 59), format);
        return {firstDay, lasetDay};
    } catch (error) {
        throw error;
    }
}

module.exports = {
    timeFormat,
    getMonth,
    getYear,
    getCurrentWeek,
    getPreviousWeek,
    getDayBeforeWeek,
    getDayAfterWeek,
    getNextWeek,
    getCurrentQuarter,
    getPreviousQuarter,
    getNextQuarter,
    zero,
    weekName
}