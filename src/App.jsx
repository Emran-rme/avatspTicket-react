import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components";
import { CreateNewTicket, NewUser, Settings } from "./pages";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <CreateNewTicket />,
                },
                {
                    path: "/create-new-user",
                    element: <NewUser />,
                },

                {
                    path: "/settings",
                    element: <Settings />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
