import React from 'react';
import './summary.css';

class Summary extends React.Component {

    
    render() {
        
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.currency.format(selectedOption.cost)}
            </div>
          </div>
        );
      });
    return (
        <div className="summary">
            {summary}
        </div>
    )
}
}

export default Summary;