import { createContext, useState ,useEffect} from "react";

const Context = createContext();

export function Data({ children }) {
  const api='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?&limit=10&api-key=i9NjHDB2X3wakPuA4UE9uglGpAnTeUMm'
  const [time, settime] = useState(new Date());
  const [date, setdate] = useState(new Date());

  // useEffect(()=>{
  //   setInterval(()=>{settime(new Date())},1000)
  //   setInterval(()=>{setdate(new Date())},1000)
    
  // },[])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }}
   const [Latest, setLatest] = useState([]);
   useEffect(()=>{
     fetch(api).
     then((res)=>res.json())
     .then((b)=>setLatest(b))
   },[])
   console.log(Latest);
  return (
    <Context.Provider value={{time,date,responsive,Latest}}>
      {children}
    </Context.Provider>
  );
}

export default Context;