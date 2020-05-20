//A great server
const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded())
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

let arrayOfItems = []

let testItem = {
  text: 'what a great item'
  isDone: false
  uniqueID: 666
}

app.put('modifyItem',(req,res) => { //modify an existing item
  myNewItem = req.body //this req should pass in an item object with text, isDone, and uniqueID properties
  let indexToReplacearrayOfItems.findIndex(item => item.uniqueID == myNewItem.uniqueID)
  arrayOfItems.splice(
})
app.delete('/api/items',(req,res) => { //delete an item

})
