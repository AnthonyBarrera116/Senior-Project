//Based off of the function from this repo: https://github.com/handsontable/formula.js
exports.PV = function(rate, nper, pmt, fv, type){
    fv = fv || 0;
  
    rate = parseFloat(rate);
    nper = parseFloat(nper);
    pmt = parseFloat(pmt);
    fv = parseFloat(fv);
  
    if (rate === 0) {
      return -pmt * nper - fv;
    } else {
      return ((((1 - Math.pow(1 + rate, nper)) / rate) * pmt * (1 + rate * type) - fv) / Math.pow(1 + rate, nper)).toFixed(2);
    }
  };

//Based off of the function from this repo: https://github.com/handsontable/formula.js
  exports.FV = function(rate, nper, pmt, pv, type){
    pv = pv || 0;

    rate = parseFloat(rate);
    nper = parseFloat(nper);
    pmt = parseFloat(pmt);
    pv = parseFloat(pv);
  
    let result;
    if (rate === 0) {
      result = pv + pmt * nper;
    } else {
      let term = Math.pow(1 + rate, nper);
      if (type === 1) {
        result = pv * term + pmt * (1 + rate) * (term - 1) / rate;
      } else {
        result = pv * term + pmt * (term - 1) / rate;
      }
    }
    return -(result).toFixed(2);
  };