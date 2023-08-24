import "@testing-library/jest-dom/extend-expect";

const windowMock = {
  scrollTo: jest.fn(),
};

Object.assign(global, global, windowMock);

// underlying explanation with window.scrollTo
// - define window functions to ignore in a mock object
// - reassign global object to contain all properties of global object
// - then all properties of our window mock object... 

// credit: https://stackoverflow.com/questions/57311971/error-not-implemented-window-scrollto-how-do-we-remove-this-error-from-jest-t