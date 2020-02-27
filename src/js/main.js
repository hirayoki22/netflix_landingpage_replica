function expandFaqSection() {
    let button = document.querySelectorAll('.faq');

    button.forEach(i => {
        i.addEventListener('click', function() {
            let slider = i.parentElement;
            collapseFaqSection(i.dataset.itemId);

            if (!slider.classList.contains('expanded')) {
                i.querySelector('.slider-expand-icon').innerHTML = "&#xe5cd;";                
                slider.style.height = slider.scrollHeight + "px"; 
                slider.classList.add('expanded');
            } else {
                i.querySelector('.slider-expand-icon').innerHTML = "&#xe145;";
                slider.style.height = "74.66px";
                slider.classList.remove('expanded');
            }
        });
    });
}

function collapseFaqSection(itemId) {
    let allSliders = document.querySelectorAll('.slider-container');

    allSliders.forEach(j => {
        if (j.dataset.itemId != itemId) {
            j.querySelector('.slider-expand-icon').innerHTML = "&#xe145;";
            j.style.height = "74.66px";
            j.classList.remove('expanded');                    
        }                
    });
}

window.onload = function () {
    expandFaqSection();
}