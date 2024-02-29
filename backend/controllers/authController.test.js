const authController = require('../controllers/authController');
const authServices = require('../services/authService');
const response = require('../utils/Response');

jest.mock('../services/authService');

describe('Auth Controller', () => {
    describe('RegisterUser', () => {
        it('should handle registration successfully', async () => {
            const mockRequestBody = {
                username: 'Yerkesh',
                password: 'GodOfMan',
            };
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            authServices.RegisterUser.mockResolvedValue('mockedResult');

            await authController.RegisterUser({ body: mockRequestBody }, mockResponse);

            expect(authServices.RegisterUser).toHaveBeenCalledWith(mockRequestBody);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Success('mockedResult'));
        });

        it('should handle registration failure', async () => {
            const mockRequestBody = {
                username: 'Yerkesh',
                password: 'GodOfMan',
            };
            const mockError = new Error('Registration failed');
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            authServices.RegisterUser.mockRejectedValue(mockError);

            await authController.RegisterUser({ body: mockRequestBody }, mockResponse);

            expect(authServices.RegisterUser).toHaveBeenCalledWith(mockRequestBody);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Error('Registration failed'));
        });
    });

    describe('LoginUser', () => {
        it('should handle login successfully', async () => {
            const mockRequestBody = {
                username: 'Yerkesh',
                password: 'GodOfMan',
            };
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            authServices.LoginUser.mockResolvedValue('mockedResult');

            await authController.LoginUser({ body: mockRequestBody }, mockResponse);

            expect(authServices.LoginUser).toHaveBeenCalledWith(mockRequestBody);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Success('mockedResult'));
        });

        it('should handle login failure', async () => {
            const mockRequestBody = {
                username: 'Yerkesh',
                password: 'GodOfMan',
            };
            const mockError = new Error('Login failed');
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            authServices.LoginUser.mockRejectedValue(mockError);

            await authController.LoginUser({ body: mockRequestBody }, mockResponse);

            expect(authServices.LoginUser).toHaveBeenCalledWith(mockRequestBody);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Error('Login failed'));
        });
    });

    describe('GetProfile', () => {
        it('should handle get profile successfully', async () => {
            const mockUser = {
                username: 'Yerkesh'
            };
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            authServices.GetProfile.mockResolvedValue('mockedResult');

            await authController.GetProfile({ user: mockUser }, mockResponse);

            expect(authServices.GetProfile).toHaveBeenCalledWith(mockUser.username);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Success('mockedResult'));
        });

        it('should handle get profile failure', async () => {
            const mockUser = {
                username: 'Yerkesh'
            };
            const mockError = new Error('Get profile failed');
            const mockResponse = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            authServices.GetProfile.mockRejectedValue(mockError);

            await authController.GetProfile({ user: mockUser }, mockResponse);

            expect(authServices.GetProfile).toHaveBeenCalledWith(mockUser.username);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(response.Error('Get profile failed'));
        });
    });
});
