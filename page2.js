form1 = document.getElementById("b1")
sol1=["i", "have", "waited", "an", "hour", "to", "get", "the", "tickets"]
sol2=["why", "do" , "not" ,"you", "come", "to", "visit", "us","on", "Sunday" ]
sol11=["let's", "take", "a" ,"taxi"]
sol3=["i","do","not","want","us","to","be","late"]
sol4=["did","Ron","go", "upstairs", "to", "study", "or", "to","play"]
sol5=["hurry","up","to","finish","your","homework"]
sol6=["come","and","sit","in","the","garden"]
sol7=["let's","go","play","soccer","this","afternoon"]
sol8=["meryl","does","not","know","whether","to","accept","her","boss's","invitation","or","not"]
sol9=["i","have","told","you","many","times","not","to","read","my","emails"]
sol10=["do","you","want","me","to","turn","on","the","light"]
const solutions = [sol1,sol2,sol11,sol3,sol4,sol5,sol6,sol7,sol8,sol9,sol10]

const correct = () => {
    let mark = 0
    let mark2 = mark
    let mistakes = new Array(0)
    let s1 = document.exercise.s1.value
    let s2 = document.exercise.s2.value
    let s11 = document.exercise.s11.value
    let s3 = document.exercise.s3.value
    let s4 = document.exercise.s4.value
    let s5 = document.exercise.s5.value
    let s6 = document.exercise.s6.value
    let s7 = document.exercise.s7.value
    let s8 = document.exercise.s8.value
    let s9 = document.exercise.s9.value
    let s10 = document.exercise.s10.value
    let answers1 = [s1,s2,s11,s3,s4,s5,s6,s7,s8,s9,s10]
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
    console.log(answers[0])
    let check = 0
    let l = 0

    for(let i = 0;i<answers.length;i++){
        check = 0
        mark2 = mark
        answers3 = answers[i].filter((e) => {
            return e != "" 
            })
        console.log(answers3)
        for(let j = 0;j<solutions[i].length;j++){
            l = j
            if (solutions[i].length!=answers3.length && solutions[i].length!=answers3.length-1 ){
                break
            }
            if (solutions[i][j] != answers3[l] ){
                break
            }
            check ++

        }
        console.log(answers3[0])
        if (check == solutions[i].length){
            mark+= (10/11)
        }
        if ( mark2 != mark){
            mistakes.push("Right answer")
        }
        else{
            mistakes.push("Wrong answer : "+answers[i]+" The solution is : "+solutions[i][0])
        }
    }
    for( let k = 0;k< 10;k++){
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
    let sol = ""
    
    for (let x = 0;x < sol1.length;x++){
        sol += sol1[x] + " "
    }
    document.getElementById("sol1").innerHTML= sol.toUpperCase()
}

function ss2 () {
    let sol = ""
    for (let x = 0;x < sol2.length;x++){
        sol += sol2[x] + " "
    }
    document.getElementById("sol2").innerHTML= sol.toUpperCase()
}

function ss3 () {
    let sol = ""
    for (let x = 0;x < sol3.length;x++){
        sol += sol3[x] + " "
    }
    let sol1 = ""
    sol11[0][0] = sol11[0][0].toUpperCase()
    for (let x = 0;x<sol11.length;x++){
        sol1 += sol11[x]+ " "
    }
    document.getElementById("sol3").innerHTML= sol1.toUpperCase() + " . " + sol.toUpperCase()
}

function ss4 () {
    let sol = ""
    for (let x = 0;x < sol4.length;x++){
        sol += sol4[x] + " "
    }
    document.getElementById("sol4").innerHTML= sol.toUpperCase()
}

function ss5 () {
    let sol = ""
    for (let x = 0;x < sol5.length;x++){
        sol += sol5[x] + " "
    }
    document.getElementById("sol5").innerHTML= sol.toUpperCase()
}

function ss6 () {
    let sol = ""
    for (let x = 0;x < sol6.length;x++){
        sol += sol6[x] + " "
    }
    document.getElementById("sol6").innerHTML= sol.toUpperCase()
}

function ss7 () {
    let sol = ""
    for (let x = 0;x < sol7.length;x++){
        sol += sol7[x] + " "
    }
    document.getElementById("sol7").innerHTML= sol.toUpperCase()
}

function ss8 () {
    let sol = ""
    for (let x = 0;x < sol8.length;x++){
        sol += sol1[x] + " "
    }
    document.getElementById("sol8").innerHTML= sol.toUpperCase()
}

function ss9 () {
    let sol = ""
    for (let x = 0;x < sol9.length;x++){
        sol += sol9[x] + " "
    }
    document.getElementById("sol9").innerHTML= sol.toUpperCase()
}

function ss10 () {
    let sol = ""
    for (let x = 0;x < sol10.length;x++){
        sol += sol1[x] + " "
    }
    sol[0] = sol[0].toUpperCase()
    document.getElementById("sol10").innerHTML= sol.toUpperCase()
}

