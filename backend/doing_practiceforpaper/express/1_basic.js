const express=require('express')
const app=express()
const Port=3000;
app.get('/',(req,res)=>{
res.send("hello world")
})
app.get('/params/:name/:age',(req,res)=>{
    const name=req.params.name;
    const age=req.params.age;
    res.send(`hello ${name} and your age is ${age}`)
})
// Route:
app.get('/search', (req, res) => {
  const fruit = req.query.fruit;  // Gets 'apple' from ?fruit=apple
  res.send(`Searching for: ${fruit}`);
});

// URL: /search?fruit=apple
// req.query.fruit = 'apple'

// Multiple query params:
// URL: /search?fruit=apple&color=red
// req.query = { fruit: 'apple', color: 'red' }

app.listen(Port,()=>{
    console.log("server is running on port 3000")
})