// Couter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Couter } from '../components/Shared/Couter';
import couterReducer from '../redux/reducers/couterReducer';

// Tạo store với reducer
const store = createStore(combineReducers({ couter: couterReducer }));

describe('Couter component', () => {
  test('renders the count and buttons', () => {
    render(
      <Provider store={store}>
        <Couter />
      </Provider>
    );

    expect(screen.getByText(/Count:/)).toBeInTheDocument();
    expect(screen.getByText(/Increase/)).toBeInTheDocument();
    expect(screen.getByText(/Decrease/)).toBeInTheDocument();
  });

  test('increases and decreases the count', () => {
    render(
      <Provider store={store}>
        <Couter />
      </Provider>
    );

    const increaseButton = screen.getByText(/Increase/);
    const decreaseButton = screen.getByText(/Decrease/);

    // Kiểm tra giá trị count ban đầu
    expect(screen.getByText(/Count: 0/)).toBeInTheDocument();

    // Nhấn nút Increase
    fireEvent.click(increaseButton);
    expect(screen.getByText(/Count: 1/)).toBeInTheDocument();

    // Nhấn nút Decrease
    fireEvent.click(decreaseButton);
    expect(screen.getByText(/Count: 0/)).toBeInTheDocument();
  });
});
