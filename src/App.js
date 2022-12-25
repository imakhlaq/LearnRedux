import Counter from "./components/Counter";
import ContextProvider from "./store/with context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Counter />
    </ContextProvider>
  );
}

export default App;
