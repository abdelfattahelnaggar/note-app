import { Button } from "@/components/ui/button";
import NewNoteForm from "../components/NewNoteForm";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NewNotePage() {
  return (
    <div className="flex justify-center items-center min-h-svh">
      <Button variant="link" className="absolute top-2 left-0 text-lg">
        <Link to=".." className="flex justify-center items-center gap-0.5">
          <FaArrowLeft /> Back
        </Link>
      </Button>
      <NewNoteForm />
    </div>
  );
}
