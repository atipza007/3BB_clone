const express = require('express');
const cors = require('cors');
const app = express();

const imgdata = [{
    id: 1, url: "https://fiber.3bb.co.th/wp-content/uploads/2023/01/Thai-web-1920.jpg"
},
{ id: 2, url: "https://fiber.3bb.co.th/wp-content/uploads/2022/08/HOTD_Home-slide-Top-Banner_1920x680.jpg" },
{ id: 3, url: "https://fiber.3bb.co.th/wp-content/uploads/2023/03/HomeSlideBanner1920x680-1.jpg" }
]
app.use(cors());

app.get('/imgbanner', (req, res) => {
    res.json(imgdata);
});

app.listen(9000, () => {
    console.log('Application is running on port 9000');
});
