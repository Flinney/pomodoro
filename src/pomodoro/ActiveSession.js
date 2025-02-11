import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

export default function ActiveSession({
  session,
  focusDuration,
  breakDuration,
}) {

  // conditional rendering outside of JSX  
  if (!session) {
    return null;
  }
  // determine which duration is displayed in session
  const currentDuration =
    session.label === "Focusing" ? focusDuration : breakDuration;

  return (
    <>
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
          <h2 data-testid="session-title">
            {session.label} for {minutesToDuration(currentDuration)} minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={
                100 - (session.timeRemaining / (currentDuration * 60)) * 100
              } // TODO: Increase aria-valuenow as elapsed time increases
              style={{
                width: `${
                  100 - (session.timeRemaining / (currentDuration * 60)) * 100
                }%`,
              }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </>
  );
}
