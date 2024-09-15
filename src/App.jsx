//import Background Style
import "./App.css";

//import Component
import Header from "./components/header";
import CostCalc from "./components/costCalc";
import Object3D from "./components/object3D";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 h-screen">
        <div className="container max-w-full flex">
          <Object3D />

          <div className="w-3/5">
            <CostCalc />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
