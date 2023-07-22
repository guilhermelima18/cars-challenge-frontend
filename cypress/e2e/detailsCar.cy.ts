describe("DetailsCar", () => {
  it("should be view details a car", () => {
    cy.visit("/home");

    cy.wait(5000);

    cy.findAllByTestId("btn-details").eq(0).should("exist").click();

    cy.wait(5000);

    cy.findByTestId("car-image").should("exist");
    cy.findAllByTestId("card-car-info").should("exist");
    cy.findByTestId("car-title").should("exist");
    cy.findByTestId("btn-car-list").should("exist").click();
  });
});
