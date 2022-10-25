const tShirtPrice = 200;
const hoodiePrice = 400;
const capPrice = 100;

let totalAmount = 0;

function sum (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function updateTotalAmount(addCost) {
    totalAmount = sum (totalAmount, addCost)
}


let answer1 = Number(prompt("Welcome to Aerosmith's store \n 1- Go to store \n 4- Exit"))

while (answer1 === 1) {
    let answer2 = Number(prompt(" 1- Add products \n 2- Total \n 4- Exit"))
    if (answer2 === 1) {
        let answer3 = Number(prompt("Choose a product: \n 1- T-Shirt: 200 USD \n 2- Hoodie: 400 USD \n 3- Cap: 100 USD \n 4- Total"));
        switch (answer3) {
            //add T-Shirts
            case 1:
                let cant1 = Number(prompt("¿How many T-Shirts?"));
                updateTotalAmount(tShirtPrice * cant1);
                break;

            //add Hoodie
            case 2:
                let cant2 = Number(prompt("¿How many hoodie?"));
                updateTotalAmount(hoodiePrice * cant2);
                break;

            //add Caps
            case 3:
                let cant3 = Number(prompt("¿How many caps?"));
                updateTotalAmount(capPrice * cant3);
                break;
            // total
            case 4:
                if (totalAmount >= 400) {
                    let discount = sub (totalAmount, multiply (totalAmount, 0.05));
                    alert("Discounted value: " + discount);
                } else {
                    alert("Total amount: " + totalAmount);
                }
                break;

            default:
                alert("Wrong option");
                break;
        }
    }
    if (answer2 === 2) {

        if (totalAmount >= 1000) {
            let discount = sub (totalAmount, multiply (totalAmount, 0.15));
            alert("Discounted value:  " + discount);
        } else {
            alert("Total amount: " + totalAmount);
        }

    }
}
