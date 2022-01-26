  const http = require('http');
  const fs = require('fs');

function myReadFile(file_path) {
    return new Promise((resolve, reject) => {
      fs.readFile(file_path, (error,data) => {
        if (error) {
          return reject(error);
        }
        resolve(data); 
    });
    });
  }

  
  const server = http.createServer(async (req, res)=>{

    const data = await myReadFile('./practice/headers.txt') ;
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
  });
  res.end(data);
});

server.listen(3000);


// fs.writeFile(__dirname + '/headers.json', JSON.stringify(request.headers), error => {
        
//     if (error) 
// return console.log(error);
// });
// 以上請包成promise
