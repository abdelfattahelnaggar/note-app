import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import type { noteType } from "../types/note.type";
import { noteSchema } from "../schemas/note.schema";
import CreatableSelect from "react-select/creatable";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import useLocalStorage from "@/shared/hooks/useLocalStorage";
import { showSuccessToast } from "@/shared/utils/toast";
export default function NewNoteForm() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<noteType>({
    resolver: zodResolver(noteSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      body: "",
      tags: [],
      id: "",
    },
  });
  const [notes, setNotes] = useLocalStorage<noteType[]>("notes", []);
  function onSubmit(data: noteType) {
    try {
      const newNote = {
        ...data,
        id: crypto.randomUUID(),
      };
      setNotes([...notes, newNote]);
      showSuccessToast(
        `New note "${newNote.title}" has been added successfully!`
      );
      reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Card className="w-full sm:max-w-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-black">Create a Note</CardTitle>
        <CardDescription>
          Save your notes in an intelligent note app to help you remember
          everything easily.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="new-note-form" onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="flex flex-col md:flex-row gap-4">
              <Controller
                name="title"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="new-note-form-title">Title</FieldLabel>
                    <Input
                      {...field}
                      id="new-note-form-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Remember friend visit."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="tags"
                control={control}
                render={({ field }) => {
                  const hasError = !!errors.tags;
                  return (
                    <Field data-invalid={hasError}>
                      <FieldLabel htmlFor="new-note-form-tags">Tags</FieldLabel>
                      <CreatableSelect
                        inputId="new-note-form-tags"
                        isMulti
                        placeholder="Add tags..."
                        value={field.value?.map((tag) => ({
                          value: tag,
                          label: tag,
                        }))}
                        onChange={(newValue) => {
                          const tags = newValue
                            ? newValue.map((item) => item.value)
                            : [];
                          field.onChange(tags);
                        }}
                        styles={{
                          control: (base, state) => ({
                            ...base,
                            borderColor: hasError
                              ? "hsl(var(--destructive))"
                              : base.borderColor,
                            boxShadow: state.isFocused
                              ? hasError
                                ? "0 0 0 1px hsl(var(--destructive))"
                                : base.boxShadow
                              : base.boxShadow,
                            "&:hover": {
                              borderColor: hasError
                                ? "hsl(var(--destructive))"
                                : base.borderColor,
                            },
                          }),
                        }}
                      />
                      {hasError && (
                        <FieldError>
                          {(() => {
                            const tagsError = errors?.tags;

                            // Array-level error ("At least one tag is required")
                            if (tagsError?.message) {
                              return tagsError.message;
                            }

                            // Item-level errors (array of errors, one per tag)
                            if (Array.isArray(tagsError)) {
                              const firstError = tagsError.find(
                                (error) => error?.message
                              );
                              return firstError?.message || "Invalid tags";
                            }

                            return "Invalid tags";
                          })()}
                        </FieldError>
                      )}
                    </Field>
                  );
                }}
              />
            </div>
            <Controller
              name="body"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="new-note-form-body">Body</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="new-note-form-body"
                      placeholder="My friend Michael will visit me tonight, don't forgat to bring some chips and video games."
                      rows={6}
                      maxLength={1000}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText
                        className={`tabular-nums ${
                          field.value.length === 1000 ? "text-red-500" : ""
                        }`}
                      >
                        {field.value.length}/1000 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field className="flex-col-reverse md:flex-row-reverse md:justify-start ms-auto md:w-fit ">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit" form="new-note-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
