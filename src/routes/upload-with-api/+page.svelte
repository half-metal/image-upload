<script>
    /**-----------
   * @ROUTE that uses API but gives FormData parsing error.
   * ------------*/
    import { enhance } from "$app/forms";
    /** @type {import('./$types').ActionData} */
    export let form;
    /** @type {string | undefined }*/
    let avatar = "avatar.png";
    

    async function postImage(file) {
        console.log('file in postImage is',file)
    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        //'content-type': 'image/png'
      },
      body: file

    });
    const responseData = await response.json()
    console.log('responseData in postImage',responseData)
    }
    
  </script>
  
  <article>
    <h1>Upload image</h1>
      <label for="image"
        ><img id="avatar" src="{avatar}" alt="avatar" />Change image</label
      >
      <input
        id="image"
        class="visually-hidden"
        name="image"
        type="file"
        accept=".png,.jpg"
        required
        on:change="{(e) => {
          if (!(e.target instanceof HTMLInputElement) || !e.target?.files?.[0]) {
            //return;
            postImage(file)
          }
  
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            if (!reader.result) return;
            avatar = reader.result.toString();
          };
          reader.readAsDataURL(file);
          form = undefined;
        }}"
      />
      {#if form?.missing}
        <p class="error">Please select a new image.</p>
      {/if}
      <button class="upload-btn"
      on:click={postImage}>Upload</button>
  
    {#if form?.filename && form.filename !== "undefined"}
      <p>Successfully uploaded image {form?.filename}</p>
    {/if}
  </article>
  
  <style>
    article,
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .error {
      color: red;
    }
    label {
      display: grid;
      place-items: center;
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }
    label:hover {
      color: darkblue;
    }
    .visually-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute;
      clip-path: inset(0px 0px 99.9% 99.9%);
      border: 0;
      padding: 0;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    #avatar {
      border-radius: 99999px;
      height: 128px;
      width: 128px;
      margin-bottom: 10px;
    }
    .upload-btn {
      width: 128px;
      height: 32px;
      background-color: black;
      font-family: sans-serif;
      color: white;
      font-weight: bold;
      border: none;
      margin-top: 2rem;
      cursor: pointer;
    }
    .upload-btn:hover {
      background-color: white;
      color: black;
      outline: black solid 2px;
    }
  </style>