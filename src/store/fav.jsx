import axios from "axios";
import { createContext, useState, useEffect, useRef } from "react";
import _ from "lodash";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Context = createContext();

export function Data({ children }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [isError, setisError] = useState('');


  return (
    <Context.Provider
      value={{
      error,
      isError,
      setisError,
      setError
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
