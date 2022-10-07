let myName:string;
myName = "marvel"
console.log(myName)

function addTwoNumbers(a:number, b:number){
    return a + b;
}

function arrayTotal(array:number[]){
    let total = 0
    for (let iterator of array) {
        total = total + iterator;
    }
    return total
}

type Person = {
    name:string
    age:number
    gender:"m"|"f"
}
function detailPerson(person:Person){
    console.log(person.name, person.age, person.gender)
}
detailPerson({
    age:12,
    gender: "m",
    name: "mavd"})

function testFunction<T extends any[]>(callable:(...args:T)=>any,...args:T){
    return callable(...args)
}
testFunction(console.log,"string",12, false)

const text =(name:string, surname: string)=>{
    return name + "" + surname
}
console.log(text("marvel", "azubuko"))