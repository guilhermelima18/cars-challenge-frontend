/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    signIn(email: string, password: string): Chainable<Element>;
    selectAccount(): Chainable<Element>;
    dragAndDrop(subject: any, target: string): Chainable<Element>;
    findByTestId(value: string): Chainable<any>;
    findByText(value: string): Chainable<any>;
    findByRole(value: string, name: any): Chainable<any>;
    findAllByTestId(value: string): Chainable<any>;
    findAllByRole(tag: string, name: any): Chainable<any>;
    findAllByText(value: string): Chainable<any>;
  }
}
