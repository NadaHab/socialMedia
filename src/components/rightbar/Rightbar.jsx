import React from "react";
import "./rightbar.css"


export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img  className="birthdayImg" src="assets/gift.png" alt=""/>
          <span className="birthdayTest"><b>Cathy Jones</b>Cathy Jones and <b>2 other friends</b> have a birthday today </span>
        </div>
        {/* <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/3.jpg"></img>
            </div>
          </li>
        </ul> */}
      
      </div>
    </div>
  )
}
