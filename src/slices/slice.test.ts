import { getDefaultMiddleware } from "@reduxjs/toolkit";

import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import reducer, {
  initialState,
  setForm,
} from './slice';

const mockStore = configureStore(getDefaultMiddleware());

describe('slice', () => {
  let store: MockStoreEnhanced<unknown>;

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
      },
    }))
  })

  describe('setForm', () => {
    it('form의 상태를 변경한다', () => {
      const { form } = reducer(initialState, setForm({ name: 'naverId', value: 'rhkrgudwh' }));

      expect(form.naverId).toBe('rhkrgudwh');
    });
  });
});
