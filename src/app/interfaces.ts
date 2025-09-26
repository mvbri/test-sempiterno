export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: string | number;
  publish_date?: string;
  description?:
    | string
    | {
        value?: string;
      };
  created?: {
    type?: string;
    value?: string | number | Date | undefined;
  };
  covers?: number[];
}
