// const countDownDate = new Date(Date.UTC(2023, 1, 27, 23, 59, 59)).getTime();
// const dayField = document.getElementById("day");
// const hourField = document.getElementById("hour");
// const minuteField = document.getElementById("minute");
// const secondField = document.getElementById("second");

// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// const day = hour * 24;

// const updateCountDown = () => {
//     const now = new Date().getTime();
//     const timeDifference = countDownDate - now;

//     let textDay = '0';
//     let textHour = '0';
//     let textMinute = '0';
//     let textSecond = '0';
//     if (timeDifference > 0) {
//         textDay = Math.floor(timeDifference / day).toString();
//         textHour = Math.floor((timeDifference % day) / hour).toString();
//         textMinute = Math.floor((timeDifference % hour) / minute).toString();
//         textSecond = Math.floor((timeDifference % minute) / second).toString();
//     }

//     dayField.innerHTML = textDay;
//     hourField.innerHTML = textHour;
//     minuteField.innerHTML = textMinute;
//     secondField.innerHTML = textSecond;

//     if (timeDifference < 0) {
//         clearInterval(countdownInterval);
//     }
// };

// const countdownInterval = setInterval(updateCountDown, 1000);

// updateCountDown();
// document.getElementById('countdown').classList.remove('not-visible');