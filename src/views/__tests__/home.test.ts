import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

// API 통신 부분 테스트
jest.mock('../MYACB010101');

test('renders Home.vue with MYACB010101 API response', () => {
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg },
  });
  expect(wrapper.text()).toContain();
});
