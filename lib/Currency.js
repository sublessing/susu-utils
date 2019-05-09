/**
 * Formatting Currency and Unformatting Currency
 * 
 */

 class Currency {
    constructor () {}

    //  Formatting Currency
    //  Keep the last two decimal points
    //  The preservation method is interception
    static formatCurrency (money) {
        try {
            if(money && money!=null){
                money = String(money);
                var left=money.split('.')[0],right=money.split('.')[1];
                right = right ? (right.length>=2 ? '.'+right.substr(0,2) : '.'+right+'0') : '.00';
                var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
                return (Number(money)<0?"-":"") + temp.join(',').split('').reverse().join('')+right;
            }else if(money===0){
                return '0.00';
            }else{
                return "";
            }
        } catch (error) {
            throw error;
        }
    }

    //  Unformatting Currency
    static unformatCurrency (money) {
        try {
            if(money && money!=null){
                money = String(money);
                var group = money.split('.');
                var left = group[0].split(',').join('');
                return Number(left+"."+group[1]);
            }else{
                return "";
            }
        } catch (error) {
            throw error
        }
    }

 }

 module.exports = Currency