//import Background Style
import "./App.css";

//import ReactComponent
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gray-900 h-screen">
        <div className="container max-w-full flex">
          {/* //3D_Window */}
          <h1>AAA</h1>

          {/* //Cost-Cal_Window */}
          <div className="w-3/5">
            <h1>BBB</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
