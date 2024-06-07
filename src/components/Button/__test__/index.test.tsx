import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '..';
import { BUTTON_SIZES } from '@/constants';
import Styles from '../styles.module.css';

it("Should render Button to DOM", () => {
    render(<Button>Hello World</Button>);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeDefined();
});

it("Should make Button visible to user", () => {
    render(<Button>Hello World</Button>);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeVisible();
});

it("Should make Button contain text of Hello World", () => {
  render(<Button>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toHaveTextContent('Hello World')
});

it("Should make Button disabled", () => {
  render(<Button disabled={true}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toBeDisabled();
});

it("Should make button have a large size", () => {
  render(<Button size={BUTTON_SIZES.LARGE}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toHaveClass(Styles[BUTTON_SIZES.LARGE]);
});

it("Should make button have a small size", () => {
  render(<Button size={BUTTON_SIZES.SMALL}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toHaveClass(Styles[BUTTON_SIZES.SMALL]);
});

const mockedFn = vitest.fn();

it("Should change text content of button if button is clicked", () => {
  render(<Button id='test-btn' clickFunction={() => { mockedFn() }}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  fireEvent.click(buttonElement);

  expect(buttonElement);
});

it("Should give button a type of submit", () => {
  render(<Button>Hello World</Button>);

  const buttonElement = screen.getByRole('button', { target: { type: 'submit'} });

  expect(buttonElement);
})