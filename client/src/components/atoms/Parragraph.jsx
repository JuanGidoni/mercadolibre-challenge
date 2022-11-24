const Parragraph = ({ children, titleType, className, testId }) =>
  titleType === "h6" && testId ? (
    <h6 className={className} data-testid={testId}>
      {children}
    </h6>
  ) : titleType === "h6" ? (
    <h6 className={className}>{children}</h6>
  ) : titleType === "h5" ? (
    <h5 className={className}>{children}</h5>
  ) : titleType === "h4" ? (
    <h4 className={className}>{children}</h4>
  ) : titleType === "h3" ? (
    <h3 className={className}>{children}</h3>
  ) : titleType === "h2" ? (
    <h2 className={className}>{children}</h2>
  ) : titleType === "h1" ? (
    <h1 className={className}>{children}</h1>
  ) : (
    <p className={className}>{children}</p>
  );

export default Parragraph;
