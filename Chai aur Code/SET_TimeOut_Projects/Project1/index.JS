function random_color_generator(){
    const color_range = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i<6 ;i++){
        color+= color_range[Math.floor(Math.random()*16)];
    }
    return color
}

// pointing the both buttons 
let start_button = document.querySelector('.start');
let stop_button = document.querySelector('.stop');

// Making the functions for changing color and stopping the color 
let refer_of_id ;

function color_changer(){
    if(!refer_of_id){
    refer_of_id =setInterval(function(){
        document.body.style.backgroundColor = random_color_generator();

    }, 500 )
}
    
}

function stop_change(){
    clearInterval(refer_of_id);
    refer_of_id = null;
}

start_button.addEventListener('click',color_changer);
stop_button.addEventListener('click',stop_change);



