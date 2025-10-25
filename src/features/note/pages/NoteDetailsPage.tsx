import { Link, useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "@/shared/hooks/useLocalStorage";
import type { noteType } from "../types/note.type";
import NoteCard from "../components/NoteCard";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { LuFileX } from "react-icons/lu";

export default function NoteDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notes] = useLocalStorage<noteType[]>("notes", []);
  
  const currentNote = notes.find((note) => note.id === id);

  // Handle note not found
  if (!currentNote) {
    return (
      <div className="min-h-svh flex flex-col justify-center items-center p-4">
        <Button 
          variant="link" 
          className="absolute top-5 left-5 text-lg hover:text-primary transition-colors"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft className="mr-2" /> 
          Back to Notes
        </Button>
        
        <div className="flex flex-col items-center justify-center text-center max-w-md">
          <div className="text-gray-400 text-9xl mb-6">
            <LuFileX />
          </div>
          <h1 className="text-3xl font-bold text-gray-700 mb-3">
            Note Not Found
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            The note you're looking for doesn't exist or may have been deleted.
          </p>
          <Button onClick={() => navigate("/", {replace:true})}>
            Return to Notes List
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-svh flex flex-col items-center p-4 py-8 md:py-12">
      {/* Back Button */}
      <Button 
        variant="link" 
        className="absolute top-5 left-5 text-lg hover:text-primary transition-colors"
      >
        <Link to=".." className="flex items-center gap-2">
          <FaArrowLeft /> 
          <span className="hidden sm:inline">Back</span>
        </Link>
      </Button>

      {/* Note Content */}
      <div className="w-full max-w-4xl mt-8 md:mt-0">
        <NoteCard note={currentNote} isDetailed={true} />
      </div>
    </div>
  );
}
