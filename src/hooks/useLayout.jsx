import {useNavigate} from "react-router-dom";
import {useState} from "react";

export function useLayout() {
    const navigate = useNavigate();

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () =>  {
        setDrawerOpen(prevState => !prevState)
    }

    const handleClick = (path) => {
        navigate(path);
    }

    return {
        isDrawerOpen,
        toggleDrawer,
        handleClick,
    }
}