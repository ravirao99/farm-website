import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Our Farm/i);
  expect(welcomeElement).toBeInTheDocument();
});