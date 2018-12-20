var connect = require('connect');
    serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("../ReadingPlanUI"));
app.listen(80);
