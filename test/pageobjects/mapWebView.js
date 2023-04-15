class MapWebView {
    get tabIconMapBttn() {return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*Map.*").classNameMatches("android.widget.ImageView")')}
    get atractionItem() {return $('android=new UiSelector().descriptionMatches(".*Attractions, Category.*")')}
    get hotelsItem() {return $('android=new UiSelector().descriptionMatches(".*Hotels, Category.*")')}

    async openMapWebView() {
        await this.tabIconMapBttn.click();
    }
}

export default new MapWebView();