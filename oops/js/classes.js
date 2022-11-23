
 class BankAccount{                    // const BankAccount = class{...}//// this is also right/////
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
const rakeshAccount = new BankAccount('rakesh',2000);
const rohanAccount = new BankAccount('rohan');

rakeshAccount.deposite(6000);
rohanAccount.deposite(6000);

rakeshAccount.withdrow(1000);
rohanAccount.withdrow(1000);


console.log(rakeshAccount,rohanAccount);

