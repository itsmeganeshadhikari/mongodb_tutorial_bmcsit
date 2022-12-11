const mongoose = require('mongoose');

const dbConnection = async() =>{
try {
   const conn =  await mongoose.connect(encodeURI(process.env.DB_CONNECT),
   {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

conn.on('connected',()=>{
    debug('DB connected')
})

conn.on('error',(err)=>{
    debug( `Db connection error ${err}`)
})

conn.on('disconnected',()=>{
    debug(`Db disconnected`)
})
return conn;
} catch (error) {
    console.log(error);
    debug({message:error.message})
}
}
module.exports = dbConnection;