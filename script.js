
let bar = document.querySelector(".bar");
let percentage = document.querySelector(".percentage");
let btn = document.querySelector("button");

let counter = 0;
let interval;

btn.addEventListener('click', function() {
    

    interval = setInterval(()=>{
        counter++
        bar.style.width = counter + '%';
        bar.style.backgroundColor = '#469110'

        percentage.innerHTML = counter+'%'
    }, 50)

    setTimeout(()=>{
        clearInterval(interval);
    }, 5000)
})