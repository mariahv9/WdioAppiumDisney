import WelcomeScreen from "../pageobjects/welcomeScreen.js";
import PlansScreen from "../pageobjects/plansScreen.js";

describe('smoke test', () => {
    it.only('Should display add screen', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await PlansScreen.openAdd();
        await PlansScreen.diningAvailibility.toBeDisplayed;
    });

    it('Should enabled dining option', async () => {
        await WelcomeScreen.skipToHome();
        await WelcomeScreen.skipHints();
        await PlansScreen.openAdd();
        await PlansScreen.diningAvailibility.toBeEnabled;
    });
});