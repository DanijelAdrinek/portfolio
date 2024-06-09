import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

beforeEach(() => {
  localStorage.clear();
});

it('Should set state using a function', () => {
  const key = 'testKey';
  const initialValue = 'testValue';
  const { result } = renderHook(() => useLocalStorage(key, initialValue));

  expect(result.current[0]).toBe(initialValue);
});

it('Should get the last key if it was set instead of setting it to initial value', () => {
  const key = 'testKey';
  const initialValue = 'testValue';
  const oldValue = 'oldValue';
  localStorage.setItem(key, JSON.stringify(oldValue));

  const { result } = renderHook(() => useLocalStorage(key, initialValue));

  expect(result.current[0]).toBe(oldValue);
});

it('Should update the value if it was set to a different value', () => {
  const key = 'testKey';
  const initialValue = 'testValue';
  const oldValue = 'oldValue';
  const newValue = 'newValue';
  localStorage.setItem(key, JSON.stringify(oldValue));

  const { result } = renderHook(() => useLocalStorage(key, initialValue));

  act(() => {
    result.current[1](newValue);
  });

  expect(result.current[0]).toBe(newValue);
});

it('Should not update the value if it was set to the same value', () => {
    const key = 'testKey';
  const initialValue = 'testValue';
  const oldValue = 'oldValue';
  localStorage.setItem(key, JSON.stringify(oldValue));

  const { result } = renderHook(() => useLocalStorage(key, initialValue));

  act(() => {
    result.current[1](oldValue);
  });

  expect(result.current[0]).toBe(oldValue);
});