import React from "react";
import Sliders from "@/src/component/Slider/slider";
import ProfileAgent from "@/src/component/Profile/profile";
import PropertyLocation from "@/src/component/PropertyLocationDeatil/propertyDetails";

const PropertyDeal = () => {
    return (
        <div>
            <Sliders />
            <ProfileAgent
                price="1000"
                agentName="Arman Khan"
                avatarSrc="assets/images/avatar.svg"
                description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem"
            />
            <PropertyLocation />
        </div>
    )
}
export default PropertyDeal;