import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MinusIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={4}
            viewBox="0 0 24 4"
            fill="none"
            {...props}
        >
            <Path
                d="M22.286 4H1.714C.771 4 0 3.1 0 2s.771-2 1.714-2h20.572C23.229 0 24 .9 24 2s-.771 2-1.714 2z"
                fill="#181744"
            />
        </Svg>
    )
}

export default MinusIcon
