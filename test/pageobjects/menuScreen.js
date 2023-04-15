class MenuScreen {
    get menuPage() {return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*More Options.*")')}
    get scrollPage() { return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionMatches(".*Privacy.*"))')}
    get profile() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("My Profile")')}
    get propertyRules() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Property Rules")')}
    get linkAccount() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Link to Account")')}
    get help() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Help")')}
    get privacyLegal() {return $('android=new UiSelector().resourceIdMatches(".*content").textContains("Privacy & Legal")')}
    get elemUno() {return $('android=new UiSelector().text("Privacy Policy")')}
    get elemDos() {return $('android=new UiSelector().text("Terms of Use")')}
    get elemTres() {return $('android=new UiSelector().text("Supplemental Terms and Conditions")')}
    get elemCuatro() {return $('android=new UiSelector().text("Legal Notices")')}
    get elemCinco() {return $('android=new UiSelector().text("Property Rules")')}
    get elemSeis() {return $('android=new UiSelector().text("Electronic Communications Disclosure")')}
    get elemSiete() {return $('android=new UiSelector().text("Your California Privacy Rights")')}
    get elemOcho() {return $('android=new UiSelector().text("Do Not Sell My Personal Information")')}
    get elemNueve() {return $('android=new UiSelector().text("In-App Maps Subject to Google Terms and Conditions")')}
    get elemDiez() {return $('android=new UiSelector().text("In-App Maps Subject to Google Privacy Policy")')}
    get elemOnce() {return $('android=new UiSelector().text("Privacy Policy")')}

    async openMenuScreen() {
        await this.menuPage.click();
    }

    async openPrivacyLegalScreen() {
        await this.privacyLegal.click();
    }
}

export default new MenuScreen();