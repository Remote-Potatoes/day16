const arrow = () => {
  return 3;
};

function anotherExample() {
  return Math.floor(Math.random() * 100);
}

// modularize our code, and make the `arrow` function available to whoever wants it
// module.exports = arrow;
// module.exports = anotherExample; // default export
module.exports = {
  arrow,
  anotherExample,
};
