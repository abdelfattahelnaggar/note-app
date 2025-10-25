import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreatableSelect from "react-select/creatable";
import type { SearchInputsProps, Tag } from "../types/search-inputs.type";

export default function SearchInputs({
  titleValue,
  tagsValue,
  setTitleValue,
  setTagsValue,
}: SearchInputsProps) {
  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitleValue(e.target.value);
  }
  function handleTagsChange(newValue: readonly Tag[] | null) {
    setTagsValue(newValue ?? []);
  }
  return (
    <FieldGroup className="container">
      <FieldSet>
        <header className="text-center">
          <FieldLegend className="text-3xl!">Search</FieldLegend>
          <FieldDescription>
            Smart search&filtration system by title and tags.
          </FieldDescription>
        </header>
        <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field orientation={"vertical"}>
            <Label htmlFor="searchByTitle">Title</Label>
            <Input
              className="rounded border-zinc-300 focus-visible:outline-none focus-visible:border-blue-500 focus-visible:border-2 focus-visible:ring-0"
              value={titleValue}
              onChange={handleTitleChange}
              type="text"
              id="searchByTitle"
              placeholder="Search by title..."
            />
          </Field>

          <Field orientation={"vertical"}>
            <Label htmlFor="searchByTags">Tags</Label>
            <CreatableSelect
              placeholder="Search by tags..."
              id="searchByTags"
              isMulti
              value={tagsValue}
              onChange={handleTagsChange}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  );
}
