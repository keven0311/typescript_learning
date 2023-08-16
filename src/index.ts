// let age:number = 20;
// if(age < 50 )
//     age += 10

let sale: number = 123_456_789
let course: string = "TypeScript"
let is_published: boolean = true

function render(document:any) {        //setting the parameter to any type. in TS it require you to asign a type to a variable
    console.log(document)
}


let numbers = [1,2,"3"]    //this is ok in JS

let number:number[] = [1,2,3]  //in ts you asign the array to be numbers

number.forEach(n => n.valueOf)  // in TS, if you map over an array with type, VS code will give you all suggestion about that type`s method. HANDY!


//tuples
let user: [number,string] = [1,'Kev']  // asign argument with types


//enums:
const small = 1
const medium = 2
const largr = 3

const enum Size {Small = 1, Medium, Large}

let mySize:Size = Size.Medium  // this will return 2 



function calculateTax(income:number, taxYear = 2022):number {         //this means you expect this function return 'void', means return nothing. you can also set to return a number or string or any types
                                //  taxyear = 2022 in parameter means, if you dont give it a value, by default it will go with 2022
    if(taxYear < 2022)
        return income*1.2

    return income * 1.5
}

calculateTax(10_000, 2023)  //this second parameter will overwrite default value(2022), because you asigned a value to this parameter.



//objects:

let employee:{
    id: number,
    name?: string       //if the "name" property does not have a value, you can make it optional by add a "?" after the property
} = { id: 1 }
employee.name = 'Kev'

        //but in we better declear those propertys like this:

let employeee:{
    readonly id:number,      //if you add a "readonly" before the property. you will not able to change it in the furture by mistake.
    name: string,
    retire:(date: Date) => void
} = {id:1, name:'Kev', retire: (date:Date) => {
    console.log(date)
}}                             //this way making more sense




//type aliases:

type Employee = {                  //define a shape of a object, it can be reused anytime.
    readonly id:number,      
    name: string,
    retire:(date: Date) => void
}

let aliaseEmployee: Employee = {
    id:1,
    name: 'Kev',
    retire:(date: Date) => {
        console.log(date)
    }
}


//union types:

function kgToLbs(weight:number | string):number {
    //narrowing
    if(typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2            //if the weight is not a number, you can parseInt it to number then times 2.2
   
}



//intersection types:
type Draggable = {
    drag:() => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}



//literial types:

//literal (exact, specific)
let quantity:50 | 100 = 50   // in this way, the quantity can be sign to 50 or 100

type Quantity = 50 | 100
let quantityy:Quantity = 100

type Metric = 'cm' | 'inch'
let long:Metric = 'cm'



//nuallable types:
function greet(name:string | null | undefined) {
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('Hola!')
}

greet(null)


//optional chaining:

type Customer = {
    birthday: Date  
}

function getCustomer(id:number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);

if(customer !== null && customer !== undefined)
    console.log(customer.birthday)
//intead of this way to run the code above, we can also use optional property access operator:
//optional property access operator
console.log(customer?.birthday)

//optional element access operator:(for array)
//customer?.[0]

//optional call
let log: any = null
log?.('a')   // this means if log is a actually function, it will run it, otherwise you will get undefined








