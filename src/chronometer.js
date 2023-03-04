class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    }
    let minutesPassed = this.currentTime / 60;
    return Math.floor(minutesPassed);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let secondsPassed = this.currentTime % 60;
    return Math.floor(secondsPassed);
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0` + value;
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

//1 centisecond = 10 milliseconds
// 1 second = 100 centiseconds = 1000 milliseconds
