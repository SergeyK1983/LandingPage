import { createRoot } from "react-dom/client";
import WebsiteNavigation1 from "./components/WebsiteNavigation1";
import "./styles/reset.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1440px" }} data-ignore="used only for top most containter width">
    <WebsiteNavigation1 />
  </div>
);
