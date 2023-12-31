import React from "react";
import { HeaderContainer, UserBanner } from "../ProfileElements";
import { getCdnAssets } from "../../../../features/apiUrl";

const ProfileHeader = () => {
    return (
        <HeaderContainer>
            <UserBanner src={getCdnAssets + "/images/Registration/CybersecurityRegPage.png"} />
        </HeaderContainer>
    );
};

export default ProfileHeader;
