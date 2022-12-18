const express = require("express")
const app = express();
const port = process.env.PORT || 80


app.get('/',(req,res)=>{
res.send("HELLOOO WELCOME JIBIN")
})

app.get('/pp',(req,res)=>{
  res.send("hellooooo pal")
})
app.listen(port, ()=>{console.log("JBXVserver running on port 80")}
