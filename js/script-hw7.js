const countdownTimer = () => {
    let i = 10;
    let timerId = setInterval(() => {
        console.log(i);
        if (i === 1) clearInterval(timerId);
        i--;
    }, 1000);
};

const removeListAfter10Seconds = (list) => {
    setTimeout(() => {
        list.remove();
    }, 10000);
};

const viewArrayAsList = (array) => {
    const list = document.createElement('ul');
    document.body.insertBefore(list, document.querySelector('script'));
    const listContent = array.map((elem) => {
        if (Array.isArray(elem)) {
            let resElem = `<ul>`;
            for (let el of elem) {
                resElem += `<li>${el}</li>`;
            }
            resElem +=`</ul>`;
            return resElem;
        } else if(typeof elem === "object" && elem !== null) {
            let resElem = `<ul>`;
            for (let key in elem) {
                resElem += `<li>${key}:${elem[key]}</li>`;
            }
            resElem +=`</ul>`;
            return resElem;
        } else {
            return `<li>${elem}</li>`;
        }
    });
    for (let el of listContent) {
        list.innerHTML += el;
    }

    countdownTimer();

    removeListAfter10Seconds(list);
};

// viewArrayAsList(['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']);
// viewArrayAsList(['1', '2', '3', 'sea', 'user', 23]);
viewArrayAsList(['Lviv', [1, 2, 3], '2', {name: 'Peter', age: 20}, 'user', 23, null]);