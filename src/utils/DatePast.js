export const datePast = function (date) {
  let today = new Date();
  if (date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

export const dateToday = function (date) {
  let today = new Date();
  if (date.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};
