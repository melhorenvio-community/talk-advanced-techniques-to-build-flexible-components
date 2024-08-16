// TYPES
import type { FunctionalComponent } from 'vue';

export interface ITagsModel {
  id: string;
  text: string;
}
export interface ITagsInputModel {
  tags: ITagsModel[];
};

export interface ITagsProps {
  theme?: 'light' | 'dark';
  icon?: FunctionalComponent;
};
