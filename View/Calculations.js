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
  return (((pmt * (1 - (1 + i)**-n))/i) + (bfv * (1 + i)**-n)).toFixed(2)
  
};

exports.NPV = function(Invest, rate, yearOne, yearTwo, yearThree, yearFour){

  return -1;


}

exports.PMT = function(loanInput,TermInput,rateLabel){

  return -1;


}

exports.NPER = function(pvInput,fvLabel,pmtInput,rateInput,option){

  return -1;


}

exports.YTM = function(nper, pv, rate, pmt, option){

  return -1;


}

exports.AnnGroDiv = function(divInput,rateInput,yearsInput){

  return -1;

}

exports.AnnGroSt = function(priceInput, faceInput, maturityInput, coupInput, option){

  return -1;

}

exports.PSP = function(CurInput, rateInput, stockInput){

  return -1;

}

exports.FSP = function(numPInput, pvInput, rateInput, pmtInput,option){

  return -1;

}

exports.WACC = function(invesInput, totalInput, costInput, debtInput, rateInput){

  return -1;

}

exports.EAA = function(NPVInput, perInput, rateInput){

  return -1;

}

exports.CAPM = function(expInput, rateInput, stockInput){

  return -1;

}