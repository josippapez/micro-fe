import App from "./App";
import {
  decreaseCount,
  increaseCount,
} from "./store/reduxActions/counterActions";
import { actions, render, resetActions, screen } from "./testing/test-utils";

jest.mock("./store/reduxActions/counterActions");

beforeAll(() => {
  increaseCount.mockImplementation(() => ({ type: "test" }));
  decreaseCount.mockImplementation(() => ({ type: "test" }));
});

afterEach(() => {
  resetActions();
});

test("renders learn react link", () => {
  render(<App />, { initialState: { counter: { counter: 0 } } });
  const linkElement = screen.getByTestId("app-link");
  expect(linkElement).toBeInTheDocument();
});

test("increase counter should be called", () => {
  render(<App />, { initialState: { counter: { counter: 0 } } });
  const increseButton = screen.getByTestId("increase-counter");
  expect(increseButton).toBeInTheDocument();
  increseButton.click();
  expect(actions).toEqual(["INCREASE_COUNT", "counter/increaseCounter"]);
  expect(increaseCount).toHaveBeenCalled();
});

test("decrease counter should be called", () => {
  render(<App />, { initialState: { counter: { counter: 0 } } });
  const decreaseButton = screen.getByTestId("decrease-counter");
  expect(decreaseButton).toBeInTheDocument();
  decreaseButton.click();
  expect(actions).toEqual(["DECREASE_COUNT", "counter/decreaseCounter"]);
  expect(decreaseCount).toHaveBeenCalled();
});
