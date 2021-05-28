/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage() {
   for(y = 1; y < (data.length + 9) / 9; y++) { //sets up all of the pages depending on the amount of the users
      let newPage = document.createElement("div")
      newPage.className = "page"
      if(y != 1) {
         newPage.style.display = "none"
      }
      document.body.appendChild(newPage)
      let newHeader = document.createElement("header")
      newHeader.className = "header"
      newPage.appendChild(newHeader)
      let newTitle = document.createElement("h2")
      newTitle.innerHTML = "Students"
      newHeader.appendChild(newTitle)
      let listUl = document.createElement("ul")
      listUl.className = "student-list"
      newPage.appendChild(listUl)
      let newDiv = document.createElement("div")
      newDiv.className = "pagination"
      newPage.appendChild(newDiv)
      let newBtnUl = document.createElement("ul")
      newBtnUl.className = "link-list"
      newBtnUl.id = "only-id"
      newDiv.appendChild(newBtnUl)
      for(x = 1; x < (data.length + 9) / 9; x++) { //creates the needed amount of buttons for each of the pages
         let btnLi = document.createElement("li")
         newBtnUl.appendChild(btnLi)
         let newBtn = document.createElement("button")
         newBtn.innerHTML = x
         newBtn.type = "button"
         if(newBtn.innerHTML == y) {
            newBtn.className = "active"
         }
         btnLi.appendChild(newBtn)
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(r, array, z) { //function for filling out all of the user information
   if(r >= array.length) { //makes sure that they are not going to make a user that does not exsist
      return
   }
   let mainLi = document.body.querySelectorAll(".page")[z].querySelector(".student-list")
   let listLi = document.createElement("li")
   listLi.className = "student-item cf"
   mainLi.appendChild(listLi)
   let firstDiv = document.createElement("div")
   firstDiv.className = "student-details"
   listLi.appendChild(firstDiv)
   let avatarImg = document.createElement("img")
   avatarImg.className = "avatar"
   avatarImg.src = array[r].picture.large
   firstDiv.appendChild(avatarImg)
   let nameDisplay = document.createElement("h3")
   nameDisplay.innerHTML = array[r].name.first+" "+array[r].name.last
   firstDiv.appendChild(nameDisplay)
   let newEmail = document.createElement("span")
   newEmail.innerHTML = array[r].email
   firstDiv.appendChild(newEmail)
   let secondDiv = document.createElement("div")
   secondDiv.className = "joined-details"
   document.querySelector(".student-item").appendChild(secondDiv)
   let joinDate = document.createElement("span")
   joinDate.className = "date"
   joinDate.innerHTML = array[r].registered.date
   listLi.appendChild(joinDate)
}

// Call functions

showPage()

for(z = 0; z < data.length / 9 + 1; z++) { //loop for filling out all of the information of the pages
   if(z !== 0) { //checks if it is not the first page
      for(r = z * 9; r < z * 9 + 9; r++) {
         addPagination(r, data, z)
      }
   } else {
      for(r = 0; r < 9; r ++){
         addPagination(r, data, z)
      }
   }
}

document.querySelectorAll('button').forEach(item => {
   item.addEventListener('click', (e) => {
     let goTo = e.target.innerHTML
     for(x = 0; x < document.querySelectorAll(".page").length; x++) {
      document.querySelectorAll(".page")[x].style.display = "none"
     }
     document.querySelectorAll(".page")[parseInt(goTo) - 1].style.display = "block"

   })
 })