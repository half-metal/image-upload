<script>
    import UploadImage from "$lib/components/UploadImage.svelte";
</script>

<UploadImage/>

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