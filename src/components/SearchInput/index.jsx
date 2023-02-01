import './styles.css'
export const SearchInput = ({searchValue, handleChange}) => {
   return (
   <input 
        onChange={handleChange}
        value={searchValue}
        placeholder="Type your search"
        type="search"
      />
      )

}