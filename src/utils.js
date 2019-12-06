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
