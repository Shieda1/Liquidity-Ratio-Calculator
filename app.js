// https://calculator.swiftutors.com/liquidity-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const liquidityRatioRadio = document.getElementById('liquidityRatioRadio');
const liquidAssetsRadio = document.getElementById('liquidAssetsRadio');
const shortTermLiabilitiesRadio = document.getElementById('shortTermLiabilitiesRadio');

let liquidityRatio;
let liquidAssets = v1;
let shortTermLiabilities = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

liquidityRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Liquid Assets ($)';
  variable2.textContent = 'Short Term Liabilities ($)';
  liquidAssets = v1;
  shortTermLiabilities = v2;
  result.textContent = '';
});

liquidAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Liquidity Ratio';
  variable2.textContent = 'Short Term Liabilities ($)';
  liquidityRatio = v1;
  shortTermLiabilities = v2;
  result.textContent = '';
});

shortTermLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Liquidity Ratio';
  variable2.textContent = 'Liquid Assets ($)';
  liquidityRatio = v1;
  liquidAssets = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(liquidityRatioRadio.checked)
    result.textContent = `Liquidity Ratio = ${computeLiquidityRatio().toFixed(2)}`;

  else if(liquidAssetsRadio.checked)
    result.textContent = `Liquid Assets = ${computeLiquidAssets().toFixed(2)} $`;

  else if(shortTermLiabilitiesRadio.checked)
    result.textContent = `Short Term Liabilities = ${computeShortTermLiabilities().toFixed(2)} $`;
})

// calculation

function computeLiquidityRatio() {
  return Number(liquidAssets.value) / Number(shortTermLiabilities.value);
}

function computeLiquidAssets() {
  return Number(liquidityRatio.value) * Number(shortTermLiabilities.value);
}

function computeShortTermLiabilities() {
  return Number(liquidAssets.value) / Number(liquidityRatio.value);
}