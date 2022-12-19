import React from 'react';
import Button from './Button';
class Clock extends React.Component {
  state = {date: new Date ()};
  tick () {
    this.setState ({
      date: new Date (),
    });
  }
  componentDidMount () {
    this.clockTimer = setInterval (() => this.tick (), 1000);
  }
  componentWillDidUnMount () {
    clearInterval (this.clockTimer);
  }

  handleClick = locale => {
    this.setState ({
      locale,
    });
  };
  render () {
    const {date, locale} = this.state;
    return (
      <div>
        <h2>
          {locale=== 'bn-BD'? 'এটা বাংলাদেশী সময়': 'This is American Time'}
          {' '}

          :
          {' '}
          {date.toLocaleTimeString (locale)}
        </h2>
        {locale === 'bn-BD'
          ? <Button change={this.handleClick} locale="en-US" show ={false} enable />
          : <Button change={this.handleClick} locale="bn-BD" show enable />}
      </div>
    );
  }
}
export default Clock;
