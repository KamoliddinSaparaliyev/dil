import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./styles/main.scss";
import * as AOS from "aos";
import "aos/dist/aos.css";

// ii18n
import "./i18n.ts";

//slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//aos initialize
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
