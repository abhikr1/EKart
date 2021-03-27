import "./Categories.css";

function Categories() {


  
  return (
    <div className="category">
    <div>
    <img src = "./images/fashionicon.png" alt="NotAvailable"></img>
    </div>
  <div onClick={click}> 
  <img src = "./images/mobileIcon.png" alt="NotAvailable"></img>
  </div>
  <div>
  <img src = "./images/groceryicon.png" alt="NotAvailable"></img>
  </div>
</div>
  );
}

const click = () => {
  console.log("hi");
  return (
    <h1>sdf</h1>
  )};
export default Categories;