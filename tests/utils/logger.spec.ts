// import Logger

describe('Popup logger', () => {
	it('sends firebase when error popup called', () => {
		const msg = '(error msg)'
		// popup  
		popup.bus({
			Logger.log({
				level: LEVEL.ERROR,
				label: LEVEL.ERROR.Popup,
				message: msg
			})
		})
		
		expect(wrapper.text()).toMatch(msg)
	})
})
