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