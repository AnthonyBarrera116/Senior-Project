//Based off of the function from this repo: https://github.com/handsontable/formula.js
PV = function(rate, nper, pmt, fv, type) {
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

bp = function(ym, mr, bfv, acr, type) {

  ym = parseFloat(ym);
  mr = parseFloat(mr);
  bfv = parseFloat(bfv);
  acr = parseFloat(acr);

  let n =0;
  let i =0;
  let pmt = 0;
  
  if(type == 1){
    n =2 * ym;
    i = mr / 2;
    pmt = (bfv * acr)/ 2;


  }
  else if(type == 2){
    n = 4 * ym;
    i = mr / 4;
    pmt = (bfv * acr)/ 4;

  }
  else if(type == 3){

    n =12 * ym;
    i = mr / 12;
    pmt = (bfv * acr)/ 12;
  }
  else{
    n =1 * ym;
    i = mr / 1;
    pmt = (bfv * acr)/ 1;

  }

  return ((pmt * (1 - Math.pow(1 + i,-n)))/i) + (bfv * (math.pow(1)))

  
};