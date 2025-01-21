document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.buttonNo');
    const yesButton = document.querySelector('.buttonYes');
    const firstElement = document.querySelector('.first')
    const noElement = document.querySelector('.no')
    const yes1Element = document.querySelector('.yes1')
    const hoverSound = document.getElementById('hoverSound');
    const yesSound2 = document.getElementById('yesSound2');

    console.log(noButton); // Should log the button if it exists
    noButton.addEventListener('mouseover', function (){
        firstElement.style.display='none';
        noElement.style.display = 'block';
        noButton.innerHTML='Yes'
        hoverSound.currentTime = 0;
        hoverSound.play()
    });
    noButton.addEventListener('mouseout', () => {
        noElement.style.display = 'none';
        firstElement.style.display='block';
        noButton.innerHTML='No'

    });
    yesButton.addEventListener('mouseover', function (){
        firstElement.style.display='none';
        yes1Element.style.display = 'block';
        // yesSound2.currentTime = 0;
        yesSound2.play()
    });
    yesButton.addEventListener('mouseout', () => {
        yes1Element.style.display = 'none';
        firstElement.style.display='block';
        yesSound2.pause()

    });

});


 const yesFunction = function(){
    const yesSound = document.getElementById('yesSound');
    const noButton = document.querySelector('.buttonNo');
    const yesButton = document.querySelector('.buttonYes');
    const firstElement = document.querySelector('.first')
    const text = document.querySelector('p')
    const yes2Element = document.querySelector('.yes2')
   const h1 = document.querySelector('h1')
   h1.innerHTML="Holy Freaking Crap!"
   noButton.style.display='none'
   yesButton.style.display='none'
   text.style.display="flex"
   firstElement.style.display='none'
   yes2Element.style.display='block'
   yesSound.currentTime = 0;
    yesSound.play()
}
