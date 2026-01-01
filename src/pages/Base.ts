import { Locator, type Page } from '@playwright/test';


export class BasePage {
    private readonly page: Page;
    // Contact Modal
    readonly contactEmailInput: Locator;
    readonly contactNameInput: Locator;
    readonly contactMessageInput: Locator;
    readonly contactSendMsgButton: Locator;
    // Login Modal
    readonly loginUsernameInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    // Sign Up Modal
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
        this.loginUsernameInput = page.locator('#login-username');
        this.loginPasswordInput = page.locator('#login-password');
        this.loginButton = page.locator('#login-button');
        this.signUpUsernameInput = page.locator('#sign-up-username');
        this.signUpPasswordInput = page.locator('#sign-up-password');
        this.signUpButton = page.locator('#sign-up-button');
        this.closeIconModalButton = page.locator('.modal-close-icon');
        this.closeModalButton = page.locator('#close-modal-button');

    }

}
