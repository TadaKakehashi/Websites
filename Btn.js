let btn = document.querySelector('.btn1');
let currMode = "light";
btn.addEventListener('click',()=>{
    if(currMode == 'light'){
        currMode = 'dark';
        document.querySelector('body').style.backgroundColor= 'black';
        btn.innerText = 'Light Mode';
        btn.style.cssText = 'color: black; background-color:yellow; font-size:20px';
    }
    else{
        currMode = 'light';
        document.querySelector('body').style.backgroundColor= 'white';
        btn.innerText = 'Dark Mode';
        btn.style.cssText = 'color:black; background-color:red; font-size:20px';
    }
    }
)