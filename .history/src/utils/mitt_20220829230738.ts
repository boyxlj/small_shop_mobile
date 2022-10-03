import mitt  from 'mitt'
type Events<Events> = {
  foo: string;
  bar?: number;
};

export  const emitter = mitt()
