import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShopCartContext } from "../../Context/ShopCartContext";
import Login from "./Login";

// 1
test("renders Login page", () => {
  render(
    <ShopCartContext>
      <Login />
    </ShopCartContext>
  );

  const email = screen.getByPlaceholderText("Email");
  expect(email).toBeInTheDocument();
});


// 2
test("should display email error", () => {
  render(
    <ShopCartContext>
      <Login />
    </ShopCartContext>
  );
  const element = screen.getByRole("button");
  fireEvent.click(element);
  const err = screen.getByText("Email is required!");
  expect(err).toBeInTheDocument();
});


// 3
test("should display password error", () => {
  render(
    <ShopCartContext>
      <Login />
    </ShopCartContext>
  );
  const element = screen.getByRole("button");
  fireEvent.click(element);
  const err = screen.getByText("Password is required!");
  expect(err).toBeInTheDocument();
});


// 4
test("Email Validation Error", () => {
  render(
    <ShopCartContext>
      <Login />
    </ShopCartContext>
  );
  const element = screen.getByPlaceholderText("Email");
  fireEvent.change(element, { target: { value: "test@gmail" } });
  const button = screen.getByRole("button");

  fireEvent.click(button);
  const err = screen.getByText("This is not a valid email!");
  expect(err).toBeInTheDocument();
});

//5

test("Password Validation Error", () => {
  render(
    <ShopCartContext>
      <Login />
    </ShopCartContext>
  );
  const element = screen.getByPlaceholderText("Password");
  fireEvent.change(element, { target: { value: "jdfsk" } });
  const button = screen.getByRole("button");

  fireEvent.click(button);
  const err = screen.getByText("Password should be more than 8 characters");
  expect(err).toBeInTheDocument();
});


