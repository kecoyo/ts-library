export type TagProps = {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | (string & {});
  fill?: 'solid' | 'outline';
  round?: boolean;
};

export const Tag = (p: TagProps) => {
  return p;
};
