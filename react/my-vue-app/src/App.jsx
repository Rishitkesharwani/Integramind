// // import { Fragment, useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// // import "./App.css";

// import React, { useState } from "react";

// const App = () => {
//   const [value, setCount] = React.useState(0);
//   // const [count, setCount] = useState(0);

//   // return (
//   //   <>
//   //     <div>
//   //       <a href="https://vitejs.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://react.dev" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.jsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p>
//   //   </>

//   //   // <Fragment>
//   //   //   <div>Using Fregment Tag</div>
//   //   //   <div></div>
//   //   // </Fragment>
//   // );

//   // const profile = {
//   //   name: "Rishit",
//   //   age: "20",
//   //   email: "",
//   //   location: "Mathura",
//   //   hobbies: ["reading", "coading", "cooking"],
//   //   address: {
//   //     street: "mathura",
//   //     pin_code: "232204",
//   //   },
//   // };
 
//   const posts=[
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
// ];




//   let Value = 0;

//   const onClick = () => {
//     setCount(value + 1);
    
//   };
//   console.log(value);


//   return (
//   //   <div>
//   //     {
//   //       //   <h1>Hello, {profile.name} here</h1>
//   //       //   <p>{profile.age} years old</p>
//   //       //   <p>{profile.email}</p>
//   //       //   <p>{profile.address.street}</p>
//   //       //   <h2>Hobbies</h2>
//   //       //   <ul>
//   //       //     {profile.hobbies.map((hobby, index) => (
//   //       //       <li key={index}>{hobby}</li>
//   //       //     ))}
//   //       //   </ul>
//   //     }
//   //     <h2>Value:{value} </h2>
//   //     <button onClick={onClick}>Click</button>

//   //     <ul>
//   //       {posts.map((post) => (
//   //         <li key={post.id}>
//   //           <h3>{post.title}</h3>
//   //           <p>{post.body}</p>
//   //         </li>
//   //       ))}
//   //     </ul>
//   //   </div>

    
//   // );
//   <>
//    <div className="container">
//     { user.map((user,index)=>(
//         <userComponent
//         key={index}
//         data={user}
//         onClickFromChild={onClickInParentComponent}
//         />
//     ))}
//     </div>

// );

// {/* export default App; */}


import UsersList from "./Users";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ContactForm from "./ContactForm";
import UserPage from "./UserPage";


const HeaderBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  </nav>
);

const AppLayout = () => (
  <>
    <HeaderBar />
    <main>
      <Outlet />
    </main>
  </>
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <>Home Page</>,
        },
        {
          path: "/users",
          element: <UsersList />,
        },
        {
          path: "/user/:userId",
          element: <UserPage />,
        },
        {
          path: "/about",
          element: <div>About Page</div>,
        }

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <>Home Page</>,
        },
        {
          path: "/users",
          element: <UsersList />,
        },
        {
          path: "/user/:userId",
          element: <UserPage />,
        },
        {
          path: "/about",
          element: <div>About Page</div>,
        },
        {
return <RouterProvider router={router} />;
};

export default App;