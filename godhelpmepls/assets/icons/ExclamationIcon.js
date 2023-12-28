import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExclamationIcon(props) {
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
                d="M12 21a2 2 0 100-4 2 2 0 000 4zM10 3h4v12h-4V3z"
                fill="#181744"
            />
        </Svg>
    )
}

export default ExclamationIcon
