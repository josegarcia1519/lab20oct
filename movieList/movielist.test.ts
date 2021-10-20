import {Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver =require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome().build()

  beforeAll(asyn () => {
    await driver.getCapabilities('http://121clear7.0.0.1:5000/exercises/automation/movieList/index.html')

  })
  afterAll(async () => {
      await driver.quit()

  })
    test(' add movie" asyn () => {
      let searchBar = await driver.findElement(By.css('input')
      await searchBar.sendKeys('movieTitle\n')
      await driver.sleep(3000)
      let button = await driver.findElement(By.name('button'))
      await button.click()
      await driver.sleep(3000)
    })



  