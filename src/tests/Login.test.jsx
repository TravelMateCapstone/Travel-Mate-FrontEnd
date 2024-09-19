import { describe, test, expect, vi, beforeEach } from 'vitest'; // Import vitest
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { toast } from 'react-toastify'; // Mock toastify
import Login from '../components/Auth/Login'; // Đường dẫn chính xác đến component Login
import '@testing-library/jest-dom'; // Import jest-dom

// Mock store and initial state
const mockStore = configureStore([]);
let store;

// Mock react-toastify
vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
  },
}));

describe('Login Component', () => {
  beforeEach(() => {
    store = mockStore({});
  });

  test('renders login modal with form elements', () => {
    render(
      <Provider store={store}>
        <Login show={true} handleClose={vi.fn()} />
      </Provider>
    );

    // Kiểm tra xem các phần tử cần thiết có hiển thị không
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Tiếp tục')).toBeInTheDocument();
    expect(screen.getByText('Đăng nhập bằng Google')).toBeInTheDocument();
    expect(screen.getByText('Đăng nhập bằng Facebook')).toBeInTheDocument();
  });

  test('shows error message on failed login attempt', async () => {
    // Mock fetch để giả lập trường hợp đăng nhập thất bại
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Sai tài khoản hoặc mật khẩu.' }),
      })
    );

    const handleClose = vi.fn();

    render(
      <Provider store={store}>
        <Login show={true} handleClose={handleClose} />
      </Provider>
    );

    // Điền vào các trường nhập liệu
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'wronguser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'wrongpass' },
    });

    // Nhấn nút Tiếp tục
    fireEvent.click(screen.getByText('Tiếp tục'));

    // Đợi đến khi error message xuất hiện
    await waitFor(() => {
      expect(screen.getByText('Sai tài khoản hoặc mật khẩu.')).toBeInTheDocument();
    });

    expect(handleClose).not.toHaveBeenCalled();
  });

  test('successful login and closing modal', async () => {
    // Mock fetch để giả lập trường hợp đăng nhập thành công
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'mockToken', user: { username: 'testuser' } }),
      })
    );

    const handleClose = vi.fn();

    render(
      <Provider store={store}>
        <Login show={true} handleClose={handleClose} />
      </Provider>
    );

    // Điền vào các trường nhập liệu
    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'testpass' },
    });

    // Nhấn nút Tiếp tục
    fireEvent.click(screen.getByText('Tiếp tục'));

    // Đợi đến khi modal được đóng và toast thành công xuất hiện
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith('Đăng nhập thành công!', {
        position: 'bottom-right',
      });
    });
  });
});
