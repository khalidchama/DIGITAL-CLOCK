// Digital clock

// Function to display clock
function myClock () {
    const date = new Date();
    const d = date.getDate();
    const w = date.getDay();
    const mo = date.getMonth();
    const y = date.getFullYear();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    
    // Day
    switch (w) {
        case 0:
            document.getElementById('day').innerHTML = 'Sunday';
            break;
        case 1:
            document.getElementById('day').innerHTML = 'Monday';
            break;
        case 2:
            document.getElementById('day').innerHTML = 'Tuesday';
            break;
        case 3:
            document.getElementById('day').innerHTML = 'Wednesday';
            break;
        case 4:
            document.getElementById('day').innerHTML = 'Thursday';
            break;
        case 5:
            document.getElementById('day').innerHTML = 'Friday';
            break;
        case 6:
            document.getElementById('day').innerHTML = 'Saturday';
            break;
        default:
            document.getElementById('day').innerHTML = 'none';
    }
    // Date, Month and Year
    if (d < 10) {
        document.getElementById('date').innerHTML = `0${d}`;;
    } else {
        document.getElementById('date').innerHTML = d;
    }
    if (mo < 10) {
        document.getElementById('month').innerHTML = `0${mo}`;
    } else {
        document.getElementById('month').innerHTML = mo;
    }
    document.getElementById('year').innerHTML = y;

    // Hour, Minutes and Seconds
    if (h < 10) {
    document.getElementById('hours').innerHTML = `0${h}`;
    } else {
        document.getElementById('hours').innerHTML = `${h}`;
    }

    if (m < 10 || m > 59) {
        document.getElementById('minutes').innerHTML = `0${m}`;
    } else {
        document.getElementById('minutes').innerHTML = `${m}`;
    }
    
    if ( s < 10 || s > 59) {
        document.getElementById('seconds').innerHTML = `0${s}`;
    } else {
        document.getElementById('seconds').innerHTML = `${s}`;
    }
}

// Set tinem interval to display clock (set seconds) using milliseconds. Note that 1s = 1000ms
setInterval(myClock, 1000);