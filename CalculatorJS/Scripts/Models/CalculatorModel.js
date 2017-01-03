calculatorModel = {
    display: "0",
    shouldClearDisplay: false,

    firstOperand: "",
    secondOperand: "",
    result: "",

    operation: "",
    lastOperation: "",

    isDisabled: false,

    clear: function () {
        this.display = "0";

        this.shouldClearDisplay = false;
        this.isDisabled = false;

        this.result = "";
        this.lastOperation = "";

        this.reset();
    },

    reset: function () {
        this.firstOperand = "";
        this.secondOperand = "";
        this.operation = "";
    },

    processNumber: function (param) {
        if (this.display == "0"
            || this.shouldClearDisplay) {
            this.display = param;
        }
        else {
            this.display = this.display.toString() + param;
        }
        this.shouldClearDisplay = false;
    },

    processModifier: function(param) {
        switch (param) {
            case "+/-":
                if (this.display === "0") {
                    break;
                }
                else if (this.display.toString().length == 1 || this.display.indexOf("-") === -1) {
                    this.display = "-" + this.display.toString();
                }
                else {
                    this.display = this.display.toString().substr(1, this.display.toString().length);
                }
                this.shouldClearDisplay = false;
                break;

            case ".":
                var c = '.';
                if (this.display.toString().length == 1 || this.display.indexOf(c) === -1) {
                    this.display = this.display + c;
                }
                break;
        }
    },

    processOperation: function (param) {
        if (this.firstOperand === ""
            || (this.shouldClearDisplay && this.lastOperation !== "=")) {
            this.firstOperand = this.display;
        }
        else {
            this.secondOperand = this.display;
            this.operation = this.lastOperation;

            this.calculate();

            this.firstOperand = this.result;
        }

        this.lastOperation = param;
        this.shouldClearDisplay = true;

        if (param === "=") {
            this.reset();
        }
        else if (param === "sqrt") {
            this.firstOperand = this.display;
            this.operation = param;

            this.calculate();

            this.lastOperation = param;
            this.firstOperand = "";
            this.shouldClearDisplay = true;
        }
    },

    calculate: function () {

        switch (this.operation) {
            case "+":
                this.result = parseFloat(this.firstOperand) + parseFloat(this.secondOperand);
                break;

            case "-":
                this.result = parseFloat(this.firstOperand) - parseFloat(this.secondOperand);
                break;

            case "*":
                this.result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand);
                break;

            case "/":
                this.result = parseFloat(this.firstOperand) / parseFloat(this.secondOperand);
                break;

            case "sqrt":
                this.result = Math.sqrt(parseFloat(this.firstOperand));
                break;

            case "%":
                this.result = parseFloat(this.firstOperand) * parseFloat(this.secondOperand) / 100;
                break;
        }

        this.display = this.result;

        if (isNaN(this.result) || Math.abs(this.result) == Infinity) {
            this.isDisabled = true;
            this.display = "ERR";
        }
    }
};