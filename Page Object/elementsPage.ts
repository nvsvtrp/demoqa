import { basePage } from "./basePage";
export class ElementsPage extends basePage {
    constructor (page) {
        super (page)
    }

    TextBoxButtons = {
    textBoxButton: this.page.locator('li').filter({ hasText: 'Text Box' }),
    submitButton: this.page.locator('#submit'),

    }

    TextBoxFields = {
    fullNameField: this.page.locator('#userName'),
    emailField: this.page.locator('#userEmail'),
    currentAdressField: this.page.locator('#currentAddress.form-control'),
    permanentAdressField: this.page.locator('#permanentAddress.form-control'),
    fieldError: this.page.locator('.field-error'),
    }

    TextBoxLabels = {
    nameLabel: this.page.locator('#name.mb-1'),
    emailLabel: this.page.locator('#email.mb-1'),
    currentAdressLabel: this.page.locator('#currentAddress.mb-1'),
    permanentAdressLabel: this.page.locator('#permanentAddress.mb-1')
    }
   
    CheckBoxButtons = {
    checkBoxButton: this.page.locator('li').filter({ hasText: 'Check Box' }),
    expandButton:this.page.locator('.rct-option.rct-option-expand-all'),
    collapseButton: this.page.locator('.rct-option.rct-option-collapse-all'),
    homeCheckbox: this.page.locator('"Home"'),

    }

    CheckBoxLabels = {
    resultLabel: this.page.locator('#result'),
    }

    RadioButtons = {

    }

    WebTalesButtons = {

    }

    ButtonsButtons = {

    }

    LinksButtons = {

    }

    BrokenLinksButtons = {

    }

    UploadAndDownloadButtons = {

    }

    DynamicPropertiesButton = {

    }
}

