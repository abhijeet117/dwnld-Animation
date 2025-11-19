
let bar = document.querySelector(".bar");
let percentage = document.querySelector(".percentage");
let btn = document.querySelector("button");

let counter = 0;
let interval;

btn.addEventListener('click', function() {
    
    counter = 0;
    clearInterval(interval);
    bar.style.width = '0%';
    percentage.innerHTML = '0%'
    

    interval = setInterval(()=>{
        counter++
        bar.style.width = counter + '%';
        bar.style.backgroundColor = '#469110'

        percentage.innerHTML = counter+'%';

        if(counter >= 100) {
            clearInterval(interval);
        }
    }, 50)

    // setTimeout(()=>{
    //     clearInterval(interval);
    // }, 5000)
})