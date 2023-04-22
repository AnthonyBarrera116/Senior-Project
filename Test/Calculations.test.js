const calculations = require("../View/Calculations.js");


test('Calculate PV', async function()
{
    expect(calculations.PV(0.08, 6, 0, 12200, 0)).toBe("-7688.07");
    expect(calculations.PV(0, 6, 0, 12200, 0)).toBe(-12200);
});

test('Calculate FV', async function()
{
    expect(calculations.FV(0.06, 25, 0, 4800, 0)).toBe(-20600.98);
});
test('Calculate BP', async function()
{
    expect(calculations.BP(9, 8, 1000, .06, 1)).toBe("873.41");
});

test('Calculate NPV', async function()
{
    expect(calculations.NPV([0.028, 500, 600, 800])).toBe("1790.54");
});

test('Calculate PMT', async function()
{
    expect(calculations.PMT(0.07, 3, 0, 7500)).toBe(-2332.89);
});

test('Calculate NPER', async function()
{
    expect(calculations.NPER(0.05, 2000, 0, 7500, 0)).toBe("-4.26");
});

test('Calculate the annual growth of dividends', async function()
{
    expect(calculations.AnnGroDiv(12, 2, 0.12)).toBe(-0.04);
});

test('Calculate expected dividends', async function()
{
    expect(calculations.expectedDividends([1, 0.2, 0.2, 0.2, 0.2, 0.05])).toBe("1.2, 1.44, 1.73, 2.08, 2.18");
});

test('Calculate stock price', async function()
{
    expect(calculations.PSP(2.18, 0.1, 0.05)).toBe("43.60");
});

test('Calculate IRR', async function()
{
    expect(calculations.IRR([-794.99, 40, 40, 40, 40, 40, 40, 40, 840])).toBe("5.10");
});

test('Calculate EAA', async function()
{
    expect(calculations.EAA(-42539.44, 3, 0.1)).toBe("-17105.74");
});

test('Calculate CAPM', async function()
{
    expect(calculations.CAPM(0.1252, 0.0381, 0.71)).toBe("0.10");
});

test('Calculate WACC', async function()
{
    expect(calculations.WACC(0.165, 15000000, 0.08, 6000000, 0.21)).toBe("0.14");
});