import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('the count starts at 0', () => {
//   render(<App />);
//   //screen object 를 이용해서 원하는 엘레멘트에 접근(접근할때 ID 로)

//   const counterElement=screen.getByTestId("counter");

//   //console.log(" counterElement  ==> ", counterElement);
//   expect(counterElement).toHaveTextContent(0);

//   //expect(linkElement).toBeInTheDocument();
//   //id 가 counter 인 엘레멘트의 텍스트가 0 인지 테스트

// });


// test("minus button has correct text ", ()=>{
//   render(<App />);
//   const counterElement =screen.getByTestId("counter");
//   expect(counterElement).toHaveTextContent(0);
// });

test("minus button has correct text", ()=>{
  render(<App />);
  const minusButtonElement=screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});


test("plus button has correct text", ()=>{
  render(<App />);
  const plusButtonElement=screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

test("when the + button is pressed, the counter changes to 1 ", ()=>{
  render(<App />);
  const buttonElement=screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement=screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});


test("when the - button is pressed, the counter changes to -1 ", ()=>{
  render(<App />);
  const buttonElement=screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement=screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});



test("on/off button has blue color ", ()=>{
  render(<App />);
  const buttonElement =screen.getByTestId("on/off-button");
  //fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({backgroundColor : "blue"})

});


test.only("Prevent the -, + button from being pressed when the on/off button is clicked", ()=>{
  render(<App />);
  
  const onOffButtonElement =screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  
  const plusButton=screen.getByTestId("plus-button");
  expect(plusButton).toBeDisabled(true);


  const lintTest =screen.getByRole("button", {
    name:"lintTest"
  });

  
});


















