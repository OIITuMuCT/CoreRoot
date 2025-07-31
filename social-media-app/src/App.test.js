import { render, screen } from './helpers/test-units';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';

test('renders Welcome to Postagram text ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Postagram!/i);
  expect(linkElement).toBeInTheDocument();
});
