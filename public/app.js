import Axios from "axios";

document.getElementById("addItem").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("item").focus();
  axios
    .post("/api/items", {
      item: document.getElementById("item").value,
    })
    .then((response) => {
      document.getElementById("foods").innerHTML("");
      let items = response.data.items;
      items.forEach((item) => {
      let itemElem = document.createElement("li");
      let checkBox = document.createElement('input').setAttribute('type', 'checkbox')
      itemElem.textContent = item;
      document.getElementById("items").append(itemElem)
      document.getElementById('items').append(checkBox)
    })
    .catch(err => console.log(err))
});

axios
  .get("/api/items")
  .then((response) => {
    let items = response.data.items;
    items.forEach((item) => {
      let itemElem = document.createElement("li");
      let checkBox = document.createElement('input').setAttribute('type', 'checkbox')
      itemElem.textContent = item;
      document.getElementById("items").append(itemElem)
      document.getElementById('items').append(checkBox)
    });
  })
  .catch((err) => console.log(err));
