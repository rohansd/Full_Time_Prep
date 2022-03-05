const body = document.getElementById("main");

const APIURL = "https://api.github.com/users/";

async function user(){
    let response = await fetch(APIURL+'florinpop17');
    let data = await response.json();
    // console.log(data);
    body.innerHTML = `
    <div>
        <h1>${data.name}</h1>
        <h4>${data.bio}</h4>
        <img src="${data.avatar_url}"></img>
    </div>`;
}
// user();
