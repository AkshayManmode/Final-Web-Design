
const timeLineElement1 = document.querySelectorAll(".time-animation-block-1");
const timeLineElement2 = document.querySelectorAll(".time-animation-block-2");
window.addEventListener('scroll',displayAnimation);

function displayAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log("triggerBottom ---> ",triggerBottom);

    timeLineElement1.forEach((element) => {
        console.log("Element :: ",element);
        const elementPosition = element.getBoundingClientRect().top;
        console.log("Element ----> ",elementPosition);
        if(elementPosition<triggerBottom){
            element.classList.add('show')
        }
    });

    timeLineElement2.forEach((element) => {
        console.log("Element :: ",element);
        const elementPosition = element.getBoundingClientRect().top;
        console.log("Element ----> ",elementPosition);
        if(elementPosition<triggerBottom){
            element.classList.add('show')
        }
    });

}