import Users from './users.js'
import Notes from './notes.js'

Notes.belongsTo(Users)
Users.hasMany(Notes)

export { Users, Notes }
