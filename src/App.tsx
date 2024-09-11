import RouterOutlet from "./App/Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterOutlet />
      </Provider>
    </>
  );
}

export default App;
