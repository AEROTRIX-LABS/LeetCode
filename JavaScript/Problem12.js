/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var leftover_num = num;
    var numeral = "";

    var m_count = Math.floor(leftover_num/1000);
    numeral = numeral.concat("M".repeat(m_count));

    leftover_num -= 1000 * m_count;

    if(leftover_num >= 900){
        numeral = numeral.concat("CM");
        leftover_num -= 900;
    }else if(leftover_num >= 500){
        numeral = numeral.concat("D");
        leftover_num -= 500;
    }

    var c_count = Math.floor(leftover_num / 100);
    if(c_count == 4){
        numeral = numeral.concat("CD")
        leftover_num -= 400;
    }else{
        numeral = numeral.concat("C".repeat(c_count))
        leftover_num -= 100*c_count;
    }

    if(leftover_num >= 90){
        numeral = numeral.concat("XC");
        leftover_num -= 90;
    }else if(leftover_num >= 50){
        numeral = numeral.concat("L");
        leftover_num -= 50;
    }

    var x_count = Math.floor(leftover_num / 10);
    if(x_count == 4){
        numeral = numeral.concat("XL")
        leftover_num -= 40;
    }else{
        numeral = numeral.concat("X".repeat(x_count))
        leftover_num -= 10*x_count;
    }

    if(leftover_num >= 9){
        numeral = numeral.concat("IX");
        leftover_num -= 9;
    }else if(leftover_num >= 5){
        numeral = numeral.concat("V");
        leftover_num -= 5;
    }

    var i_count = leftover_num;
    if(i_count == 4){
        numeral = numeral.concat("IV")
        leftover_num -= 4;
    }else{
        numeral = numeral.concat("I".repeat(i_count))
        leftover_num -= 1*i_count;
    }
    


    return numeral;
};