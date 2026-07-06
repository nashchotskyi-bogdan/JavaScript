const usersDiv = document.getElementById("users");
const userDiv = document.getElementById("user");
const postsDiv = document.getElementById("posts");
const planetDiv = document.getElementById("planet");
// 1.
document.getElementById("usersBtn").addEventListener("click", ()=>{
    usersDiv.innerHTML="";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>{
            users.forEach(user=>{
                usersDiv.innerHTML += `
                    <div class="card">
                        <b>${user.name}</b><br>
                        ${user.email}
                    </div>
                `;
            });
        })
        .catch(error=>console.log(error));
});
// 2.
document.getElementById("userBtn").addEventListener("click", ()=>{
    userDiv.innerHTML="";
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response=>response.json())
        .then(user=>{
            userDiv.innerHTML=`
                <div class="card">
                    <h2>${user.name}</h2>
                    <p><b>Нікнейм:</b> ${user.username}</p>
                    <p><b>Email:</b> ${user.email}</p>
                </div>
            `;
        })
        .catch(error=>console.log(error));
});
// 3.
document.getElementById("postsBtn").addEventListener("click", ()=>{
    postsDiv.innerHTML="";
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(response=>response.json())
        .then(posts=>{
            posts.forEach(post=>{
                postsDiv.innerHTML += `
                    <div class="card">
                        ${post.title}
                    </div>
                `;
            });
        })
        .catch(error=>console.log(error));
});
// 4.
document.getElementById("planetBtn").addEventListener("click", ()=>{
    planetDiv.innerHTML="";
    fetch("https://swapi.py4e.com/api/planets/1/")
        .then(response=>response.json())
        .then(data=>{
            let html = `
                <div class="card">
                    <h2>${data.name}</h2>
                    <p><b>Клімат:</b> ${data.climate}</p>
                    <p><b>Діаметр:</b> ${data.diameter}</p>
                    <p><b>Населення:</b> ${data.population}</p>
            `;
            for(let key in data){
                if(Array.isArray(data[key])){
                    html += `<h3>${key}</h3>`;
                    data[key].forEach(link=>{
                        html += `
                            <a href="${link}" target="_blank">
                                ${link}
                            </a>
                        `;
                    });
                }
            }
            html += "</div>";
            planetDiv.innerHTML = html;
        })
        .catch(error=>console.log(error));
});