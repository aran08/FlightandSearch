const express = require("express");
const bodyparser = require('body-parser')

const {PORT} = require("./config/serverconfig")

const Apiroutes = require('./routes/index')

const setuppandstartserver = async () => {
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.use('/api', Apiroutes);

    app.listen(PORT, () => {
        console.log(`Server Syarted at ${PORT}`);
    })
}

setuppandstartserver();