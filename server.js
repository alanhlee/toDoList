//A great server
const express = require('express')
const app = express()
const port = 3000

let items = ['shop', 'clean']

//get route to get all items, return an array 
app.get('/api/items', (req, res) => {
  res.send(200, items)
})

app.put('/api/createItem', (req, res) =>{
  
  let newItem = req.body
  let id =1

  let idItems = false

  //create a way to check the ID has not been used (create unique ID)
  for (let i =0; i < items.length; i++) {
    if items[i].id === id {
      console.log(true)
    } else {
      items[i].id !== id
      items.push[]
    }
  }
  
  res.send(200, items)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))