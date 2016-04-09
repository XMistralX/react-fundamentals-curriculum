var React = require('react');

var styles = {
    container: {
        height : '100%',
        width : '100%'
    }
}

var Main = React.createClass({
    render: function(){
        return(
            <div style = {styles.container}>
                <h1> Main.js Header</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
