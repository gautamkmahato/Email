

export default function ImageElement({ imageUrl, alt, url, style, outerStyle }) {
    console.log('Image URL:', imageUrl); // Debugging: Log the imageUrl
    return (
        <div>
            <img src={imageUrl} style={style} alt={alt} />
        </div>
    );
}