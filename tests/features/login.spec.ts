import { test } from '../../src/fixtures';

test('Submit empty login form', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.login('', '');
  await pages.basePage.acceptDialogBox('Please fill out Username and Password.');
});

test('Login with incorrect username', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.login('testuser1', 'password124');
  await pages.basePage.acceptDialogBox('User does not exist.');
});

test('Login with incorrect password', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.login('testuser', 'password124');
  await pages.basePage.acceptDialogBox('Wrong password.');
});

test('Login with correct username and password', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.login('Limah', 'Limah');
  await pages.basePage.loggedInUser('Limah');
  await pages.basePage.logOut();
});

