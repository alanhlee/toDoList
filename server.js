//A great server
const express = require('express')
const app = express()
const port = 3000


// GET route to load to do list items(/api/items)
// should return an array of items with a text: property, an isDone property, and a uniqueID property

let items = []
//get route to get all items
app.get('/items', (req, res) =>{
  items.push({ items })
}

//put route to update the item

//delete route to delte the item

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))