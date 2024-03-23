/* eslint-disable no-undef */
/**
 * - Login spec
 *   - should display form page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email is not valid
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should display form page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should(
      'be.visible',
    );
    cy.get('input[placeholder="Password"]').should(
      'be.visible',
    );
    cy.get('button')
      .contains(/^Login$/)
      .should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // Klik tombol login tanpa mengisi email
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        '"email" is not allowed to be empty',
      );
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type(
      'testemail@example.com',
    );

    // Klik tombol login tanpa mengisi email
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        '"password" is not allowed to be empty',
      );
    });
  });

  it('should display alert when email is not valid', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('testemail');

    // mengisi password salah
    cy.get('input[placeholder="Password"]').type(
      'testemail123',
    );

    // Klik tombol login tanpa mengisi email
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type(
      'testemail@example.com',
    );

    // mengisi password salah
    cy.get('input[placeholder="Password"]').type(
      'testemail123',
    );

    // Klik tombol login
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type(
      'bob@example.com',
    );

    // mengisi password
    cy.get('input[placeholder="Password"]').type('bob123');

    // Klik tombol login
    cy.get('button')
      .contains(/^Login$/)
      .click();

    // memverifikasi bahwa element yang berada di homepage ditampilkan
    cy.get('nav')
      .contains(/^Forum$/)
      .should('be.visible');
    cy.get('button')
      .contains('logout')
      .should('be.visible');
  });
});
