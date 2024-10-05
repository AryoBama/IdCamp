function fibonacci(n) {
    
    if (n <= 0){
        return [0];
    }else if (n == 1){
        return [0,1];
    }
    let arr = [];
    return arr.concat(fibonacci(n-1),[fibonacci(n-2)[n-2] + fibonacci(n-1)[n-1]]);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
