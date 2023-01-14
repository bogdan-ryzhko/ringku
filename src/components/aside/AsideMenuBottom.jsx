import React from "react";
import AsideMenuAvatar from "./AsideMenuAvatar";

const AsideMenuBottom = ({userInfo}) => {
	return (
		<div className="aside-menu__bottom">
			<div className="aside-menu__settings">
				<button className="aside-menu__settings-btn">
					<img src="../images/aside-icons/settings.svg" alt="Settings" />
					Settings
				</button>
			</div>
				{userInfo.map(userInfo =>
					<AsideMenuAvatar userInfo={userInfo} key={userInfo.id} />)}
		</div>
	)
}

export default AsideMenuBottom;