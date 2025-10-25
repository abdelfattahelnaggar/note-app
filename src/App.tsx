import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import NotesListPage from "@/features/note/pages/NotesListPage";
import NewNotePage from "@/features/note/pages/NewNotePage";
import NoteDetailsPage from "@/features/note/pages/NoteDetailsPage";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <NotesListPage /> },
    { path: "/notes", element: <Navigate to={"/"} replace /> },
    { path: "/new-note", element: <NewNotePage /> },
    { path: "/notes/:id", element: <NoteDetailsPage /> },
    { path: "*", element: <h1>Not Found Page</h1> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
