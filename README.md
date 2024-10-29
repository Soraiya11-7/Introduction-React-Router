# **React Router**
React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view. 
- [React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.]
## Installation 

- **URL** : React Router site Link: (https://reactrouter.com/en/main/start/tutorial)
```bash
# Open your terminal and create a directory
npm create vite@latest name-of-your-project -- --template react

# Move to the newly created directory.
# cd <your new project directory>
cd name-of-your-project

# To install React Router....
npm install react-router-dom # always need this!

npm install localforage match-sorter sort-by # only for this tutorial.

# Run "npm run dev" to initiate the application in development mode.
npm run dev

# Open vs code from terminal
code .

# Back to the previous directory.
cd ..
```

## **Adding Router**

Create and render a browser router in _main.jsx_


```javascript
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

- **Remove ```<App></App>``` and set 
```<RouterProvider router={router} />``` in _main.jsx_ file**


```javascript

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
## **Nested Route**
- **Move the contacts route to be a child of the root route [_main.jsx_]**
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```
- **Render an ```<Outlet />```**

```javascript
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
```

- **Client side routing allows our app to update the URL without requesting another document from the server. Change the sidebar ```<a href>``` to ```<Link to>```**:

```javascript
<Link to={`contact`}>Contact Us</Link>
//  or
<Link to="/contact">Contact Us </Link>
```
## **Loading Data**
- **fetch json data in _main.jsx_ file**
```javascript
const router = createBrowserRouter([
 {
    path: "/users",
    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    element: <Users></Users>,
}
]);
```
- **useLoader data in ```Users.jsx``` file**

```javascript
const users = useLoaderData();
```

## **Dynamic Route with params and Loading Data**

- **_main.jsx_**
```javascript
const router = createBrowserRouter([
 {
   path: "/post/:postId",
   loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
   element: <PostDetails></PostDetails>
  }
]); 

```
- **_Post.jsx_** :  ```<Link to={`/post/${id}`}>post details</Link> ```
```javascript
import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '1px solid green',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h1>postId : {id}</h1>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>post details</Link> 
        </div>
    );
};

export default Post;
``` 

- **useLoader data in ```PostDetails.jsx``` file**

```javascript
const users = useLoaderData();
```

          
