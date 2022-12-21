import { invalid } from "@sveltejs/kit";
import fs from "fs";

// /** @type {import('../../.svelte-kit/types/src/routes/$types').Actions} */
// export const actions = {
//   default: async ({ request }) => {
//     const formdata = await request.formData();

//     const file = formdata.get("image");

//     if (!(file instanceof Object) || !file.name) {
//       return invalid(400, { missing: true });
//     }

//     const buffer = Buffer.from(await file.arrayBuffer());
//     fs.writeFileSync(`../static/avatar.png`, buffer, "base64");
//     return { filename: file.name };
//   },
// };

import { invalid } from "@sveltejs/kit";
import fs from "fs";

export async function postData({ request }) {
    const formdata = await request.json();

    const file = formdata.get("image");

    if (!(file instanceof Object) || !file.name) {
      return invalid(400, { missing: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(`static/avatar.png`, buffer, "base64");
    return { filename: file.name };
  };
