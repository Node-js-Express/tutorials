import { createServer } from 'http';

const server = createServer();

server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(8080, () => {
  console.log('Server listening on port : 8080....');
});
