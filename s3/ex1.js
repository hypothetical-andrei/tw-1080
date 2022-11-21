class Robot {
  constructor (name) {
    this.name = name
  }

  move (meters) {
    console.log(`${this.name} moved ${meters}m`)
  }
}

const r0 = new Robot('first robot')
r0.move(10)

class Weapon {
  constructor (name) {
    this.name = name
  }
  fire () {
    console.log(`${this.name} is firing`)
  }
}

class CombatRobot extends Robot {
  constructor (name) {
    super(name)
    this.weapons = []
  }

  addWeapon (weapon) {
    this.weapons.push(weapon)
  }

  fire () {
    this.weapons.forEach(e => e.fire())
  }
}

const w0 = new Weapon('pew pew lazor')

const r1 = new CombatRobot('first combat robot')
r1.addWeapon(w0)
r1.fire()