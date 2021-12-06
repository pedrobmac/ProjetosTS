import { spawn } from "child_process";
import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

const submitEventFn = (event: Event) => {
  const target = event.target as HTMLFormElement; //fixa o escopo para o form e faz casting para evitar aviso de tipo null
  event.preventDefault();
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log("Formulário Enviado");
};

form.addEventListener("submit", submitEventFn);

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessages(input, "Este campo não pode ficar vazio.");
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessages(input, "E-mail inválido.");
}

function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement
): void {
  if (password.value !== password2.value)
    showErrorMessages(password2, "Senhas divergentes.");
}

function showErrorMessages(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    ".error-message"
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;

  //percorre o form e se alguma tag tiver a classe de erro, troca a flag de envio
  form
    .querySelectorAll("." + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));

  return send;
}

// showErrorMessages(username, 'Mensagem');
// hideErrorMessages(form);
