import type { noteType } from "../types/note.type";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export default function NoteCard({ note }: { note: noteType }) {
  return (
    <Card className="w-full h-fit pb-1 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold ">{note.title}</CardTitle>
        <CardDescription className="space-x-0.5 space-y-0.5 line-clamp-1">
          {note.tags.map((tag: string) => {
            return <Badge key={tag}>{tag}</Badge>;
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="line-clamp-1">
        <p>{note.body}</p>
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center ">
      <Separator className="w-7 pb-0 mb-0" />
        <Button variant={"link"} >
          <Link to={`/notes/${note.id}`}>Show note details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
