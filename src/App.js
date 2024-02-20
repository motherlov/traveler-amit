import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import { toast } from "react-toastify";
import BackToTopButton from "./Components/SharedModule/BackToTop/BackToTopButton";
import Header from "./Components/SharedModule/Header/Header";
import Footer from "./Components/SharedModule/Footer/Footer";
import Loading from "./Components/CMS/Loading/Loading";
import TourPackages from "./Components/CMS/Tour Packages/TourPackages.js";

const Home = lazy(() => import("./Components/Home/Home"));
const Blog = lazy(() => import("./Components/CMS/Pages/Blog/Blog"));
const Services = lazy(() => import("./Components/CMS/Services/Services"));
const About = lazy(() => import("./Components/CMS/About/About"));
const NotFound = lazy(() => import("./Components/CMS/NotFound/NotFound"));
const Contact = lazy(() => import("./Components/CMS/Contact/Contact"));
const BlogDetail = lazy(() =>
  import("./Components/CMS/Pages/Blog Detail/BlogDetail")
);
const Guide = lazy(() => import("./Components/CMS/Pages/Travel Guides/Guide"));
const Destination = lazy(() =>
  import("./Components/CMS/Pages/Destination/Destination")
);
const Testimonial = lazy(() =>
  import("./Components/CMS/Pages/Testimonial/Testimonial")
);
const Login = lazy(() => import("./Components/Auth/Login/Login"));
const Register = lazy(() => import("./Components/Auth/Register/Register"));
const CreateProduct = lazy(() =>
  import("./Components/CMS/CreateProduct/CreateProduct")
);
const UpdateProduct = lazy(() =>
  import("./Components/CMS/UpdateProduct/UpdateProduct")
);

function App() {
  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    // useEffect(() => {
    //   localStorage.setItem("pathname", location?.pathname);
    // }, [location]);
    const location = useLocation();
    let fullURL = `${location.pathname}`;
    if (fullURL.startsWith("/")) {
      fullURL = fullURL.substring(1);
    }

    return token !== null && token !== undefined ? (
      children
    ) : (
      <>
        <Navigate to="/" />
        {toast.error(`Please go for login either you can't access ${fullURL}`)}
      </>
    );
  }
  const PublicRouteNames = [
    {
      path: "/register",
      Component: <Register />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "*",
      Component: <NotFound />,
    },
  ];
  const PrivateRouteNames = [
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/services",
      Component: <Services />,
    },
    {
      path: "/packages",
      Component: <TourPackages />,
    },
    {
      path: "/contact",
      Component: <Contact />,
    },
    {
      path: "/blog",
      Component: <Blog />,
    },
    {
      path: "/product/:productId",
      Component: <BlogDetail />,
    },
    {
      path: "/update/:productId",
      Component: <UpdateProduct />,
    },
    {
      path: "/guide",
      Component: <Guide />,
    },
    {
      path: "/destination",
      Component: <Destination />,
    },
    {
      path: "/testimonial",
      Component: <Testimonial />,
    },
    {
      path: "/create",
      Component: <CreateProduct />,
    },
  ];
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Router>
          <Header />
          <Routes>
            {PublicRouteNames?.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  element={route.Component}
                />
              );
            })}

            {PrivateRouteNames?.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  element={<PrivateRoute>{route.Component}</PrivateRoute>}
                />
              );
            })}
          </Routes>
          <Footer />
          <BackToTopButton />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
