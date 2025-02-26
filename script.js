let count = 0;
/* full price needs to be fixed */
let fullPrice = 0.00;
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
    function submission(){
    submitButton.onclick = function(e){
        e.preventDefault();

        let successionSwitch = false;

        var firstName = document.getElementById('firstName').value.trim();
        var lastName = document.getElementById('lastName').value.trim();
        var fullNumber = document.getElementById('phone').value.trim();
        var address = document.getElementById('address').value.trim();
        errorPerson = document.getElementById('errorPerson');

        if(!firstName || !lastName || !fullNumber ||!address){
            errorPerson.textContent = 'Person Info is missing';
            successionSwitch = false;
        }
        else{
            errorPerson.textContent = '';
            successionSwitch = true;
        }

        let userInfo = {
            'firstName' : firstName,
            'lastName' : lastName,
            'phonenumber' : 0,
            'address' : address,
            'paidPrice' : 0,
        }

        let number = fullNumber.replace(/-/g, '');
        errorPhone = document.getElementById('errorPhone')

        /* phone validation */
        if (!isNaN(number) && number.length === 10) {
            successionSwitch = true;
            userInfo['phonenumber'] = fullNumber;
            errorPhone.textContent = '';
        } else {
            successionSwitch = false;
            errorPhone.textContent = 'Please enter a valid 10-digit phone number.';
        }


        let details = ['itemCode', 'name', 'quantity', 'totalPrice'];
        let infoAll = []
        errorBox = document.getElementById('errorEmpty')
        for(let i = 0; i < count + 1; i++){
            let infoList = {}

            listing = `ItemNumber${i}`

            let code = parseInt(document.getElementById(`code${i}`).value.trim());
            let name = document.getElementById(`name${i}`).value.trim();
            let quan = parseInt(document.getElementById(`quan${i}`).value.trim());
            let price = parseFloat(document.getElementById(`price${i}`).value.trim());
            
            let listofInfos = [code,name,quan,price]
            console.log(listofInfos);
            /* item boxes validation */
            if(!code || !name || !quan || !price){
                successionSwitch = false;
                errorBox.textContent = 'Item input is missing';
            }
            else {
                successionSwitch = true;
                errorBox.textContent = '';
            }
            for(let j = 0; j < 4; j++){
                infoList[details[j]] = listofInfos[j];
            }
        
            infoAll.push({ [listing] : infoList})
           

        }
        let info = { 
            infoAll
        }

        /* fix price */
        userInfo['paidPrice'] = fullPrice;

        if (successionSwitch) {
            fetch('/info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            })
            .then(response => response.json())
            .then(() => {
                console.log('complete');
            });
        } else {
           alert('Error has occured');
        }
    }
}

submission(); 

});
function appendItemDetails() {
    count += 1;

    const div = document.createElement('div');
    const itemh2 = document.createElement('h2');
    itemh2.textContent = `Item ${count + 1}`;
    div.id = `itemsDetail${count}`
    const space = document.getElementById('space');
    

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
    div.appendChild(itemh2);
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