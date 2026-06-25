const Gen = document.querySelector('.general');
const GenText = document.querySelector('#generalText');

// Убрано "GenText =" перед стрелочной функцией
Gen.addEventListener('click', () => {
    const display = window.getComputedStyle(GenText).display;
    const screenWidth = window.screen.width;

    if(screenWidth > 850){

        if (display === "none") {
            GenText.style.display = 'block';
            Gen.style.height = "600px";
        } else {
            GenText.style.display = 'none';
            Gen.style.height = "100px";
        }
    }
    else{
        if (display === "none") {
            GenText.style.display = 'block';
            Gen.style.height = "1400px";
        } else {
            GenText.style.display = 'none';
            Gen.style.height = "100px";
        }
    }
});

const Prof = document.querySelector('.professional');
const ProfText = document.querySelector('#profesText');
Prof.addEventListener('click', () => {
    const display = window.getComputedStyle(ProfText).display;
    const screenWidth = window.screen.width;


    if(screenWidth > 800){
        if (display === "none") {
            ProfText.style.display = 'block';
            Prof.style.height = "800px";
        } else {
            ProfText.style.display = 'none';
            Prof.style.height = "100px";
        }
    }
    else{
        if (display === "none") {
            ProfText.style.display = 'block';
            Prof.style.height = "1850px";
        } else {
            ProfText.style.display = 'none';
            Prof.style.height = "100px";
        }
    }
});

const Types = document.querySelector('.Types');
const TypesText = document.querySelector('#typesText');
Types.addEventListener('click', () => {
    const display = window.getComputedStyle(TypesText).display;
    const screenWidth = window.screen.width;
    if(screenWidth > 800){
        if (display === "none") {
            TypesText.style.display = 'block';
            Types.style.height = "750px";
        } else {
            TypesText.style.display = 'none';
            Types.style.height = "100px";
        }
    }
    else{
        if (display === "none") {
            TypesText.style.display = 'block';
            Types.style.height = "2100px";
        } else {
            TypesText.style.display = 'none';
            Types.style.height = "240px";
        }
    }
});