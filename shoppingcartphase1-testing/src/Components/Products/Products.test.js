import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { ShopCartContext } from "../../Context/ShopCartContext";
import Products from './Products';


// 1
test("renders Products page", () => {
  render(
    <ShopCartContext>
      <Products />
    </ShopCartContext>
    );
    // screen.debug();
  const text = screen.getByText("Shopping cart");
  expect(text).toBeInTheDocument(); // jest
});

// 2
test("renders correct product", () => {
    render(
      <ShopCartContext>
        <Products />
      </ShopCartContext>
      );
      // screen.debug();
    const product = screen.getByText("iPhone 9");
    expect(product).toBeInTheDocument(); // jest
  });

  // 3
test("renders all 100 products", () => {
    render(
      <ShopCartContext>
        <Products />
      </ShopCartContext>
      );
      // screen.debug();
    const product = screen.getAllByText("Rating:");
    expect(product.length).toBe(100); // jest
  });

  // 4
test("renders products details page on click", () => {
    render(
      <ShopCartContext>
        <Products />
      </ShopCartContext>
      );
      // screen.debug();
    const product = screen.getByText("iPhone 9");
    fireEvent.click(product);
    const expectedproduct = screen.getByText("iPhone 9");
    expect(expectedproduct).toBeInTheDocument();
    // expect(product.length).toBe(100); // jest
  });

  // 5
test("renders products details page on click with correct detail", () => {
    render(
      <ShopCartContext>
        <Products />
      </ShopCartContext>
      );
      const product = screen.getByText("iPhone 9");
      fireEvent.click(product);
      const expectedtext = screen.getByText("An apple mobile which is nothing like apple");
      expect(expectedtext).toBeInTheDocument();
  });
  
