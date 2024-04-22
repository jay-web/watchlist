import { IoSearchOutline } from "react-icons/io5";
import { StyledForm } from "./style";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

interface SearchFormProps {
    children?: React.ReactNode,
    query:string,
    setQuery: React.Dispatch<React.SetStateAction<string>>
    navigatePath?: string,
    placeholder?: string

}

const SearchBar = ({ children, query, setQuery, navigatePath, placeholder }: SearchFormProps) => {
  
 
  const [ tempQuery, setTempQuery ] = useState(query);
  const ref = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

  const handleQuery = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(tempQuery);
    if(navigatePath){
      navigate(navigatePath);
    }
   
   
  }

  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTempQuery(e.target.value);
    if(navigatePath){
      navigate(navigatePath);
    }
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
      <input placeholder={placeholder || "search"} value={tempQuery} onChange={(e) => handleOnChange(e)}/>
         {children}
        
    </StyledForm>
  );
};

export default SearchBar;
