import { render } from '@testing-library/react';
import Services from './pages/Services';

test('renders Services page without crashing', () => {
  render(<Services />);
  expect(document.body).toBeInTheDocument();
});