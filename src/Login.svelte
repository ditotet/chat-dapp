<script>
  import { user } from "./user";

  let username = "";
  let password = "";

  const login = () => {
    user.auth(username, password, ({ err }) => err && alert(err));
  };

  const signup = () => {
    user.create(username, password, ({ err }) => {
      if (err) {
        alert(err);
        return;
      }
      login();
    });
  };
</script>

<div class="login-card card col-sm-4 p-3">
  <h5 class="card-title">Log In</h5>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Username</label>
    <input type="text" class="form-control" id="staticUsername" bind:value={username} minlength="3" maxlength="16">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword" bind:value={password}>
  </div>
  <div class="mb-3">
    <button class="login btn btn-primary" on:click={login}>Login</button>
    <button class="login btn btn-primary" on:click={signup}>Sign Up</button>
  </div>
</div>

<style>
  .login-card {
    margin: 0 auto;
    margin-top: 5%;
  }
</style>



