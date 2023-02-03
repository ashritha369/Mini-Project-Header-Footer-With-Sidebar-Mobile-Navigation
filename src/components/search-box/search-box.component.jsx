import "./search-box.css";
// import "./search-box dark.css";

const SearchBox = (props) => {
  return (
    <input
      placeholder="Search"
      type="search"
      className="input-tag"
      onChange={props.onChangeHandler}
    />
  );
};
export default SearchBox;
