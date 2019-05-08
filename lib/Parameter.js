
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
}

module.exports = ParameTer