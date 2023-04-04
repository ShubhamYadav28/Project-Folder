// Password Checker.
class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
      if (passwordRegex.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error('Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  }
const user = new User('shubham', "Shubh@123") ;
console.log(user.password);

user.password = "MyPassword"

user.password = "MyPassword9"
console.log(user.password)

/*
In this implementation, the 'User' class has two properties: username and _password. The '_password' property is meant to be private, so we use the underscore convention to indicate that it should not be accessed directly.

The 'get password()' method is a getter for the '_password' property. It returns the password with all characters replaced by (*) asterisks.

The 'set password(newPassword)' method is a setter for the '_password' property. It first checks if the new password meets the requirements (at least 8 characters long and containing at least one number and one uppercase letter). If the password is valid, it sets the '_password' property to the new password. Otherwise, it logs an error message.
*/ 
