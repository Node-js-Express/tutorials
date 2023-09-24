import express from 'express';
import people from './13-router-people.js'; 
import auth from './14-router-auth.js'; 

const app = express();

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

app.listen(8080, () => {
  console.log('Server is listening on port 8080....');
});

/**
 * app.use('/api/people', people);를 통해서 localhost:8080/api/people라는 라우팅을 정하는 겁니다.
 * 
 */