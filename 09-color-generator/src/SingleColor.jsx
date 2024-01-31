const SingleColor = ({ color }) => {
  const { hex, weight } = color;
  return (
    <article style={{ background: `#${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
