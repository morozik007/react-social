import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                // console.log(response.data)
                this.props.setUserProfile(response.data)
            })
    }

    render() {

        console.log(this.props.match) // добавились пропсы от withRouter this.props.match

        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);