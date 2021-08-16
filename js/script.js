var api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
    .then(function(respone){
        return respone.json();
    })
    .then(function(data){
        var htmls = data.map(function(data){
            
            return `<tr>
                        <td>${data.name}</td>
                        <td>${data.company.name}</td>
                    </tr>`;
        })
        var html = htmls.join('');
        console.log(html)
        document.getElementById("table1").innerHTML = html;
    })
    .catch()


var api2 = 'https://jsonplaceholder.typicode.com/todos';
fetch(api2)
    .then(function(respone){
        return respone.json();
    })
    .then(function(data){
        var htmls = data.map(function(data){
            return `<tr>
                <td>${data.userId}</td>
                <td>${data.id}</td>
                <td>${data.title}</td>
                <td>${data.completed}</td>

               

            </tr>`;
        })
        var html = htmls.join('');
        document.getElementById("table2").innerHTML = html;
    })