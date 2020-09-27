export function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
export function randomChooser (arrayList) {
  return arrayList[Math.floor(Math.random() * arrayList.length)];
};