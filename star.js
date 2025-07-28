function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = "";

        // Add spaces
        for (let j = 1; j <= rows - i; j++) {
            str += " ";
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += "*";
        }

        console.log(str); // Print each row
    }
}

printPyramid(5);


function printInversePyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let str = "";

        // Add spaces
        for (let j = 1; j <= rows - i; j++) {
            str += " ";
        }

        // Add stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += "*";
        }

        console.log(str); // Print each row
    }
}

printInversePyramid(5);


let row = 5 


for(let i = row ; i >=1 ; i--){
    let str = ""
    for(let j = 1 ; j <= row - i ; j++){
        str += " "

    }
    for(let k = 1 ;  k <= 2 * i -1 ; k++){
        str +="*"
    }
    console.log(str);
    
}

