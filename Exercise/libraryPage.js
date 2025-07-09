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
        bookCard.innerHTML += `
        <div class="col col-sm-12 col-md-6 col-lg-3">
          <div class="card h-100 rounded-4 overflow-hidden shadow d-flex">
            <div>
            <img id="book-Cover" class="w-100" src="${book.img}" alt="" >
            </div>
            <div class="card-body">
              <h5 class="card-title fs-4">Title:
                  <span id="book-Title" class="fst-italic">${book.title}</span></h5>
              <p class="card-text fs-5">Price:
                  <span id="book-Price" class="fst-italic">${book.price}</span> €</p>
              <a href="#" class="btn btn-primary">Delete</a>
            </div>
          </div>
        </div>
        `
      })
    })
    .catch(function (err) {
      console.log(`Error`, err)
    })
}

getBookInfo()

const deleteButton = document.getElementById(`delete-Button`)
