describe("Quantity products test", function () 
{
  it("Check correct website", function () 
  {
    cy.visit("https://demo.saleor.io/")

    cy.title()
    .should("eq", "Demo PWA Storefront – Saleor Commerce")
  });
  it("T-shirt quantity-max testcase", function () 
  {
    cy.get("h4.product-list-item__title")
      .contains("T-shirt")
      .click()

    cy.get("div.product-description__variant-picker")
      .click()

    cy.get("div.sc-likbZx")
      .contains("S")
      .click()

    cy.get("input[type=number]")
      .clear()
      .type("50")

    cy.get("button")
      .contains("Add to basket")
      .click()
  })
  it("After add T-shirts to basket, add extra T-shirt in M size", function () 
  {
    cy.get("div.product-description__variant-picker")
      .click()

    cy.get("div.sc-likbZx")
      .contains("M")
      .click()

    cy.get("input[type=number]")
      .clear()
      .type("1")

    cy.get("button")
      .contains("Add to basket")
      .click()
  })
  it("Error with quantity after add extra T-shirt", function () 
  {
    cy.get("p.sc-gZMcBi")
      .should("contain", "Maximum quantity is -61")
  })
});
