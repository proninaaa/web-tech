let button = document.querySelector('.contactform_button')
let nameInput = document.getElementById('name')
let last_nameInput = document.getElementById('last_name')
let emailInput = document.getElementById('email')
let questionInput = document.getElementById('question')
let data = []
const setupData = function(){
    let name = nameInput.value
    let last_name = last_nameInput.value
    let email = emailInput.value
    let question = questionInput.value
    if(name == "" || lastname == "" || email == "" || question == ""){
    if(name == ""){
        nameInput.style.borderColor = "red"
        document.querySelector(".label_name").innerHTML = "Заполните это поле!"
    }
    if(last_name == ""){
        last_nameInput.style.borderColor = "red"
        document.querySelector(".label_last_name").innerHTML = "Заполните это поле!"
    }
    if(email == ""){
       emailInput.style.borderColor = "red"
        document.querySelector(".label_email").innerHTML = "Заполните это поле!"
    }
    if(question == ""){
        questionInput.style.borderColor = "red"
        document.querySelector(".label_question").innerHTML = "Заполните это поле!"
    }
        }else{
             data[0]=nameInput.value
             data[1]=last_nameInput.value
             data[2]=emailInput.value
             data[3]=questionlInput.value
             console.lod(data)
            }
        }