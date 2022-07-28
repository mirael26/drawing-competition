import * as React from "react";

const Timer = (): JSX.Element => {
  return (
    <div className="timer">
      <div className="timer__column">
        <div className="timer__cell">01</div>
        <p className="timer__text">дней</p>
      </div>

      <div className="timer__separator">:</div>

      <div className="timer__column">
        <div className="timer__cell">09</div>
        <p className="timer__text">часов<br/>
          <span className="timer__text timer__text--light">по МСК</span>
        </p>
      </div>

      <div className="timer__separator">:</div>

      <div className="timer__column">
        <p className="timer__cell">43</p>
        <p className="timer__text">минут</p>
      </div>
    </div>
  )
};

export default Timer;