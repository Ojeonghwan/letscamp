import React, {useEffect, useState} from "react";
import { useRecoilState } from "recoil";
import { campSiteState } from "../../Store/state.js";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import LetsCamp from "../../api/LetsCamp";
import "./style/contents.css";

const Contents = () => {
  const navigate = useNavigate();
  const [campSiteData, SetCampSite] = useRecoilState(campSiteState);
  const [starPoint, setStarPoint] = useState(0)
  
  const urlStar = LetsCamp.review.rate(campSiteData.id)

  const search = () => {
    console.log(campSiteData.lat);
    console.log(campSiteData.lon);
    navigate("/map", {state:{ lat: campSiteData.lat, lon: campSiteData.lon, name: campSiteData.name, address: campSiteData.address }});
  };

  useEffect(() => {
    axios
      .get(urlStar, {
        headers: {
          Authorization: `Bearer ${sessionStorage.accessToken}`,
        },
      })
      .then(function (response) {
        setStarPoint(response.data);
      });

  },[])
    
  return (
    <div className="detail-contents p-y-1 section-card">
      <div>
        <div className="detailimg-title">{campSiteData.name}</div>
        <div className="detail-title-star">⭐ {starPoint}</div>
        <img
          src={campSiteData.thumb}
          alt="대충 이미지"
          className="detailimg-img"
        />
        <div>
          <h4>
            {campSiteData.simple_des}
          </h4>
        </div>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/location.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-text">
            {campSiteData.address || "정보없음"}
          </div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/time.png"
              alt=""
              className="detail-contents-icons"
            />
          </div>
          <div className="detail-contents-text">{campSiteData.running_day || "정보없음"}</div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/call.png"
              alt=""
              className="detail-contents-icons"
            />
          </div>
          <div className="detail-contents-text">{campSiteData.tel || "정보없음"}</div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/homepage.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-text">
            {campSiteData.homepage
            ?(<a href={campSiteData.homepage}>
            {campSiteData.homepage}
            </a>)
            :<div>정보없음</div>}
          </div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/detail.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-text">{campSiteData.simple_des || "정보없음"}</div>
        </div>
        <hr></hr>
        <div className="modal-summary">
          <div>
            <img
              src="/asset/icons/tag.png"
              alt=""
              className="detail-contents-icons"
            ></img>
          </div>
          <div className="detail-contents-tag">{campSiteData.keywords || "태그없음"}</div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
