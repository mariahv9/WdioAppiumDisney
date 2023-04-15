class WelcomeScreen {
    get getStartdeBttn() {return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn")')};
    get skipInteractionBttn() {return $('android=new UiSelector().resourceIdMatches(".*skip_text")')};
    get dismissBttn() {return $('android=new UiSelector().resourceIdMatches(".*dismiss-icon")')};

    async skipToHome(){
        await this.getStartdeBttn.click();
        await this.skipInteractionBttn.click();
        await this.skipInteractionBttn.click();
    }

    async skipHints(){
        await this.dismissBttn.click();
    }
}

export default new WelcomeScreen();