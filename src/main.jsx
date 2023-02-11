import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as createContactAction } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as updateContactAction } from "./routes/edit";
import { action as destroyContactAction } from "./routes/destroy";
import Index from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: createContactAction,
        children: [
            { index: true, element: <Index /> },
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action: updateContactAction,
            },
            {
                path: "contacts/:contactId/destroy",
                action: destroyContactAction,
                errorElement: <div>There was an error</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
