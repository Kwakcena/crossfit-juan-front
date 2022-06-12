import { render, screen } from '@testing-library/react';

import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { useSelector } from 'react-redux';

import thunk from 'redux-thunk';

import ReservationsContainer from './ReservationsContainer';

import { AppDispatch } from '../store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('react-redux');

describe('ReservationsContainer', () => {
  const renderReservationsContainer = () => render(
    <ReservationsContainer />
  );

  let store: MockStoreEnhanced<unknown, AppDispatch>;

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        timeTable: given.timeTable,
        maxPersons: given.maxPersons,
      }
    }));

    (useSelector as jest.Mock)
      .mockImplementation((selector) => selector(store.getState()));
  })

  it('예약자 현황 title을 볼 수 있다', () => {
    renderReservationsContainer();

    expect(screen.getByText('예약자 현황')).toBeInTheDocument();
  });
});