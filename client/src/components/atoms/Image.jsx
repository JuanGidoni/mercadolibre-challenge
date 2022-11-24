const Image = ({ src, className, testId }) => {
  const TestID = testId ? testId : false;
  return (
    <img
      src={src}
      className={className}
      alt={"Mercado Libre"}
      data-testid={TestID}
    />
  );
};

export default Image;
