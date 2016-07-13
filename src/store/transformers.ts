import { Iterable, fromJS } from 'immutable';

export function deimmutify(state) {
  return Object.keys(state).reduce((acc, val) => {
    acc[val] = state[val].toJS();
    return acc;
  }, {});
}

export function reimmutify(plain) {
  return Object.keys(plain).reduce((acc, val) => {
    acc[val] = fromJS(plain[val]);
    return acc;
  }, {});
}
