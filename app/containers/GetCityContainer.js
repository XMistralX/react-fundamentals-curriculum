var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var getDailyWeatherForecast = require('../utils/helper').getDailyWeatherForecast;
var getWeatherForecast = require('../utils/helper').getWeatherForecast;
var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDefaultProps: function () {
        return {
            direction: 'column'
        }
    },
  propTypes: {
    direction: PropTypes.string
  },
getInitialState: function () {
    return {
      city: ''
    }
  },
  handleSubmitCity: function () {
    this.context.router.push({
            pathname: '/forecast/' + this.state.city,
            state: {
                city : this.state.city
            }
    })
  },
  handleUpdateCity: function (e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function () {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  }
});

module.exports = GetCityContainer;
