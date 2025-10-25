import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "@/shared/hooks/useLocalStorage";
import type { noteType } from "../types/note.type";
import NoteCard from "../components/NoteCard";
import { LuFileText } from "react-icons/lu";
import SearchInputs from "../components/SearchInputs";
import { LuSquarePlus } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { useMemo, useState } from "react";
import type { Tags } from "../types/search-inputs.type";
export default function NotesListPage() {
  const [notes, setNotes] = useLocalStorage<noteType[]>("notes", []);
  const [titleValue, setTitleValue] = useState<string>("");
  const [tagsValue, setTagsValue] = useState<Tags>([]);
  const navigate = useNavigate();

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchTitle = note.title
        .toLowerCase()
        .trim()
        .includes(titleValue.toLowerCase().trim());

      const matchTags =
        tagsValue.length === 0 ||
        tagsValue.some((searchTag) =>
          note.tags.some((noteTag) =>
            noteTag
              .toLowerCase()
              .trim()
              .includes(searchTag.label.toLowerCase().trim())
          )
        );

      return matchTitle && matchTags;
    });
  }, [notes, titleValue, tagsValue]);
  return (
    <div className="relative min-h-svh flex flex-col justify-center items-center">
      <div className="absolute top-0 right-5 flex gap-3">
        <Button
          className="my-5 p-4 "
          onClick={() => {
            navigate("/new-note");
          }}
        >
          <LuSquarePlus /> <span>Add Note</span>
        </Button>
        <Button
          className="my-5 p-4  bg-red-500 text-white hover:bg-red-600"
          variant={"secondary"}
          onClick={() => setNotes([])}
        >
          <LuTrash2 />
          Clear All Notes
        </Button>
      </div>
      <SearchInputs
        titleValue={titleValue}
        tagsValue={tagsValue}
        setTitleValue={setTitleValue}
        setTagsValue={
          setTagsValue as (
            value: readonly { label: string; value: string }[]
          ) => void
        }
      />
      <section className="w-full container p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note: noteType) => {
            return <NoteCard note={note} isDetailed={false} key={note.id} />;
          })
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-6 px-1 ">
            <div className="text-gray-400 text-9xl mb-4">
              <LuFileText />
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-2">
              No Notes Yet
            </h2>
            <p className="text-gray-500 md:text-xl text-center max-w-2xl mb-6">
              Start capturing your thoughts and ideas by creating your first
              note.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
