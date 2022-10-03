import mitt  from 'mitt'
type Events = {
  []: string;
  bar?: number;
};

export const emitter = mitt<Events>()
