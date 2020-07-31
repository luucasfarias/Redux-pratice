import { increment, decrement } from '../feature/actions';

test('Action: Increment', () => {
  let incr = increment(10);
  expect(incr).toEqual({
    type: 'INCREMENT',
    value: 10
  });
});

test('Action: Decrement', () => {
  let decr = decrement(2);
  expect(decr).toEqual({
    type: 'DECREMENT',
    value: 2
  });
});

