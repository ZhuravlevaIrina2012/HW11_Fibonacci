const btn = document.getElementById('btn');
btn.addEventListener('click', printFibonacci);
const res = document.getElementById('p');
const input = document.getElementById('num');

const Fib = {
    [Symbol.iterator]() {
        const num = input.value;
        if (num < 2){
            input.value = '';
            alert('Wrong parameter');
            return null;
        }
        let count = 0;

        let n1 = 1;
        let n2 = 1;

        return {
            next() {
                let current = n2;
                n2 = n1;
                n1 = n1 + current;
                count++;
                if (count <= num) {
                    return {value: current, done: false};
                }else {
                    return {done: true};
                }
            },
        };
    }
};

function printFibonacci() {
    while (res.firstChild){
        res.removeChild(res.firstChild);
    }
    for (const n of Fib) {
        res.append(`${n} `);
    }
}
