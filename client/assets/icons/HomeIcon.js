import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 20 22"
            fill="none"
            {...props}
        >
            <Path
                d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2V8z"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
export default HomeIcon
