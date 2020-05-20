//eventListener for add items
  //if form, make sure to event prevent


axios.get('/api/items')
  .then(response => {
    let foods = response.data.foods

    items.forEach(items => {
      //need li in todo
      let itemElem = document.createElement('li')
      itemElem.textContent= item
      document.getElementById('items').append(itemElem)
    })
  })
  .catch(err => console.error(err))