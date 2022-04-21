import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search twitter" type="text" />
			</div>
			<div className="widgets__widgetsContainer">
				<h2>whats happening</h2>
				<TwitterTweetEmbed tweetId="1512785158675611655" />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="kefaisaboke"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url="https://facebook.com/KefaIsa"
					options={{ text: 'react js is amazing', via: 'kefaisaboke' }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
