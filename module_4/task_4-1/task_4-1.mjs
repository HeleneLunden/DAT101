"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create a constant object to hold account types with these properties: 
Account type:
Normal: "Brukskonto"
Saving: "Sparekonto"
Credit: "Kreditkonto"
Pension: "Pensionskonto"
print all thesse types on a single comma separated line:
---------Task 1 --------
Brukskonto, Sparekonto, Kreditkonto, Pesionskonto
*/

const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensjonskonto"
  };
  
  printOut("Brukskonto, Sparekonto, Kreditkonto, Pensjonskonto");
  printOut(newLine);
  

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* ● Part 2: Basic Bank Account (15 points)
Create a bank account class with this structure:
TAccount
Private type
------------
Public toString()
Public setType(aType)
Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".
Print something similar to this:
--------- task 2 --------
myAccount = Brukskonto
Account is changed from Brukskonto to Sparekonto
myAccount = Sparekonto
*/

class TAccount {
    #type;
  
    constructor(type) {
      this.#type = type;
    }
  
    toString() {
      return this.#type;
    }
  
    setType(aType) {
      printOut(`Account is changed from ${this.#type} to ${aType}`);
      this.#type = aType;
    }
  }
  
  const myAccount = new TAccount(AccountType.Normal);
  printOut(`myAccount = ${myAccount.toString()}`);
  myAccount.setType(AccountType.Saving);
  printOut(`myAccount = ${myAccount.toString()}`);
  printOut(newLine);
  

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ● Part 3: Account Balance and Transactions (15 points)
Expand the account class to this structure:
TAccount
Private type 
Private balance
---------------
Public toString()
Public setType(aType)
Public getBalance()
Public deposit(aAmount)
Public withdraw(aAmount)

"getBalance" should return the account balance. "deposit" should increase the balance by a given amount
and print the amount and the new balance. "withdraw" should decrease the balance by a given amount
and print the amount and the new balance.
Print something similar to this:
------ Task 3 --------
Deposit of 100, new balance is 100
Withdrawal of 25, new balance is 75
My account balance is 75
*/

class TAccountNew {

    constructor(type, balance = 0) {
        this.type = type;     
        this.balance = balance;  
    }

    toString() {
        return this.type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        printOut("Deposit of " + amount + ", new balance is " + this.balance);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
        } else {
            this.balance -= amount;
            printOut("Withdrawal of " + amount + ", new balance is " + this.balance);
        }
    }
}

const myAccount3 = new TAccountNew("Normal", 0);

printOut("myAccount = " + myAccount3.toString());

myAccount3.deposit(100);

myAccount3.withdraw(25);

printOut("myAccount balance is " + myAccount3.getBalance());
printOut(newLine);
  

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Expand the account with a private counter that counts the number of withdrawals like this:
TAccount
Private type 
Private balance
Private withdrawCount
---------------
Public toString()
Public setType(aType)
Public getBalance()
Public deposit(aAmount)
Public withdraw(aAmount)

Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed.
Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
"setType" if necessary.
Attempt to print something like this:

------ Task 4 -----------
Deposit of 25, new balance is 100
Withdrawal of 30, new balance is 70
Withdrawal of 30, new balance is 40
Withdrawal of 30, new balance is 10
You can't withdraw from a sparekonto more than three times!
Account is changed from sparekonto to pensionskonto
You can´t withdraw from pensionskonto!
Account is changed from pentionskonto to sparekonto
Withdrawal of 10, new balance is 0
*/

class TAccount4 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0; 
    }

  
    toString() {
        return this.type;
    }

    
    setType(newType) {
       printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0; 
    }


    getBalance() {
        return this.balance;
    }

   
    deposit(amount) {
        this.balance += amount;
        printOut("Deposit of " + amount + ", new balance is " + this.balance);
        this.withdrawCount = 0; 
    }

    
    withdraw(amount) {
        switch (this.type) {
            case "Saving":
                if (this.withdrawCount >= 3) {
                    printOut("You can't withdraw from a Saving account more than three times!");
                    return;
                }
                break;
            case "Pension":
                printOut("You can't withdraw from a Pension account!");
                return;
        }

        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
        } else {
            this.balance -= amount;
            this.withdrawCount++; 
            printOut("Withdrawal of " + amount + ", new balance is " + this.balance);
        }
    }
}


const myAccount4 = new TAccount4("Saving", 0);

myAccount4.deposit(25);      
myAccount4.deposit(75);      
myAccount4.withdraw(30);    
myAccount4.withdraw(30);     
myAccount4.withdraw(30);      
myAccount4.withdraw(30);     

myAccount4.setType("Pension"); 
myAccount4.withdraw(10);       

myAccount4.setType("Saving");  
myAccount4.withdraw(10);      

printOut(newLine);
  

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*Part 5: Currency Handling (15 points)
Create a new static object as follows:
CurrencyTypes:

