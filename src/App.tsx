import { useEffect } from "react";
import style from "./App.module.scss";
import cn from "classnames";
import { getApi } from "./utils/network";

function App() {
  useEffect(() => {
    getApi();
  });
  return (
    <div>
      <h1 className={cn(style.red, style.text)}>hello</h1>
    </div>
  );
}

export default App;
