const profile = document.getElementById("profile");
const searchHistory = document.getElementById("searchHistory");
const APIURL = "https://api.github.com/users/";

const listOfUserSearched = [];


// user function
async function user(){
    let username = document.getElementById("username");
    let response = await fetch(APIURL+username.value);
    if(response.status === 200){
        let data = await response.json();
        updateLocalStorage(username.value);
        profile.innerHTML = `
        <div class="profile card mb-3" style="width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${data.avatar_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.bio}</p>
                    </div>
                </div>
            </div>  
        </div>`;
        for (const value of listOfUserSearched){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            searchHistory.appendChild(li);
        }
    }
    else{
        profile.innerHTML = `
        <div class="profile card mb-3" style="width: 540px;">
            <div class="row g-0">
                Invalid User :(
            </div>  
        </div>`;
    }
    username.value = "";
}

// updateLocalStorage function
function updateLocalStorage(username){
    searchHistory.innerHTML="";
    if (!listOfUserSearched.includes(username)){
        listOfUserSearched.push(username);
        localStorage.setItem("listOfUserSearched",JSON.stringify(listOfUserSearched));
    }
}