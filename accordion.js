const elements = document.querySelectorAll('.element');

elements.forEach(element =>{
    let btn = element.querySelector('.program-name button');
    let icon = element.querySelector('.program-name button i');
    var answer = element.lastElementChild;
    var answers = document.querySelectorAll('.element .answer');
    
    btn.addEventListener('click', ()=>{
        answers.forEach(ans =>{
            let ansIcon = ans.parentElement.querySelector('button i');
            if(answer !== ans){
                ans.classList.add('hideText');
                ansIcon.className = 'fas fa-plus-circle';
            }
        });
        
        answer.classList.toggle('hideText');
        icon.className === 'fas fa-plus-circle' ? icon.className = 'fas fa-minus-circle' 
        : icon.className ='fas fa-plus-circle';
    });
});
