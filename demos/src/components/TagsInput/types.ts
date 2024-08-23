// TYPES
import type { FunctionalComponent } from 'vue';

export type Theme = 'light' | 'dark';

export interface TagsModel {
  id: string;
  text: string;
}

export interface TagsInputModel {
  tags: TagsModel[];
};

export interface TagsProps {
  theme?: Theme;
  icon?: FunctionalComponent;
};
