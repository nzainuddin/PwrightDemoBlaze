import { test as base, Page } from '@playwright/test';
import { ControllerApi } from '../api/controller.api';

type CustomFixtures = {
    controllerApi: ControllerApi;
};

export const test = base.extend<CustomFixtures>({
    controllerApi: async ({ request }, use) => {
        const controller = new ControllerApi(request, /*'baseURL'*/'https://api.demoblaze.com');
        await use(controller);
    },
});
