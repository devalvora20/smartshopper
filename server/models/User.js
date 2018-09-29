
function User(firstName,lastName,email,password,registrationDate) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.registrationDate = registrationDate;

}



module.exports = User;