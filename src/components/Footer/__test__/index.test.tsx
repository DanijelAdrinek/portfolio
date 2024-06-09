import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '..';
import Styles from '../styles.module.css';

beforeEach(() => {
  render(<Footer/>);
});

it('Should render footer to the DOM', () => {
  const footerComponent = screen.getByTestId('footer');
  expect(footerComponent).toBeDefined();
});

it('Should render footer to the DOM and make it visible to the user', () => {
  const footerComponent = screen.getByTestId('footer');
  expect(footerComponent).toBeVisible();
});

it('Should contain footer class from styles', () => {
  const footerComponent = screen.getByTestId('footer');
  expect(footerComponent).toHaveClass(Styles.footer);
});


it('Should render FooterSocials, FooterSection and FooterInfo', () => {
  const footerComponent = screen.getByTestId('footer');

  expect(footerComponent).toContainElement(screen.getByTestId('footer-socials'));
  expect(footerComponent).toContainElement(screen.getByTestId('footer-section-links'));
  expect(footerComponent).toContainElement(screen.getByTestId('footer-info'));
});