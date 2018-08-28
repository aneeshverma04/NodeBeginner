# NodeBeginner

What Node.js Is
==> a js runtime built on chrome's V8 JS engine
JS running on server

Non blocking I/O
in apache php etc each connection/request spawns a new thread(more memory)
syncronous=>one process to finish before other starts

Synchronous operation is preffered when you want to do a particular operation after another operation is completed.


NodeJs support concurrent connections(hundreds thousands)
Event loop(single threaded) ==> concurrency via events and callbacks
EventEmitter class is used to bind events and event listeners
When event detected callback(asynchronous)
Asynchronous calls do not block (or wait) for the API call to return from the server. Execution continues on in your program, and when the call returns from the server, a "callback" function is executed
Disadvantage= dont know the order of execution

Installing Node.js
==> npm(node package manager)
modules installed in node_modules

npm install express
npm install -g express(global)

Popular modules:
Express - Web dev freamework
Connect - Http server framework(baseline for express)
Socket.io - server side component for websockets
pug/jade - template engine inspired by HAML..default template engine for express.
mongo/mongoose - wrappers to interact with mongoDB
coffee-Script - CoffeeScript(superset of JS) compiler
Redis(a No Sql DB and caching system) - Redis client library


package.json File:

goes to root of your package/app

tells npm how your package is structured and what to do to install it.

$ npm init (to create package.json)

Using the REPL(read eval print loop)
==> like in python.......use js in command line

sudo apt install nodejs-legacy
$ node

Cant do:
use document object


$ node app.js
OR
$ node app // works

npm init ==> asks in cli

NPM - Node Package Manager
