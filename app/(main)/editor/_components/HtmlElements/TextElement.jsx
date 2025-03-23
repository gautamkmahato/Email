import React from 'react'

export default function TextElement({ content, style, outerStyle, label }) {
    return (
        <h1 style={style}>
            {content}
        </h1>
    )
}
