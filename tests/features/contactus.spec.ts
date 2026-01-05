import { test } from '../../src/fixtures/ui.fixtures';

test('Allowed to submit empty contact form', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.contactUs('','','');
  await pages.basePage.acceptDialogBox('Thanks for the message!!');
});

test('Submit contact form', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.contactUs('test@example.com', 'user', 'This is a test message.');
  await pages.basePage.acceptDialogBox('Thanks for the message!!');
});
