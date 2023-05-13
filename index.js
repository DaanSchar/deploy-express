const express = require('express');
const fs = require('fs')
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    fs.readFile('./home.html', 'utf-8', (err, html) => {
        if (err) {
            res.send("Service currently unavailable")
        }

        res.send(html);
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})