import React, { useState } from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@mui/material';
import db from './Firebase';

function Tweetbox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');
	const sendTweet = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			displayName: 'Kefa Isaboke',
			username: 'kefaisaboke',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				'https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1655942400&v=beta&t=7uWNmzEoKknnXsiyNLqwfg8OJU4j5T8JWUSM0d4I0l0',
		});
		setTweetMessage('');
		setTweetImage('');
	};
	return (
		<div className="tweetBox">
			<form action="">
				<div className="tweetBox__input">
					<Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGNp1HCw1qAkA/profile-displayphoto-shrink_800_800/0/1578810633071?e=1655942400&v=beta&t=7uWNmzEoKknnXsiyNLqwfg8OJU4j5T8JWUSM0d4I0l0" />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="whats happening"
						type="text"
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					className="tweetBox__ImgInput"
					placeholder="Optional :Enter image url"
					type="text"
				/>
				<Button
					onClick={sendTweet}
					type="submit"
					className="tweetBox__tweetBtn"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default Tweetbox;
