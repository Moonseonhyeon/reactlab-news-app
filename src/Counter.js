import React, { Component } from "react";

//클래스형 컴포넌트는
class Counter extends Component {
  //render는 그림을 그려주는 함수인데 setState()가 호출되거나 최초 객체 생성시
  //render내부에서는 state와 props에 접근가능
  //return내부는 jxa문법이 들어감.

  //생성자는 첫번째 파라미터로 props를 받는다.
  constructor(props) {
    super(props);
    console.log("Counter", "생성자");
  }

  //아직은 안됬는데 이제 곧 될 props다.
  //이번에 넘어온 props 값
  //넘어올 state값(nextState)와 지금 state(state)값을 동기화 시킬지 말지

  //리엑트 버추얼 박스가 이전값과 현재값을 비교해서
  //이전값과 현재값을 비교해서 => 멍청한 비교
  //그래서 나는 불변성을 유지해서 레퍼런스만 비교하도록 오버라이딩 함.
  //같은면 그림을 안그리고  false
  //다르면 그림을 다시 그림. true

  //최초 render에는 실행 안되고 rerendering될 때
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Counter", "shouldComponentUpdate호출됨.");
    return true;
  }

  //render가 종료된 뒤 호출됨. -비동기 처리시 필요
  //최초 render가 종료된 후 한번만 호출 됨. state값 변경시애 호출되지 않음. - 이 후 바인딩한다.
  componentDidMount() {
    console.log("Counter", "componentDidMount호출됨.");
  }

  render() {
    //temp1 = this.state;
    //temp2 = this.props;
    console.log(this.props.number);
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.props.number}</div>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}

export default Counter;
