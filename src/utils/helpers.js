import {v4 as uuid} from "uuid";

import {nasaLogo} from "../img";

const randomLikes = () => Math.floor(Math.random() * 150);

export const processData = (data) =>
  data
    .filter((obj) => obj.media_type === "image")
    .reverse()
    .map((image) => ({
      ...image,
      likes: randomLikes(),
      id: uuid(),
      user: {
        username: "nasa",
        picture: nasaLogo,
      },
    }));

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

export const backToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
};

export const substractTenDays = (date) =>
  new Date(Date.parse(date) - 864000000).toLocaleDateString();
// 864000000 is the number of milliseconds in ten days
