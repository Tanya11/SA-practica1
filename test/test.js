var assert = require('assert')
const fetch = require("node-fetch")

describe('Pequeño programa de Muestra --Suma de numeros',async function() {
    it('100 + 100 = 200', async function() {

        let res = await fetch('http://localhost:3000/add/100/100')
                    .then(response => response.json())
                    .then(data => { return data })

        assert.equal(res, 200)
    })
})
