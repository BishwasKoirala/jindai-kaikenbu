function LoginUi() {
  clickLoginButton = document.querySelector(".sign-in-page-button").addEventListener("click", () => {
    document.querySelector(".the-page").innerHTML = `<h1>LOG-IN</h1>
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
      <br>
      <a href="kasidasi.html">仮ログイン</a>

    </form>`;
  });
}

document.querySelector('.sign-in-page-button').addEventListener("click",LoginUi())