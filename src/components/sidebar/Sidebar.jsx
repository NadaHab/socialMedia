import React from "react";
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChatIcon from '@mui/icons-material/Chat';

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeedIcon className="sidebarIcon"/>
                    <span className="sidebbarListItemText"> Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon"/>
                    <span className="sidebbarListItemText"> Chats</span>
                </li>
                <li className="sidebarListItem">
                    <VideoLibraryIcon className="sidebarIcon"/>
                    <span className="sidebbarListItemText"> Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupsIcon className="sidebarIcon"/>
                    <span className="sidebbarListItemText"> Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className="sidebarIcon"/>
                    <span className="sidebbarListItemText"> Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutlineIcon className="sidebarIcon"/>
                    <span className="sidebbarListItemText"> Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutlineIcon className="sidebarIcon"/>
                    <span className="sidebbarListItemText"> Jobs</span>
                </li>
               </ul>
               <button className="sidebarButton">Show More</button>
               <hr className="sidebarHr"/>
              
               <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/3.jpg" alt="" />
                        <span className="sidebarFriendName"> Cathy Jones</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
                        <span className="sidebarFriendName"> Jones Smith</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
                        <span className="sidebarFriendName"> Suzy Hanna</span>
                    </li>
               </ul>
            </div>
        </div>
    )
}