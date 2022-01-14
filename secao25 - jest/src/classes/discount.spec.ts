import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

//sut - system under test
const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should apply 50% discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(5.49);
  });

  it('should apply 10% discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(9.89);
  });

  it('should apply no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99); //jest advices to use toBeCloseTo for float
  });
});
