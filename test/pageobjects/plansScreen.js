class PlansScreen {
    get addButton() {return $('android=new UiSelector().resourceIdMatches(".*tab_animated_icon")')}
    get diningAvailibility() {return $('android=new UiSelector().textContains("Check Dining Availability")')}

    async openAdd() {
        await this.addButton.click();
    }
}

export default new PlansScreen();