const deleteItem = (e) => {
  const parent = e.target.parentElement;
  parent.remove();
};

export default deleteItem;
