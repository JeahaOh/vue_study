export function formatDate(value) {
  const date = new Date(value);

  const year = date.getFullYear();
  let month = date.getMonth();
  month = month > 9 ? month : `0${month}`;
  const day = date.getDate();
  let hours = date.getHours();
  hours = hours > 9 ? hours : `0${hours}`;
  let min = date.getMinutes();
  min = min > 9 ? min : `0${min}`;

  return `${year}.${month}.${day} ${hours}:${min}`;
}
