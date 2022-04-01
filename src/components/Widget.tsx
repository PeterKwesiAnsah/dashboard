import "./Widget.css";
export const Widget = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="widget">
      <h3 className="widget--header">{name}</h3>
      <h1 className="widget--value">{value}</h1>
    </div>
  );
};
