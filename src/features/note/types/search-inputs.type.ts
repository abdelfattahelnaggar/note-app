export type Tag = { label: string; value: string };
export type Tags = ReadonlyArray<Tag>;

export type SearchInputsProps = {
    titleValue: string;
    tagsValue: Tags;
    setTitleValue: (value: string) => void;
    setTagsValue: (value: Tags) => void;
}
