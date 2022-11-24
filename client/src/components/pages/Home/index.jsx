import ProductsContainer from "../../organisms/ProductsContainer";
import FiltersContainer from "../../organisms/FiltersContainer";
import { useDataContext } from "../../settings/DataContext";

const Home = () => {
  const { filters, setLoading, products, seller } = useDataContext();
  return (
    <div className="row pr-0 pl-0 w-100">
      <div className="col-12 d-none d-lg-block col-lg-3 pr-0 pl-0">
        <FiltersContainer
          filters={filters}
          setLoading={setLoading}
          className="d-none d-md-flex flex-column w-100 justify-content-center align-items-start"
          textColor="text-dark"
        />
      </div>

      <div className="col-12 col-lg-9 pr-0 pl-0">
        <ProductsContainer products={products} seller={seller} />
      </div>
    </div>
  );
};

export default Home;
