const makeFunction = (n) => {
  return new Promise((resolve,reject) => {
    console.log('from promise');
    if(1===n){
      console.log('did we get here?')
      resolve('it worked!');
    } else {
      reject('no it didnt work');
    }
  }); // end promise 
};

const getResponse = async() => {
  try {
    let results = await makeFunction(1);
    // handle outputs here
    return results;
  } catch(e){
    return e;
  }
}

module.exports = {makeFunction, getResponse};