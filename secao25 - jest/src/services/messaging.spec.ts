import { Messaging } from './messaging';

//sut - system under test
const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    const msg = 'testing';

    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    const msg = 'testing';

    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'testing');
  });
});
