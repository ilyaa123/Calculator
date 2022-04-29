const calcNum = document.querySelectorAll('.calc-num-button');
const calcInp = document.querySelector('.calc_inp');
const calcOpr = document.querySelectorAll('.calc-opr');
const btnNum = document.querySelector('.btn-num');
const btnResult = document.querySelector('.btn-result');
const btnAC = document.querySelector('.btn-AC');

let value = '';

const getNumber = () => {
    let result = eval(value);
    value = result;
    
    btnResult.addEventListener('click', () => {
        calcInp.textContent = result;
    });

    btnAC.addEventListener('click', () => {
        calcInp.textContent = '_';
        value = '';
        result = undefined;
    });

}

const addText = (num) => {
    if (calcInp.textContent === '_'){
        calcInp.textContent = '';
        calcInp.append(num);
        value += num;
        getNumber()
    } else {
        calcInp.append(num);
        value += num;
        getNumber()
    }
};

const init = () => {
    calcNum.forEach(element => {
        element.addEventListener('click', () => {
            const number = element.dataset.num;
            addText(number);
        })
    });
    calcOpr.forEach(element => {
        element.addEventListener('click', () => {
            const opr = element.dataset.opr;
            addText(opr)
        });
    });
    btnNum.addEventListener('click', (event) => {
        const element = event.target
        const number = element.dataset.v;
        addText(number)
    });
}

init();