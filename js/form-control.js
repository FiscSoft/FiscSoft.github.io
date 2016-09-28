    

var textBoxEmailValue;
var email;
var emailArray;
var password;
var confirmPassword;

var alert_error = document.getElementById("Register-Alert-Error"); // Apagando mensagem de erro 
var alert_success = document.getElementById("Register-Alert-Success"); // Apagando mensagem de sucesso

alert_error.style.display = "none";                          // Apagando mensagem de erro 
alert_success.style.display = "none";                          // Apagando mensagem de erro 

var regExpPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"); // Reg exp password, 8 caracteres, maiuscula e minuscula e digitos;

function register(){ // Função MAIN do botão register

     alert_error.style.display = "none";// Apagando mensagem de erro 
     alert_success.style.display = "none";// Apagando mensagem de erro 

     GetProprieties(); //Pegar propriedades
    
     if(EmailValidator(email)){ //Verificar email
         
         if(CompanyValidator()){ // Verificar a companhia
            
             if(UserNameValidator()){ // Verificar o username
                 
                 if(PassWordValidator(password)){
                     
                    if(ConfirmPasswordValidation(password,confirmPassword)){
                        
                        alert_success.style.display = "block";
                        alert_success.innerHTML = "Usuário cadastrado com sucesso";
                        location.reload(); 
                        
                    }else{
                        
                        alert_error.style.display = "block";
                        return SetError("As senhas não correspondem");
                        
                    }
                     
                 }else{
                     
                    alert_error.style.display = "block";
                    return SetError("A senha necessita ter no minimo 8 caracteres, sendo pelo menos 1 caractere maiúsculo, 1 minúsculo e 1 numero");
                     
                 }
                 
             }else{
                 
                 alert_error.style.display = "block";
                 return SetError("User name em branco");
                 
             }
             
         }else{
             
             alert_error.style.display = "block";
             return SetError("Companhia em branco");

         }
         
     }else{
         
        alert_error.style.display = "block";
        return SetError("Email invalido, o email digitado necessita ser válido");
         
     }
    
}

function GetProprieties(){
    
    //textBoxEmailValue = document.getElementById("register-email");
    email = document.getElementById("register-email").value;
    emailArray = email.split("");

    password = document.getElementById("register-password-name").value;
    confirmPassword = document.getElementById("confirm-password").value;
}

function EmailValidator(email_){
    
   
    if(!FindBlankSpace("register-email")){ // Espaço em branco
        
            indexOfAt = email_.search("@");
    
        if(indexOfAt != -1){ //@ existe

          

            if(email_.charAt(email_.length -1) != "."){ // Email não termina em . (leo.bonetti@gmail.com.)

                  

                if(email.charAt(0) != "."){ //Email não começa em . (.leo.bonetti@gmail.com)

                       

                    if(email_.charAt(indexOfAt + 1) != "." && email_.charAt(indexOfAt -1 != ".")){ // Não há . antes e após o @ (leo.bonetti.@.gmail.com)

                         

                        if(!FindDoubleDot(emailArray)){ // Não há double . (leo..bonetti@gmail.com)

                             
                                 return true;

                        }
                            
                    }
                        
                }
                    
            }

        }
        
    }
    
}

function CompanyValidator(){
    

     if(!FindBlankSpace("register-company-name")){ // Achar espaço em branco no nome da companhia TRUE = BRANCO
         
         return true;
     }
}

function UserNameValidator(){
    
    if(!FindBlankSpace("register-user-name")){ // Achar espaço em branco no usuario TRUE = BRANCO

        return true;
     }
}

function PassWordValidator(password_){
    
    if (regExpPassword.test(password_)) {
    
        return true
    
    } 
    
}

function ConfirmPasswordValidation(password_, confirm_password_){
    
    if(password_ == confirm_password_){
        
        return true;
    }
}

//Verificar se há dois pontos seguidos
function FindDoubleDot(array_){
 
    var i;

    for(i in array_){ 
        
        if(array_[i] == "."){
            
            if (array_[i - 1] == array_[i] || array_[i +1] ==  array_[i] ){
            
                return true
            }
        }      
    }
    
}

//Verificar sem há espaço em branco
function FindBlankSpace(id_){
    
    content = document.getElementById(id_).value;
    
    if(content == ""){
        
        return true;
    }
    else{
        
        return false;
    }
    
}

//Alertar problema
function SetError(error){
     
    document.getElementById("Register-Alert-Error").innerHTML = "Ops, parece que temos um problema: <br>"+"-"+error;
    
}





