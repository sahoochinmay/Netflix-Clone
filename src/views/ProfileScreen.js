import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../config/firebase'
import Nav from '../components/Nav'
import PlanScreen from '../components/PlanScreen'
import "./ProfileScreen.css"

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    console.log(user);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt=""/>
                    <div className="profileScreen__details">
                        <h2> {user?.emial} </h2>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plans premium)</h3>
                            <PlanScreen />
                            <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
