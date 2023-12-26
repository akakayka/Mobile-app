import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackArrowIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M15.705 7.41L11.125 12l4.58 4.59-1.41 1.41-6-6 6-6 1.41 1.41z"
                fill={props.color}
            />
        </Svg>
    )
}

export default BackArrowIcon