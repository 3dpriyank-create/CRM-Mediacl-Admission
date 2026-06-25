import { createApp } from './app';
const port=Number(process.env.PORT||8080);
createApp().listen(port,()=>console.log(`Doctor Admission API listening on ${port}`));
