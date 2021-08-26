export const formatDate = function (date) {
  const formattedDate =
    date[6] +
    date[7] +
    date[8] +
    date[9] +
    '-' +
    date[0] +
    date[1] +
    '-' +
    date[3] +
    date[4] +
    'T00:00:00';
  return formattedDate;
};
