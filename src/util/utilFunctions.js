module.exports = {
  

 testingExport : function (validationField, textToValidate) {
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
    switch (validationField) {
  case 'name':
        if (!regName.test(textToValidate)) {
         return false 
        } else {
          return true;
        }
    break;
      case 'email':
        if (!validEmail.test(textToValidate)) {
          return false
        } else {
          return true;
        }
        break;
      case 'phone':
        if (!validPhone.test(textToValidate)) {
          return false
        } else {
          return true;
        }
        break;
  default:
    break;
}


} 



}