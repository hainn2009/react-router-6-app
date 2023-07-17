import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader, action as createContactAction } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader, action as updateFavoriteAction } from "./routes/contact";
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
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: updateFavoriteAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: updateContactAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        element: <h1>Hello123</h1>,
                        action: destroyContactAction,
                        errorElement: <div>There was an error</div>,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
