import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function DurationButtons({
  session,
  focusDuration,
  breakDuration,
  setFocusDuration,
  setBreakDuration,
}) {
  // Add unique button handlers to change state with button clicks
  function handleFocusIncrease() {
    setFocusDuration((duration) => Math.min(60, duration + 5));
  }

  function handleFocusDecrease() {
    setFocusDuration((duration) => Math.max(5, duration - 5));
  }

  function handleBreakIncrease() {
    setBreakDuration((duration) => Math.min(15, duration + 1));
  }

  function handleBreakDecrease() {
    setBreakDuration((duration) => Math.max(1, duration - 1));
  }

  return (
    <>
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            {/* TODO: Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={handleFocusDecrease}
              disabled={session}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={handleFocusIncrease}
              disabled={session}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              {/* TODO: Update this text to display the current break session duration */}
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={handleBreakDecrease}
                disabled={session}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={handleBreakIncrease}
                disabled={session}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
