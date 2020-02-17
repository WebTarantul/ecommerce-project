export function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });
}

export function removeItemWithIndex(arr, idx) {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
}
const colorsArr = [
  'red',
  'black',
  'pink',
  'yellow',
  'red',
  'black',
  'pink',
  'yellow',
  'red',
  'black',
  'pink',
  'yellow',
  'red',
  'black',
  'pink',
  'yellow',
];

export function getColorFromInitials(initials) {
  const code = initials.charCodeAt(0) + initials.charCodeAt(1);
  const index = code % colorsArr.length;

  return colorsArr[index];
}
