function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposite = function(amount){
    this.balance += amount;
};
BankAccount.prototype.withdrow = function(amount){
    this.balance -= amount;
};

// const rakeshAccount = new BankAccount('rakesh',2000);
// const rohanAccount = new BankAccount('rohan');

// rakeshAccount.deposite(5000);
// rohanAccount.deposite(5000);

// rakeshAccount.withdrow(1000);
// rohanAccount.withdrow(1000);

// console.log(rakeshAccount,rohanAccount);

function CurrentAccount(customerName, balance=0){      /////current account/////////
    BankAccount.call(this, customerName,balance);
    this.transactionLimit = 50000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan =function(amount){
    console.log('Taking a Bussiness Loan:'+amount);
}

// const rakeshAccount = new CurrentAccount('rakesh',3000);
// const rohanAccount = new CurrentAccount('rohan');


// rakeshAccount.deposite(5000);
// rakeshAccount.withdrow(1000);
// rohanAccount.takeBusinessLoan(10000);

// console.log(rakeshAccount,rohanAccount);

function SavingAccount(customerName, balance=0){      /////saving account/////////
    BankAccount.call(this, customerName,balance);
    this.transactionLimit = 10000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takepersonalLoan =function(amount){
    console.log('Taking a Bussiness Loan:'+amount);
}

// const rakeshAccount = new SavingAccount('rakesh',500);
// const rohanAccount = new SavingAccount('rohan');

// rakeshAccount.deposite(500);
// rakeshAccount.withdrow(100);
// rohanAccount.takepersonalLoan(90000);

// console.log(rakeshAccount,rohanAccount);

//************* */ for classes inheritance*******************************////


class BankAccount{                    // const BankAccount = class{...}//// this is also right/////class using inharitance////
    customerName;
    accountNumber;
    balance;

     constructor(customerName, balance=0){
            this.customerName = customerName;
            this.accountNumber = Date.now();
            this.balance = balance;
        }

        deposite(amount){
            this.balance += amount;
        }
        withdrow(amount){
            this.balance -= amount;
        }
}
// Current account using class  with inheritance*****************////////
class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance=0){
        super(customerName,balance);
    }
  takeBusinessLoan (amount){
            console.log('Taking a Bussiness Loan:'+amount);
        }
}
const rakeshAccount = new CurrentAccount('rakesh',3000);
const rohanAccount = new CurrentAccount('rohan');

rakeshAccount.deposite(400);
rakeshAccount.withdrow(100);
rohanAccount.takeBusinessLoan(10000);
console.log(rakeshAccount,rohanAccount);


// saving account using class  with inheritance*****************////////
// class SavingAccount extends BankAccount{
//     transactionLimit = 50000;

//     constructor(customerName, balance=0){
//         super(customerName,balance);
//     }
//     takepersonalLoan (amount){
//             console.log('Taking a  personalLoan:'+amount);
//         }
// }
// const rakeshAccount = new SavingAccount('rakesh',600);
// const rohanAccount = new SavingAccount('rohan');

// rakeshAccount.deposite(400);
// rakeshAccount.withdrow(100);
// rakeshAccount.takepersonalLoan(90000);

// console.log(rakeshAccount,rohanAccount);

