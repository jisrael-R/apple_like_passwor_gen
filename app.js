//Password generator!

function init(arr) {
    const numChk = document.getElementById('num').checked;
    const upChk = document.getElementById('upper').checked;
    const loChk = document.getElementById('lower').checked;
    let result = '';
    let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let characterTwo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    function fomular(item) {
        result += item.charAt(Math.floor(Math.random() * item.length));
    }

    for (let i = 0; i < arr; i++) {
        const low = characters.slice(26, 52);
        const num = characters.slice(52, 62);
        const up = characters.slice(0, 26);
        const lowUp = characters.slice(0, 52);
        const lowNum = characters.slice(26, 62);
        const upNum = characterTwo.slice(0, 36);
        const allChar = characters.slice(0, 62);

        if (allChar && upChk && loChk && numChk) {
            fomular(allChar);
        } else if (lowUp && upChk && loChk) {
            fomular(lowUp);
        } else if (upNum && upChk && numChk) {
            fomular(upNum);
        } else if (lowNum && loChk && numChk) {
            fomular(lowNum);
        } else if (low && loChk) {
            fomular(low);
        } else if (up && upChk) {
            fomular(up);
        } else if (num && numChk) {
            fomular(num);
        }
    }

    return result;
}

const subBtn = document
    .querySelector('.btn')
    .addEventListener('click', function () {
        const text = document.querySelector('.display');
        const pwSize = document.querySelector('#size').value;
        if (pwSize <= 3) {
            return alert('you must insert 4 digits');
        } else if (pwSize >= 128) {
            alert('128 is the limit');
        }

        console.log(
            init(`${pwSize}`) +
                '-' +
                init(`${pwSize}`) +
                '-' +
                init(`${pwSize}`)
        );
        text.textContent =
            init(`${pwSize}`) +
            ' - ' +
            init(`${pwSize}`) +
            ' - ' +
            init(`${pwSize}`);
    });