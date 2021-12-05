//tipagem estruturada - a identidade do tipo não importa muito, mas sim as restrições deste tipo

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentValue) =>
  user.username === sentValue.username && user.password === sentValue.password;

const bdUser = { username: "joao", password: "123456", permission: "" }; //tipo bdUser inferido não é o mesmo que sent user, mas por serem compatíveis, permite comparação
const sentUser = { username: "joao", password: "123456" };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
