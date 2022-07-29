import React, {useState, useEffect} from 'react';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch()
        }

        getProducts();
    }, []);


  return (
    <div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
            <div class="card" style="width: 18rem;">
            <img src="/images/bred4s.jpeg" class="card-img-top" alt="AJ 4 Bred"/>
            <div class="card-body">
                <h5 class="card-title">Air Jordan Bred 4</h5>
                <p class="card-text">$220</p>
                <p class="card-text">Air jordan 4 Black and Red Colorway</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
            </div>
            <div class="col">
              2 of 3
            </div>
            <div class="col">
              3 of 3
            </div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              2 of 3
            </div>
            <div class="col">
              3 of 3
            </div>
          </div>
          <div class="row">
            <div class="col">
              1 of 3
            </div>
            <div class="col">
              2 of 3
            </div>
            <div class="col">
              3 of 3
            </div>
          </div>
        </div>

    </div>
  )
}
export default Products; 