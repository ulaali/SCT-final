import { ArtTrack } from "@mui/icons-material";
import axios from "axios";
import { createContext, useState, useEffect, useRef } from "react";
const Context = createContext();

export function Data({ children }) {
  const api =
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?&limit=10&api-key=i9NjHDB2X3wakPuA4UE9uglGpAnTeUMm";
  const api2 = "https://example-data.draftbit.com/books?_limit=10";
  const api3 = "https://example-data.draftbit.com/articles?_limit=10";
  const [time, settime] = useState(new Date());
  const [date, setdate] = useState(new Date());
  const [bold, setBold] = useState(false);
  const [famous, setFamous] = useState([]);
  const [Latest, setLatest] = useState({});
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setInterval(() => {
      settime(new Date());
    }, 1000);
    setInterval(() => {
      setdate(new Date());
    }, 1000);
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

   useEffect(()=>{
    axios.get(api).then(res=>{setLatest(res.data)})

  },[])

  useEffect(()=>{
    axios.get(api2).then(res=>{setFamous(res.data)})

  },[])

  useEffect(()=>{
    axios.get(api3).then(res=>{setArticles(res.data)})

  },[])

  const [open, setOpen] = useState(false);

  const handleClickOpen1 = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };

  const [opensearch, setOpensearch] = useState(false);

  const handleClickOpen2 = () => {
    setOpensearch(true);
  };

  const handleClose2 = () => {
    setOpensearch(false);
  };
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }
  console.log(articles);
  return (
    <Context.Provider
      value={{
        time,
        date,
        responsive,
        Latest,
        bold,
        setBold,
        famous,
        articles,
        handleFocus,
        inputRef,
        handleClickOpen1,
        handleClose1,
        open,
        setOpen,
        opensearch,
        setOpensearch,
        handleClickOpen2,
        handleClose2,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
