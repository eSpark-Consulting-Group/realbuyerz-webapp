import { PROPERTY_BUYING_DETAIL } from "@/app/constants/postlistingConstants";
import { PROPERTY_INFORMATION } from "@/app/constants/postlistingConstants";


export const createInformationState = (propertyInformation, propertyBuyingDetails) => {
    console.log("test", propertyInformation, propertyBuyingDetails)
    const InfoData = {
        sellingData: propertyBuyingDetails,
        addInfo: propertyInformation.map((item) => ({
            ...item,
            value: PROPERTY_BUYING_DETAIL.sellingDetails[item.label],
        })),
    }
    return (
        { InfoData }
    )
}

