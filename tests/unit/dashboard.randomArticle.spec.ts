import { shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import RandomArticleComponent from '../../src/components/4.base/dashboard.randomArticle.vue';
import router from '../../src/router';

describe('dashboard.randomArticle.vue', () => {
  it('renders props when rendered', () => {
    const props = {
      title: 'my title',
      content: 'my specific content',
      article_id: 0,
    };

    const wrapper = shallowMount(RandomArticleComponent, {
      propsData: props,
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('.title').element.textContent).toMatch(props.title);
    expect(wrapper.find('.content').element.textContent).toMatch(props.content);
  });

  it('truncate content if too big', () => {
    const props = {
      title: 'my title',
      content:
        'Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content. Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.Very big content.',
      article_id: 0,
    };

    const wrapper = shallowMount(RandomArticleComponent, {
      propsData: props,
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('.content').element.textContent.length).toBeLessThan(
      props.content.length
    );
  });
});
