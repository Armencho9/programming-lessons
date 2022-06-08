const axios = require('axios');
const fs = require("fs");
while (conditions) {
    let i = 0
    while (i < 200)
        axios.get('https://http.cat', { responseType: 'arraybuffer' })
        .then(function(response) {

            fs.writeFileSync("cat.jpg", response.data)
            console.log(response);
        })
}