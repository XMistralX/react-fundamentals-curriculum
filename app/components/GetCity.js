var React = require('react');

var styles = {
    space: {
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '300px',
  }
}
function GetCity(props){
    return  (
        <div >
          <div className = "input-group">
             <input type = "text" className = "form-control" placeholder = "St. George, Utah" />
          </div>
          <div style = {styles.space}>
              <button
                       className = "btn btn-default btn-success"
                       type = "submit" >
                       Get Weather
              </button>
          </div>
        </div>

    )
}

module.exports = GetCity;
