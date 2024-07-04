import express from 'express';
import userRoutes from './users.js'
import notesRoutes from "./notes.js"
const router = express.Router()

router.use('/api/users', userRoutes);
router.use('/api/notes', notesRoutes);

export default router