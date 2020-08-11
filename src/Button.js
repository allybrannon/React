import React from "react";

const Button = ({ text, whenClicked, clickedTimes }) => {
  //   let clickedTimes = 0;

  //   const whenClicked = () => {
  //     clickedTimes += 1;
  //     console.log(clickedTimes);
  //   };
  return (
    <button onClick={whenClicked}>
      {text}: {clickedTimes}
    </button>
  );
};

// class Button extends React.Component {
//   render() {
//     return (
//       <div>
//         <button>Submit</button>
//       </div>
//     );
//   }
// }

export default Button;
