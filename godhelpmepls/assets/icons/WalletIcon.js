import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WalletIcon(props) {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 6a3 3 0 013-3h9a3 3 0 013 3v1h2a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V6zm18 9v-2h-4v2h4zm0-4h-4a2 2 0 00-2 2v2a2 2 0 002 2h4v1a1 1 0 01-1 1H5a1 1 0 01-1-1V9h15a1 1 0 011 1v1zm-5-5v1H4V6a1 1 0 011-1h9a1 1 0 011 1z"
                fill="#181744"
            />
        </Svg>
    )
}

export default WalletIcon
