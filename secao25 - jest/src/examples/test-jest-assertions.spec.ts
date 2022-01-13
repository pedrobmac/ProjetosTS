describe('Primitive values', () => {
  it('shoud test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); //Object.is
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();
  });

  it('shoud test more jest assertions', () => {
    const number = 10;

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeCloseTo(10.001);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('shoud test jest assertions with Objects', () => {
    const person = { name: 'Lara', age: 19 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 19);

    expect(person.name).toBe('Lara');
  });
});
