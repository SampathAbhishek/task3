const calculate = require("./calculator.js");
test(' test on calculte function ', () =>{
    expect(calculate(1,2,'+')).not.toBeNull();
    expect(calculate(10,12,'+')).toBe(22);
    expect(calculate(10.1,1.0,'+')).toBe(11.1);
    expect(calculate(10,12,'-')).toBe(-2);
    expect(calculate(10.1,1.0,'-')).toBe(9.1);
});
