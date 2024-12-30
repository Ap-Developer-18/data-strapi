import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData } from './utils/helper';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {
  const [courses, setCourses] = useState(null);
  // JBB TKK DATA LOAD NHI HOTA API SAI TO HMM LOADER DIKHAENGE
  const [loading, setLoading] = useState(true);
  // YHA PRR BUTTON PR CLICK HOTE HI CARD FILTER KRNE HAI
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    // JB TKK DATA AA RHA HAI LOADING TRUE
    setLoading(true);
    try {
      let response = await fetch("http://localhost:1337/api/blogs?populate=*");
      let output = await response.json();
      setCourses(output.data)
    }
    catch (error) {
      error("console me koi dikkt hai");
    }
    // OR DATA AANE KE BAAD LOADING FALSE
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Filter filerData={filterData} category={category} setCategory={setCategory} />
      {/* YHA PRR EK TIME PRR YAA TO SPINER DIKHEGA YA FIR CARD */}
      {loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)}
      {/* CARDS.JSX API KA DATA PROPS KE THREW PASS KR DIYA */}
      {/* <Data /> */}
    </div>
  );
}

export default App;