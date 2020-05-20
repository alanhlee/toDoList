//A great server
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,'/public')))
app.use(express.urlencoded())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

let arrayOfItems = []

let testItem = {
  text: 'what a great item'
  isDone: false
  uniqueID: 666
}

app.put('/modifyItem',(req,res) => { //modify an existing item
  let myNewItem = req.body //this req should pass in an item object with text, isDone, and uniqueID properties
  let indexToReplace = arrayOfItems.findIndex(item => item.uniqueID == myNewItem.uniqueID)
  arrayOfItems.splice(indexToReplace, 1, myNewItem)
  res.send.(200,arrayOfItems)
})

app.delete('/api/items',(req,res) => { //delete an item
  let myID = req.body //this req should pass in a unique ID
  let indexToReplace = arrayOfItems.findIndex(item => item.uniqueID == myNewItem.uniqueID)
  arrayOfItems.splice(indexToReplace, 1)
  res.send.(200, arrayOfItems)
})
