/**
 * Determine what type of value is it
 * 
 */

 class Determine {
     
    constructor () {}

    //  Reference to toString function
    static toString (val) {
        return Object.prototype.toString.call(val);
    }

    //  Determine if a value is an Array
    static isArray(val) {
        return Determine.toString.call(val) === '[object Array]';
    }
    
    //  Determine if a value is an ArrayBuffer
    static isArrayBuffer(val) {
        return toString.call(val) === '[object ArrayBuffer]';
    }

    //  Determine if a value is a FormData
    static isFormData(val) {
        return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }

    //  Determine if a value is a String
    static isString(val) {
        return typeof val === 'string';
    }

    //  Determine if a value is a Number
    static isNumber(val) {
        return typeof val === 'number';
    }

    //  Determine if a value is undefined
    static isUndefined(val) {
        return typeof val === 'undefined';
    }

    //  Determine if a value is an Object
    static isObject(val) {
        return val !== null && typeof val === 'object';
    }

    //  Determine if a value is a Date
    static isDate(val) {
        return toString.call(val) === '[object Date]';
    }

    //  Determine if a value is a File
    static isFile(val) {
        return toString.call(val) === '[object File]';
    }

    //  Determine if a value is a Blob
    static isBlob(val) {
        return toString.call(val) === '[object Blob]';
    }

    //  Determine if a value is a Function
    static isFunction(val) {
        return toString.call(val) === '[object Function]';
    }
 }

 module.exports = Determine