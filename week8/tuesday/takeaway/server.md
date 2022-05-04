# What is the take away from today??

### Using Postman

Use postman to verify that the request response cycle is sending and receiving the appropriate data for successful queries.

- Postman is good for us to test routes and make sure our end points are able to be pinged without any errors. Similarly we can see if our server is working by visiting localhost:5000 or localhost:8080 etc. the number there signifies the port we are listening on.

So whats the point? At the moment we are only working with one server. Postman will be revisited in later mods where you have a dedicated frontend and backend server.

### Given RESTful endpoints, render (or return) the appropriate response

```js
if (req.method === "POST" && req.url.startsWith("/dogs")) {
  // status code && header below

  res.statusCode = 302;
  const dogId = getNewDogId();
  res.setHeader("Location", "/dogs/" + dogId);
  console.log("we hit this route");
  return res.end();
}
```

Above is a another example from our creating route handlers practice. Here we use a console log to show we are hitting this route. Generic logs are okay for quick tests but better paired with something of value to log. Perhaps console logging the dogId.

Here we set the status code and return the **_appropriate response_** (redirecting with a 302 in the above example) then end the connection.

From serving static asset practice we saw another way of reading data using the node.js readFileSync method. This allows to return the contents of whatever **path** value we pass in. In this case "./index.html". The UTF-8 allows us to deal with the results as a string.

```js
const resBody = fs.readFileSync("./index.html", "utf-8");
res.statusCode = 200;
res.setHeader("Content-Type", "text/html");
res.end(resBody);
```

### Direct traffic by handling route(s) based on matching URl && Matching Method.


    Console.log is a powerful tool for confirming our data flow. When
    doing operations its good to log what we expect to see before moving forward. This is important before/after sending/receiving requests/response
    to avoid bugs.

```js
// from our html-form-submission exercise

if (req.method === "GET" || (req.method === "POST" && req.url === "/cat")) {
  const { name, pattern, size, description } = req.body;

  //   you can console.log individual variables or the entire body :)
  console.log("individual variables", name);

  cat = new Cat(req.body);

  res.statusCode = 302;
  res.setHeader("Location", "/");
  return res.end();
}
```

We will deal more with console logging the res body when receiving data back from a backend server. Hate to do this but, it comes into play later. Just know logging before and after req/res is great practice!


Next we can use our common JS methods (ie: startsWith(), split(), etc)
   to get data from our url for targeting specific endpoints
   eg: /dogs/:id


    Route Handle Flow:
    ** within the create server function **

1.  check for a specific url and method match

```js
if (req.method === "GET" && req.url === "/") {
  //  some code
}

if (req.method === "POST" && req.url.startsWith("/dogs")) {
  // some code
}
```

the specific urls here are '/' and '/dogs'
the methods to match are 'POST' && 'GET'

2. depending on method and what must happen..
    - use our JS methods to isolate any data we may need for
    a successful query
    and/or
    - handle status codes, set header, and end the response.

this example is from our creating route handlers example
```js

if (req.method === "POST" && req.url.startsWith("/dogs")) {
  // same code from our above example
  const urlSplit = req.url.split("/");

  // reason we use these methods is because we are looking for specific data to use later. In  this case an id :
  const dogId = urlSplit[2];
}
```

We may need some data from that url in order to maybe query or reference something (perhaps an object) through an ID.  We will get more practice with this throughout the course. For now we need to just know we can split our url and grab data to do whatever our app needs us to do with it. 

3. end the req by using the write + end method on the
  res object or all together in the end method.  (take away here is end the connection with the response)
  continued from our routes example. 
  ```js
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  return res.end(`Dog details for Dog Id: ${dogId}`);
  ```

We may have seen different approaches when working with our routes, but the behavior of the code does not change much. 
1. check the route and method
2. parse any data from the url or body if needed
3. set status, headers, and end the response. 





