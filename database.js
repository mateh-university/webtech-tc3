const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mateh:xVBGvBjoiz3w23zT@cluster0-ydj76.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(info=>{
  console.log('Database Connected')  
})