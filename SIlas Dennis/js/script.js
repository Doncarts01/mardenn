let i = 0;
load = () => {
    if(i == 0){
        i = 1;
        let elem = document.querySelector('#Web');
        let wid = 1;
        let id = setInterval(() => {
           if(wid >= 100){
            clearInterval(id);
           } else{
            wid++;
            elem.style.width = wid + "%";
           }
        }, 2000);
    }
}