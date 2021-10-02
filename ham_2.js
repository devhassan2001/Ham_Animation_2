// * get the container div (div with id ham_1)
const hamContainer = document.querySelector('#ham_2');

// * get the data from the classes names
const data = [];

data.push(hamContainer.getAttribute('data-bars_thickness'));
data.push(hamContainer.getAttribute('data-speed'));
data.push(hamContainer.getAttribute('data-middle_bar_color'));
data.push(hamContainer.getAttribute('data-top_down_bars_color'));


// * create the hamburger icon bars
const mainBar = document.createElement('div');

// * set the classes of the main bar
mainBar.classList.add('mainBar');

// * set the user data change
const root = document.querySelector(':root'); 
root.style.setProperty("--bars-height", `${data[0]}px`);
root.style.setProperty("--transition", `all ${data[1]}s ease-in-out`);
root.style.setProperty("--mainBar-backgroundColor", `${data[2]}`);
root.style.setProperty("--pseudo-backgroundColor", `${data[3]}`);


// * add elements to the DOM
hamContainer.appendChild(mainBar);

let start = true;
hamContainer.addEventListener('click', () => {
    if (start) {
        hamContainer.classList.remove('resetPosition');
        hamContainer.classList.add('setRotate');
        hamContainer.classList.add('backDisapear');
        hamContainer.classList.add('moveAway');
        setTimeout(() => {
            hamContainer.classList.add('backQuckly');            
            hamContainer.classList.remove('moveAway');            
        }, data[1] * 1000 );
        start = false;
    } else {
        hamContainer.classList.add('moveAway');  
        setTimeout(() => {
            hamContainer.classList.remove('backQuckly'); 
            hamContainer.classList.remove('moveAway');
            hamContainer.classList.remove('setRotate');
            hamContainer.classList.add('resetPosition');
            hamContainer.classList.remove('backDisapear');
        }, data[1] * 500);
        // hamContainer.classList.remove('backDisapear');
        start = true;
    }
})