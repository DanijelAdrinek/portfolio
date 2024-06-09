import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterSocials from '../FooterSocials';

const testId = 'footer-socials';

beforeEach(() => {
  render(<FooterSocials />);
});

it('Should render FooterSocials to the DOM', () => {
  const footerSocialsComponent = screen.getByTestId(testId);

  expect(footerSocialsComponent).toBeDefined();
});

it('Should render FooterSocials to the DOM and make it visible to the user', () => {
  const footerSocialsComponent = screen.getByTestId(testId);

  expect(footerSocialsComponent).toBeVisible();
});


