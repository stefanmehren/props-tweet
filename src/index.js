import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const testTweet = {
  message: "Something about cats",
  gravatar: "xyz",
  author: {
    handle: "FrankAmhausen  ",
    name: "Stefan Mehren"
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"

}

function Tweet({ tweet }) {
  return (
      <div className="tweet">
      <Avatar hash={testTweet.gravatar}/>
        <div className="content">
          <NameWithHandle name={testTweet.author}/>
          <Time time={testTweet.timestamp}/>
          <Message text={testTweet.message}/>
          <div className="buttons">
            <ReplyButton />
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
  );
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return(
    <img src={url} className="avatar" alt="avatar" />
  );
}

function Message({ text }) {
  return (
    <div className="Message">
      { text }
    </div>
  );
}

function NameWithHandle({ name }) {
  return (
    <span className="name-with-handle">
      <span className="name">
        {name.name}
      </span>
      <span className="handle">
        @{name.handle}
      </span>
    </span>
  )
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">
    {timeString}
  </span>
 )
}

const ReplyButton = () => {
  return <i className="fa fa-reply repply-button" />
}

const RetweetButton = () => {
  return <i className= "fa fa-retweet retweet-button" />
}

const LikeButton = () => {
  return <i className="fa fa-heart like-button" />
}

const MoreOptionsButton = () => {
  return <i className="fa fa-ellipsis-h more-options-button" />
}

ReactDOM.render(<Tweet/>, document.querySelector('#root'));
