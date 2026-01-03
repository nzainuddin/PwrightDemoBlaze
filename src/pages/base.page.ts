import { expect, Locator, type Page } from '@playwright/test';


export class BasePage {
    private readonly page: Page;
    // Contact Modal
    readonly contactEmailInput: Locator;
    readonly contactNameInput: Locator;
    readonly contactMessageInput: Locator;
    readonly contactSendMsgButton: Locator;
    // Login Modal
    readonly loginMenu: Locator;
    readonly loginUsernameInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    // Sign Up Modal
    readonly signUpMenu: Locator;
    readonly signUpUsernameInput: Locator; 
    readonly signUpPasswordInput: Locator;
    readonly signUpButton: Locator;

    readonly closeIconModalButton: Locator;
    readonly closeModalButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contactEmailInput = page.locator('#contact-email');
        this.contactNameInput = page.locator('#contact-name');
        this.contactMessageInput = page.locator('#contact-message');
        this.contactSendMsgButton = page.locator('#contact-send-message');
        this.loginMenu = page.locator('#login2');
        this.loginUsernameInput = page.locator('#loginusername');
        this.loginPasswordInput = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.signUpMenu = page.locator('#signin2');
        this.signUpUsernameInput = page.locator('#sign-username');
        this.signUpPasswordInput = page.locator('#sign-password');
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.closeIconModalButton = page.locator('.modal-close-icon');
        this.closeModalButton = page.locator('#close-modal-button');

    }

    async signUp(username: string, password: string) {
        await this.signUpMenu.click();
        await this.signUpUsernameInput.fill(username);
        await this.signUpPasswordInput.fill(password);
        await this.signUpButton.click();
    }

    async login(username: string, password: string) {
        await this.loginMenu.click();
        await this.loginUsernameInput.fill(username);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }   

    async loggedInUser(username: string) {
        const userLocator = await this.page.locator('#nameofuser');
        await expect(userLocator).toHaveText(`Welcome ${username}`);
    }

    async logOut() {
        const logoutMenu = this.page.getByRole('link', { name: 'Log out' });
        await logoutMenu.click();
    }

    async acceptDialogBox(message: string) {
        this.page.once('dialog', async dialog => { 
            expect(await dialog.message()).toBe(message);
            await dialog.accept();
        });
    }
}
