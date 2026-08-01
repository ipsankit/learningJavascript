class BankAccount {
    constructor(accountHolder,balance=0) {
            this.accountHolder=accountHolder;
            this.balance=balance;
    }
    deposit(amount){
        this.balance = this.balance+ amount;
        console.log("Deposited:",amount+".","New balance:",this.balance);
    }
    withdraw(amount){
        if (amount>this.balance){
            console.log("Cannot withdraw",amount,".Insufficient balance!");
            return;
        } 
        this.balance = this.balance - amount;
        console.log("Withdrew:",amount,"New Balace:",this.balance);
    } 
    checkBalance() {
        console.log(this.accountHolder,"balance:",this.balance);
    }
}

const account = new BankAccount("Alice",100);
account.checkBalance();
account.deposit(50);
account.withdraw(30);
account.withdraw(1000);
