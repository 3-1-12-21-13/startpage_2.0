function displayClock() {
    const clockContainer = document.querySelector("#clockContainer");
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    if (hrs > 12) {
        hrs = hrs - 12
    }  
    if (hrs < 10) {
        hrs = "0" + hrs
    }
    if (min < 10) {
        min = "0" + min
    }
    clockContainer.innerHTML = hrs + ':' + min;
}


function main() {

    // --- CLOCK --- //

    clockContainer = document.querySelector("#clockContainer");
    clockColorSetting = document.querySelector("#clockColorSetting");
    clockFontSetting = document.querySelector("#clockFontSetting");
    clockFontSizeSetting = document.querySelector("#clockFontSizeSetting");
    clockLineHeightSetting = document.querySelector("#clockLineHeightSetting");

    // load user prefs
    if (localStorage.getItem("clockColor") != null) {
        clockContainer.style.color = clockColorSetting.value = localStorage.getItem("clockColor");
    }
    if (localStorage.getItem("clockFont") != null) {
        clockContainer.style.fontFamily = clockFontSetting.value = localStorage.getItem("clockFont");
    }
    if (localStorage.getItem("clockFontSize") != null) {
        clockContainer.style.fontSize = localStorage.getItem("clockFontSize") + 'vw';
        clockFontSizeSetting.value = localStorage.getItem("clockFontSize");
    }
    if (localStorage.getItem("clockLineHeight") != null) {
        clockContainer.style.lineHeight = localStorage.getItem("clockLineHeight") + 'vw';
        clockLineHeightSetting.value = localStorage.getItem("clockLineHeight");
    }

    // display correct time and update it every 1000ms
    displayClock();
    setInterval(displayClock, 1000);

    // --- BOOKMARKS --- //

    bookmarkContainer = document.querySelector("#bookmarkContainer");
    aB1 = document.querySelector("#aB1");
    imgB1 = document.querySelector("#imgB1");
    aB1Setting = document.querySelector("#aB1Setting");
    imgB1Setting = document.querySelector("#imgB1Setting");

    aB2 = document.querySelector("#aB2");
    imgB2 = document.querySelector("#imgB2");
    aB2Setting = document.querySelector("#aB2Setting");   
    imgB2Setting = document.querySelector("#imgB2Setting");

    aB3 = document.querySelector("#aB3");
    imgB3 = document.querySelector("#imgB3");
    aB3Setting = document.querySelector("#aB3Setting");
    imgB3Setting = document.querySelector("#imgB3Setting");

    aB4 = document.querySelector("#aB4");
    imgB4 = document.querySelector("#imgB4");
    aB4Setting = document.querySelector("#aB4Setting");
    imgB4Setting = document.querySelector("#imgB4Setting");

    // load user prefs
    if (localStorage.getItem("aB1") != null) {
        aB1.href = aB1Setting.value = localStorage.getItem("aB1");
    }
    if (localStorage.getItem("aB2") != null) {
        aB2.href = aB2Setting.value = localStorage.getItem("aB2");
    }
    if (localStorage.getItem("aB3") != null) {
        aB3.href = aB3Setting.value = localStorage.getItem("aB3");
    }
    if (localStorage.getItem("aB4") != null) {
        aB4.href = aB4Setting.value = localStorage.getItem("aB4");
    }
    if (localStorage.getItem("imgB1") != null) {
        imgB1.src = imgB1Setting.value = localStorage.getItem("imgB1");
    }
    if (localStorage.getItem("imgB2") != null) {
        imgB2.src = imgB2Setting.value = localStorage.getItem("imgB2");
    }
    if (localStorage.getItem("imgB3") != null) {
        imgB3.src = imgB3Setting.value = localStorage.getItem("imgB3");
    }
    if (localStorage.getItem("imgB4") != null) {
        imgB4.src = imgB4Setting.value = localStorage.getItem("imgB4");
    }

    // make settings work
    aB1Setting.oninput = function() {
        newValue = aB1Setting.value;
        aB1.href = newValue;
        localStorage.setItem("aB1", newValue);        
    }
    aB2Setting.oninput = function() {
        newValue = aB2Setting.value;
        aB2.href = newValue;
        localStorage.setItem("aB2", newValue);        
    }
    aB3Setting.oninput = function() {
        newValue = aB3Setting.value;
        aB3.href = newValue;
        localStorage.setItem("aB3", newValue);        
    }
    aB4Setting.oninput = function() {
        newValue = aB4Setting.value;
        aB4.href = newValue;
        localStorage.setItem("aB4", newValue);        
    }
    imgB1Setting.oninput = function() {
        newValue = imgB1Setting.value;
        imgB1.src = newValue;
        localStorage.setItem("imgB1", newValue);
    }
    imgB2Setting.oninput = function() {
        newValue = imgB2Setting.value;
        imgB2.src = newValue;
        localStorage.setItem("imgB2", newValue);
    }
    imgB3Setting.oninput = function() {
        newValue = imgB3Setting.value;
        imgB3.src = newValue;
        localStorage.setItem("imgB3", newValue);
    }
    imgB4Setting.oninput = function() {
        newValue = imgB4Setting.value;
        imgB4.src = newValue;
        localStorage.setItem("imgB4", newValue);
    }

    // --- GENERAL --- //
    
    body = document.querySelector("body");
    apexContainer = document.querySelector("#apexContainer");
    generalBackgroundSetting = document.querySelector("#generalBackgroundSetting");
    generalBlurIntensitySetting = document.querySelector("#generalBlurIntensitySetting");

    // load user prefs
    if (localStorage.getItem("generalBackground") != null) {
        body.style.backgroundImage = "url(" + localStorage.getItem("generalBackground") + ")";
        generalBackgroundSetting.value = localStorage.getItem("generalBackground");
    } else {
        body.style.backgroundImage = "url('assets/calvin.jpg')";
        generalBackgroundSetting.value = "assets/calvin.jpg";
    }
    if (localStorage.getItem("generalBlurIntensity") != null) {
        apexContainer.style.backdropFilter = "blur(" + localStorage.getItem("generalBlurIntensity") + "px)";
        generalBlurIntensitySetting.value = localStorage.getItem("generalBlurIntensity");
    }
}

// run main after window loads
window.onload = main;