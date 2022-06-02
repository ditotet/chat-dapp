
<script>
    import { username, user } from './user';

    const signout = () => {
        user.leave();
        username.set('');
    }
</script>

<header>
    <nav class="header navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Chat Dapp</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">A decentralized chat app</a>
              </li>
            </ul>
            <div class="d-flex">
                {#if $username}
                    <div class="user-bio">
                        <span>Hey <strong>{$username}</strong></span>
                        <img src="{`https://avatars.dicebear.com/api/miniavs/${$username}.svg`}" alt="">
                    </div>
        
                    <button class="signout-button btn btn-outline-primary" on:click={signout}>
                        Sign Out
                    </button>
                {/if}
            </div>
          </div>
        </div>
      </nav>
</header>

<style>
    .header {
        height: 70px;
    }

    .user-bio {
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .user-bio img {
        height: 50px;
        margin: 0 20px;
    }
</style>