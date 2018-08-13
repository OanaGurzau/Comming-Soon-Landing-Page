const countdown = document.querySelector('.countdown');

// set the launch date (miliseconds)

const launchDate = new Date('Jan 1, 2020 16:00:00').getTime();

//update every second
const intvl = setInterval(() => {
    // get todays date and time in miliseconds
    const now = new Date().getTime();

    //Distance from now to launch Date
    const distance = launchDate - now;

    //time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24)); //days
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //hours
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result

    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    // if launchdate passed

    if(distance < 0){
        // stop countdown
        clearInterval(intvl);
        //style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';
    }

}, 1000 );
