import _ from 'lodash';

//implementa a função nova mul, como se estivesse no pacote lodash
_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

export default _;
