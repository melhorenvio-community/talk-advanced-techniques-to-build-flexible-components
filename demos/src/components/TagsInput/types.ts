export interface ITagsModel {
  id: string;
  text: string;
}
export interface ITagsInputModel {
  tags: ITagsModel[];
};

export interface ITagsProps {
  theme?: 'light' | 'dark';
  icon?: string;
}
