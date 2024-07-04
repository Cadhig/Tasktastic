import seedUserData from './users-seeds.js'
import seedNotesData from './notes-seeds.js'

import sequelize from '../db/connection.js'

const seedAll = async () => {
    await sequelize.sync({ force: true, alter: true })
    console.log('----------------Database Synced!-----------------------')
    await seedUserData()
    console.log('-----------------Users Seeded!-------------------------')
    await seedNotesData()
    console.log('-----------------Notes Seeded!-------------------------')
    process.exit(0)
}

seedAll()