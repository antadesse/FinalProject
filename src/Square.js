import React from 'react'

// export default class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }
//
//   handleClick(i) {
//    const squares = this.state.squares.slice();
//    squares[i] = 'X';
//    this.setState({squares: squares});
//  }
//
//   renderSquare(i){
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.setState({value: 'X'})}>
//         {this.state.value}
//       </button>
//     );
//   }
// }
const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square
