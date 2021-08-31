form1 = document.getElementById("b1")
sol1=["turned","down","the"]
sol2=["make","up","for"]
sol3=["held","up"]
sol4=["made","her","mind","up"]
sol5=["let","his","family","down"]
sol6=["had","not","turned","up"]
sol7=["see","mary","off"]
const solutions = [sol1,sol2,sol3,sol4,sol5,sol6,sol7]

const correct = () => {
    let mark = 0
    let mark2 = mark
    let mistakes = new Array(0)
    let s1 = document.exercise.s1.value
    let s2 = document.exercise.s2.value
    let s3 = document.exercise.s3.value
    let s4 = document.exercise.s4.value
    let s5 = document.exercise.s5.value
    let s6 = document.exercise.s6.value
    let s7 = document.exercise.s7.value
    let answers1 = [s1,s2,s3,s4,s5,s6,s7]
    let answers2 = answers1.map ( e => e.trim())
    let answers4 = answers2.map ( e => e.toLowerCase())
    let anwers3 

    let answers5 = answers4.map( e => e.split(' '))
    console.log(answers4)
    let answers = answers5.map( e => {
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
    let check = 0
    let l = 0

    for(let i = 0;i<answers.length;i++){
        check = 0
        mark2 = mark
        answers3 = answers[i].filter((e) => {
            return e != "" 
            })
        for(let j = 0;j<solutions[i].length;j++){
            l = j
            if (solutions[i].length!=answers3length && solutions[i].length!=answers3.length-1 ){
                break
            }
            if (solutions[i][j] != answers3[l] ){
                break
            }
            check ++

        }
        if (check == solutions[i].length){
            mark+= (10/7)
        }

        if ( mark2 != mark){
            mistakes.push("Right answer")
        }
        else{
            mistakes.push("Wrong answer : "+answers[i]+" The solution is : "+solutions[i][0])
        }
    }
    for( let k = 0;k< 7;k++){
        if (mistakes[k] != "Right answer"){
            document.getElementById("sol"+String(k+1)).innerHTML = "<button onclick=ss"+(k+1)+"()>Show solutions</button> <img src='https://icon2.cleanpng.com/20190228/bre/kisspng-red-x-stock-photography-image-letter-portable-netw-5c7878899969a0.1754724515513990496284.jpg' height=20vh width=20vh>"
        }
        else{
            document.getElementById("sol"+String(k+1)).innerHTML ="<img src='https://image.freepik.com/premium-photo/green-tick-mark-white-background_172429-560.jpg' height=20vh width=20vh>"
        }
    }

    document.getElementById("mark").innerHTML = "VOTO : "+ mark.toFixed(2)

}

function ss1 () {
    document.getElementById("sol1").innerHTML= sol1[0]+" "+sol1[1]+" "+sol1[2]
}

function ss2 () {
    document.getElementById("sol2").innerHTML= sol2[0]+" "+sol2[1]+" "+sol2[2]
}

function ss3 () {
    document.getElementById("sol3").innerHTML= sol3[0]+" "+sol3[1]
}

function ss4 () {
    document.getElementById("sol4").innerHTML= sol4[0]+" "+sol4[1]+" "+sol4[2]+" "+sol4[3]
}

function ss5 () {
    document.getElementById("sol5").innerHTML= sol5[0]+" "+sol5[1]+" "+sol5[2]+" "+sol5[3]
}

function ss6 () {
    document.getElementById("sol6").innerHTML= sol6[0]+" "+sol6[1]+" "+sol6[2]+" "+sol6[3]
}

function ss7 () {
    document.getElementById("sol7").innerHTML= sol7[0]+" "+sol7[1]+" "+sol7[2]
}

