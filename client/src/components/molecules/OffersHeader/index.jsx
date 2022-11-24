import Parragraph from "../../atoms/Parragraph";
const OffersHeader = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <Parragraph titleType="h2" className="offers-h p-0 m-0">
        {title}
      </Parragraph>
      <Parragraph titleType="p" className="offers-p p-0 m-0">
        {subtitle}
      </Parragraph>
    </div>
  );
};

export default OffersHeader;
