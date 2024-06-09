import React from "react";
import FooterInfo from "../FooterInfo";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  render(<FooterInfo />);
});

it('should render FooterInfo to the DOM', () => {
  const footerInfo = screen.getByTestId('footer-info');

  expect(footerInfo).toBeInTheDocument();
});

it('Should be visible', () => {
  const footerInfo = screen.getByTestId('footer-info');

  expect(footerInfo).toBeVisible();
});

it('Should have current year', () => {
  const dateElement = screen.getByText(new Date().getFullYear().toString());

  expect(dateElement).toBeDefined();
});