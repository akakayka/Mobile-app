import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MapIcon(props) {
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
                d="M17.856 6.144L13.144 17.4l-1.822-4.722-.91-.356L6.6 10.844l11.256-4.7zM22 2L2 10.367v1.089L9.6 14.4l2.933 7.6h1.09L22 2z"
                fill="#181744"
            />
        </Svg>
    )
}

export default MapIcon
