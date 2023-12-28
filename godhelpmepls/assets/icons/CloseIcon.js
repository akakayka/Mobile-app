import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CloseIcon(props) {
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
                d="M18 6L6 18M6 6l12 12"
                stroke="#181744"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default CloseIcon