NOK: {value: 1.0000, name: "Norske kroner", denomination: "kr"}
EUR: {value: 0.0985, name: "Europeiske euro", denomination: "€"}
USD: {value: 0.1091, name: "United States dollar", denomination: "$"}
GBP: {value: 0.0847, name: "Pound sterling", denomination: "£"}
INR: {value: 7.8389, name: "Indiske rupee", denomination: "₹"}
AUD: {value: 0.1581, name: "Australske dollar", denomination: "A$"}
PHP: {value: 6.5189, name: "Filippinske peso", denomination: "₱"}
SEK: {value: 0.0580, name: "Svenske kroner", denomination: "kr"}
CAD: {value: 0.1435, name: "Canadiske dollar", denomination: "C$"}
THB: {value: 3.3289, name: "Thai baht", denomination: "฿"}

Add a private currency type to the account class and set the default value to "NOK".
Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries to switch to 
a new currency of the same type as the account already has, the method should do nothing and just return. The new structure 
will be like this:

TAccount
Private type
Private balance = 0
Private withdrawCount
Private currencyType = NOK
Public
toString()
setType(aType)
getBalance()
deposit(aAmount)
withdraw(aAmount)
setCurrencyType(aType)

Make a deposit to the account with an amount of 150, and let the output look like this:
---------- Task 5 -------------------
Deposit of 150kr, new balance is 150kr
*/
const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0895, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccountNew5 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0; 
        this.currencyType = "NOK"; 
    }

    toString() {
        return this.type;
    }

    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0; 
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        printOut(`Deposit of ${amount}${CurrencyTypes[this.currencyType].denomination}, new balance is ${this.balance}${CurrencyTypes[this.currencyType].denomination}`);
        this.withdrawCount = 0; 
    }

    withdraw(amount) {
        switch (this.type) {
            case "Saving":
                if (this.withdrawCount >= 3) {
                    printOut("You can't withdraw from a Saving account more than three times!");
                    return;
                }
                break;
            case "Pension":
                printOut("You can't withdraw from a Pension account!");
                return;
        }

        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
        } else {
            this.balance -= amount;
            this.withdrawCount++; 
            printOut("Withdrawal of " + amount + ", new balance is " + this.balance);
        }
    }

    setCurrencyType(newCurrency) {
        if (this.currencyType === newCurrency) {
            return; 
        }
        if (CurrencyTypes[newCurrency]) {
            this.currencyType = newCurrency;
            printOut("Currency changed to " + newCurrency);
        } else {
            printOut("Invalid currency type!");
        }
    }
}

const myAccount5 = new TAccountNew5("Normal", 0);

myAccount5.setCurrencyType("NOK");
myAccount5.deposit(150); 

printOut(newLine);

  

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Part 6: Currency Conversion (15 points)
Expand the account class with a private method that converts from one currency to another. Use this method to change the balance when the currency changes. Replace all places where you print the balance so that it has exactly 2 decimals.
// A method to convert between currencies, private member!
function currencyConvert(aType) {
  return CurrencyTypes.NOK.value / currencyType.value * aType.value;
}
Change the currency a few times and try to get the output to look like this:
---------- Task 6 -------------------
The account currency has change from Norske kroner to Svenske kroner
New balance is 153.87kr
The account currency has change from Svenske kroner to United States dollar
New balance is 16.40$
The account currency has change from United States dollar to Norske kroner
New balance is 150.00kr*/

const CurrencyTypes6 = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0895, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccountNew6 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0;
        this.currencyType = "NOK";
    }

    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0;
    }

    deposit(amount) {
        this.balance += amount;
        printOut(`Deposit of ${amount}${CurrencyTypes6[this.currencyType].denomination}, new balance is ${this.balance.toFixed(2)}${CurrencyTypes6[this.currencyType].denomination}`);
        this.withdrawCount = 0;
    }

    withdraw(amount) {
        if (this.type === "Saving" && this.withdrawCount >= 3) {
            printOut("You can't withdraw from a Saving account more than three times!");
            return;
        }
        if (this.type === "Pension") {
            printOut("You can't withdraw from a Pension account!");
            return;
        }
        if (amount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
            return;
        }

        this.balance -= amount;
        this.withdrawCount++;
        printOut("Withdrawal of " + amount + ", new balance is " + this.balance.toFixed(2));
    }

    setCurrencyType(newCurrency) {
        if (this.currencyType === newCurrency) {
            return; 
        }
        if (CurrencyTypes6[newCurrency]) {
            const oldCurrencyValue = CurrencyTypes6[this.currencyType].value;
            const newCurrencyValue = CurrencyTypes6[newCurrency].value;
            this.balance = (this.balance / oldCurrencyValue) * newCurrencyValue;

            printOut(`The account currency has changed from ${CurrencyTypes6[this.currencyType].name} to ${CurrencyTypes6[newCurrency].name}`);
            this.currencyType = newCurrency; 
            printOut(`New balance is ${this.balance.toFixed(2)}${CurrencyTypes6[this.currencyType].denomination}`);
        } else {
            printOut("Invalid currency type!");
        }
    }
}

