import React from "react";

const AsideMenuAvatar = ({ userInfo }) => {
	console.log(userInfo)
	return (
		<div className="avatar__inner">
			<button className="avatar__img">
				<img src={userInfo.avatar} alt="Avatar" />
			</button>
			<p className="user__fullname">
				{userInfo.name} {userInfo.lastName}
			</p>
		</div>
	)
}

export default AsideMenuAvatar;