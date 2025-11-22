// closuresAssignment.js

/*************** QUESTION 1: Closure-Based Counter ***************/
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    getCount() {
      console.log("Current count:", count);
      return count;
    }
  };
}

// Example usage:
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();


/*************** QUESTION 1 EXPLANATION ***************/
// Closures keep the variable "count" private inside createCounter.
// Multiple counters have separate closed-over variables.

/*************** QUESTION 2: Bank Account with Closures ***************/
function createBankAccount() {
  let balance = 0;
  let history = [];

  return {
    deposit(amount) {
      balance += amount;
      history.push({ type: "Deposit", amount });
      console.log("Deposited:", amount);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        return;
      }
      balance -= amount;
      history.push({ type: "Withdraw", amount });
      console.log("Withdrawn:", amount);
    },

    getBalance() {
      console.log("Current Balance:", balance);
      return balance;
    },

    getHistory() {
      console.log("Transaction History:", history);
      return history;
    }
  };
}

// Example usage:
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance); // undefined
account.getHistory();