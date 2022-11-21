class Software {
  constructor (name) {
    this.name = name
  }

  run () {
    console.log(`${this.name} is running`)
  }
}

const r0 = new Software('7zip')
r0.run()

class BrowserPlugin {
  constructor (name) {
    this.name = name
  }
  run () {
    console.log(`plugin ${this.name} is running`)
  }
}

class Browser extends Software {
  constructor (name) {
    super(name)
    this.plugins = []
  }

  addPlugin (plugin) {
    this.plugins.push(plugin)
  }

  run () {
    console.log(`${this.name} is running with plugins:`)
    this.plugins.forEach(e => e.run())
  }
}

const p0 = new BrowserPlugin('adblock')

const r1 = new Browser('chrome')
r1.addPlugin(p0)
r1.run()