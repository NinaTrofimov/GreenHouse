let count = 0;

document.addEventListener('click', function() {
    const add = document.getElementById('add');
    const remove = document.getElementById('remove');
    const submitButton = document.getElementById('subButton');
    
    add.onclick = function() {
        appendItemDetails(); 
    }

    remove.onclick = function(){
        removeItemDetails();
    }

    submitButton.onclick = function(){
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var number = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        let userInfo = {
            'firstName' : firstName,
            'lastName' : lastName,
            'number' : number,
            'address' : address
        }

        let details = ['itemCode', 'name', 'quantity', 'price'];

        let info = { 

        }
        for(let i = 0; i < count; i++){

            let infoList = {}

            listing = `ItemNumber${count}`

            let code = document.getElementById(`code${count}`);
            let name = document.getElementById(`name${count}`);
            let quan = document.getElementById(`quan${count}`);
            let price = document.getElementById(`price${count}`);

            let listofInfos = [code,name,quan,price]
            
            for(let j = 0; j < 4; j++){
                let information = listofInfos[j]

                infoList[details[j]] = information;

            }
            
            info.push({[listing] : infoList})

        }
        
    }


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

    div.appendChild(br);
    itemCodeLabel.appendChild(itemCodeInput);
    itemNameLabel.appendChild(itemNameInput);
    quantityLabel.appendChild(quantityInput);
    priceLabel.appendChild(priceInput);

    div.appendChild(itemCodeLabel);
    div.appendChild(itemNameLabel);
    div.appendChild(quantityLabel);
    div.appendChild(priceLabel);
    space.append(div);
}

function removeItemDetails(){
    const previousDiv = document.getElementById(`itemsDetail${count}`);
    if(previousDiv.lastElementChild){
        previousDiv.remove(previousDiv.lastElementChild);
    }
    count -= 1;
}