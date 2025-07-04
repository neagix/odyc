import { createGame } from 'odyc'

const game = createGame({
	player: {
		sprite: `
			...00...
			...00...
			.000000.
			0.0000.0
			0.0000.0
			..0000..
			..0..0..
			..0..0..
    `,
		position: [3, 4],
	},
	templates: {
		'#': {
			sprite: 2,
		},
		f: {
			sprite: `
        .808....
        5888....
        ...8...8
        ..888888
        ..88888.
        ..8888..
        ....6...
        ...66...
			`,
			dialog: 'Hello adventurer!',
		},
	},
	map: `
    ########
    #......#
    #......#
    #......#
    #......#
    #....f.#
    #......#
    ########
  `,
})
