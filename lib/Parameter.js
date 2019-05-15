
class ParameTer {
    constructor () {}

    // Converting search parameters in get requests to objects
    static formatGetSearch (str) {
        try {
            if (!str || !/^\?/.test(str) || (str && str.trim().length > 1 && str.trim().indexOf('=') === -1)) {
                throw new Error('Please pass in the correct parameters.')
            }
            let paramStr = str.substring(1),
                paramArr = paramStr.split('&'),
                paramObj = {};
            for (var item of paramArr) {
                let itemArr = item.split('=');
                paramObj[itemArr[0]] = itemArr[1];
            }
            return paramObj;
        } catch (error) {
            throw error
        }
    }

    // Convert hump-like words into underlined conjunctions
    static humpToUnderline (str) {
        let firstWord = str[0];
        var temp = str.replace(/[A-Z]/g, function (match) {	
            return "_" + match.toLowerCase();
          });
        return firstWord + (/^_/.test(temp) ? temp.slice(2) : temp.slice(1));
    }

    //  Convert underlined words to hump
    static underlineToHump (str) {
        var temp = str.replace(/_\S{1}/g, function (match) {	
            return match[1].toUpperCase();
        });
        return temp;
    }
}

module.exports = ParameTer