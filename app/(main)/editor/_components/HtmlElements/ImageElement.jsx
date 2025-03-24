

export default function ImageElement({ imageUrl, alt, url, style, outerStyle }) {
    return (
        <div>
            <img src={imageUrl} style={style} alt={alt} />
        </div>
    )
}
