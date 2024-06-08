import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '..';
import { BUTTON_SIZES } from '@/constants';
import Styles from '../styles.module.css';
import exp from 'constants';

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

describe("Button sizes", () => {
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
  
  it("Should make button with size of medium have same classes as button without size", () => {
    render(
      <>
        <Button size={BUTTON_SIZES.MEDIUM}>Medium</Button>
        <Button>Hello World</Button>
      </>
    );
    const buttonWithMediumSize = screen.getByRole('button', { name: 'Medium' });
    const buttonWithoutSize = screen.getByRole('button', { name: 'Hello World' });
  
    expect(buttonWithMediumSize.className).toEqual(buttonWithoutSize.className);
  });
});

it("Should call mocked function if button is clicked", () => {
  const mockedFn = vitest.fn();
  render(<Button clickFunction={() => { mockedFn() }}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');
  fireEvent.click(buttonElement);

  expect(mockedFn).toHaveBeenCalledOnce();
});

it("Should give button a type of submit", () => {
  render(<Button>Hello World</Button>);

  const buttonElement = screen.getByRole('button', { target: { type: 'submit'} });

  expect(buttonElement).toBeDefined();
});

it("Should have the background color we assign to it", () => {
  const bgColor = 'rgb(0, 0, 0)';
  render(<Button backgroundColor={bgColor}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  const ButtonStyles = window.getComputedStyle(buttonElement);

  expect(ButtonStyles.backgroundColor).toBe(bgColor);
});

it("Should have the color we assign to it", () => {
  const color = 'rgb(255, 255, 255)';
  render(<Button color={color}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  const ButtonStyles = window.getComputedStyle(buttonElement);

  expect(ButtonStyles.color).toBe(color);
});

it("Should have the border we assign to it", () => {
  const borderStyles = '1px solid rgb(255, 255, 255)';
  render(<Button border={borderStyles}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  const ButtonStyles = window.getComputedStyle(buttonElement);

  expect(ButtonStyles.border).toBe(borderStyles);
});

it("Should add classes we add to className", () => {
  const addedClass = 'test-class';
  
  render(<Button className={addedClass}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toHaveClass(addedClass);
});

it("Should add id we pass to it to the button", () => {
  const addedId = 'test-id';
  render(<Button id={addedId}>Hello World</Button>);

  const buttonElement = screen.getByRole('button');

  expect(buttonElement).toHaveAttribute('id', addedId);
});