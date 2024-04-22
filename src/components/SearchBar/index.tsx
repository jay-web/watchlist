import { IoSearchOutline } from "react-icons/io5";
import { StyledForm } from "./style";
import { useEffect, useRef, useState } from "react";

// import { useNavigate } from "react-router-dom";

interface SearchFormProps {
    children?: React.ReactNode,
    query:string,
    setQuery: React.Dispatch<React.SetStateAction<string>>

}

const SearchBar = ({ children, query, setQuery }: SearchFormProps) => {
 
 
  const [ tempQuery, setTempQuery ] = useState(query);
  const ref = useRef<ReturnType<typeof setTimeout>>();
  // const navigate = useNavigate();

  const handleQuery = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(tempQuery);
    // navigate("/list/all");
  }

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTempQuery(e.target.value);
    // navigate("/list/all");
  }
  
  useEffect(() => {
      if(ref.current){
        clearTimeout(ref.current)
      }

      ref.current = setTimeout(() => {
          setQuery(tempQuery);  
         
      }, 600);
      
      return () => clearTimeout(ref.current);

  }, [tempQuery])

  return (
    <StyledForm onSubmit={handleQuery} className="searchForm">
      <IoSearchOutline />
      <input placeholder="Search" value={tempQuery} onChange={(e) => handleOnChange(e)}/>
         {children}
        
    </StyledForm>
  );
};

export default SearchBar;
