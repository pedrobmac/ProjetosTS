//generics populares do TS

//Record - tipo da chave e tipo dos valores
const obj1: Record<string, string | number> = {
  nome: 'Felipe',
  sobrenome: 'Machado',
  idade: 30,
};
console.log(obj1);

//Required - torna obrigatório campos opcionais
type PessoaProtocol = {
  nome: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaRequired = Required<PessoaProtocol>;

const obj2: PessoaRequired = {
  nome: 'Caio',
  sobrenome: 'Marques',
  idade: 39,
};
console.log(obj2);

//Partial - torna opcional campos obrigatórios
type PessoaPartial = Partial<PessoaRequired>;

const obj3: PessoaPartial = {
  sobrenome: 'Antunes',
};
console.log(obj3);

//Readonly - torna os campos readonly
type PessoaReadonly = Readonly<PessoaRequired>;

//Pick - permite escolher os campos desejados de um objeto
type PessoaPick = Pick<PessoaRequired, 'sobrenome' | 'idade'>;

//Extract - computa os tipos comuns entre ABC e CDE (apenas repetidos)
//Exclude - computa todos os tipos que estão em ABC que não estejam em CDE (exclui repetidos)
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExtract = Extract<ABC, CDE>;
type TipoExclude = Exclude<ABC, CDE>;

//
//exemplo prático do Pick e Exclude pra transformar _id em id com menor acoplamento ao alterar o tipo original
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  novoCampo: string;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'a2d5fi9gjn09afk',
  nome: 'Luis',
  idade: 48,
  novoCampo: 'novo',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:', accountApi);

//module mode
export default 1;
