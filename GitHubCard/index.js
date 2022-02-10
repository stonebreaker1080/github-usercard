import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const username = "stonebreaker1080"

const friendsArray = [
  "stonebreaker1080",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
]

const getProfile = (username) => {
  axios.get(`https://api.github.com/users/${username}`)
  .then(resp => {
    console.log(`getting api response: `, resp.data)
    const profileCard = createProfileCard(resp.data)
    document.querySelector(".cards").appendChild(profileCard)
  })
  .catch(err => {
    console.error(err)
  })
  .finally(() => console.log("done"))
}

const getProfiles = (inputArray) => {
  inputArray.forEach(item =>
    getProfile(item))
}


// getProfile(username)
getProfiles(friendsArray)

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/





/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function createProfileCard(profileObject) {
  

  let divCard = document.createElement("div")
  let cardImage = document.createElement("img")
  let cardInfo = document.createElement("div")
  let h3CardName = document.createElement("h3")
  let pUsername = document.createElement("p")
  let pLocation = document.createElement("p")
  let pProfile = document.createElement("p")
  let aProfile = document.createElement("a")
  let pFollowers = document.createElement("p")
  let pFollowing = document.createElement("p")
  let pBio = document.createElement("p")

  divCard.classList.add("card")
  cardImage.src = profileObject.avatar_url
  cardInfo.classList.add("card-info")
  h3CardName.classList.add("name")
  h3CardName.textContent = profileObject.name
  pUsername.classList.add("username")
  pUsername.textContent = profileObject.login
  pLocation.textContent = `Location: ${profileObject.location}`
  pProfile.textContent = "Profile: "
  aProfile.href = profileObject.url
  aProfile.textContent = profileObject.url
  pFollowers.textContent = `Followers: ${profileObject.followers}`
  pFollowing.textContent = `Following: ${profileObject.following}`
  pBio.textContent = `Bio: ${profileObject.bio}`

  divCard.appendChild(cardImage)
  divCard.appendChild(cardInfo)
  cardInfo.appendChild(h3CardName)
  cardInfo.appendChild(pUsername)
  cardInfo.appendChild(pLocation)
  cardInfo.appendChild(pProfile)
  pProfile.appendChild(aProfile)
  cardInfo.appendChild(pFollowers)
  cardInfo.appendChild(pFollowing)
  cardInfo.appendChild(pBio)

  return divCard
}


// <div class="card">
//       <img src={image url of user} />
//       <div class="card-info">
//         <h3 class="name">{users name}</h3>
//         <p class="username">{users user name}</p>
//         <p>Location: {users location}</p>
//         <p>Profile:
//           <a href={address to users github page}>{address to users github page}</a>
//         </p>
//         <p>Followers: {users followers count}</p>
//         <p>Following: {users following count}</p>
//         <p>Bio: {users bio}</p>
//       </div>
//     </div>

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
