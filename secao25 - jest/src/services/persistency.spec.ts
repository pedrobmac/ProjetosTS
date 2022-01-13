describe('Testing some basic stuff', () => {
  it('should return 1', () => {
    const number = 1;
    expect(number).toBe(1);
  });
  //teste é idêntico a it, mas it é mais usado por ter um nome semântico
  test('should not be Lucas', () => {
    const name = 'Lucas';
    expect(name).not.toBe('João');
  });
});
