import path from 'path'
import { App as app } from './core'

// app.configure({
//   port: 3000,
//   contentDir: path.resolve(__dirname, 'content'),
//   useFixtures: false,
//   // More config options for server, app here
// });

app.init();
app.start();
