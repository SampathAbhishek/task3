const sub = require("./calculator");
test('testing on difference of two numbers',() => {
  expect(sub(20,10,'-')).toBe(10);
  expect(sub(4.22,2.12,'-')).toBe(2.1);
  expect(sub(2.222222,2.11111,'-')).toBe(0.111112);
  expect(sub(7654321,1234567,'-')).toBe(6419754);
  expect(sub(-123,-245,'-')).toBe(122);
  expect(sub(-123,21,'-')).toBe(-144);
});
