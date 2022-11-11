import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./style/StartPage.css";
import "../App.css"

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    !!(sessionStorage.getItem("accessToken")) ? navigate("/main") : console.log("유저정보 없음");
  });

  return (
    <div className="startpage">
      <img src="/asset/campingcar.png" alt="이미지" className="startpage-img" />
      <div className="startpage-title">초보자를 위한 캠핑 추천 서비스</div>
      <div className="startpage-title2 mb-20">렛츠 캠프!</div>
      <div className="startpage-buttonsbox">
        <div>
          <button
            className="startpage-button"
            onClick={() => {
              navigate("/question");
            }}
          >
            가입 없이 <br></br>바로 추천받으러 가기
          </button>
        </div>
        <div>
          <button
            className="startpage-button"
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
        </div>
        <div>
          <button
            className="startpage-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
