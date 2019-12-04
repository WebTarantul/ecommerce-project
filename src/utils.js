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
