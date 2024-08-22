const profile={
    name:"rishit",
    email:"",
    age:35,
    hobbies:["reading","coading","cooking"],
    address:{
        street:"123 Main st",
        city:"sf",
        state:"sff",
        zip:"1234",

        country:{
            Name:"India",
            code:"Bharat"
        }
    },
};


// const{
//     age,
//     address:{city},

// }=profile;

const { address:{country:{ code:countryCode}}}=profile;

console.log(countryCode);

// console.log(city);
// console.log(age)