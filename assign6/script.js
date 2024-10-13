let count= 0

document.querySelector('#incbtn').addEventListener('click', function(){
    count++;
    document.getElementById('count').textContent = count;
})

document.querySelector('#decbtn').addEventListener('click', function(){
    count--;
    document.getElementById('count').textContent = count;
})

document.querySelector('#reset').addEventListener('click', function(){
    count = 0;
    document.getElementById('count').textContent = count;
})

let iswhite = true;

document.querySelector('#btn').addEventListener('click',function(){
    if(iswhite){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        document.querySelector('#btn').textContent = 'Light theme'

    }
    else{
         document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        document.querySelector('#btn').textContent = 'Dark theme'
    }

    iswhite = !iswhite;
})