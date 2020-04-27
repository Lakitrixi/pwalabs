const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");
const urlContainer1=document.querySelector(".main__profile-created");



const client_id="Iv1.59999737126b4548";
const client_secret="75e124ff28f7a43a01df48c7d6aac969538fb1c5";

const fetchUsers = async (user) =>{
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

const data = await api_call.json();
return { data}
};
const showData =()=>{
    fetchUsers(inputValue.value).then((res)=>{
        console.log(res);
        nameContainer.innerHTML=`Name:<span class="main__profile-value">${res.data.name}</span>`;

        unContainer.innerHTML=`Username:<span class="main__profile-value">${res.data.login}</span>`;

        reposContainer.innerHTML=`Repository:<span class="main__profile-value">${res.data.public_repos}</span>`;

        urlContainer.innerHTML=`url:<span class="main__profile-value">${res.data.html_url}</span>`;

        urlContainer1.innerHTML=`Created-at:<span class="main__profile-value">${res.data.created_at}</span>`;



        


    })
};


searchButton.addEventListener("click",()=>{
    showData();
})