import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders the logos', () => {
    render(<App />);
    
    // Kiểm tra xem logo của Vite có render không
    const viteLogo = screen.getByAltText(/Vite logo/i);
    expect(viteLogo).toBeInTheDocument();
    
    // Kiểm tra xem logo của React có render không
    const reactLogo = screen.getByAltText(/React logo/i);
    expect(reactLogo).toBeInTheDocument();
  });

  test('renders the counter and increases the count when button is clicked', () => {
    render(<App />);
    
    // Kiểm tra xem nút và số đếm có xuất hiện không
    const counterButton = screen.getByText(/count is 0/i);
    expect(counterButton).toBeInTheDocument();
    
    // Nhấn nút và kiểm tra giá trị của `count` sau khi nhấn
    fireEvent.click(counterButton);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  test('renders the instruction text', () => {
    render(<App />);
  
    // Kiểm tra phần văn bản "Edit" trong phần tử `<p>`
    const paragraphElement = screen.getByText(/Edit/i);
    expect(paragraphElement).toBeInTheDocument();
  
    // Kiểm tra phần tử `<code>` với văn bản "src/App.jsx"
    const codeElement = screen.getByText('src/App.jsx');
    expect(codeElement).toBeInTheDocument();
  });
  
});
