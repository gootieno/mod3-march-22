//!!ADD
// const getIndex = () => {
//!!END_ADD
//!!START SILENT
export const getIndex = () => {
  //!!END
  const wrapper = document.getElementById("wrapper");
  return parseInt(wrapper.dataset.index);
};

export const getLastItem = () => {
  // some code
  console.log("getting last item");
};
