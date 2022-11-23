
// ****************Object constructer function**************//
function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // deposite function
    this.deposite = function(amount){
        this.balance += amount;
    };
    
    // withdrow function with errow function
    this.withdrow = (amount) =>{
        this.balance -= amount;
    };
}

const rakeshAccount = new BankAccount('rakesh',2000);
const rohanAccount = new BankAccount('rohan');
// // rakeshAccount.balance = 3000;


rakeshAccount.deposite(5000);
rohanAccount.deposite(5000);

rakeshAccount.withdrow(1000);
rohanAccount.withdrow(1000);



console.log(rakeshAccount,rohanAccount);

// ***********dom menupulation****************************
// const formdetail = document.querySelector('#accountForm');
// const customerName = document.querySelector('#customerName');
// const balance = document.querySelector('#Balance');

// formdetail.addEventListener('submit',(e) => {
//     e.preventDefault();
//     console.log(customerName.value ,balance.value);
// });

