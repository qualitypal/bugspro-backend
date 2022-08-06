const axios = require('axios');

test('Get Version', ()=> {
    let version = '';
    axios
    .get('http://localhost:3000/version')
    .then(res => {
        version = res.data.version;
        //console.log(res);
        expect(version).toEqual('0.0.1');
    })
    .catch(error => {
        console.log(error);
    });

    

});


