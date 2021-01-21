const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

app.get('/download', (req, res) => {
    var URL = req.query.url;
    res.header('Content-Disposition', 'attachment;filename="video.mp4"');
    
    ytdl(URL, {
        format: "mp4"
    }).pipe(res);
});
