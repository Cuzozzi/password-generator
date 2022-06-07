let allNormalCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6","7", "8", "9"]

let allPossibleCharacters = [...allNormalCharacters, "~", "`", "!", "@", "#", "$", "%", "^", "&", ":", "*", "(", ")", "_", "-", "+","=", "{","[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"]

let passLength = document.getElementById("pass-length")
let passAmount = document.getElementById("pass-amount")

function generateRandomCharacter(allowSpecial) {
    if (allowSpecial === true) {
        let randomNumber = Math.floor( Math.random() * allPossibleCharacters.length )
        let randomCharacter = allPossibleCharacters[randomNumber]
        return randomCharacter
    } else {
        let randomNumber = Math.floor( Math.random() * allNormalCharacters.length )
        let randomCharacter = allNormalCharacters[randomNumber]
        return randomCharacter
    }
}

 function generatePassword(allowSpecial) {
    let passArray = []
    let passLengthValue = passLength.value
    let passwordAmt = passAmount.value
    let password = ""
    for (let j = 0; j < passwordAmt; j++) {
         for (let i = 0; i <= passLengthValue - 1; i++) {
              if (allowSpecial === true) {
                password += generateRandomCharacter(true)
            } else {
                password += generateRandomCharacter(false)
            }
        }
        passArray.push(password)
        password = ""
     }
     return passArray
 }
 
 function renderPasswords(passwords) {
     for (let i = 1; i <= 20; i++) {
         let passInput = document.getElementById(`pass${i}`)
         passInput.classList.add("input-off")
         passInput.classList.remove("pass-input")
     }
     for (let i = 1; i <= passAmount.value; i++) {
         let passInput = document.getElementById(`pass${i}`)
         passInput.value = passwords[i - 1]
         passInput.classList.add("pass-input")
         passInput.classList.remove("input-off")
     }
 }
 
 function copyPassword(element) {
     let chosenPass = document.getElementById(`pass${element}`)
     navigator.clipboard.writeText(chosenPass.value)
     let oldText = chosenPass.value
     chosenPass.value = "Copied!" 
     setTimeout(() => {
         chosenPass.value = oldText 
     }, 1000) 
 }