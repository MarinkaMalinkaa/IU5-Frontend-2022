import "./Search.css"
import {ReactComponent as Serchh} from "./img/search.svg"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { useActions } from "../../hooks/useActions";

export const Search: React.FC = () => {
    const searchInput = useRef<HTMLInputElement>(null);
    const searchButton = useRef<SVGSVGElement>(null);
    const navigate = useNavigate();       
    const {setUser} = useActions()

    function handleSearch() {
        if (searchInput.current!.value === "") {
            alert("Надо что-то написать!")
        } else {
            setUser(searchInput!.current!.value)
            navigate("/info")
        }
        
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="content">
            
            <div className="search-box">
                <input ref={searchInput} onKeyDown={(e)=>handleKeyDown(e)} placeholder="Введите аккаунт)))" autoFocus/>
                <Serchh  onClick={() => handleSearch()} id="search" ref={searchButton}/>
            </div>
        </div>
    );
}