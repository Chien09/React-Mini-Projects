const pie = 3.1415962;

function doublePi() {
  return pie * 2;
}

function triplePi() {
  return pie * 3;
}

//so other files can use this variable, ONLY one export default allowed per file
export default pie;

//so other files can use these functions
export { doublePi, triplePi };
