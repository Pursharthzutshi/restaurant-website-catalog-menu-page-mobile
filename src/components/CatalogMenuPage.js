import "./CatalogMenuPage.css";
import CatalogMenuData from "./CatalogMenuData";
import CatalogMenuCards from "./CatalogMenuCards";
import {  useState } from "react";

function CatalogMenuPage() {

  const [showFilterBar,setShowFilterBar] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // const welcomeBackMessageTimeInterval = useSelector((state)=>state.login.welcomeBackMessageTimeInterval)

  // useEffect(()=>{
  //   useDispatch((setTimeout(()=>{
  //     welcomeBackMessageTimeInterval(ture)
  //   })))
function filterBarStatus(){
  setShowFilterBar(!showFilterBar)
  
}
  // const filterBarStatus = ()=>{
  // }

  return (
    <div className="catalog-menu-page">
      <br></br>
      {/* <h3>CatalogMenuPage</h3> */}
{/*       
    {
    welcomeBackMessageTimeInterval &&
      <p className="login-welcome-back-message">Welcome Back {userName}</p>
    }
       */}
      <h3 className="heading">Catalog Menu Items</h3>
      <div className="search-menu-input-div">
        <h4>Search Catalog Menu</h4>
        <input
          className="search-menu-input"
          placeholder="Search Menu"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
      </div>
      {
        showFilterBar ? 
          <div className="catalog-menu-page-buttons-container">
        <button
          onClick={() => {
            setCategoryFilter("all");
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Pizza");
          }}
        >
          Pizza
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Burger");
          }}
        >
          Burger
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Pasta");
          }}
        >
          Pasta
        </button>
        <button
          onClick={() => {
            setCategoryFilter("Noodles");
          }}
        >
          Noodles
        </button>
      </div>
      :
      null
      }
   

      <button className="show-filter-bar-button" onClick={filterBarStatus}>Show filter Menu Bar</button>
{/* 
      {test ? (
        <div className="item-added-message">
          <p className="item-already-added-msg">
            Item Already added in the cart
          </p>
          <p className="item-already-added-msg">
            check the Quantity in the cart menu
          </p>
        </div>
      ) : null} */}

      <div className="catalog-menu-section">
        {CatalogMenuData.filter((menuItem) => {

          // filtering based on search input title filter
          
          return menuItem.title.toLowerCase().includes(search.toLowerCase());
        })
          .filter((menuItem) => {
            if (!categoryFilter || categoryFilter === "all") {
              return true;
            }

            return menuItem.category === categoryFilter;
          })
          .map((menuItem) => {
            return (
              <div>
                <CatalogMenuCards
                  menuItem={menuItem}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CatalogMenuPage;
