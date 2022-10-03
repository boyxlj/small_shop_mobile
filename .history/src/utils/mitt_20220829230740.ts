import mitt  from 'mitt'
type Events = {
  foo: string;
  bar?: number;
};

export  const emitter<Events> = mitt()
