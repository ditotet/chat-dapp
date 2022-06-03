<script>
  import GUN from 'gun';
  import { onMount } from 'svelte';
  import { user, username } from './user';

  const db = GUN();

  let newMessage;
  let messages = [];

  const timestampToCustomFormat = (timestamp) => {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ampm;
    return strTime;
  };

  onMount(() => {
    db.get('chat-dapp-messages')
      .map()
      .once(async (data, id) => {
          console.log(data)
          if (data) {
            const key = 'Secret key!!!';

            const message = {
              who: await db.user(data).get('alias'),
              what: (await SEA.decrypt(data.what, key)) + '',
              when: GUN.state.is(data, 'what')
            }

            if (message.what) {
              messages = [...messages.slice(-100), message]
            }
          }
      });
  })

  const sendMessage = async () => {
    if (newMessage) {
      console.log('ya')
      const secret = await SEA.encrypt(newMessage, 'Secret key!!!');
      const message = user.get('all').set({ what: secret });
      const index = new Date().toISOString();

      db.get('chat-dapp-messages').get(index).put(message);
      newMessage = '';
    }
  }

</script>
<div class="chat-wrapper card col-sm-10">
  <div class="col-12">

    <div class="position-relative">
      <div class="chat-messages p-4">
        {#each messages as message (message.when)}
          <div class={(message.who == $username ? "chat-message-right" : "chat-message-left") + " pb-4"}>
            <div>
              <img
                src={`https://avatars.dicebear.com/api/miniavs/${message.who}.svg`}
                class="rounded-circle mr-1"
                alt="IMG"
                width="40"
                height="40"
              />
              <div class="text-muted small text-nowrap mt-2">{timestampToCustomFormat(message.when)}</div>
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ms-3 me-3">
              <div class="font-weight-bold mb-1">{message.who == $username ? "You" : message.who }</div>
              {message.what}
            </div>
          </div>

        {/each}
      </div>
    </div>

    <form on:submit|preventDefault={sendMessage}>
      <div class="flex-grow-0 py-3 px-4 border-top">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Type your message"
            bind:value={newMessage}
          />
          <button class="btn btn-primary" type="submit">Send</button>
        </div>
      </div>
  </form>
  </div>
</div>

<style>
  .chat-wrapper {
    margin: 0 auto;
  }

  body {
    margin-top: 20px;
  }

  .chat-online {
    color: #34ce57;
  }

  .chat-offline {
    color: #e4606d;
  }

  .chat-messages {
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow-y: scroll;
  }

  .chat-message-left,
  .chat-message-right {
    display: flex;
    flex-shrink: 0;
  }

  .chat-message-left {
    margin-right: auto;
  }

  .chat-message-right {
    flex-direction: row-reverse;
    margin-left: auto;
  }
  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }
  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
  .flex-grow-0 {
    flex-grow: 0 !important;
  }
  .border-top {
    border-top: 1px solid #dee2e6 !important;
  }
</style>
