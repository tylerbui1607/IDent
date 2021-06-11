import { useSelector, useDispatch } from "react-redux";

import { appActions } from "../actions/appActions";

export default function ResultPopup() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.application.message);

  function handleClose() {
    dispatch(appActions.hidePopup());
    document.location.reload();
  }

  return (
    <div className="result-popup">
      <div className="result-message">
        {message}
      </div>
      <button onClick={handleClose} id="closeResultBtn">Close</button>
    </div>
  )
}