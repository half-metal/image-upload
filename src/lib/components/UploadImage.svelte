<script>
	// @ts-nocheck

	/** @type {import('./$types').ActionData} */
	export let form;
	export let files;

	/** @type {string | undefined }*/
	let avatar = 'avatar.png';
</script>

<article>
	<h1>Upload image</h1>
	<form method="post" enctype="multipart/form-data" action="upload-image">
		<label for="image"> <img id="avatar" src={avatar} alt="avatar" />Change image</label>
		<input
			
			id="image"
			class="visually-hidden"
			name="image"
			type="file"
			accept=".png,.jpg"
			required
			on:change={(e) => {
				if (!(e.target instanceof HTMLInputElement) || !e.target?.files?.[0]) {
					return;
				}

				const file = e.target.files[0];
				const reader = new FileReader();
				reader.onloadend = () => {
					if (!reader.result) return;
					avatar = reader.result.toString();
				};
				reader.readAsDataURL(file);
				form = undefined;
			}}
		/>
		{#if form?.missing}
			<p class="error">Please select a new image.</p>
		{/if}
		<button class="upload-btn">Upload</button>
		<!-- <button class="upload-btn" on:click={postImage}>Upload</button> -->
	</form>

	{#if form?.filename && form.filename !== 'undefined'}
		<p>Successfully uploaded image {form?.filename}</p>
	{/if}
</article>
