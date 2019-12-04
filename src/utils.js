export function removeItemWithIndex(arr, idx) {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
}
