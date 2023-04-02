const calculations = require("./View/Calculations.js");

test('Calculate PV', async function()
{
    expect(calculations.PV(0.08, 6, 0, 12200, 0)).toBe("-7688.07");
    expect(calculations.PV(0, 6, 0, 12200, 0)).toBe(-12200);
});

test('Calculate FV', async function()
{
    expect(calculations.FV(0.06, 25, 0, 4800, 0)).toBe(-20600.98);
});