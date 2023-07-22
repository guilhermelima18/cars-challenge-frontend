describe("RegisterCar", () => {
  it("should be create a car", () => {
    cy.visit("/register-car");

    cy.findByTestId("input-file")
      .should("exist")
      .selectFile("cypress/fixtures/meca.jpg", { force: true });
    cy.findByTestId("input-brand").should("exist").type("Test marca");
    cy.findByTestId("input-model").should("exist").type("Test modelo");
    cy.findByTestId("input-year").should("exist").type("2015");
    cy.findByTestId("input-plate").should("exist").type("TES-4879");
    cy.findByTestId("input-description").should("exist").type("Test descrição");

    cy.findByTestId("btn-register").should("exist").click();

    cy.wait(6000);

    cy.get('[aria-label="btn-confirm"]').should("exist").click();
  });
});
