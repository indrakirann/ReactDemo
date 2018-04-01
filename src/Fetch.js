import fetch from 'node-fetch';



    function get(url , action , data){
        data['action'] = action;
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), 
            headers: new Headers({
            'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
            return response;
        });

    }

    function post(url , action , data){
        
        data['action'] = action;
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), 
            headers: new Headers({
            'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
            return response;
        });

    }

export {get , post} ;
