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
    // console.log(BankAccount.prototype);

const rakeshAccount = new BankAccount('rakesh',2000);
const rohanAccount = new BankAccount('rohan');

rakeshAccount.deposite(5000);
rohanAccount.deposite(5000);

rakeshAccount.withdrow(1000);
rohanAccount.withdrow(1000);



console.log(rakeshAccount,rohanAccount);