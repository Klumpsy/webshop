const priceItem = document.querySelectorAll(".itemPrice")

class Item { 
    constructor(price, name, sale) { 
    this.price = price; 
    this.name = name; 
    this.sale = sale; 
  };
};

//all the items created from constructor 
const item1 = new Item(10, "Kamerplant", false); 
const item2 = new Item(11, "Sun Flowers", true); 
const item3 = new Item(8, "Kleine plant", false); 
const item4 = new Item(760, "Fiets", false); 
const item5 = new Item(80, "Tapijt", false); 
const item6 = new Item(199, "Stoel", false); 
const item7 = new Item(7, "Bloemen", true); 
const item8 = new Item(450, "Laptop", false); 

//item objects
let itemsTotal = [item1, item2, item3, item4, item5, item6, item7, item8];

//discount array
const discount = [0.10, 0.20, 0.50]; 

//Check for discount (change [x] in discount[x]) to change discount % from discount array)
let counter = 0; 
priceItem.forEach(element => { 
    if (itemsTotal[counter].sale === true){
        element.innerHTML = Math.floor((itemsTotal[counter].price - 
            (itemsTotal[counter].price * discount[0])));
        element.classList.add("onSale"); 
    let saleIcon = document.createElement("DIV"); 
        saleIcon.classList.add("saleIcon");
        element.appendChild(saleIcon); 
        saleIcon.innerHTML = "On Sale"; 
            
    } else {
        element.innerHTML = itemsTotal[counter].price;
    };
    counter++
}); 

//function for adding item to shoppingcard
const shoppingCard = document.querySelector(".shoppingCard"); 
const buttons = document.querySelectorAll(".getItem");
const total = document.querySelector("#addedItems"); 
let cashout = 0; 

for (let i = 0; i < buttons.length; i++) { 

    buttons[i].addEventListener("click", () => { 
    let newItem = document.createElement("DIV"); 
    let showTotal = document.createElement("DIV"); 
    let priceShow = document.createElement("DIV");
    let newBtn = document.createElement("BUTTON"); 

    amount = Number(prompt("Hoe vaak wilt u dit product toevoegen?"));

        if (Number.isNaN(amount) || amount === 0) { 
            if (Number.isNaN(amount)) { 
                alert("Sorry, gebruik alleen getallen"); 
            };
            if (amount === 0) { 
                alert("Terug naar de winkel"); 
            };
        } else { 
            cashout = cashout + (itemsTotal[i].price * amount);
        
            newItem.innerHTML = `${itemsTotal[i].name} | 
            ${amount}x | Per stuk: €${itemsTotal[i].price}`; 
            priceShow.innerHTML = `${itemsTotal[i].price * amount}`
            showTotal.innerHTML = `Totaal: €`; 
            showTotal.classList.add("totalDiv");

            newItem.classList.add("cardItem");
            newBtn.classList.add("removeBtn");
            newBtn.innerText = "X";
            newBtn.onclick = function(e) { 
                cashout = cashout - Number(e.target.previousElementSibling.innerHTML);
                total.innerHTML = cashout;  
                e.target.parentNode.remove();

            };
            shoppingCard.appendChild(newItem);
            newItem.appendChild(showTotal); 
            newItem.appendChild(priceShow); 
            newItem.appendChild(newBtn); 
            total.innerHTML = cashout; 
        };
    });
};

//modal show/hide
const checkOutScreen = document.querySelector(".checkOutButton")
const leaveModal = document.querySelector(".modalButton"); 
const modal = document.querySelector(".modalHide"); 

checkOutScreen.addEventListener("click", () => { 
    modal.classList.toggle("modalHide");
});

leaveModal.addEventListener("click", () => { 
    modal.classList.toggle("modalHide");
});