import path from 'path';
import routes from './api/index.js'
import express from 'express'
const app = express();
const PORT = 6002;
import cors from 'cors'
import session from 'express-session'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
}

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}))
app.use(cors())
app.use(express.json());
app.use(routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})