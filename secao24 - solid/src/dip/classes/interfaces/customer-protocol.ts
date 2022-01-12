//esta interface não segue o ISP, cobrando campos que não exeistem em clientes PF e PJ ao mesmo tempo
export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}

export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
