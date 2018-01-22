module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["mobileBackend"] = {
        host: process.env.EndPoint_mobileBackend,
        port: 3306,
        user: "rnavagamuwa",
        password: "12345678",
        database: "mobileBackend",
    };
    };