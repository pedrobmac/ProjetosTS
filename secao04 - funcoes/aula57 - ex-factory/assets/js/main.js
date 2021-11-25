function criaCalculadora() {
    return {
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay() {
            this.display.value = "";
        },

        backspace() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculation() {
            let conta = this.display.value;

            try {
                conta = eval(conta); //eval é uma função perigosa, que executa o argumento como JS e pode rodar scripts perigosos. Usada aqui pra fins didáticos.

                if (!conta) {
                    alert("Operação inválida!");
                    return;
                }

                this.display.value = String(conta);

            } catch (e) {
                alert("Operação inválida!");
                return;
            }
        },

        cliqueBotoes() {
            //this -> calculadora
            document.addEventListener("click", function (e) {
                const el = e.target;

                if (el.classList.contains("btn-num")) {
                    //this -> seria document (this é quem chama), mas o bind no fim da função força que seja calculadora
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains("btn-clear")) {
                    this.clearDisplay();
                }

                if (el.classList.contains("btn-del")) {
                    this.backspace();
                }

                if (el.classList.contains("btn-eq")) {
                    this.calculation();
                }

                this.display.focus(); //focar no display depois de processar botão

            }.bind(this)); //se fosse arrow function, não precisaria alterar o this com o bind, pois ele já seria o de quem criou o elemento
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        pressionaEnter(){
            this.display.addEventListener("keyup", e => {
                if(e.keyCode === 13){
                    this.calculation();
                }
            });
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();