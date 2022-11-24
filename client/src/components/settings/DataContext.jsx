import React, { useContext, useState, useEffect } from "react";
import Loader from "../atoms/Loader";

const DataContext = React.createContext();

export function useDataContext() {
  return useContext(DataContext);
}

const _MeLiData = {
  title: "Ofertas",
  subtitle: "¡Encontrá precios increíbles cada día!",
  fonts: [
    "https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2",
    "https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff2",
    "https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2",
  ],
  header: {
    logo: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.11.0/mercadolibre/logo__large_plus@2x.png",
    search: "Buscar productos, marcas y más...",
    links: [
      "Ofertas",
      "Historial",
      "Supermercado",
      "Tiendas oficiales",
      "Vender",
      "Ayuda",
    ],
    profile: "Mi cuenta",
    ad_image:
      "https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-e6c46c2b-5591-4b43-94e4-a48dbbefaed7.png",
  },
};
const _MeliShortcuts = [
  {
    image_src:
      "https://http2.mlstatic.com/storage/splinter-admin/1583341146061-todas-las-ofertas@3x.png",
    name: "Todas las ofertas",
    filter: {
      domain_id: "",
    },
    isDefault: true,
    fixedPosition: true,
  },
  {
    image_src:
      "https://http2.mlstatic.com/storage/splinter-admin/1585847817557-speaker@3x.png",
    name: "Parlantes",
    filter: {
      domain_id: "MLA-SPEAKERS",
    },
    isRecommendedDomain: true,
  },
  {
    image_src:
      "https://http2.mlstatic.com/storage/splinter-admin/1592947702168-herramientas@3x.png",
    filter: {
      domain_id:
        "MLA-WELDING_MACHINES$MLA-TOOLS$MLA-WELDING_BLOWTORCHES$MLA-WELDING_RODS$MLA-DRILLS_SCREWDRIVERS$MLA-ELECTRIC_DRILLS$MLA-DRILL_BITS$MLA-POWER_GRINDERS$MLA-COMBINED_TOOL_SETS$MLA-ELECTRIC_CIRCULAR_SAWS$MLA-TOOL_ACCESSORIES_AND_SPARES$MLA-WRENCHES$MLA-WRENCH_SETS",
    },
    name: "Herramientas",
    isRecommendedDomain: true,
  },
  {
    image_src:
      "https://http2.mlstatic.com/storage/splinter-admin/1583354134276-notebooks@3x.png",
    filter: {
      domain_id: "MLA-NOTEBOOKS",
    },
    name: "Notebooks",
    isRecommendedDomain: true,
  },
  {
    image_src:
      "https://http2.mlstatic.com/storage/splinter-admin/1583341349527-celulares@3x.png",
    filter: {
      domain_id: "MLA-CELLPHONES",
    },
    name: "Celulares",
    isRecommendedDomain: true,
  },
  {
    image_src:
      "https://http2.mlstatic.com/storage/splinter-admin/1583354080423-zapatillas@3x.png",
    name: "Zapatillas",
    filter: {
      domain_id: "MLA-SNEAKERS",
    },
  },
];

