import React from "react";
import FooterInfo from "../FooterInfo";
import { render, screen } from "@testing-library/react";

it('should render FooterInfo to the DOM', () => {
  render(<FooterInfo />);

  const footerInfo = screen.getByTestId('footer-info');

  expect(footerInfo).toBeInTheDocument();
});

it('Should be visible', () => {
  render(<FooterInfo />);

  const footerInfo = screen.getByTestId('footer-info');

  expect(footerInfo).toBeVisible();
});

it('Should have current year', () => {
  render(<FooterInfo/>);

  const dateElement = screen.getByText(new Date().getFullYear().toString());

  expect(dateElement).toBeDefined();
});