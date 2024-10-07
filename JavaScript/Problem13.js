/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dictionary = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };

    var num = 0;

    for(var i = 0; i<s.length; i++){
        current_numeral = dictionary[s[i]];
        next_numeral = dictionary[s[i+1]] || 0;

        if(current_numeral < next_numeral){
            num -= current_numeral;
        }else{
            num += current_numeral;
        }

    }

    return num;
};