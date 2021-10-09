var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// i made a list of parameters (const is not changable)

const passwordList = {
    passwordLowercase: "abcdefghijklmnopqrstuvwxyz" ,
     passwordUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ,
     passwordDigits: "1234567890" ,
     passwordPunctuation: "!@#$%&*()_+-=[]|,./?><" ,
}
//function click() {
//window.alert(" ");

//var password = window.prompt("How many characters would you like your passowrd to contain");


// if popup satisfy this requerments <8 and >28 then statement strat to push confirnmation
function passwordPopup() {
    let popup = prompt('How many characters would you like your passoword to contain');
    if (popup < 8 && popup > 128) { passwordPopup() }
    else {
        let lower = confirm('Do you want to use lowercase letters?');
        let upper = confirm('Do you want to use uppercase letters?');
        let digits = confirm('Do you want to use numbers?');
        let punctuation = confirm('Do you want to ude special characters?');

// lower case was choosen then we push it from array
//  or || upper case
//or|| digits etc
        if (lower || upper || digits || punctuation) {
           
                var listArray = [];
                if (lower) {
                    listArray.push(passwordList.passwordLowercase)

                } 
              
                if (upper) { 
                    listArray.push(passwordList.passwordUppercase) 
                }
                    
                if (digits) {
                     listArray.push(passwordList.passwordDigits) 
                }
                    
                if (punctuation) { 
                    listArray.push(passwordList.passwordPunctuation) 
                }
                var password = '';
                var newBuckit =  listArray.join('')
            //we created newBuckit with function join
           // join() method creates and returns a new string by concatenating all of the elements in an array 

           //if i( index array=0 and < then popup staetment, add the next ellement )
           //we are mkaing mathnmultiply on newBuckit.lenght( the amoutnf of ellements in array)
                for (let i = 0; i < popup; i++){
                    var index = Math.floor( Math.random()*newBuckit.length);
                password += newBuckit[index]
            
                }
                console.log (password)
                writePassword(password)
            // text content on page
            //if you didnt choose at leaset one parameters, alert will pop up
        }else {
            alert('You have to choose at least one of parameters');
            passwordPopup() 
        }
    
    
    }

    }       // var randomNumber = Math.floor(Math.random() * 26);

        // document.getElementById("demo").innerHTML = randomNumber;

        // document.getElementById("demo2").innerHTML = upperArray[randomNumber];


        passwordPopup()

        function writePassword(password) {
           
            var passwordText = document.querySelector("#password");

            passwordText.value = password;

        }

        generateBtn.addEventListener("click", passwordPopup);
       