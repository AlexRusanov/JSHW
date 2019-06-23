const priceInput = document.querySelector('#priceInput');

priceInput.onfocus = (event) => {
    event.target.style.cssText = "border: 5px green solid;";
};

priceInput.onblur = (event) => {
    event.target.style.cssText = "";
    if (event.target.value < 0) {
        event.target.style.cssText = "border: 5px red solid;";

        const correctPrice = document.createElement('span');
        correctPrice.style.display = 'block';
        correctPrice.innerText = 'Please enter correct price';

        event.target.after(correctPrice);

        setTimeout(() => {
            correctPrice.remove();
        }, 3000);
    } else {
        if (event.target.value !== "") {
            event.target.style.cssText = "color: green;";

            const currentPrice = document.createElement('span');
            currentPrice.innerText = `Текущая цена: ${event.target.value}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = "X";
            deleteBtn.style.borderRadius = "50%";

            let currentPriceWrapper = document.createElement('div');
            currentPriceWrapper.appendChild(currentPrice);
            currentPriceWrapper.appendChild(deleteBtn);

            const inputLabel = document.querySelector('label');
            document.body.insertBefore(currentPriceWrapper, inputLabel);

            deleteBtn.onclick = (e) => {
                deleteBtn.parentNode.remove();
                event.target.style.border = "";
                event.target.style.color = "black";
                event.target.value = "";
            }
        }
    }
};