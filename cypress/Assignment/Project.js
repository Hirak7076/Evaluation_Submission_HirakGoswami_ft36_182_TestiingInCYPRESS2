///<reference types="cypress" />

const { expect } = require("chai");

describe('OpenMRS', () => {
    it('Test1', () => {
        cy.visit('https://demo.openmrs.org/openmrs/login.htm');
        cy.xpath('//input[@id="username"]').type("admin");
        cy.xpath('//input[@id="password"]').type("Admin123")
        cy.xpath('//li[@id="Inpatient Ward"]').click();
        cy.xpath('//input[@id="loginButton"]').click();
        cy.xpath('//a[@id="coreapps-activeVisitsHomepageLink-coreapps-activeVisitsHomepageLink-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="org-openmrs-module-coreapps-activeVisitsHomepageLink-org-openmrs-module-coreapps-activeVisitsHomepageLink-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="referenceapplication-vitals-referenceapplication-vitals-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="appointmentschedulingui-homeAppLink-appointmentschedulingui-homeAppLink-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="reportingui-reports-homepagelink-reportingui-reports-homepagelink-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="coreapps-datamanagement-homepageLink-coreapps-datamanagement-homepageLink-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="org-openmrs-module-adminui-configuremetadata-homepageLink-org-openmrs-module-adminui-configuremetadata-homepageLink-extension"]').click();
        cy.go('back');
        cy.xpath('//a[@id="coreapps-systemadministration-homepageLink-coreapps-systemadministration-homepageLink-extension"]').click();
        cy.go('back');
    });
});