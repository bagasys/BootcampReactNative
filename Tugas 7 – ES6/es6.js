const golden = () => {
    console.log("this is golden!!")
}

golden()

//

const newFunction = (firstName, lastName) =>({
        firstName,
        lastName,
        fullName(){
            console.log(firstName + " " + lastName)
            return
        }
})

//Driver Code
newFunction("William", "Imoh").fullName()

//
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;

//

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)


//

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

// Driver Code
console.log(before)