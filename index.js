//DOMContentLoaded event - waits until the whole DOM has loaded then runs the js event listeners
document.addEventListener('DOMContentLoaded', ()=>{
    //click event
    document.querySelector('#fifaButton').addEventListener('click', load_fifaPage);
    document.querySelector('#nbaButton').addEventListener('click', load_nbaPage);
    document.querySelector('#codButton').addEventListener('click', load_codPage);    
    document.querySelector('#aboutUsButton').addEventListener('click', load_aboutUs);
    document.querySelector('#homeButton').addEventListener('click', load_home);
    //mouseover event
    document.querySelectorAll('.card-title').forEach(function (title) {
        title.addEventListener('mouseover', changeTitleColor);
    })
    //mouseout event
    document.querySelectorAll('.card-title').forEach(function (title) {
        title.addEventListener('mouseout', restoreTitleColor);
    })
    //load homepage as default page
    load_home();
});

//loads home page after click event 
function load_home(e) {
    document.querySelector("#homeSection").style.display = 'block';
    document.querySelector("#fifa24").style.display = 'none';
    document.querySelector("#NBA2K24").style.display = 'none';
    document.querySelector("#COD").style.display = 'none';
    document.querySelector("#About-us").style.display = 'none';
    //change title
    if (e.target.textContent === "Home") {
        const title = document.querySelector('#h1');
        title.textContent = "Virtual Realms Unleashed: Exploring the Gamer's Universe";
        console.log(e.target.textContent);    
    }
}
//loads fifapage after click event
function load_fifaPage(e) {
    document.querySelector("#homeSection").style.display = 'none';
    document.querySelector("#fifa24").style.display = 'flex';
    document.querySelector("#NBA2K24").style.display = 'none';
    document.querySelector("#COD").style.display = 'none';
    document.querySelector("#About-us").style.display = 'none';
    //change title
    if (e.target.textContent === "fifa24") {
        const title = document.querySelector('#h1');
        title.textContent = "EA Sports FC 24";
        console.log(e.target.textContent);    
    }
}
//loads the nbapage after event
function load_nbaPage(e) {
    document.querySelector("#homeSection").style.display = 'none';
    document.querySelector("#fifa24").style.display = 'none';
    document.querySelector("#NBA2K24").style.display = 'flex';
    document.querySelector("#COD").style.display = 'none';
    document.querySelector("#About-us").style.display = 'none';
    //change title
    if (e.target.textContent === "NBA2K24") {
        const title = document.querySelector('#h1');
        title.textContent = "NBA2K24";
        console.log(e.target.textContent);    
    }
}
//loads the call of duty page after event
function load_codPage(e) {
    document.querySelector("#homeSection").style.display = 'none';
    document.querySelector("#fifa24").style.display = 'none';
    document.querySelector("#NBA2K24").style.display = 'none';
    document.querySelector("#COD").style.display = 'flex';
    document.querySelector("#About-us").style.display = 'none';
    //CHANGE TITLE 
    if (e.target.textContent === "callofduty") {
        const title = document.querySelector('#h1');
        title.textContent = "Call of Duty: Modern Warfare III 2023";
        console.log(e.target.textContent);    
    }
}
//loads the about us page after the click event has been received on the about us button
function load_aboutUs(e) {
    document.querySelector("#homeSection").style.display = 'none';
    document.querySelector("#fifa24").style.display = 'none';
    document.querySelector("#NBA2K24").style.display = 'none';
    document.querySelector("#COD").style.display = 'none';
    document.querySelector("#About-us").style.display = 'flex';
    //change title to about us
    if (e.target.textContent === "About Us") {
        const title = document.querySelector('#h1');
        title.textContent = "About Us";
        console.log(e.target.textContent);    
    }
    
}
//changes color of card title on mouseover to red
function changeTitleColor(e) {
    this.style.color = "Red";
}
// changes the color of card title on mouseout back to default
function restoreTitleColor(e) {
    this.style.color = "orange";
}