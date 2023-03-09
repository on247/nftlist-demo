function ContentWrapper(props) {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="pt-8">{props.children}</div>
    </div>
  );
}
export default ContentWrapper;
