const compareDay = (time) => {
  const before =
    new Date(time).getFullYear() +
    new Date(time).getMonth() +
    new Date(time).getDate();
  const now =
    new Date().getFullYear() + new Date().getDate() + new Date().getMonth();

  return now <= before ? true : false;
};

module.exports = {
  compareDay,
};
