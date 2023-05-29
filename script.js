let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

setInterval(()=>{
    let TodayDate = new Date();
    let hr = TodayDate.getHours();
    let min = TodayDate.getMinutes();
    let sec = TodayDate.getSeconds();


    if(hr < 10){
            hr = '0' + hr
    }
    if(min < 10){
         min = '0' + min
        }
    if(sec < 10){
        sec = '0' + sec
    }




    hours.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = sec
})