axios.get('https://api.github.com/users/LucasMMF')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });

// Para mais informações: https://github.com/axios/axios
