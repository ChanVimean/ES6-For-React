const chore1 = () => {
  const result = setTimeout(() => {
    console.log("Task 1 completed");
  }, 1000);

  return result;
};

const chore2 = () => {
  const result = setTimeout(() => {
    console.log("Task 2 completed");
  }, 2000);
  return result;
};

const chore3 = () => {
  const result = setTimeout(() => {
    console.log("Task 3 completed");
  }, 500);
  return result;
};

chore1();
chore2();
chore3();