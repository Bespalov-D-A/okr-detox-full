const { randomString } = require("..");

test("test random number", () => {
  const strings = new Set();

  for (let i = 0; i < 50; i++) {
    const str = randomString();
    expect(typeof str).toBe("string");
    expect(str.length).toBe(8);
    expect(str).toMatch(/^[a-z0-9]{8}$/);
    expect(strings.has(str)).toBe(false);

    strings.add(str);
  }
});
