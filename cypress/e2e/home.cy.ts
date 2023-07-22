describe("Home", () => {
  it("should render cards to the cars", () => {
    cy.visit("/home");

    cy.wait(5000);

    cy.findAllByTestId("btn-details").should("exist");
  });

  it("should render cards to the cars and redirect at details car page", () => {
    cy.visit("/home");

    cy.wait(5000);

    cy.findAllByTestId("btn-details").eq(0).should("exist").click();
  });

  it("should render cards to the cars and navigate in the pages with button pagination", () => {
    cy.visit("/home");

    cy.wait(5000);

    cy.findAllByTestId("btn-pagination").eq(0).should("exist").click();

    cy.wait(5000);

    cy.findAllByTestId("btn-pagination").eq(0).should("exist").click();
  });
});
