const getBookInfo = function () {
  fetch(`https://striveschool-api.herokuapp.com/books`)
    .then(function (res) {
      console.log(`ok`, res)
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(`An error has occured`)
      }
    })
    .then(function (library) {
      library.forEach(function (book) {
        const bookCard = document.getElementById(`book-Card`)
        bookCard.innerHTML += `<div id="book-Card" class="col col-sm-12 col-md-6 col-lg-3 border">
            <div class="p-3 d-flex flex-column">
              <img id="book-Cover" class="w-100" src="${book.img}" alt="" />
               <div class="flex-grow-1">
                  <h2 class="fs-4">
                    Title:
                    <span id="book-Title" class="fst-italic">${book.title}</span>
                  </h2>
                  <p class="fs-5">
                    Price:
                    <span id="book-Price" class="fst-italic">${book.price}</span> €
                  </p>
                <button id="delete-Button" type="button" class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>`
      })
    })
    .catch(function (err) {
      console.log(`Error`, err)
    })
}

getBookInfo()

const deleteButton = document.getElementById(`delete-Button`)
const bookCard = document.getElementById(`book-Card`)

deleteButton.addEventListener(`click`, function () {
  this.parentNode.remove()
})
