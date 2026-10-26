// function App() {
//   return (
//     <div>
//       <Card children="Hello, World!" />
//       <Card>
//         <h1>Hello My Name is Shubham </h1>
//       </Card>
//     </div>
//   );
// }

import { createContext, useContext, useRef, useState } from "react";

// function Card({ children }) {
//   return (
//     <div
//       style={{
//         background: "red",
//         borderRadius: 10,
//         color: "white",
//         padding: 10,
//         margin: 10,
//       }}
//     >
//       {children}
//     </div>
//   );
// }
// export default App;

//Routing
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Link to={"/"}> Allen</Link>
//         <Link to={"/class-11"}>Class11</Link>
//         <Routes>
//           <Route path="/class-11" element={<Class11 />} />
//         </Routes>
//         <Routes>
//           <Route path="/" element={<Allen />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Class11() {
//   return <div>NEET Programme is for class 11</div>;
// }

// function Allen() {
//   return <div>Welcome to the Allen</div>;
// }

// export default App;

//Wrapping the Routes in the Main Parent routers

// import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Allen />} />
//             <Route path="/class-11" element={<Class11 />} />
//             <Route path="/class-12" element={<Class12 />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div>
//       <Link to="/">Allen</Link>
//       <Link to="/class-11">Class11</Link>
//       <Link to="/class-12">Class12</Link>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div>
//       <h1>This is the Footer</h1>
//     </div>
//   );
// }

// function Allen() {
//   return <div>Welcome to Allen</div>;
// }

// function Class11() {
//   return (
//     <div>
//       <h1>Class 11 Modules</h1>
//     </div>
//   );
// }

// function Class12() {
//   return (
//     <div>
//       <h1>Class 12 Modules</h1>
//     </div>
//   );
// }

// export default App;

//Cutom Hooks
//UseRef

// function App() {
//   const inputref = useRef();
//   return (
//     <div>
//       Sign Up
//       <input ref={inputref} placeholder="name" type="text" />
//       <input type="text" />
//       <button>Submit</button>
//     </div>
//   );
// }

// export default App;

//Clock is with the useRef
//We define here why this is useFull

// function App(){

//   const[currentCount , setCurrentCount] = useState(1);
//   let timer =0;

//   function startClock(){
//    timer= setInterval(() => {
//       setCurrentCount((currentCount) => currentCount + 1);
//     }, 1000);
//   }

//   function stopClock(){
//      clearInterval(timer);
//   }

//   return(
//     <div>
//      {currentCount}

//      <br />

//      <button onClick={startClock} >Start</button>

//      <button onClick={stopClock} >Stop</button>

//     </div>
//   )
// }
// export default App;

//The Upper code creates a Problem
//So we initilaize the timer using the usestate hook

// function App() {
//   const [state, setState] = useState(1);
//   const [timer, settimer] = useState(0);
//   function startClock() {
//     let value = setInterval(() => {
//       setState((state) => state + 1);
//     }, 1000);
//     settimer(value);
//   }

//   function stopClock() {
//     clearInterval(timer);
//   }
//   return (
//     <div>
//       {state}
//       <button onClick={startClock}>Start</button>
//       <button onClick={stopClock}>Stop</button>
//     </div>
//   );
// }

// export default App;

//there is unnessary rerender happens which is useless in this case

// function App() {
//   const [countValue, setcountValue] = useState(1);
//   const timer = useRef();
//   function startTimer() {
//     let value = setInterval(() => {
//       setcountValue((countValue) => countValue + 1);
//     }, 1000);
//     timer.current = value;
//   }
//   function stopTimer() {
//     clearInterval(timer.current);
//   }

//   return (
//     <div>
//       {countValue}
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <Bulb />
//     </div>
//   );
// }

// function Bulb() {
//   const [bulbstate, setbulbstate] = useState(true);
//   return (
//     <div>
//       <BulbState bulbon={bulbstate} />
//       <ToggleBulb bulbonstate={setbulbstate} bulbon={bulbstate} />
//     </div>
//   );
// }

// function BulbState({ bulbon }) {
//   return <div>{bulbon ? "Bulb On" : "Bulb Off"}</div>;
// }
// function ToggleBulb({ bulbon, bulbonstate }) {
//   function toggle() {
//     bulbonstate(!bulbon);
//   }
//   return (
//     <div>
//       <button onClick={toggle}>Toggle the Bulb</button>
//     </div>
//   );
// }
// export default App;

//Props Drilling

//Context API

//First create the Context

// const bulbContext = createContext();

// //Wrap inside the Context API
// function App() {
//   const [bulbon, setBulbon] = useState(true);
//   return (
//     <div>
//       <bulbContext.Provider
//         value={{
//           bulbon: bulbon,
//           setBulbon: setBulbon,
//         }}
//       >
//         <Light />
//       </bulbContext.Provider>
//     </div>
//   );
// }

// function Light() {
//   return (
//     <div>
//       <LightBulb />
//       <ToggleSwitch />
//     </div>
//   );
// }

// function LightBulb() {
//   const { bulbon } = useContext(bulbContext);
//   return <div>{bulbon ? "Bulb On" : "Bulb Off"}</div>;
// }

// function ToggleSwitch() {
//   const { bulbon, setBulbon } = useContext(bulbContext);
//   function toggle() {
//     setBulbon(!bulbon);
//   }
//   return (
//     <div>
//       <button onClick={toggle}>Bulb Toggle Button</button>
//     </div>
//   );
// }

// export default App;

//Better Way for the Context API

// const bulbContext = createContext();

// export function BuldProvider({ children }) {
//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <bulbContext.Provider
//       value={{
//         bulbOn: bulbOn,
//         setBulbOn: setBulbOn,
//       }}
//     >
//       {children}
//     </bulbContext.Provider>
//   );
// }

// function App() {
//   return (
//     <div>
//       <BuldProvider>
//         <Light />
//       </BuldProvider>
//     </div>
//   );
// }

// function Light() {
//   return (
//     <>
//       <LightBulb />
//       <ToggleLightBulb />
//     </>
//   );
// }

// function LightBulb() {
//   const { bulbOn } = useContext(bulbContext);

//   return <div>{bulbOn ? "BulbOn" : "BulbOff"}</div>;
// }

// function ToggleLightBulb() {
//   const { bulbOn, setBulbOn } = useContext(bulbContext);
//   function toggle() {
//     setBulbOn(!bulbOn);
//   }
//   return (
//     <div>
//       <button onClick={toggle}> Toggle The Bulb</button>
//     </div>
//   );
// }

// export default App;

//Custom Hooks

//custom Hooks uses another hooks using the use Hook

// function usevalue(){
//   const[value , setvalue] =  useState(1);

//   return value;
// }

//Without Using the Custom Hooks

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCounter() {
//     setCount((count) => count + 1);
//   }

//   return (
//     <div>
//       <div>{count}</div>

//       <div>
//         <button onClick={increaseCounter}>Increase</button>
//       </div>
//     </div>
//   );
// }

// export default App;

//The Same thing we can do using the Custom Hooks

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}

function App() {
  const { count, increaseCount } = useCounter();
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={increaseCount}>Increase</button>
      </div>
    </div>
  );
}

export default App;
