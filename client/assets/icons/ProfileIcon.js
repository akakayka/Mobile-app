import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <Path
                d="M10 0C6.695 0 4 2.45 4 5.455c0 3.004 2.695 5.454 6 5.454s6-2.45 6-5.454C16 2.45 13.305 0 10 0zm0 10.91c-5.508 0-10 4.083-10 9.09h2c0-4.027 3.57-7.273 8-7.273s8 3.246 8 7.273h2c0-5.007-4.492-9.09-10-9.09zm0-9.092c2.219 0 4 1.62 4 3.637S12.219 9.09 10 9.09c-2.219 0-4-1.62-4-3.636 0-2.018 1.781-3.637 4-3.637z"
                fill="#181744"
            />
        </Svg>
    )
}

export default ProfileIcon
