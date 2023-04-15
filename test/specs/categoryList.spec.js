import WelcomeScreen from "../pageobjects/welcomeScreen.js";
import MapWebView from "../pageobjects/mapWebView.js";

describe('smoke test', () => {
    it('Should display map webView', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await MapWebView.openMapWebView();
    });

    it('Should atraction item as default', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await MapWebView.openMapWebView();
        expect(await MapWebView.atractionItem).toHaveAttr('index', '0');
    });

    it('Should have hotels item', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await MapWebView.openMapWebView();
        expect(await MapWebView.hotelsItem).toBeEnabled;
    });
});