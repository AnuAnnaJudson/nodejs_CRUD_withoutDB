Routing and CRUD operations without using database

To start a server using express,
1. npm init- creates package.json
2. install express and nodemon as dev dependency(also edit scripts in package.json if necessary)
3. create a file server.js
4. import express, declare app and also a PORT
5. finally say app.listen pass in a port number and console a meaningful msg so that you know server runs fine when its started

Once the server is running, place all the static files (mostly media files and css) into a public folder
Also a views folder that contains the html page that needs to be rendered as per requirements.

Once this is done, for your static files to be rendered correctly include a line of code as app.use('/',express.static(path.join(__dirname,'/public')))
(/ is the route,to serve the static files then mention the folder name as public, don't forget the import for path)

Once static files are handled we need to make sure you obtain a default route, for this you need to create root.js file inside the routes folder, to define a route,
1. import express,path and declare router as const router=express.Router()
2. then to create a route just for a get/ request,
    router.get('/routename',(req,res)=>{
        res.sendFile(path.join(__dirname,"(from views route into the index.html)"))
    })
3. Don't forget to export the router in the end as module.exports=router;

And finally to use the route correctly
in the server.js use the route correctly as 
app.use("/",require('path of the route created'))

For post/put/patch requests make sure to include a body parser in the server.js and also install body-parser package an then import body parser in the server.js and use it in the file itself like:
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

To send data via url when route declared as router.route('/:id') then localhost:3500/employees/2 where 2 will be taken as id

When data send via url to fetch data from there we can use res.params.id where id is the name mentioned in the route

Note that the array method sort should have a paranthesis when mentioing a sorting algorithm like unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))