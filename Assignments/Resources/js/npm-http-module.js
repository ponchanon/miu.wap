// Question 01
const dns = require('dns');
dns.resolve4('www.miu.edu', function (error, address) {
    if (error) throw error;
    console.log(address);
});

//Question 02
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const imageFilePath = 'Resources/Images/happy_face.jpg';
    const imageReadStream = fs.createReadStream(imageFilePath);

    res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Disposition': 'attachment; filename="image.jpg"'
    });

    imageReadStream.pipe(res);
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});        