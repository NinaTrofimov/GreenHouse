let count = 0;

document.addEventListener('click', function(e) {
    e.preventDefault()
    const add = document.getElementById('add');
    const remove = document.getElementById('remove');
    const submitButton = document.getElementById('subButton');
    
    add.onclick = function() {
        appendItemDetails(); 
        console.log(count);
    }

    remove.onclick = function(){
        removeItemDetails();
    }

    submitButton.onclick = function (e) {
        e.preventDefault();
    
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const number = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
    
        const userInfo = {
            firstName,
            lastName,
            number,
            address,
            paidPrice: 0
        };
    
        const details = ['itemCode', 'name', 'quantity', 'totalPrice', 'gallons'];
        const infoAll = [];
        let fullPrice = 0;
    
        for (let i = 0; i < count + 1; i++) {
            const infoList = {};
    
            const listing = `ItemNumber${i}`;
            const code = document.getElementById(`code${i}`).value;
            const name = document.getElementById(`name${i}`).value;
            const quan = document.getElementById(`quan${i}`).value;
            const price = parseFloat(document.getElementById(`price${i}`).value) || 0;
            const gallons = document.getElementById(`gal${i}`).value;
    
            fullPrice += price;
    
            const listofInfos = [code, name, quan, price, gallons];
            for (let j = 0; j < details.length; j++) {
                infoList[details[j]] = listofInfos[j];
            }
    
            infoAll.push({ [listing]: infoList });
        }
    
        userInfo.paidPrice = fullPrice;
    
        if (firstName && lastName && number && address && infoAll.length > 0) {
            window.location.href = 'locationforward.html';
        } else {
            alert('Please fill in all required fields.');
        }
    };
    


});
function appendItemDetails() {
    count += 1;

    const div = document.createElement('div');
    div.id = `itemsDetail${count}`
    const space = document.getElementById('space');
    const br = document.createElement('br');

    const itemCodeLabel = document.createElement("label");
    itemCodeLabel.textContent = " Item Code : ";
    const itemCodeInput = document.createElement("input");
    itemCodeInput.id = `code${count}`;
    itemCodeInput.type = "text";
    itemCodeInput.required = true;

    const itemNameLabel = document.createElement("label");
    itemNameLabel.textContent = " Item Name : ";
    const itemNameInput = document.createElement("input");
    itemNameInput.id = `name${count}`;
    itemNameInput.type = "text";
    itemNameInput.required = true;

    const quantityLabel = document.createElement("label");
    quantityLabel.textContent = " Quantity : ";
    const quantityInput = document.createElement("input");
    quantityInput.id = `quan${count}`;
    quantityInput.type = "text";
    quantityInput.required = true;

    const priceLabel = document.createElement("label");
    priceLabel.textContent = " Total Price : ";
    const priceInput = document.createElement("input");
    priceInput.id = `price${count}`;
    priceInput.type = "text";
    priceInput.required = true;

    const gallonsLabel = document.createElement("label");
    gallonsLabel.textContent = " Size `Gallons` : ";
    const gallonsInput = document.createElement("input");
    gallonsInput.id = `gal${count}`;
    gallonsInput.type = "text";
    gallonsInput.required = true;

    div.appendChild(br);
    itemCodeLabel.appendChild(itemCodeInput);
    itemNameLabel.appendChild(itemNameInput);
    quantityLabel.appendChild(quantityInput);
    priceLabel.appendChild(priceInput);
    gallonsLabel.appendChild(gallonsInput);

    div.appendChild(itemCodeLabel);
    div.appendChild(document.createElement('br'));
    div.appendChild(itemNameLabel);
    div.appendChild(document.createElement('br'));
    div.appendChild(quantityLabel);
    div.appendChild(document.createElement('br'));
    div.appendChild(priceLabel);
    div.appendChild(document.createElement('br'));
    div.appendChild(gallonsLabel);
    space.append(div);
}

function removeItemDetails(){
    const previousDiv = document.getElementById(`itemsDetail${count}`);
    if(previousDiv.lastElementChild){
        previousDiv.remove(previousDiv.lastElementChild);
    }
    count -= 1;
}