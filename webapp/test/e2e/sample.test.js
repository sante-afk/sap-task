const { wdi5 } = require("wdio-ui5-service")

describe("samples", () => {
    it("should log", () => {
        const logger = wdi5.getLogger()
        logger.log("hello world!")
    })

    it.skip("should retrieve a UI5 control", async () => {
        const appLocator = {
            selector: {
                controlType: "sap.m.App",
                viewName: "ui5.typescript.helloworld.view.App"
            }
        }

        const app = await browser.asControl(appLocator)
        expect(app).toBeDefined()
    })
})
