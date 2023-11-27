import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StatisticsIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M18 20V10M12 20V4M6 20v-6"
                stroke="#181744"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default StatisticsIcon
