import { ArtTrack } from "@mui/icons-material";
import axios from "axios";
import { createContext, useState, useEffect, useRef } from "react";
import _ from 'lodash'
import Cookies from "universal-cookie";
import {auth,provider} from './firbaseConfig';
import { signInWithPopup,signOut } from "firebase/auth";
const cookies = new Cookies();
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
  const [aauth, setAuth] = useState(false);
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [value, setValue] = useState(2);
const [fav, setFav] = useState([]);
const addfav=(book)=>{
  const oldfav=[...fav];
  const newfav=oldfav.concat(book);
  setFav(newfav);
};
const removefav=(id)=>{
  const oldfav=[...fav];
  const newfav=oldfav.filter((book)=>book.id !== id);
  setFav(newfav);
}
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
    axios.get(api).then(res=>{setLatest(res.data.results.books)})

  },[])
  const convertedLatest = _.map(Latest, (item) => ({
    title: item.title,
    author: item.author,
    image: item.book_image,
  }));

  useEffect(()=>{
    axios.get(api2).then(res=>{setFamous(res.data)})

  },[])

  const convertedFamous = _.map(famous, (item) => ({
    title: item.title,
    author: item.authors,
    image: item.image_url,
  }));

  useEffect(()=>{
    axios.get(api3).then(res=>{setArticles(res.data)})

  },[])
  const convertedArticle = _.map(articles, (item) => ({
    title: item.title,
    author: item.authors,
    image: item.img_src,
  }));

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
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);

    } catch (err) {
      console.error(err);
    }
  };
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
  };
  return (
    <Context.Provider
      value={{
        time,
        date,
        responsive,
        bold,
        setBold,
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
        convertedLatest,
        convertedFamous,
        convertedArticle,
        aauth,
        setAuth,
        isAuth,
        setIsAuth,
        signInWithGoogle,
        signUserOut,
        value,
        setValue,
        fav,
        addfav,
        removefav,
        setFav
        
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
