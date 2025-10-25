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
export default function NoteCard({
  note,
  isDetailed = false,
}: {
  note: noteType;
  isDetailed?: boolean;
}) {
  return (
    <Card className={`w-full h-fit shadow-lg ${isDetailed ? 'pb-6' : 'pb-1'}`}>
      <CardHeader className="text-center">
        <CardTitle className={`${isDetailed ? 'text-3xl' : 'text-xl'} font-bold`}>
          {note?.title}
        </CardTitle>
        <CardDescription
          className={`space-x-1 space-y-1 ${isDetailed ? 'flex flex-wrap justify-center gap-1' : 'line-clamp-1'}`}
        >
          {note?.tags.map((tag: string) => {
            return <Badge key={tag} className={isDetailed ? 'text-sm' : ''}>{tag}</Badge>;
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className={`${isDetailed ? 'text-lg leading-relaxed px-8 py-6' : 'line-clamp-1'} break-all`}>
        <p>{note?.body}</p>
      </CardContent>
      {!isDetailed && (
        <CardFooter className="flex flex-col justify-center items-center">
          <Separator className="w-7 pb-0 mb-0" />
          <Button variant={"link"}>
            <Link to={`/notes/${note.id}`}>Show note details</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
