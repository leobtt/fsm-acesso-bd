import sqlite3 from 'sqlite3'

const sqlite = sqlite3.verbose()
const db = new sqlite.Database('banco', (err)=> console.log(err))
db.run


export const initDB = (databaseFile : string) => new Promise((resolve,reject) => {
  const db = new sqlite.Database(databaseFile, (err) => {
    if(err) reject(err)
    else resolve(db)
  })
})


export const run = (db: any, query: string, values : Array<any> | null) => new Promise((resolve,reject) => {
    db.run(query, values, (err : ()=> {}) => {
      if(err) reject(err)
      else resolve(true)
    })
})