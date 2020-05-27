const animalSortComparator = (firstEl, secondEl) => {
  const compareByNumberOfLegs = (firstEl.numberOfLegs - secondEl.numberOfLegs);
  if (!compareByNumberOfLegs) {
    if (firstEl.name == secondEl.name)
      return 0;
    return (firstEl.name > secondEl.name) ? 1 : -1;
  }
  return compareByNumberOfLegs;
};

const animalSort = animals => {
  if (animals instanceof Array)
    animals.sort(animalSortComparator);
  return animals;
};

export { animalSort };
