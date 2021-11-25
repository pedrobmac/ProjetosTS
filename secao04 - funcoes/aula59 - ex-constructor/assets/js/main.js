function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.captureClick();
        this.captureEnter();
    };

    this.captureEnter = () => {
        document.addEventListener('keyup', e => e.keyCode === 13 ? this.calculate() : null);
    };

    this.captureClick = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.backspace();
            if (el.classList.contains('btn-eq')) this.calculate();
            this.display.focus();
        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;

    this.clear = () => this.display.value = "";

    this.backspace = () => this.display.value = this.display.value.slice(0, -1);

    this.calculate = () => {
        let operation = this.display.value;
        try {
            operation = eval(operation); //Danger: eval may execute malicious JS scripts. Used here for educational purposes.
            if (!operation) {
                alert('Invalid operation!');
                return;
            }
            this.display.value = String(operation);
        } catch (e) {
            alert('Invalid operation!');
            return;
        }
    };
}

const calculator = new Calculator();
calculator.start();