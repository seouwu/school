const express =require('express');
const app=express();
const port = 3001;

app.get('/',(req,res)=>{
    res.send('https://seouwu.github.io/school2/');
});

app.listen(port, () => {
    console.log('서버가 실행됩니다. http://localhost:${port}')
});