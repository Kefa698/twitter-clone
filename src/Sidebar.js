import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SidebarOption from './SidebarOption';
import { SvgIcon } from '@mui/material';
import { Button } from '@mui/material';

function Sidebar() {
	return (
		<div className="sidebar">
			{/* twitter icon */}
			<TwitterIcon className="sidebar__twitterIcon" />

			<SidebarOption active Icon={HomeIcon} text="Home" />
			<SidebarOption Icon={TagIcon} text="Explore" />
			<SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
			<SidebarOption Icon={MailOutlineIcon} text="Messages" />
			<SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
			<SidebarOption Icon={ListAltIcon} text="List" />
			<SidebarOption Icon={PermIdentityIcon} text="Profile" />
			<SidebarOption Icon={MoreHorizIcon} text="More" />
			<Button variant="outlined" className="sidebar__tweet" fullWidth>
				tweet
			</Button>

			{/* button=>tweet */}
		</div>
	);
}

export default Sidebar;
