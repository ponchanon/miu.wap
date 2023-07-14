const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//place your code below
const studentRouter = require('./routes/studentRouter');


app.use('/students', studentRouter);

app.use((err, req, res, next) => {
    res.status(500).json({error: err.message})
});


app.listen(3000, () => console.log('listening to 3000...'));