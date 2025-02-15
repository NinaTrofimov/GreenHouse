let count = 0;
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
    
    submitButton.onclick = function(e){
        e.preventDefault();
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var fullNumber = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        let userInfo = {
            'firstName' : firstName,
            'lastName' : lastName,
            'number' : 0,
            'address' : address,
            'paidPrice' : 0
        }

        let number = fullNumber.replace('/-/g', "");

        if(typeof number === "number"&& !isNaN(value) && number.length == 10){
            userInfo['number'] = fullNumber
        }
        else{
            errorPhone = document.getElementById('errorPhone')
            errorPhone.textContent = "Phone number is input incorrectly."
        }

              
        for(let i = 0; i < count + 1; i++){
            let infoList = {}

            listing = `ItemNumber${i}`

            let code = parseInt(document.getElementById(`code${i}`).value);
            let name = document.getElementById(`name${i}`).value;
            let quan = parseInt(document.getElementById(`quan${i}`).value);
            let price = parseFloat(document.getElementById(`price${i}`).value);
            
            let listofInfos = [code,name,quan,price]
            
            for(let j = 0; j < 4; j++){
                infoList[details[j]] = listofInfos[j];
            }
            
            infoAll.push({ [listing] : infoList})

        }
        let info = { 
            infoAll
        }
        userInfo['paidPrice'] = fullPrice;

        console.log(userInfo,info)
        if(userInfo != null && info != null){
        /*window.location.href = 'locationforward.html'*/
        console.log('complete')}
        else{

        }
    }
    
    


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