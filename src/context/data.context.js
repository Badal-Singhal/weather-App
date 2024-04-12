import React, { createContext, useContext, useEffect, useState } from "react";

const CityDataContext = createContext();

export const DataProvider = ({ children, searchStr }) => {
  const [btnClick, setBtnClick] = useState(false);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [page, setPage] = useState(0);
  const [filter,setFilter]=useState(null);

  const handleInfiniteScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    try {
      if (innerHeight + scrollTop + 1 >= scrollHeight) {
        setPage((previousValue) => previousValue + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formattedString = searchStr
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  console.log(formattedString);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?order_by=cou_name_en&limit=20&offset=${page}`
        );
        const body = await response.json();
        console.log(body);
        if (page === 0) {
          setData([...body.results]);
        } else {
          setData((prevData) => [...prevData, ...body.results]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  if (btnClick) {
    const fetchData = async () => {
      try {
        if(filter==="country"){
          const response = await fetch(
            `https://public.opendatasoft.com//api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=cou_name_en%3D%22${formattedString}%22&limit=10`
          );
          const body = await response.json();
          setSearchData(body);
        }else{
          const response = await fetch(
            `https://public.opendatasoft.com//api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?where=ascii_name%3A%22${formattedString}%22&limit=10`
          );
          const body = await response.json();
          setSearchData(body);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    setBtnClick((prevState) => !prevState);
  }

  return (
    <CityDataContext.Provider
      value={{ data, searchData, btnClick, setBtnClick,filter,setFilter }}
    >
      {children}
    </CityDataContext.Provider>
  );
};

export const useData = () => useContext(CityDataContext);
