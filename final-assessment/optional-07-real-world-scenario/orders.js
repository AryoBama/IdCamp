// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const detail = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((acc,item) => acc + item.price,0),
    status: 'Menunggu'
  }
  orders.push(detail);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  orders = orders.map((detail) =>{
    return {...detail, status: detail.id === orderId ? status : detail.status}
  });
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((acc,detail) => 
    detail.status === "Selesai" ? acc + detail.totalPrice : acc ,0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter( (item) => item.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
