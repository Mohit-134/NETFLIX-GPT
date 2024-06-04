// import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
// import { RouterProvider } from "react-router-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const Body = () => {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/browse",
  //     element: <Browse />,
  //   },
  // ]);

  return (
    <div>
      {/* <RouterProvider router={appRouter} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Login/>} />
          <Route path="/browse" element= {<Browse/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Body;