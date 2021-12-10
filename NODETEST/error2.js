const fs = require('fs');

setInterval(() =>{
    fs.unlink('./abcd/js',(err)=>{  // 존재하지 않는 파일
        if (err){
            console.error(err);
        }
    });
},1000);