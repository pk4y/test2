const btns = document.querySelectorAll('.offer-box');

const modal = document.querySelector('#modal');

btns.forEach((elem, i) => {
    i++;
    
    elem.addEventListener('click', () => {
        
        const modalTitle = document.querySelector('#title');
        const modalDescription = document.querySelector('#description');
        const modalDescriptionAdd = document.querySelector('#descriptionAdd');

        const title = document.querySelector(`#descriptionTitle${i}`).innerText;
        const description = document.querySelector(`#description${i}`).innerText;
        const descriptionAdd = document.querySelector(`#descriptionAdd${i}`).innerText;

        

        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modalDescriptionAdd.innerText = descriptionAdd;
        
        modal.classList.add('modal-window');
        
        // alert(title);
    });
});