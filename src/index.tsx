import React from "react";
import ReactDOM from "react-dom/client";

// react core paket
// react HTML dom ile entegre çalışmasını sağlayan ReactDOM

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// uygulama ilk buradan ayağa kalkar.

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// div id root ile uygulama doma yansıtılıyor

// root html  dom üzerinde göster
root.render(
  // jsx uzantılı bir dil
  <React.StrictMode>
    {/* react tarafında kod yazarken bazı hataları göstermeye yarayan bir kısıtlı yazım modu. */}
    <App />
    {/* ana açılış componentini bas diyerek */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
