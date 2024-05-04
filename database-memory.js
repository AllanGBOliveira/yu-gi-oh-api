import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    #cards = new Map();

    create(card) {
        const id = randomUUID()
        this.#cards.set(id, card)
    }

    update(id, card) {
        this.#cards.set(id, card)
    }

    delete(id) {
        this.#cards.delete(id)
    }

    list() {
        return Array.from(this.#cards.entries()).map((cardArray) => {
            const id = cardArray[0]
            const data = cardArray[1]
            return {
                id,
                ...data
            }
        })
    }
}