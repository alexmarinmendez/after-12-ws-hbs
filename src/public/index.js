const socket = io();
let productsForm = document.getElementById('productsForm');

const handleSubmit = (evt, form, route) => {
    evt.preventDefault()
    let formData = new FormData(form)
    let obj = {}
    formData.forEach((value, key) => obj[key]=value)
    fetch(route, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(response => response.json())
        .then(response => socket.emit('message', response))
        .then(() => form.reset())
}

productsForm.addEventListener('submit', (e) => handleSubmit(e, e.target, '/products'))

socket.on('history', data => {
    if (data.length > 0) {
        let history = document.getElementById('history')
        let html = `
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Thumbnail</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
        `
        data.forEach(product => {
            html += `
            <tr>
                <td>${product.title}</td>
                <td>$ ${product.price}</td>
                <td><img src="${product.thumbnail}" width="50"></td>
            </tr>
            `
        })
        html += `
        </tbody>
        </table>
        `
        history.innerHTML = html
    }
})