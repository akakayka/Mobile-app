import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TimeIcon(props) {
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
                d="M22 5.79l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.79zM7.88 3.46L6.6 1.93 2 5.78l1.29 1.53 4.59-3.85zm4.62 4.61H11v6l4.75 2.85.75-1.23-4-2.37V8.07zm-.5-4a9 9 0 00-9 9c0 4.97 4.02 9 9 9a9 9 0 000-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                fill="#181744"
            />
        </Svg>
    )
}

export default TimeIcon
