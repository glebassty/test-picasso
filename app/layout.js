"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="flex justify-center items-center">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
