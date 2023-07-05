/*7. Password Checker.
Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message.*/

class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return '*'.repeat(this._password.length);
    }
  
    set password(newPassword) {
      if (
        newPassword.length >= 8 &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        this._password = newPassword;
      } else {
        console.log(
          'Error : Password must be atleast 8 characters long and contain atleast one number and one uppercase letter.'
        );
      }
    }
  }
  
  // Example usage
  const user = new User('Mithun', 'Password123');
  console.log(user.password); // Output: ***********
  
  user.password = 'MyPassword';
  console.log(user.password); /* Output: Error : Password must be atleast 8 characters long and contain atleast one number and one uppercase letter.
  ***********               */

  
  user.password = 'MyPassword123';
  console.log(user.password); // Output: ***************
  