import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader, action as contactAction, } from "./routes/contact";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";
import Settings from "./routes/settings";
import General from "./routes/general";
import Profile from "./routes/profile";

import Chat from './routes/Chat';

import { Provider } from 'react-redux';
import store from './store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "general",
            element: <General />,
          },
          {
            path: "profile",
            element: <Profile />,
          }
        ]
      },
      {
        path: "chat",
        element: <Chat />,
        children: [
          {
            path: ":id",
            element: <General />,
          },
          {
            path: "profile",
            element: <Profile />,
          }
        ]
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);