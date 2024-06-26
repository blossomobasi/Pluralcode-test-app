type ProductsType = {
    id: number;
    title: string;
    category: string;
    price: number;
    image: string;
    description?: string;
};

interface ErrorResponse {
    status: string;
    message: string;
}
