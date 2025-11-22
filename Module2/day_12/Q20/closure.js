
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


const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

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

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.balance); 
account.getHistory();