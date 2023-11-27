import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingsIcon(props) {
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
                d="M9.666 2l-.49 2.523a7.951 7.951 0 00-2.244 1.291L4.508 4.98 2.172 9.02l1.941 1.688A8.005 8.005 0 004 12c0 .409.04.833.113 1.291v.002l-1.941 1.688 2.336 4.04 2.422-.834a7.953 7.953 0 002.246 1.29L9.666 22h4.668l.49-2.523a7.942 7.942 0 002.244-1.291l2.424.835 2.334-4.04-1.94-1.69c.075-.458.114-.883.114-1.291a8.01 8.01 0 00-.113-1.29v-.001l1.941-1.69-2.336-4.04-2.422.833a7.951 7.951 0 00-2.246-1.289L14.334 2H9.666zm1.649 2h1.37l.39 2 1.042.395a5.94 5.94 0 011.684.964l.863.707 1.922-.66.686 1.186-1.536 1.336.176 1.1v.001c.061.375.088.69.088.971s-.027.596-.088.97l-.178 1.1 1.535 1.336-.685 1.188-1.92-.662-.865.709a5.932 5.932 0 01-1.682.965h-.002L13.072 18l-.388 2h-1.37l-.388-2-1.043-.395a5.943 5.943 0 01-1.684-.964l-.863-.707-1.922.66-.685-1.186 1.537-1.338-.178-1.095v-.002A6.16 6.16 0 016 12c0-.281.027-.596.088-.97l.178-1.1-1.537-1.336.685-1.188 1.922.662.863-.709a5.941 5.941 0 011.684-.964L10.926 6l.389-2zM12 8c-2.197 0-4 1.803-4 4s1.803 4 4 4 4-1.803 4-4-1.803-4-4-4zm0 2c1.111 0 2 .889 2 2s-.889 2-2 2-2-.889-2-2 .889-2 2-2z"
                fill="#181744"
            />
        </Svg>
    )
}

export default SettingsIcon
