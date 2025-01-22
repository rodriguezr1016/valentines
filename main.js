document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.buttonNo');
    const yesButton = document.querySelector('.buttonYes');
    const firstElement = document.querySelector('.first')
    const noElement = document.querySelector('.no')
    const excuseElement = document.querySelector('.excuse')
    const yes1Element = document.querySelector('.yes1')
    const hoverSound = document.getElementById('hoverSound');
    const hoverSound2 = document.getElementById('hoverSound2');
    const yesSound2 = document.getElementById('yesSound2');
    const yesSound3 = document.getElementById('yesSound3');

    console.log(noButton); // Should log the button if it exists
    noButton.addEventListener('mouseover', function (){
        firstElement.style.display='none';
        noElement.style.display = 'block';
        excuseElement.style.display = 'block';
        excuseElement.style.width = '25%';
        noElement.style.width = '25%';
        noButton.innerHTML='Yes';
        hoverSound2.currentTime = 0;
        hoverSound2.play();
        hoverSound.currentTime = 0;
        hoverSound.play()
    });
    noButton.addEventListener('mouseout', () => {
        noElement.style.display = 'none';
        excuseElement.style.display = 'none';
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
    const yesSound3 = document.getElementById('yesSound3');
    const yesSound4 = document.getElementById('yesSound4');
    const noButton = document.querySelector('.buttonNo');
    const yesButton = document.querySelector('.buttonYes');
    const firstElement = document.querySelector('.first')
    const images = document.querySelector('img');
    const text = document.querySelector('p')
    const yes2Element = document.querySelector('.yes2')
   const h1 = document.querySelector('h1')
   h1.innerHTML="Holy Freaking Crap!"
   noButton.style.display='none'
   yesButton.style.display='none'
   text.style.display="flex"
   images.style.display='none'
   yes2Element.style.display='block'
   yesSound.currentTime = 0;
    yesSound.play()
    yesSound3.play()
    yesSound4.currentTime = 9
    yesSound4.play()

}
