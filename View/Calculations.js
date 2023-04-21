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

exports.BP = function(ym, mr, bfv, acr, type) {

  ym = parseFloat(ym);
  mr = parseFloat(mr);
  bfv = parseFloat(bfv);
  acr = parseFloat(acr);
  
  if(type == 1){
    n =2 * ym;
    i = (mr / 2) / 100;
    pmt = (bfv * acr)/ 2;


  }
  else if(type == 2){
    n = 4 * ym;
    i = (mr / 4)/ 100;
    pmt = (bfv * acr)/ 4;

  }
  else if(type == 3){

    n =12 * ym;
    i = (mr / 12)/ 100;
    pmt = (bfv * acr)/ 12;

  }
  else{
    n = 1 * ym;
    i = (mr / 1)/ 100;
    pmt = (bfv * acr)/ 1;

  }
  return (((pmt * (1 - (1 + i)**-n))/i) + (bfv * (1 + i)**-n)).toFixed(2);
  
};

//Based off of the function from this repo: https://github.com/handsontable/formula.js
exports.NPV = function(args){
  // Lookup rate
  let rate = parseFloat(args[0]);

  // Initialize net present value
  let value = 0;

  // Loop on all values
  for (let j = 1; j < args.length; j++) {
    value += parseFloat(args[j]) / Math.pow(1 + rate, j);
  }

  // Return net present value
  return value.toFixed(2);
}

//Based off of the function from this repo: https://github.com/handsontable/formula.js
exports.PMT = function(rate, nper, pv, fv, type){
  fv = fv || 0;

  rate = parseFloat(rate);
  nper = parseFloat(nper);
  pv = parseFloat(pv);
  fv = parseFloat(fv);

  let result;
  if (rate === 0) {
    result = (pv + fv) / nper;
  } else {
    let term = Math.pow(1 + rate, nper);
    if (type === 1) {
      result = (fv * rate / (term - 1) + pv * rate / (1 - 1 / term)) / (1 + rate);
    } else {
      result = fv * rate / (term - 1) + pv * rate / (1 - 1 / term);
    }
  }
  return -result.toFixed(2);
}

//Based off of the function from this repo: https://github.com/handsontable/formula.js
exports.NPER = function(rate, pmt, pv, fv, type){
  fv = fv || 0;

  rate = parseFloat(rate);
  pmt = parseFloat(pmt);
  pv = parseFloat(pv);
  fv = parseFloat(fv);

  let num = pmt * (1 + rate * type) - fv * rate;
  let den = (pv * rate + pmt * (1 + rate * type));
  return (Math.log(num / den) / Math.log(1 + rate)).toFixed(2);
}

exports.AnnGroDiv = function(stockPrice, recentDividend, reqRateReturn){
  
  stockPrice = parseFloat(stockPrice);
  recentDividend = parseFloat(recentDividend);
  reqRateReturn = parseFloat(reqRateReturn);
  
  return (recentDividend - stockPrice*reqRateReturn)/(-recentDividend - stockPrice);
}

exports.expectedDividends = function(args){//[recent div, growth1, growth2, ...]
  let dividends = [parseFloat(args[0])*(1 + parseFloat(args[1]))];
  for(let i = 2; i < args.length; i++){
    dividends.push(" " + (dividends[i - 2]*(1 + parseFloat(args[i]))).toFixed(2));
  }
  return dividends.toString();
}

exports.AnnGroSt = function(priceInput, faceInput, maturityInput, coupInput, option){

  return -1;

}

exports.PSP = function(CurInput, rateInput, stockInput){

  return (CurInput/(rateInput - stockInput)).toFixed(2);

}

exports.FSP = function(numPInput, pvInput, rateInput, pmtInput,option){

  return -1;

}

exports.WACC = function(invesInput, totalInput, costInput, debtInput, rateInput){

  return -1;

}

exports.EAA = function(NPV, nper, rate){
  NPV = parseFloat(NPV);
  nper = parseFloat(nper);
  rate = parseFloat(rate);

  return (NPV/((1 - (1/Math.pow(1 + rate, nper)))/rate)).toFixed(2);

}

exports.CAPM = function(exp, rate, beta){

  exp = parseFloat(exp);
  rate = parseFloat(rate);
  beta = parseFloat(beta);

  return (rate + beta*(exp - rate)).toFixed(2);

}

exports.IRR = function(args){//Based off of this function: https://stackoverflow.com/a/19560212
  min = 0.0;
  max = 1.0;
  let start = (new Date()).getSeconds();
  do {
    guest = (min + max) / 2;
    NPV = 0;
    for (var j=0; j<args.length; j++) {
          NPV += args[j]/Math.pow((1+guest),j);
    }
    if (NPV > 0) {
      min = guest;
    }
    else {
      max = guest;
    }
    if(((new Date()).getSeconds() - start) > 5){//Stop if the loop runs for more than 5 seconds
      return NaN;
    }
  } while(Math.abs(NPV) > 0.000001);
  return (guest * 100).toFixed(2);
}