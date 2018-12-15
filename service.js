var connect = require('connect');
    serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("../demo"));
app.listen(5000);
