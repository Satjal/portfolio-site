import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => window.history.replaceState({}, '', '/'));

test('visitors can navigate from the homepage to projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /turning ideas into digital experiences/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: /explore my work/i }));
  expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Restaurant Website' })).toBeInTheDocument();
});

test('mobile navigation announces its expanded state and closes after navigation', () => {
  render(<App />);
  const menu = screen.getByRole('button', { name: 'Menu' });
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: 'Contact', exact: true }));
  expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email');
  expect(screen.getByRole('button', { name: /create email draft/i })).toBeInTheDocument();
  expect(screen.getByText(/opens a draft in your email app/i)).toBeInTheDocument();
});

test('resume download uses the actual case-sensitive asset path', () => {
  window.history.replaceState({}, '', '/about');
  render(<App />);
  expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', '/Resume.docx');
});
