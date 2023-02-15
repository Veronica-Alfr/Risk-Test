const app = require('./app');

const port = 3000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('Listenning in port', port));
