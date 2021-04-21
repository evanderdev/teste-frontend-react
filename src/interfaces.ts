interface Installment {
	quantity: number;
	value: number;
}

interface IProduct {
	productId: number;
	productName: string;
	stars: number;
	imageUrl: string;
	listPrice?: number;
	price: number;
	installments: Installment[];
}
