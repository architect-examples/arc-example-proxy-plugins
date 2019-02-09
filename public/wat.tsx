type Reducer<T, U> = (u: U, t: T) => U;

export default function reduce<T, U>(arr: Array<T>, reducer: Reducer<T, U>, base: U): U {
  let acc = base;
  for (const value of arr) {
    acc = reducer(acc, value);
  }
  return acc;
}
