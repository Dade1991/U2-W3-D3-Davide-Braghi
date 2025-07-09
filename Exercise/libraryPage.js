const cartList = [] // Creo il carrello vuoto dove inserire i libri acq
const apiLink = `https://striveschool-api.herokuapp.com/books` // Creo una variabile x richiamarmi ApiLink in maniera più semplice

// Qui dentro faccio diverse operazioni:
// 1 - vado a prendere i riferimenti agli elementi che mi servono dentro ApiLink (i libri in questo caso)
const getBookInfo = function () {
  fetch(apiLink)
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
        // 2 - richiamo un elemento dell'HTML in cui andare ad inserire tutti i libri con le loro info con nuovi elementi HTML.
        const bookCard = document.getElementById(`book-Card`)
        bookCard.innerHTML += `
        <div class="col-12 col-md-6 col-lg-3 removeElement">
          <div class="card rounded-4 overflow-hidden shadow d-flex h-100">
            <div>
            <img id="book-Cover" class="w-100" src="${book.img}" alt="" >
            </div>
            <div class="card-body">
              <h5 class="card-title fs-4">Title:
                  <span id="book-Title" class="fst-italic">${book.title}</span></h5>
              <p class="card-text fs-5">Price:
                  <span id="book-Price" class="fst-italic">${book.price}</span> €</p>
                <div class="d-flex flex-row justify-content-between">
                  <a href="#" class="btn btn-danger remove-btn">Delete</a>
                  <a href="#" class="btn btn-success add-To-Cart">Add to Cart</a>
                </div>
            </div>
          </div>
        </div>
        `
      })
      // 3 - richiamo il bottone creato sopra e, per ciasciun bottone (getElementById non funzionerebbe xk ne prende solo UNO, mentre querySelectorAll / getElementByClass crea un array e li seleziona TUTTI)
      // ciclo ciasciun bottone di ciascuna card/libro ed aggiungo un eventListener che rimuove l'elemento (parente) al click.
      const removeButtons = document.querySelectorAll(`.remove-btn`)
      removeButtons.forEach(function (button) {
        button.addEventListener(`click`, function (e) {
          e.target.closest(`.removeElement`).remove()
        })
      })

      const addToCart = document.querySelectorAll(`.add-To-Cart`)
      addToCart.forEach(function (button) {
        button.addEventListener(`click`, function (e) {})
      })
    })
    .catch(function (err) {
      console.log(`Error`, err)
    })
}

getBookInfo()
