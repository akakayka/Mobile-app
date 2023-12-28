import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BackIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_41_84)">
                <Path
                    d="M7.672 3C6.844 3 0 12 0 12s6.844 8.781 7.672 8.89C8.5 21 9.109 19.5 9.109 19.5l-6.336-6.54H24v-2H2.734L9.11 4.39S8.5 3 7.672 3z"
                    fill="#181744"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_41_84">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default BackIcon
