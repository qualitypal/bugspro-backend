const axios = require('axios');

test('Get Version', ()=> {
    let version = '';
    axios
    .get('http://localhost:3000/version')
    .then(res => {
        version = res.data.version;
        //console.log(version);
        expect(version).toEqual('0.0.2');
    })
    .catch(error => {
       // expect(version).toEqual('0.0.1');
    });
});


