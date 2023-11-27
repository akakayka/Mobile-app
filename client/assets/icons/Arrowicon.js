import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowIcon(props) {
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
                d="M8.295 16.59l4.58-4.59-4.58-4.59L9.705 6l6 6-6 6-1.41-1.41z"
                fill="#181744"
            />
        </Svg>
    )
}

export default ArrowIcon
