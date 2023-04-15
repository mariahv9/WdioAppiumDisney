import WelcomeScreen from "../pageobjects/welcomeScreen.js";
import MenuScreen from "../pageobjects/menuScreen.js";

describe('smoke test', () => {
    it('Should display menu screen', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await MenuScreen.openMenuScreen();
        await MenuScreen.scrollPage;
        await MenuScreen.profile.toBeDisplayed;
        await MenuScreen.propertyRules.toBeDisplayed;
        await MenuScreen.linkAccount.toBeDisplayed;
        await MenuScreen.help.toBeDisplayed;
        await MenuScreen.privacyLegal.toBeDisplayed;
    });

    it('Should click on privacy legal', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await MenuScreen.openMenuScreen();
        await MenuScreen.scrollPage;
        await MenuScreen.openPrivacyLegalScreen();
    });

    it('Should display privacy legal screen', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await MenuScreen.openMenuScreen();
        await MenuScreen.scrollPage;
        await MenuScreen.openPrivacyLegalScreen();
        await MenuScreen.elemUno.toBeDisplayed;
        await MenuScreen.elemDos.toBeDisplayed;
        await MenuScreen.elemTres.toBeDisplayed;
        await MenuScreen.elemCuatro.toBeDisplayed;
        await MenuScreen.elemCinco.toBeDisplayed;
        await MenuScreen.elemSeis.toBeDisplayed;
        await MenuScreen.elemSiete.toBeDisplayed;
        await MenuScreen.elemOcho.toBeDisplayed;
        await MenuScreen.elemNueve.toBeDisplayed;
        await MenuScreen.elemDiez.toBeDisplayed;
        await MenuScreen.elemOnce.toBeDisplayed;
    });
});