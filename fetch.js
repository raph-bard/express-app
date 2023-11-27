fetch("https://www.boredapi.com/api/activity")
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.error(err));