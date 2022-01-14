import { IndividualCustomer, EnterpriseCustomer } from './customer';

//sut - system under test
const createSutIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createSutEnterpriseCustomer = (
  name: string,
  cnpj: string
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have properties', () => {
    const firstName = 'Maria';
    const lastName = 'Silveira';
    const cpf = '123.456.789-00';
    const sut = createSutIndividualCustomer(firstName, lastName, cpf);

    expect(sut).toHaveProperty('firstName', firstName);
    expect(sut).toHaveProperty('lastName', lastName);
    expect(sut).toHaveProperty('cpf', cpf);
  });

  it('should have method getName', () => {
    const firstName = 'Maria';
    const lastName = 'Silveira';
    const cpf = '123.456.789-00';
    const sut = createSutIndividualCustomer(firstName, lastName, cpf);

    expect(sut.getName()).toBe('Maria Silveira');
  });

  it('should have method getIDN', () => {
    const firstName = 'Maria';
    const lastName = 'Silveira';
    const cpf = '123.456.789-00';
    const sut = createSutIndividualCustomer(firstName, lastName, cpf);

    expect(sut.getIDN()).toBe('123.456.789-00');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have properties', () => {
    const name = 'Testing LTD';
    const cnpj = '12.345.678/1234-00';
    const sut = createSutEnterpriseCustomer(name, cnpj);

    expect(sut).toHaveProperty('name', name);
    expect(sut).toHaveProperty('cnpj', cnpj);
  });

  it('should have method getName', () => {
    const name = 'Testing LTD';
    const cnpj = '12.345.678/1234-00';
    const sut = createSutEnterpriseCustomer(name, cnpj);

    expect(sut.getName()).toBe('Testing LTD');
  });

  it('should have method getIDN', () => {
    const name = 'Testing LTD';
    const cnpj = '12.345.678/1234-00';
    const sut = createSutEnterpriseCustomer(name, cnpj);

    expect(sut.getIDN()).toBe('12.345.678/1234-00');
  });
});
