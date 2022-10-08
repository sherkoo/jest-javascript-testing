const makeFunction = (n) => {
  return new Promise((resolve,reject) => {
    console.log('from promise');
    if(1===n){
      console.log('did we get here?')
      resolve(1 + 'it worked!');
    } else {
      reject('no it didnt work');
    }
  }); // end promise
}

// makeFunction(1).then(response => {
//   return response;
// }).then(data => {
//   console.log(data);
// }).catch(e => {
//   console.log(e);
// });

const getResponse = async() => {
  try {
    let results = await makeFunction(1);
    // handle outputs here
    return results;
  } catch(e){
    return e;
  }
}

getResponse().then((res) => {
  return res;
}).then(results => {
  console.log('this is from new thing .then');
  console.log(results);
});
