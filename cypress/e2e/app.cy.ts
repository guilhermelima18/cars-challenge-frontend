describe("/", () => {
  it("should render init page and redirect to the home page", () => {
    cy.visit("/");

    cy.findByTestId("text-main").should("exist");
    cy.findByTestId("text-secondary").should("exist");
    cy.findByTestId("btn-init").should("exist").click();
  });
});
