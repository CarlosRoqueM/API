import app from "./app";


const main = () => {

    

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
      });

    app.listen(app.get("port"));
    
    console.log(`Server on port ${app.get("port")}`);

};

main();