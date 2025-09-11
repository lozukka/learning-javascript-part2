async function getRandomUser(){
    const randomUser = await fetchUser();
    renderRandomUser(randomUser);
}

async function fetchUser() {
    try{
    const response = await fetch('https://randomuser.me/api/?results=1');
    if(!response.ok) throw new Error ("Failed to load user");

        const data = await response.json();
            console.log(data);
        return data.results[0];
    } catch (error){
        console.log(error);
        document.getElementById("error") = "Failed.";
        return;
    }
}

function renderRandomUser(randomUser){
    //first-name
    let firstName = document.getElementById("first-name");
    firstName.textContent = randomUser.name.first;
    //last-name
    let lastName = document.getElementById("last-name");
    lastName.textContent = randomUser.name.last;
    //age
    let age = document.getElementById("age");
    age.textContent = randomUser.dob.age;
}
  