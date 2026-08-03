// const t = "bonjour";
// console.log(t);
// const a= "grace";
// const b=20;
// console.log(`bonjour je mappelle ${a} jai ${b}ans`);
// const T=28;
// const G=2;
// const c=T+G;
// console.log(c);
// console.log(`la somme est ${T+G} `);
// const pT=T*c;
// const pb=G*c;
// if (pT>40) {
    
 
// }
// if (T!==G){
//     console.log(T);
// }
// let d =20;
// let f=10;
const n = [ "bijoel", "grace","serena"]
for( let i=0; i<n.length; i++ ) {
    console.log (n[i])

}
const R ={admis :"ADMIS",
    refuse:"REFUSE"

}

switch (R.admis){
    case "ADMIS" : console.log("T");
    break;
    case "REFUSE" : console.log("D");
    break;
};
const s=7;

switch(s){
    case 5: console.log(`${s}`);
    break
    case 7 : console.log(`${s}`);
    break;
    
    case 4 : console.log(`${s}`);
    break;
}

let i=1;
while (i<=5){
console.log(i);
i++;
}
function divisibilite (n){
    if (n %3 === 0){
        return console.log("is a multiple 3")
     }
     return console.log("is not");
}



divisibilite(9);