export function DataProvider({ children, ...props }) {
  const url = process.env.REACT_APP_BACKEND_URL || "http://localhost";
  const port = process.env.REACT_APP_BACKEND_PORT || 5000;

  const [meLiData, setMeLiData] = useState();
  const [meLiShortcuts, setMeLiShortCuts] = useState();
  const [fav, setFav] = useState([]);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [seller, setSeller] = useState([]);
  const [sideToggle, setSideToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState({});
  const [added, setAdded] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [addStatus, setAddStatus] = useState({
    status: false,
    id: null,
    message: null,
    error: null,
  });

  const fetchOffers = (e, history) => {
    getResults(e);
    setLoading(true);
    history.push("/");
  };

  const fetchFilters = (e, history) => {
    getFiltersData(e);
    setLoading(true);
    history.push("/");
  };

  const formatLinksURL = (e) => {
    let newLinkUrl = e.replace(/\s/g, "").toLowerCase();
    return newLinkUrl;
  };

  const handleRemoveItem = (idx, history) => {
    const temp = [...fav];
    temp.splice(idx, idx >= 0 ? 1 : 0);
    setFav(temp);

    setAddStatus({
      status: false,
      id: null,
      message: "Item removed",
      error: null,
    });
    history.push("/favorites");
  };

  const addFav = (p, history) => {
    if (fav && fav.length > 0) {
      const idx = fav.findIndex((v) => v.id === p.id);
      if (idx >= 0 ? 1 : 0) {
        setAdded(false);
        return handleRemoveItem(idx, history);
      } else {
        setFav([...fav, p]);
        setAddStatus({
          status: true,
          id: p.id,
          message: "Next item added",
          error: null,
        });
        setAdded(true);
      }
    } else {
      setFav([...fav, p]);
      setAddStatus({
        status: true,
        id: p.id,
        message: "First item added",
        error: null,
      });
      setAdded(true);
    }
  };

  const getItem = async (e) => {
    try {
      if (e) {
        const results = await fetch(`${url}:${port}/v1/item/${e}`);
        const response = await results.json();
        setProducts([response]);
        setLoading(false);
      } else {
        const results = await fetch(`${url}:${port}/v1/`);
        const response = await results.json();
        setProducts([response]);
      }
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const checkifFavExist = (id) => {
    if (fav && fav.length > 0) {
      const itemFound = fav.some((item) => item.id === id);
      itemFound ? setAdded(true) : setAdded(false);
    } else if (loading) {
      getItem(id);
      setAdded(false);
    } else {
      setAdded(false);
    }
  };

  const getResults = async (e) => {
    try {
      setLoading(true);
      if (e) {
        const results = await fetch(`${url}:${port}/v1/search/${e}`);
        const response = await results.json();
        setProducts(response.results);
        setTotalItems(response.paging.total);
      } else {
        const results = await fetch(`${url}:${port}/v1/`);
        const response = await results.json();
        setProducts(response.results);
        setTotalItems(response.paging.total);
      }
      getFilters();
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const getFilters = async () => {
    try {
      const results = await fetch(`${url}:${port}/v1/categories`);
      const response = await results.json();
      setFilters(response);
      setLoading(false);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const getFiltersData = async (id) => {
    try {
      const fetchFilter = await fetch(`${url}:${port}/v1/filter/${id}`);
      const response = await fetchFilter.json();
      setProducts(response.results);
      setTotalItems(response.paging.total);
      setLoading(false);
    } catch (error) {
      setErrorMsg("Error fetching filters products or invalid category id.");
    }
  };

  const verifyCategory = async (id) => {
    try {
      const fetchCategory = await fetch(`${url}:${port}/v1/filter/${id}`);
      const response = await fetchCategory.json();
      setProducts(response.results);
      setTotalItems(response.paging.total);
      setCategoryLoading(false);
    } catch (error) {
      setErrorMsg("Error fetching categories products or invalid category.");
    }
  };

  useEffect(() => {
    const unsubscribe = () => {
      setLoading(true);
      getResults();
      setMeLiData(_MeLiData);
      setMeLiShortCuts(_MeliShortcuts);
    };

    return unsubscribe();
  }, []);

  const value = {
    fetchFilters,
    verifyCategory,
    getResults,
    getFilters,
    setFilters,
    setSeller,
    setProducts,
    setSideToggle,
    setLoading,
    setFav,
    setAddStatus,
    setAdded,
    setCategoryLoading,
    fetchOffers,
    addFav,
    checkifFavExist,
    formatLinksURL,
    setTotalItems,
    categoryLoading,
    added,
    totalItems,
    addStatus,
    seller,
    products,
    filters,
    errorMsg,
    meLiData,
    meLiShortcuts,
    loading,
    sideToggle,
    port,
    url,
    fav,
  };

  return (
    <DataContext.Provider value={value} props={props}>
      {loading ? <Loader /> : children}
    </DataContext.Provider>
  );
}
