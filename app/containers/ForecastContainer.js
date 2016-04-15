var React = require('react');
var Forecast = require('../components/Forecast')

var ForecastContainer = React.createClass({
    render: function(){
        console.log('props : '+this.props.location.state.city);
        return(
            <Forecast />
        )
    }
});

module.exports = ForecastContainer;
