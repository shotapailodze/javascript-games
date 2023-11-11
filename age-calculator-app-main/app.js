function age() {
  const dateBirth = document.getElementById("date").value;
  const monthBirth = document.getElementById("month").value;
  const yearBirth = document.getElementById("year").value;

  let date = new Date();

  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dateBirth > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (monthBirth > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - dateBirth;
  let m = m2 - monthBirth;
  let y = y2 - yearBirth;

  document.getElementById("days").innerHTML = `${d} Days Old`;
  document.getElementById("months").innerHTML = `${m} Months Old`;
  document.getElementById("years").innerHTML = `${y} Years Old`;
}
