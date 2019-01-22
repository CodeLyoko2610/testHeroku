const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req,res)=>{
//     res.send("Hello World!");
// })
app.use('/haha', express.static('public'));

app.get('/', (req, res) => {
    res.send('Hihi');
});

app.listen(port, () => {
    console.log("Running on port " + port);
})