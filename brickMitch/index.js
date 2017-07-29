const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
  res.render('brick.ejs')
})




app.listen(3000, () => {
  console.log('app listening at 3000')
})
