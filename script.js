const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirementItem = document.querySelectorAll('.requirement-list li')

const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
    {regex: /[A-Z]/, index: 4},
]

passwordInput.addEventListener('keyup', (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const eachRequirement = requirementItem[item.index];

        
        if(isValid){
            eachRequirement.firstElementChild.className = 'fa-solid fa-check';
            eachRequirement.classList.add('valid');
        } else {
            eachRequirement.firstElementChild.className = 'fa-solid fa-circle';
            eachRequirement.classList.remove('valid');
        }
    })
})




eyeIcon.addEventListener('click', () => {
    if(passwordInput.type == "password"){
        passwordInput.type = 'text'
        eyeIcon.className = 'fa-sharp fa-solid fa-eye-slash'
    } else {
        passwordInput.type = 'password'
        eyeIcon.className = 'fa-sharp fa-solid fa-eye'
    }


})