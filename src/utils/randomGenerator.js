const randInt = (min, max) => {
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  return rand
};

export { randInt }

