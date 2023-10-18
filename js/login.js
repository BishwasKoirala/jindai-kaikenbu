document.querySelector('.login-html').innerHTML = `
  <h1 class = "header-jindai-kaikenbu">
    神奈川大学会計学研究部
  </h1>
  <h1>LOG-IN</h1>
  <form action="">
    <label for="user-id">学籍番号</label>
    <br />
    <input type="text" name="user-id" id="user-id" />
    <br>
    <label for="password">パスワード</label>
    <br>
    <input type="text" name="password" id="password" />
    <br><br>
    <button id="login">
      Log-in
    </button>
  </form>
  <br>
`;

