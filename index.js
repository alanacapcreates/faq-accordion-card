let arrows = document.querySelectorAll('article img')
let answers= [document.getElementById('a1'),document.getElementById('a2'),document.getElementById('a3'),document.getElementById('a4'),document.getElementById('a5')]

let questions= [document.getElementById('q1'),document.getElementById('q2'),document.getElementById('q3'),document.getElementById('q4'),document.getElementById('q5')]


console.log(arrows)

for(let i=0;i<arrows.length;i++){

    arrows[i].setAttribute("id","arrow"+[i])
    arrows[i].addEventListener('click', ()=>{
        if(answers[i].classList.contains('displayNone')){
            answers[i].classList.remove('displayNone')
            answers[i].classList.add('displayBlock')

            questions[i].classList.remove('standardTxt')
            questions[i].classList.add('bold')

            arrows[i].classList.add("rotateEl")
        }
        else{
            answers[i].classList.add('displayNone')
            answers[i].classList.remove('displayBlock')

            questions[i].classList.add('standardTxt')
            questions[i].classList.remove('bold')
            arrows[i].classList.remove("rotateEl")
        }
    })
}
