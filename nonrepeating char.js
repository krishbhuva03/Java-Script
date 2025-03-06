let str = "111111222222223333333444455666666778777"

function nonRep (str){
    let obj = {}

    for(let item of str){
        if(obj[item]){
            obj[item] += 1
        }else{
            obj[item] = 1
        }
    }


    for(let key in obj){
        if(obj[key] === 1){
            return key
        }
    }
    return -1
}

console.log(nonRep(str));


