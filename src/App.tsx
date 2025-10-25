import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import NotesListPage from "@/features/note/pages/NotesListPage";
import NewNotePage from "@/features/note/pages/NewNotePage";
import NoteDetailsPage from "@/features/note/pages/NoteDetailsPage";
import NotFoundPage from "@/shared/pages/NotFoundPage";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <NotesListPage /> },
    { path: "/notes", element: <Navigate to={"/"} replace /> },
    { path: "/new-note", element: <NewNotePage /> },
    { path: "/notes/:id", element: <NoteDetailsPage /> },
    { path: "*", element: <NotFoundPage/> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
