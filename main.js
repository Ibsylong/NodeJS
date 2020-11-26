    const list = document.getElementById("task-list");
    event.preventDefault();
    let title = document.getElementById('form-title');
fetch('https://serene-chamber-86893.herokuapp.com/tasks', {
    method: 'GET'
}).then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (data) {
    data.forEach(function(task){
        let li = document.createElement("li");
        li.innerText = task.title;
        list.appendChild(li);
    });
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});

function createTask(event){
    const list = document.getElementById("task-list");
    event.preventDefault();
    let title = document.getElementById('form-title');
    fetch('https://serene-chamber-86893.herokuapp.com/tasks', {
        method: 'POST'
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}