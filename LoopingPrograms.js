const arr = [12, 34, 56, 11, 45, 66, 78];
const str = "javascript";
const str1 = "AEVELOPER";


function swi() {
        const r = 1;
        const r1 = 2;

        console.log("Use of switch case:");
        switch (r1) {
                case 1:
                        console.log("Hello Students!!!");
                        console.log("How are you all!!!");
                        break;

                case 2:
                        console.log("Reccess Time!!!");
                        console.log("GO! Eat your breakfast:");
                        break;
        }
}
swi();
console.log("\n");
function condition() {
        const len = arr.length;
        console.log("Less Than 50:");
        for (var i = 0; i <= len; i++) {
                if (arr[i] < 50) {
                        console.log(arr[i]);
                }
                
        }
}
condition();
console.log("\n");

function indof() {
        const ind = arr.indexOf(11);
        console.log("Use of indexof method:");
        for (var i = 0; i <= ind; i++) {
                if (arr[i] > 50) {
                        console.log(arr[i]);
                }

        }
}
indof();
console.log("\n");

function sli() {
        const s = 1;
        const s1 = 2;

        console.log("Use of Switch Case: ");
        switch (s) {
                case 1:
                        console.log(arr.slice(3, 6));
                        break;

                case 2:
                        const upp = str.toUpperCase()
                        console.log(upp.slice(3, 10));
                        break;
        }
}
sli();
console.log("\n");

function upper() {
        if (str === str.toUpperCase()) {
                console.log("Use of Upper Case in string", str);
        }
        else {
                console.log("String is not in UPPERCASE!!!");

        }
}
upper();
console.log("\n");


function Strcondition() {
        console.log("Loop for string: ");
        
        const len = str.length;
        for (var i = 0; i < len; i++) {

                console.log(str[i]);

        }
}
Strcondition();
console.log("\n");

function lower() {
        if (str === str.toLowerCase()) {
                console.log("Use of Lower Case in string: ", str);
        }
        else {
                console.log("String is not in LOWERCASE!!!");

        }
}
lower();
console.log("\n");


function cond(){
        console.log("Use of string method:");
        
        if(str1.startsWith('D'))
        {
                console.log(str1);
        }
        else{
                console.log(str1.replaceAll('E','Z'));
        }
}
cond();
