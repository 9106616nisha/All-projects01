class BankAccount{                    // const BankAccount = class{...}//// this is also right/////
    customerName;
    accountNumber;
    #balance;

     constructor(customerName, balance=0){
            this.customerName = customerName;
            this.accountNumber = Date.now();
            this.#balance = balance;
        }

        deposite(amount){
            this.#balance += amount;
        }
        withdrow(amount){
            this.#balance -= amount;
        }
        set balance(amount){
            if(isNaN(amount)){
                throw new Error('Amount is not a valid input');
            }
            this.#balance = amount;
        }
        get balance () {
        return this.#balance;
        }
        
        #calculateInterst(amount) {
            console.log('Calculating interst');
        }
        takeBusinessLoan (amount){
            this.calculateInterst(amount);
            console.log('Taking a Bussiness Loan:'+amount);
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

const rakeshAccount = new CurrentAccount('rakesh',2000);
rakeshAccount .takeBusinessLoan(9000);

console.log(rakeshAccount);
