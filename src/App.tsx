import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotesListPage from "@/features/note/pages/NotesListPage";
import NewNotePage from "@/features/note/pages/NewNotePage";
import { Navigate } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <NotesListPage /> },
    {path:"/notes", element: <Navigate to={"/"} replace/>},
    { path: "/new-note", element: <NewNotePage /> },
    { path: "/notes/:id", element: <h1>Element Details</h1> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