const myAccount6 = new TAccountNew6("Normal", 150);

myAccount6.setCurrencyType("SEK");  
myAccount6.setCurrencyType("USD");  
myAccount6.setCurrencyType("NOK"); 


printOut(newLine);

  

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*Part 7: Multi-Currency Transactions (15 points)
Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no currency type 
is specified (undefined), use NOK as the default. Make this change so that the functions 
print out the currency the amount is in.

TAccount
Private type
Private balance = 0
Private withdrawCount
Private currencyType = NOK
Public
toString()
setType(aType)
getBalance()
deposit(aAmount, aType)
withdraw(aAmount, aType)
setCurrencyType(aType)

Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of the balance 
with a different currency than the account is in. You should have a balance of exactly 0.00.
Try to print something like this:

---------- Task 7 -------------------
Deposit of 12.00 United States dollar, new balance is 259.94kr
Withdrawal of 10.00 Pound sterling, new balance is 141.88kr
The account currency has change from Norske kroner to Canadiske dollar
New balance is 20.36C$
The account currency has change from Canadiske dollar to Indiske rupee
New balance is 1111.06₹
Withdrawal of 150.11 Svenske kroner, new balance is 0.00₹*/

const CurrencyTypes7 = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0895, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccountNew7 {
    constructor(type, balance = 0) {
        this.type = type;
        this.balance = balance;
        this.withdrawCount = 0;
        this.currencyType = "NOK"; 
    }


    setType(newType) {
        printOut("Account is changed from " + this.type + " to " + newType);
        this.type = newType;
        this.withdrawCount = 0;
    }

  
    deposit(amount, aType = "NOK") {
        const depositCurrencyValue = CurrencyTypes7[aType].value;
        const currentCurrencyValue = CurrencyTypes7[this.currencyType].value;
        
        const convertedAmount = (amount * depositCurrencyValue) / currentCurrencyValue;
        this.balance += convertedAmount;
        
        printOut(`Deposit of ${amount.toFixed(2)} ${CurrencyTypes7[aType].name}, new balance is ${this.balance.toFixed(2)}${CurrencyTypes7[this.currencyType].denomination}`);
        this.withdrawCount = 0;
    }

    withdraw(amount, aType = "NOK") {
        const withdrawCurrencyValue = CurrencyTypes7[aType].value;
        const currentCurrencyValue = CurrencyTypes7[this.currencyType].value;
        
        const convertedAmount = (amount * withdrawCurrencyValue) / currentCurrencyValue;

        if (convertedAmount > this.balance) {
            printOut("Insufficient balance for withdrawal of " + amount);
            return;
        }

        this.balance -= convertedAmount;
        printOut(`Withdrawal of ${amount.toFixed(2)} ${CurrencyTypes7[aType].name}, new balance is ${this.balance.toFixed(2)}${CurrencyTypes7[this.currencyType].denomination}`);
    }

    setCurrencyType(newCurrency) {
        if (this.currencyType === newCurrency) {
            return; 
        }
        if (CurrencyTypes7[newCurrency]) {
            const oldCurrencyValue = CurrencyTypes7[this.currencyType].value;
            const newCurrencyValue = CurrencyTypes7[newCurrency].value;
            this.balance = (this.balance / oldCurrencyValue) * newCurrencyValue;

            printOut(`The account currency has changed from ${CurrencyTypes7[this.currencyType].name} to ${CurrencyTypes7[newCurrency].name}`);
            this.currencyType = newCurrency; 
            printOut(`New balance is ${this.balance.toFixed(2)}${CurrencyTypes7[this.currencyType].denomination}`);
        } else {
            printOut("Invalid currency type!");
        }
    }
}

const myAccount7 = new TAccountNew7("Normal", 0);

myAccount7.deposit(12, "USD");  
myAccount7.withdraw(10, "GBP");  
myAccount7.setCurrencyType("CAD"); 
myAccount7.setCurrencyType("INR");  
myAccount7.setCurrencyType("SEK");  
myAccount7.withdraw(150.11, "SEK"); 

printOut(newLine);

printOut("---------Part 8------------------------------------------------------------------------------------------");
/*● Part 8 (5 points)
Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.*/ 

function expandText(text, maxSize, char, insertBefore) {

    while (text.length < maxSize) {
        if (insertBefore) {
            text = char + text; 
        } else {
            text = text + char; 
        }
    }
    return text;
}

const result = expandText("hello", 10, "*", true); 
printOut(result); 
