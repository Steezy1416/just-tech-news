const {format_date, format_plural, format_url} = require("../utils/helpers")

test("format_date() returns a date string", () => {
    const date = new Date("2022-11-11 16:12:03")
    expect(format_date(date)).toBe("11/11/2022")
})

test("fortmat_plural() returs a pluralized word", () => {
    const num = 1
    const nums = 2
    const animal = "Tiger"
    const anumal2 = "Lion"

    expect(format_plural(animal, nums)).toBe("Tigers")
    expect(format_plural(anumal2, num)).toBe("Lion")
})

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
  });
