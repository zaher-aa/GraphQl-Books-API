const app = require('./v1/app');

const port = app.get('port');

app.listen(port, () => console.log(`http://localhost:${port}`));
