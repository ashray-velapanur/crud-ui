export const addProductAPI = (productData) => {
    console.log(JSON.stringify(productData));
    fetch('http://localhost:8000/add/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData)
    })
}

export const getProductsAPI = () => {
    fetch('http://localhost:8000/get/')
      .then(response => {
        response.json().then(data => {
          return data
        })
      })
}
