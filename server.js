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
  req.
})
app.delete('/api/items',(req,res) => { //delete an item

})
