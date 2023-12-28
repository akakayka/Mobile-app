import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusIcon(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M22.286 14.214h-8.572v8.572A1.72 1.72 0 0112 24.5a1.72 1.72 0 01-1.714-1.714v-8.572H1.714A1.72 1.72 0 010 12.5a1.72 1.72 0 011.714-1.714h8.572V2.214A1.72 1.72 0 0112 .5a1.72 1.72 0 011.714 1.714v8.572h8.572A1.72 1.72 0 0124 12.5a1.72 1.72 0 01-1.714 1.714z"
                fill={props.color}
            />
        </Svg>
    )
}

export default PlusIcon