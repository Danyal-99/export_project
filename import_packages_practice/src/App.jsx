import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ComponentA, ComponentB } from "@ayeshanasir123/shared-components";
import "./App.css";
import { ComponentD } from "@Danyal-99/componentd";
// import { RenderApp } from "@Danyal-99/export_project";
// import RenderApp from "@Danyal-99/export_project";
// import { ExportApp } from "@Danyal-99/export_project";
// import { TestComponent } from "@Danyal-99/export_project";
import { RenderApp } from "@Danyal-99/export_project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RenderApp />
      {/* <ComponentD /> */}
      {/* <ComponentA /> */}
    </>
  );
}

export default App;
