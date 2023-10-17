// generating rent/return book button
document.querySelector('.js-rent-return-button').innerHTML = `
<button class="rent-book-button">本の拝借</button>
<button class="return-book-button">本の返却</button>
`;

let bookHtml = {
  rentBook:`
  <h3>本の拝借登録</h3>
  <select name="rent-book" id="rent-book">
    <option value="null" selected>本を選択</option>
    <option value="exmpbook">簿記一級参考書</option>]]
  </select>
  <button>登録</button>
  `,
  returnBook:`
  <h3>本の返却登録</h3>
  <select name="return-book" id="return-book">
    <option value="null" selected>本を選択</option>
    <option value="exmpbook">簿記一級参考書</option>
  </select>
  <button>登録</button>
  `
}

let generateHtml = document.querySelector('.generate')
document.querySelector('.rent-book-button').addEventListener('click',() => {
  generateHtml.innerHTML= bookHtml.rentBook
})

document.querySelector('.return-book-button').addEventListener('click',() => {
  generateHtml.innerHTML= bookHtml.returnBook
})