window.addEventListener('keydown',function(e){
    document.querySelector('.key_code').innerHTML = e.keyCode;
    if(e.key == " "){document.querySelector('.key').innerHTML = 'space';
    }
    else{
    document.querySelector('.key').innerHTML = e.key;
    }

    document.querySelector('.code').innerHTML = e.code;

})