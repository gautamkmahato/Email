
const ButtonElement = ({ content, style, outerStyle, url }) => {
  return (
    <div style={outerStyle} className="">
      <a href={url}>
        <button
          style={style}
          className="cursor-pointer px-6 py-3 rounded-lg shadow-md transition-all"
        >
          {content}
        </button>
      </a>
    </div>
  );
};

export default ButtonElement;

