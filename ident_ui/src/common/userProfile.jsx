import { appointmentActions } from "../actions/appointmentActions";

const { useState, useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { appActions } = require("../actions/appActions");
const { userActions } = require("../actions/userActions");
const { constants } = require("../constants");
const { authentication } = require("../reducers/authReducers");

function UserControll(){
    const dispatch = useDispatch();
    const user = useSelector(store=>store.authentication.user);
    const userstatus = useSelector(store=>store.authentication.status);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        if(user)
            setCurrentUser(user);
        else
            setCurrentUser(false)
    })
    function Logout(){
        dispatch(userActions.logout());
    }
    function ResetPass(){
        dispatch(appActions.changePopup(constants.POPUP_FORGOTPASS));
    }
     
    return(
        <div class="user_container">
        {
            currentUser ? 
            <div class="user_profile">
                <div><i  class="fas fa-user"></i></div>
                <h3 style={{fontSize: "20px",fontWeight: "bold"}}>{currentUser.name}</h3>
                <p>{currentUser.email}</p>
            </div> 
            :
            <div class="user_profile">
                <div><i  class="fas fa-user"></i></div>
            </div>
        }
        <div class="user_control">
            <div><i class="fas fa-columns"></i>Dashboard</div>
            <div onClick={Logout}><i class="fas fa-sign-out-alt"></i>Logout</div>
            <div onClick={ResetPass}><i class="fas fa-lock"></i>Change Password</div>
        </div>
    </div>
    )
}
export default UserControll