const encryptPassword = require('../utils/encryptPassword')

describe('Encrypt ONG password', () => {

  test('Password 12345', () => {
    expect(encryptPassword('12345').length).toBe(60);
  })

  test('Password abcde', () => {
    expect(encryptPassword('abcde').length).toBe(60);
  });

  test('Password abcde12345', () => {
    expect(encryptPassword('abcde12345').length).toBe(60);
  });

  test('Password LpmgG+jG*Cwgd8aP', () => {
    expect(encryptPassword('LpmgG+jG*Cwgd8aP').length).toBe(60);
  });

  test('Password =4VFy5WT3w^HvxXs', () => {
    expect(encryptPassword('=4VFy5WT3w^HvxXs').length).toBe(60);
  });

  test('Password 5wKGt#QYTKz@nfs3', () => {
    expect(encryptPassword('5wKGt#QYTKz@nfs3').length).toBe(60);
  });

  test('Password Wz6TkvWc@4s&9pzeEn5!X8^W4g9H9U', () => {
    expect(encryptPassword('Wz6TkvWc@4s&9pzeEn5!X8^W4g9H9U').length).toBe(60);
  });

  test('Password 4yDkZ#2W%TBzpxeGsGny?2C-VacvbA', () => {
    expect(encryptPassword('4yDkZ#2W%TBzpxeGsGny?2C-VacvbA').length).toBe(60);
  });

  test('Password sxDku9_#y_-f&y94!V#&2_uc*GKVj$', () => {
    expect(encryptPassword('sxDku9_#y_-f&y94!V#&2_uc*GKVj$').length).toBe(60);
  });

  test('128 Char boss password', () => {
    expect(encryptPassword('WACWd/F^=ah.c^${EWH$?S%5($Q(\'r[v:/XWq-DMVg]CVZfvXAGuSHb_&F<\'.8eTmT+rUx2hx5&6~)5QXnj[Ht%CMYtT_)E$UQZF3~C6MYzTw-@aTSCR"$^{~~H*~2DC').length).toBe(60);
  });


})