//type assertion equivale ao casting de outras linguagens

//condicional - usar quando pode ou não vir o obj
const body1 = document.querySelector("body"); //pode retornar o objeto ou null
// body1.style.background = "red"; //pode ter o objeto ou null, então TS reclama
if (body1) body1.style.background = "red"; //verifica o objeto antes manualmente, então TS não reclama

//Non-null assertion (!) - evitar
const body2 = document.querySelector("body")!; //! no final diz ao linter que o obj não vai ser nulo. (não é muito aconselhável)
body2.style.background = "red"; //força a existência do obj, então TS não reclama

//Type-assertion (as) - usar quando tiver certeza que encaixa
const body3 = document.querySelector("body") as HTMLBodyElement; //usar apenas quando tem certeza que o objeto encaixa no casting
body3.style.background = "red"; //verifica o objeto antes, então TS não reclama

const body4 = document.querySelector("body") as unknown as number; //usado PONTUALMENTE pra forçar o casting de subtipos de tipos diferentes
body4.valueOf(); //forçou os tipos, então TS não reclama
