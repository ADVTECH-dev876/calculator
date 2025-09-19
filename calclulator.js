<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bootstrap Calculator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background: #f4f6fa;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        .calculator {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.14);
            padding: 35px 24px 24px 24px;
            max-width: 330px;
            width: 100%;
        }
        .calculator .form-control {
            font-size: 2.2rem;
            height: 60px;
            margin-bottom: 20px;
            text-align: right;
            border-radius: 8px;
        }
        .calculator .btn {
            font-size: 1.5rem;
            padding: 18px 0;
            border-radius: 8px;
            margin: 4px 0;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="form-control" id="display" disabled>
        <div class="row gx-2 gy-2">
            <div class="col-3">
                <button class="btn btn-danger w-100" onclick="clearDisplay()">C</button>
            </div>
            <div class="col-3">
                <button class="btn btn-warning w-100" onclick="appendOperation('/')">÷</button>
            </div>
            <div class="col-3">
                <button class="btn btn-warning w-100" onclick="appendOperation('*')">×</button>
            </div>
            <div class="col-3">
                <button class="btn btn-warning w-100" onclick="appendOperation('-')">−</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('7')">7</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('8')">8</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('9')">9</button>
            </div>
            <div class="col-3">
                <button class="btn btn-warning w-100" onclick="appendOperation('+')">+</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('4')">4</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('5')">5</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('6')">6</button>
            </div>
            <div class="col-3">
                <button class="btn btn-success w-100" style="height:112px" onclick="calculate()">=</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('1')">1</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('2')">2</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('3')">3</button>
            </div>
            <div class="col-3">
                <button class="btn btn-light w-100" onclick="appendNumber('0')">0</button>
            </div>
        </div>
    </div>
    <script>
        let currentInput = '';
        let currentOperation = '';
        let previousInput = '';

        function appendNumber(number) {
            currentInput += number;
            document.getElementById('display').value = previousInput + ' ' + currentOperation + ' ' + currentInput;
        }
        function appendOperation(operation) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            currentOperation = operation;
            previousInput = currentInput;
            currentInput = '';
            document.getElementById('display').value = previousInput + ' ' + currentOperation;
        }
        function calculate() {
            if (previousInput === '' || currentInput === '') return;
            let result;
            let prev = parseFloat(previousInput);
            let current = parseFloat(currentInput);
            switch (currentOperation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert("Cannot divide by zero");
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }
            currentInput = result.toString();
            currentOperation = '';
            previousInput = '';
            document.getElementById('display').value = currentInput;
        }
        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            currentOperation = '';
            document.getElementById('display').value = '';
        }
    </script>
</body>
</html>
