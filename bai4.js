const arr = [2, 1, 1, 3, 2];

const migratoryBirds = (arr) => {
  return arr
    .reduce((total, curr) => {
      const existId = total.find((i) => i.id === curr);
      if (existId) existId.quantity += 1;
      else total.push({ id: curr, quantity: 1 });
      return total;
    }, [])
    .reduce(
      (result, curr) =>
        curr.quantity > result.quantity ||
        (curr.quantity === result.quantity && curr.id < result.id)
          ? curr
          : result,
      { id: 0, quantity: 0 }
    ).id;
};

console.log(migratoryBirds(arr));
