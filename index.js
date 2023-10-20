// import json-server
const jsonServer = require('json-server')

// create a server for ToDo app
const toDoServer = jsonServer.create()

// set up path/route from json file
const router = jsonServer.router("db.json")

// Reaturns middleWares used by json server
const middleWares = jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.port

// use middlWare and router in server
toDoServer.use(middleWares)
toDoServer.use(router)

// to listen server for resolving request from client
toDoServer.listen(port,()=>{
    console.log("ToDo Server Started...");
})

