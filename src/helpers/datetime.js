const compareDay = (time) => {
  const before =
    new Date(time).getFullYear() +
    new Date(time).getMonth() +
    new Date(time).getDate();
  const now =
    new Date().getFullYear() + new Date().getMonth() + new Date().getDate();

  return now <= before ? true : false;
};

const compareMonth = (time) => {
  const before = new Date(time).getFullYear() + new Date(time).getMonth();
  const now = new Date().getFullYear() + new Date().getMonth();

  return now <= before ? true : false;
};

module.exports = {
  compareDay,
  compareMonth,
};
