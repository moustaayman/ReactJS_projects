import { useGlobalContext } from "./context";
const accessKey = "X3c-NbRfZvL-N_UKzp-VK9pNFp0pcvEdPdm8hEutyCg";

const SearchForm = () => {
  const handleSubmit = (e) => {
    // const { setSearchText } = useGlobalContext();
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    // if (searchValue) setSearchText(searchValue);
    if (!searchValue) return;
    console.log(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
