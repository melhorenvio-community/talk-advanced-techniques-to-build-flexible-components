// TYPES
import type { FunctionalComponent } from 'vue';

export type Layout = 'top' | 'inner' | 'bottom';

export type Theme = 'light' | 'dark';

export type IconPosition = 'left' | 'right';

export interface TagsModel {
  id: string;
  text: string;
}

export interface TagsProps {
  layout?: Layout;
  theme?: Theme;
  icon?: FunctionalComponent;
  iconPosition?: IconPosition;
};

export interface TagsInputModel {
  tags: TagsModel[];
};

export interface TagsInputListeners {
  input: (e: Event) => void;
  keydown: (e: KeyboardEvent) => void;
}
