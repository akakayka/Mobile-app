import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ListIcon(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <G clipPath="url(#clip0_146_941)">
                <Path
                    d="M2.77 0A2.78 2.78 0 000 2.77v18.46A2.78 2.78 0 002.77 24h18.46A2.78 2.78 0 0024 21.23V2.77A2.78 2.78 0 0021.23 0H2.77zm0 1.846h18.46c.52 0 .924.404.924.923v18.462c0 .519-.404.923-.923.923H2.769a.911.911 0 01-.923-.923V2.769c0-.519.404-.923.923-.923zm2.768 3.692v1.847h1.847V5.538H5.538zm3.693 0v1.847h9.23V5.538h-9.23zm-3.693 5.539v1.846h1.847v-1.846H5.538zm3.693 0v1.846h9.23v-1.846h-9.23zm-3.693 5.538v1.847h1.847v-1.847H5.538zm3.693 0v1.847h9.23v-1.847h-9.23z"
                    fill="#181744"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_146_941">
                    <Path fill="#fff" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default ListIcon
