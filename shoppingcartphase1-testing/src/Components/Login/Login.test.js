import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { ShopCartContext } from "../../Context/ShopCartContext";
import Login from "./Login";




// 1
test("renders Login page", () => {
  render(
    <ShopCartContext>
      <Login />
    </ShopCartContext>
    );
    // screen.debug();
  const email = screen.getByPlaceholderText("Email");
  expect(email).toBeInTheDocument(); // jest
});

// 2

// test("should accept email value", () => {
//   render(<Login />);
//   const element = screen.getByPlaceholderText("Email Id");
//   fireEvent.change(element, { target: { value: "test@gmail.com" } });
//   screen.debug();
//   expect(element.value).toBe("test@gmail.com");
// });

// 3 Context

// 2
test("should display email error", () => {
  render(
    <ShopCartContext>
      <Login />
    </ShopCartContext>
  );
  const element = screen.getByRole("button");

  fireEvent.click(element);
//   screen.debug();

// userEvent.click(element)
  const err = screen.getByText("Email is required!");
// console.log(err, "::error")
//   expect(err[0]).toHaveClass("error");
//   expect(err[1]).toHaveClass("error");
//   expect(err.length).toBe(1);
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
  //   screen.debug();
  
  // userEvent.click(element)
    const err = screen.getByText("Password is required!");
  // console.log(err, "::error")
  //   expect(err[0]).toHaveClass("error");
  //   expect(err[1]).toHaveClass("error");
  //   expect(err.length).toBe(1);
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
    //   expect(err[0]).toHaveClass("error");
    //   expect(err.length).toBe(1);
    //   expect(err).toBeInTheDocument();
});


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
    //   expect(err[0]).toHaveClass("error");
    //   expect(err.length).toBe(1);
    //   expect(err).toBeInTheDocument();
});


// 4 With one error

// test("should display 1 error", () => {
//   render(
//     <ShopCartContext>
//       <Login />
//     </ShopCartContext>
//   );

//   const element = screen.getByPlaceholderText("Email Id");
//   fireEvent.change(element, { target: { value: "test@gmail.com" } });
//   const button = screen.getByRole("button");

//   fireEvent.click(button);
//   const err = screen.getAllByText("Cannot be empty");
//   expect(err[0]).toHaveClass("error");
//   expect(err.length).toBe(1);
// });


// 5 With no errors

// test("should display no errors", () => {
//   render(
//     <ShopCartContext>
//       <Login />
//     </ShopCartContext>
//   );

//   const email = screen.getByPlaceholderText("Email Id");
//   fireEvent.change(email, { target: { value: "test@gmail.com" } });

//   const password = screen.getByPlaceholderText("Password");
//   fireEvent.change(password, { target: { value: "Test@123" } });
  
//   const button = screen.getByRole("button");
//   fireEvent.click(button);

// //   const err = screen.getByText("Cannot be empty");
// //   expect(err[0]).toHaveClass("error");
// //   expect(err.length).toBe(1);
// });

