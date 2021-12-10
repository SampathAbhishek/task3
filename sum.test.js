const sum = require("./calculator");
test('testing on sum of two numbers',() => {
  expect(sum(10,20,'+')).toBe(30);
  expect(sum(4.22,2.12,'+')).toBe(6.34);
  expect(sum(1.222222,2.11111,'+')).toBe(3.333332);
  expect(sum(2,111111111,'+')).toBe(111111113);
  expect(sum(111111111,2,'+')).toBe(111111113);
  expect(sum(1234567,1234567,'+')).toBe(2469134);
  expect(sum(-123,-234,'+')).toBe(-357);
  expect(sum(-123,21,'+')).toBe(-102);
});
