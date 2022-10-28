import React from "react"
import Header from "../Components/Question/Header.js"
import MoveButton from "../Components/Question/MoveButton.js"
import ChoiceButton from "../Components/Question/ChoiceButton.js"
import Question from "../Components/Question/Question.js";


export default class Questions extends React.Component {

  // 페이지를 구분할 변수가 필요하고
  // 페이지에 따라 ChoiceButton과 Question, MoveButton의 변화가 필요하다.

  render() {
    return (
    <>
      <Header />
      <Question question="몇 명이 가시나요?"/>
      <ChoiceButton />
      <MoveButton />
    </>);

  }
}