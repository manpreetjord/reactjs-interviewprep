import { BrowserRouter,Routes,Route } from "react-router-dom";
import FormData from "./components/FormData";
import UseRefHook from "./components/UseRefHook";
import UseEffectHook from "./components/use-effect-hook";
import UseStateHook from "./components/useStateHook";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Navbar from "./components/Navbar";
import "./styles.css";
import { ThemeProvider } from "./theme-context";
import UseReducerHook from "./components/use-reducer-hook";
import UseMemoAndCallBack from "./components/use-memo-callback";
import UseImperativeHandleHook from "./components/use-imperative-handle-hook";
import Counter from "./components/Counter";


function App() {
  return (
    <>
    <ThemeProvider>
    <BrowserRouter>
    {/**Navbar */}
    <Navbar/>
    {/**Routes */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
      {/* <Route path="/blog" element={<Blog/>}/> */}
    </Routes>
    
    
    </BrowserRouter>
      {/* <h3>Hooks Interview Questions</h3> */}
      <div>
        {/* <UseStateHook /> */}
      </div>
      <div>
        {/* <FormData /> */}
      </div>
      <div>
        {/* <UseEffectHook /> */}
        {/* <UseRefHook/> */}
        {/* <UseReducerHook/> */}
        {/* <UseMemoAndCallBack/> */}
        {/* <UseImperativeHandleHook/> */}
        <Counter/>
      </div></ThemeProvider>
    </>
  );
}

export default App;
