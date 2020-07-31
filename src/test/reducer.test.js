import reducer from '../feature/reducer';

test('reducer increment', () => {
  const initialState = {
    count: 0
  };

  const action = { type: 'INCREMENT', value: 10 };
  const state = reducer(initialState, action);

  expect(state).toEqual({ count: 10 });
})

test('reducer decrement', () => {
  const initialState = {
    count: 20
  };

  const action = { type: 'DECREMENT', value: 20 };
  const state = reducer(initialState, action);

  expect(state).toEqual({ count: 0 });
});

test('reducer other form', () => {
  let state;
  state = reducer({ count: 0 }, { type:'INCREMENT', value: 20 });
  expect(state).toEqual({ count: 20 });
});
