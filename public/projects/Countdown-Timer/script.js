const getNextNewYear = () => {
  const now = new Date();
  const year = now.getMonth() === 0 && now.getDate() === 1 ? now.getFullYear() : now.getFullYear() + 1;
  return `1 jan ${year}`;
};

const newYears = getNextNewYear();

const countdown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 3600 / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  //   console.log(days, hours, minutes, seconds);
  daysInput.innerText = days;
  hoursInput.innerText = formatTime(hours);
  minutesInput.innerText = formatTime(minutes);
  secondsInput.innerText = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

countdown();
setInterval(countdown, 1000);
