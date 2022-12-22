import { error } from '@sveltejs/kit';
import fs from "fs";


   export async function POST({ request }) {

        const formdata = await request.formData();
        console.log('formdata',formdata);
    
        const file = formdata.get("image");
    
        if (!(file instanceof Object) || !file.name) {
          throw error(400, { message: 'Not valid file' });
        }
    
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(`static/avatar.png`, buffer, "base64");
    //return new Response(response);

        //return { filename: file.name };
         return new Response(JSON.stringify({filename: file.name}) );

      }


