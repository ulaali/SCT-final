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
const [loading, setloading] = useState(true);
const [readlater, setReadlater] = useState([]);
const [search, setSearch] = useState({});
const [text, setText] = useState('');
const [categoryy, setCategory] = useState('');




useEffect(()=>{
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
  .then((res) => res.json())
  .then((res) => {
    setSearch(res.items);
    setloading(false);
  })
},[text])

useEffect(()=>{
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}+subject:${categoryy}`)
  .then((res) => res.json())
  .then((res) => {
    setSearch(res.items);
    setloading(false);
  })
},[categoryy,text])



const convertedSearch = _.map(search, (item) => ({
  book:item,
  title: item.volumeInfo?.title,
  author: item.volumeInfo?.authors?.map((author) => {
    return author;
  }),
  image: item.volumeInfo?.imageLinks?.smallThumbnail,
  description:item.volumeInfo?.description,
  url:item.volumeInfo?.previewLink,
  id:item.id,
  publisher:item.volumeInfo?.publisher,
  category:item.volumeInfo?.categories?.map((cat) => {
    // console.log(cat);
    return cat;
  }),
}));





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

const addReadLater=(book)=>{
  const oldRead=[...readlater];
  const newRead=oldRead.concat(book);
  setReadlater(newRead);
};
const removeRead=(id)=>{
  const oldRead=[...readlater];
  const newRead=oldRead.filter((book)=>book.id !== id);
  setReadlater(newRead);
}

const favchecker=(id)=>{
  const boolean=fav.some((book)=>book.id === id)
  return boolean
}
const Readlaterchecker=(id)=>{
  const boolean=readlater.some((book)=>book.id === id)
  return boolean
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
    axios.get(api).then(res=>{
      setLatest(res.data.results.books)
      setloading(false);
     })

  },[])
  const convertedLatest = _.map(Latest, (item) => ({
    title: item.title,
    author: item.author,
    image: item.book_image,
    description:item.description,
    url:item.book_uri,
    id:item.rank,
    publisher:item.publisher
  }));

  useEffect(()=>{
    axios.get(api2).then(res=>{
      setFamous(res.data)
      setloading(false);

    })

  },[])

  const convertedFamous = _.map(famous, (item) => ({
    title: item.title,
    author: item.authors,
    image: item.image_url,
    description:item.description,
    id:item.id,
    publisher:item.format
  }));

  useEffect(()=>{
    axios.get(api3).then(res=>{
      setArticles(res.data)
      setloading(false);

    })

  },[])
  const convertedArticle = _.map(articles, (item) => ({
    title: item.title,
    author: item.authors,
    image: item.img_src,
    description:item.tags,
    url:item.url,
    id:item.id

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
        setFav,
        favchecker,
        loading,
        addReadLater,
        removeRead,
        Readlaterchecker,
        readlater,
        convertedSearch,
        text,
        setText,
        setSearch,
        search,
        setCategory
        
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
