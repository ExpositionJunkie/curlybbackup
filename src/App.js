import React, { Suspense, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Egg from "./Components/Reusable/Egg/Egg";
import APIPractice from "./Components/APIPractice/APIPractice";
import NASAPower from "./Components/APIPractice/InnerPages/NASA/NASAPower";
import DungeonsAndDragons from "./Components/APIPractice/InnerPages/DungeonsAndDragons/DungeonsAndDragons";
import ISSLocator from "./Components/APIPractice/InnerPages/ISSLocator/ISSLocator";
import IPAddress from "./Components/APIPractice/InnerPages/IPAddress/IPAddress";
import NameGuess from "./Components/APIPractice/InnerPages/NameGuess/NameGuess";
import Blog from "./Components/Blog/Blogs";
import BlogEntryStandalone from "./Components/Blog/BlogEntryStandalone";
import BlogPage from "./Components/Blog/BlogPage";
import BlogList from "./Components/Blog/BlogList";
import Tags from "./Components/Reusable/Tags/Tags";
import Login from "./Components/Login/Login";
import CSP from "./Components/CSP/CSP";
import Signup from "./Components/Signup/Signup";
import NothinghHere from "./Components/Reusable/404/NothingHere";
import { Route, Routes } from "react-router-dom";
import Cookie from "./Components/Reusable/Cookie/Cookie";

//redux
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "./Redux/reduxIndex";

function AppComponent() {
  const auth = useSelector((state) => state.auth);
  const signup = useSelector((state) => state.signup);
  const blogs = useSelector((state) => state.blogs);
  const blogsByTag = useSelector((state) => state.blogsByTag);

  const dispatch = useDispatch();
  dispatch({ type: "fetchBlogs" });
  dispatch({ type: "loginUser" });
  const { fetchBlogs, loginUser } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const handleLogin = () => {
    if (localStorage.getItem("creds")) {
      let creds = JSON.parse(localStorage.getItem("creds"));
      loginUser(creds)
        .then(() => {
          if (auth.errMess) {
            console.log(auth.errMess);
          }
        })
        .then(() => {});
    } else {
      loginUser();
      //running this so that it will reset the auth
    }
  };

  useEffect(() => {
    fetchBlogs();
    handleLogin();
    //The app won't recognize login between updates, this fixes that.
    return function () {
      //I don't really want to do anything here, but it will leak memory
      //without a fake function here.
    };
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<p>...Loading</p>}>
        <header className="App-header">
          <Navbar auth={auth} />
          <div className="body">
            <Routes>
              <Route path="/" element={<Home auth={auth} blogs={blogs} />} />
              <Route exact path="apipractice" element={<APIPractice />} />
              <Route path="blog/*" element={<Blog blogs={blogs}/>}>
                <Route index element={<BlogPage auth={auth} />} />
                <Route
                  path=":blogId"
                  element={<BlogEntryStandalone auth={auth} />}
                />
                <Route
                  path="devblog"
                  element={
                    <BlogList auth={auth} blogs={blogs} devblog={true} />
                  }
                />
                <Route path="tags/:tagname" element={<Tags auth={auth} blogs={blogs}/>} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="nameguesser" element={<NameGuess />} />
              <Route path="nasapower" element={<NASAPower />} />
              <Route path="isslocator" element={<ISSLocator />} />
              <Route path="dnd" element={<DungeonsAndDragons />} />
              <Route path="ip" element={<IPAddress />} />
              <Route path="signup" element={<Signup signup={signup} />} />
              <Route path="login" element={<Login auth={auth} />} />
              <Route path="egg" element={<Egg />} />
              <Route path="csp" element={<CSP />} />
              <Route path="*" element={<NothinghHere />} />
            </Routes>
            <Footer />
            <Cookie />
          </div>
        </header>
      </Suspense>
    </div>
  );
}

export const App = connect(null, null)(AppComponent);
