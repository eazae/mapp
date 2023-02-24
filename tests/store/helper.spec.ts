// spec: specification

describe('Vuex store', () => {
	it('vuex store created ', () => {
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
