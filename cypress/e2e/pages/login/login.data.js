export class LoginData {
    static get validCredentials() {
        return {
            username: 'TestingLQA',
            password: 'TestingLQA'
        };
    };

    static get invalidCredentials() {
        return {
            invalidPassword: 'InvalidaInvalida'
        }
    }
};