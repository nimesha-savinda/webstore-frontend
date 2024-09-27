function Tab(props) {
    if (props.selectedCategory === props.category._id) {
      return (
        <button
          className="border px-2 py-1 rounded-md bg-[#e1e2e6] "
          onClick={() => props.onClick(props.category.id)}
        >
          {props.category.name}
        </button>
      );
    }
    else{
      return (
      <button
        className="border border-[#edeef1] px-2 py-1 rounded-md"
        onClick={() => props.onClick(props.category._id)}
      >
        {props.category.name}
      </button>
    );}
  }
  
export default Tab;
  