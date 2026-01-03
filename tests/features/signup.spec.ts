import { test } from '../../src/fixtures';

test('Submit empty sign up form', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.signUp('', '');
  await pages.basePage.acceptDialogBox('Please fill out Username and Password.');
});

test('Sign up with existing user', async ({ accessAsGuest, pages }) => {
  accessAsGuest;
  await pages.basePage.signUp('testusera', 'password123');
  await pages.basePage.acceptDialogBox('This user already exist.');
});

