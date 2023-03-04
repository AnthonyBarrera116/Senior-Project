//Based off of the function from this repo: https://github.com/handsontable/formula.js
exports.PV = function(rate, nper, pmt, fv, type) {
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