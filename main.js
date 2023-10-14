let buttonValue = document.querySelectorAll('.button');
let screenNumber = document.querySelector('.calculator-number');
let arrayNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let calcul = document.querySelector('.calculator-calcul');

let firstNumber;


buttonValue.forEach(element => {
    element.addEventListener('click', () => {
        if (screenNumber.textContent.charAt(0) === '0') {
            screenNumber.textContent = '';
        }
        

        if (arrayNumber.some(number => element.textContent.includes(number))) {
            screenNumber.textContent += element.textContent.trim().replace(/\s+/, '');
            return;
        } else if (element.textContent.trim() === '<-') {
            // Ici nous voulons effacer le dernier chiffre de screenNumber;
            console.log("ON EFFACE");
            screenNumber.innerHTML = '0';
        } else if (element.textContent.trim() === '=') {
            let operation = calcul.textContent.trim().replace(/\s+/g, '') + screenNumber.textContent;
            console.log("RESULT", operation);
            screenNumber.innerHTML = eval(operation);
            calcul.innerHTML = '';
        } else if (element.textContent.trim() === 'RESET') {
            screenNumber.innerHTML = '0';
            calcul.innerHTML = '';
        } else {
            screenNumber.textContent += element.textContent.trim().replace(/\s+/, '');
            firstNumber = screenNumber.textContent;
            screenNumber.innerHTML = '0';
            calcul.textContent += firstNumber;
            console.log("Le calcul final", calcul.textContent.trim().replace(/\s+/g, ''));
        }

    })

});