const getTodos = async (resource) => {
    const response = await fetch(resource);
    if(response.status != 200){
        throw new Error('Cannot fetch the data');
    }
    const data = await response.json();
    return data;
}

getTodos('luigi.json')
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err.message));
getTodos('marios.json')
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err.message));
getTodos('shaun.json')
    .then(data => console.log('resolved: ', data))
    .catch(err => console.log('rejected: ', err));



















/*const getTodosDeneme = (resource) => {
    fetch(resource).then(response => {
        console.log('resolved', response);
        //console.log(Response.prototype.json);
        //console.log(response.json)
        return response.json();
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log('rejected', err);
    })
}

getTodosDeneme('luigi.json');
getTodosDeneme('mario.json');
getTodosDeneme('shaun.json');*/