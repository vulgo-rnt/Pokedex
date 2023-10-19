export function bgForTimes() {
  let hr = new Date().getHours();
  if (hr > 5 && hr < 17) {
    return "/bgDay.png";
  } else if (hr >= 17 && hr <= 19) {
    return "/bgAfternoon.jpg";
  } else {
    return "/bgNight.png";
  }
}
