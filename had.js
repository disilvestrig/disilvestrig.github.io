let a = [["has","is","hahah","fiau","I've","jadon've","Mark","has","let","us"],["hadn't","hola","jesus","isn't","haven't","don't","doesn't"]]
let b = a.map( e => {
    for ( let x = 0;x<e.length;x++){
        if (e[x][e[x].length-3]+e[x][e[x].length-2]+e[x][e[x].length-1] == "n't"){
            for(let c = 0;c<3;c++){
                e[x] = e[x].replace("n't","")
            }
            e.splice(x+1,0,"not")
        }
        if (e[x][e[x].length-3]+e[x][e[x].length-2]+e[x][e[x].length-1] == "'ve"){
            for(let c = 0;c<3;c++){
                e[x] = e[x].replace("'ve","")
            }
            e.splice(x+1,0,"have")
        }
        if (e[x] == "has" && x != 0){
            e[x-1] = e[x-1]+"'as"
            e.splice(x,1)
        }
        if (e[x] == "is" && x != 0){
            e[x-1] = e[x-1]+"'is"
            e.splice(x,1)
        }
        if (e[x] == "us" && x != 0 && e[x-1] == "let"){
            e[x-1] = "let's"
            e.splice(x,1)
        }


    }
    return e
})
a[0][0][0].replace(a[0][0][0],a[0][0][0].toUpperCase())
console.log(a[0][0][0])