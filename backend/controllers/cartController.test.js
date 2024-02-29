const cartController = require('../controllers/cartController');
const cartService = require('../services/cartService');
const response = require('../utils/Response');

jest.mock('../services/cartService');

describe('Cart Controller', () => {
    describe('getAllProductsInCart', () => {
        it('should get all products in the cart successfully', async () => {
            const mockUserId = 'Yerkesh';
            const mockResult = [
                {
                    productId: '1',
                    productName: 'PlayStation',
                    price: 19.99,
                    quantity: 2,
                }
            ];
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            cartService.getAllProductsInCart.mockResolvedValue(mockResult);

            await cartController.getAllProductsInCart({ params: { userId: mockUserId } }, mockResponse);

            expect(cartService.getAllProductsInCart).toHaveBeenCalledWith(mockUserId);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Success(mockResult));
        });

        it('should handle error when getting all products in the cart', async () => {
            const mockUserId = 'Yerkesh';
            const mockError = new Error('Error getting products in the cart');
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            cartService.getAllProductsInCart.mockRejectedValue(mockError);

            await cartController.getAllProductsInCart({ params: { userId: mockUserId } }, mockResponse);

            expect(cartService.getAllProductsInCart).toHaveBeenCalledWith(mockUserId);
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Error('Error getting products in the cart'));
        });
    });

    describe('addProductToCart', () => {
        it('should add a product to the cart successfully', async () => {
            const mockUserId = 'Yerkesh';
            const mockRequestBody = {
                productId: '123',
                quantity: 2,
            };
            const mockResult = [
                {
                    productId: '1',
                    productName: 'PlayStation',
                    price: 19.99,
                    quantity: 2,
                }
            ];
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            cartService.addProductToCart.mockResolvedValue(mockResult);

            await cartController.addProductToCart({ params: { userId: mockUserId }, body: mockRequestBody }, mockResponse);

            expect(cartService.addProductToCart).toHaveBeenCalledWith(mockUserId, mockRequestBody.productId, mockRequestBody.quantity);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Success(mockResult));
        });

        it('should handle error when adding a product to the cart', async () => {
            const mockUserId = 'Yerkesh';
            const mockRequestBody = {
                productId: '123',
                quantity: 2,
            };
            const mockError = new Error('Error adding product to the cart');
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            cartService.addProductToCart.mockRejectedValue(mockError);

            await cartController.addProductToCart({ params: { userId: mockUserId }, body: mockRequestBody }, mockResponse);

            expect(cartService.addProductToCart).toHaveBeenCalledWith(mockUserId, mockRequestBody.productId, mockRequestBody.quantity);
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Error('Error adding product to the cart'));
        });
    });

    describe('removeProductFromCart', () => {
        it('should remove a product from the cart successfully', async () => {
            const mockUserId = 'Yerkesh';
            const mockRequestBody = {
                productId: '123',
                quantity: 2,
            };
            const mockResult = [
                {
                    productId: '1',
                    productName: 'PlayStation',
                    price: 19.99,
                    quantity: 2,
                }
            ];
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            cartService.removeProductFromCart.mockResolvedValue(mockResult);

            await cartController.removeProductFromCart({ params: { userId: mockUserId }, body: mockRequestBody }, mockResponse);

            expect(cartService.removeProductFromCart).toHaveBeenCalledWith(mockUserId, mockRequestBody.productId, mockRequestBody.quantity);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Success(mockResult));
        });

        it('should handle error when removing a product from the cart', async () => {
            const mockUserId = 'Yerkesh';
            const mockRequestBody = {
                productId: '123',
                quantity: 2,
            };
            const mockError = new Error('Error removing product from the cart');
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            cartService.removeProductFromCart.mockRejectedValue(mockError);

            await cartController.removeProductFromCart({ params: { userId: mockUserId }, body: mockRequestBody }, mockResponse);

            expect(cartService.removeProductFromCart).toHaveBeenCalledWith(mockUserId, mockRequestBody.productId, mockRequestBody.quantity);
            expect(mockResponse.status).toHaveBeenCalledWith(400);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Error('Error removing product from the cart'));
        });
    });
});
