import sqlite3 from 'sqlite3'

const sqlite = sqlite3.verbose()
const db = new sqlite.Database('banco.sqlite3', (err) => {
console.log(err, 'init')
})