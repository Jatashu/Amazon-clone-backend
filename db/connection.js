const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://ashu:ashujat9982@cluster0.r01g4m0.mongodb.net/",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => console.log("connected data...."))
.catch ( (err) => console.log("m is missing"+err));


// mongodb://127.0.0.1:27017/Amazonweb