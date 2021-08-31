const fetch = require("node-fetch")

fetch("https://api.ibs.it/se-questo-uomo-libro-primo-levi/e/9788806219352")
.then( res => res.json())
.then( res => console.log(res))