const cart = [
    {
        image : "https://image1.jpg",
        title : "T-shirt",
        price : 23.00,
        quantity : 3,
        total : () => {
            this.quantity * this.price;
        }
    },
    {
        image : "https://image2.jpg",
        title : "Shoes",
        price : 23.00,
        quantity : 9,
        total : () => {
            this.quantity * this.price;
        }
    },
    {
        image : "https://image3.jpg",
        title : "Basket",
        price : 23.00,
        quantity : 4,
        total : () => {
            this.quantity * this.price;
        }
    }
];


