function fetchData() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        const data = 'This is some data';
        resolve(data);
      }, 2000);
    });
  }
  
  fetchData()
    .then(function (data) {
      console.log('Received data:', data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
  