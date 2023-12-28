import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PhoneIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_33_53)">
                <Path
                    d="M21.648 16.366l-3.393-.387a2.66 2.66 0 00-2.191.761L13.606 19.2A20.1 20.1 0 014.8 10.394l2.472-2.471a2.66 2.66 0 00.761-2.191l-.387-3.367A2.674 2.674 0 004.988 0H2.677C1.167 0-.089 1.256.005 2.766c.708 11.41 9.833 20.52 21.23 21.229 1.509.093 2.765-1.162 2.765-2.672v-2.311c.013-1.35-1.002-2.485-2.352-2.646z"
                    fill={props.color}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_33_53">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default PhoneIcon
