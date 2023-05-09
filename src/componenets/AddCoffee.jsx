import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, test, category, details, photo};
        console.log(newCoffee);
      
        // send data to server 
        fetch('http://localhost:5000/coffee',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Added Success fully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
      } 
    return (
        <>
          <div className="bg-[#F4F3F0]  p-20">
        <div className=" text-center mb-8">
          <h1 className="text-purple-600 text-5xl">Add Coffee</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga
            veritatis maxime delectus, laudantium omnis est doloremque
            perspiciatis. Est aperiam temporibus cum eum ad, minus at! Fugiat
            sequi doloribus corporis.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          {/* name and coffee row */}
          <div className="md:flex mb-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="coffee name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Available Quantity"
                  name="quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* supplier and test row */}
          <div className="md:flex mb-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Supplier Name"
                  name="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Test</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Test"
                  name="test"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* category and details row */}
          <div className="md:flex mb-3">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Details"
                  name="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* photo url row */}
          <div className="md:flex mb-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo url"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input className="btn btn-block mt-3" type="submit" value='Add Coffee'/>
        </form>
      </div>  
        </>
    );
};

export default AddCoffee;