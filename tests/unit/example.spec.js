import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders button correctly', () => {
    const wrapper = shallowMount(App);
    const button = wrapper.findComponent('#hello-button');
    expect(button.exists()).toBe(true);
  });
});
