// import {NextApiHandler} from 'next'
// import formidable from 'formidable'
// import path from 'path'
// import fs from 'fs/promises'

// export const config = {
//     api:{
//         bodyParser: false,
//     }
// }

// const readFile = (req,saveLocally) => {
//     const options = {}
//     if(saveLocally) {
//         options.uploadDir = path.join(process.cwd(),'/public/chats/images');
//         options.fileName = (name,ext,path,form) => {
//             return Date.now().toString() + "_" + path.originalFileName;
//         }
//     }
//     const form = formidable(options);
//     return new Promise((resolve, reject) => {
//         form.parse(req,(err,fields,files) =>{
//             if(err) reject(err)
//             resolve({fields,files})
//         })
//     })
// }

// export async function POST(req,res) {
//     try {
//         await fs.readdir(path.join(process.cwd()+"/public","chats","images"))
//     } catch (error) {
//         await fs.mkdir(path.join(process.cwd()+"/public","chats","images"))
//     }
//     await readFile(req,true);
//     res.json({done:'ok'})
// }

import { writeFile } from 'fs/promises';
import { request } from 'http';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const data = await req?.formData();
  const file = data?.get('file');
  if (!file) {
    return NextResponse.json({
      message: 'No image found',
      success: false,
    });
  }
  const byteData = await file?.stream?.();
  const buffer = Buffer.from(byteData);
  const path = `./public/chats/images/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({
    message: 'file uploaded',
    success: true,
  });
}
