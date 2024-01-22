import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Menu;
