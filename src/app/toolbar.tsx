function SearchBar() {
    return (
      <><h3> ItsStockBro </h3><form>
        <div className="grid grid-cols-4 gap-4">

          <input type="text" placeholder="Search..." />
          <label>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </label>

        </div>

       
      </form></>
    );
  }

  export default SearchBar;