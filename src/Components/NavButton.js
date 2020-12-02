import React from 'react';


class NavButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: props};
      }

  render () {
    return (
        <div className="navButton">
            {this.props.name}
        </div>
    );
  }
}

export default NavButton;