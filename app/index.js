var React = require('react');
var ReactDOM = require('react-dom');


var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

ReactDOM.render(
    React.createElement(CommentList, null),
    document.getElementById('app')
);
