const currentTime = document.querySelector("h1");
content = document.querySelector(".content"),
selectMenu= document.querySelectorAll("Select");
setAlarmBtn = document.querySelector("button");


let alarmTime, isAlarmSet 
ringtone = new Audio("siren.mp3")

for (let i=12; 1>0; i--) {
    i = i <10 ? "0" + i :i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentElement("afterend",option)
}

for (let i = 59; 1>= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentElement("afterend",option)
}

for (let i= 2; 1> 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentElement("afterend",option)
}

setInterval(() =>{
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >=12) {
        h = h -12
        ampm = "PM";
    }

    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s


    currentTime.innerText = (`${h}:${m}:${s} ${ampm}`);
    if(alarmTime == `${h}:${m}:${s} ${ampm}` )
        ringtone.play();
        ringtone.loop = true;
}, 1000);

function SetAlarm() {
    if(isAlarmSet) {
        alarmTime ="";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "set Alarm";
        return isAlarmSet = false ;
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`


    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, Select a valid time to set alarm");
    }

    isAlarmSet = true;
    alarmTime = time
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    console.log(time)
}

SetAlarmBtn.addEventListener("click", SetAlarm);