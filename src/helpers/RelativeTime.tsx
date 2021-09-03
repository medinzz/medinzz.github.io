// ref: https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
export const timeSince = (datetime : number) => {
  let now = new Date()
  var seconds = Math.floor((now.getTime() - datetime) / 1000);

  var interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  } else if (interval === 1){
    return Math.floor(interval) + " year";
  }


  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  } else if (interval === 1) {
    return Math.floor(interval) + " month";
  }


  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  } else if (interval === 1) {
    return Math.floor(interval) + " day";
  }


  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  } else if (interval === 1) {
    return Math.floor(interval) + " hour";
  }


  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  } else if (interval === 1) {
    return Math.floor(interval) + " minute";
  }

  return Math.floor(seconds) + " seconds";
}