// Build a banking application
// Object representing customer account
const customerAccount = {
    name: 'Shubham yadav',
    balance: 2345
  };
  
  // Function to deposit money into customer account
  const deposit = (amount) => {
    customerAccount.balance += amount;
    console.log(`Deposited Rs ${amount}. Your New balance is Rs ${customerAccount.balance}.`);
  };
  
  // Function to withdraw money from customer account
  const withdraw = (amount) => {
    if (amount > customerAccount.balance) {
      console.log(`Insufficient balance. Your Current balance is Rs ${customerAccount.balance}.`);
    } else {
      customerAccount.balance -= amount;
      console.log(`Withdrawn Rs ${amount}. Your New balance is Rs ${customerAccount.balance}.`);
    }
  };
  deposit(500);
 withdraw(1470); 