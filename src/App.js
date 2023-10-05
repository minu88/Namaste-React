import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"; // instead do lazy loading
import Instamart from "./components/Instamart";

// const Grocery = lazy(() => import("./components/Grocery"));

// using React
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ]),
// ]);

// // jsx element creation
// const jsxHeading = (
//   <h1 id="heading" className="headh1">
//     jsxHeading
//   </h1>
// );

// console.log(heading); // it s an object
// console.log(jsxHeading); // it s an object

// *********Functional Component
// const Title = () => (
//   <h1 className="title">This is Title of Functional Component</h1>
// );

// const ComponentComposition = () => (
//   <div className="heading">
//     <Title />
//     <h2>
//       This is heading in Component composition. added another functional
//       component inside this functional component
//     </h2>
//   </div>
// );

// const SecondRoot = () => (
//   <>
//     <div>2nd Root</div>
//   </>
// );

// ********** FOOD APP

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

// **** create BrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
    errorElement: <Error />,
  },
]);

// create root
const root = ReactDOM.createRoot(document.getElementById("root"));
// const root1 = ReactDOM.createRoot(document.getElementById("main"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />); // converts to browser known h1 tag and puts it to DOM
// root1.render(<SecondRoot />); // converts to browser known h1 tag and puts it to DOM
