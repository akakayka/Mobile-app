import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIcon(props) {
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
                d="M12 17.77l6.18 3.73-1.64-7.03L22 9.74l-7.19-.61L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77z"
                fill={props.color}
            />
        </Svg>
    )
}

export default StarIcon
