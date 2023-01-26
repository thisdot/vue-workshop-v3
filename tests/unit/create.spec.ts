import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi, beforeAll } from 'vitest';
import CreateComponent from '../../src/components/3.sections/dashboard/Create.vue';
import { useArticleStore } from '../../src/stores/useArticleStore';

describe('Create.vue', () => {
  let testingPinia;

  beforeEach(() => {
    testingPinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: true,
    });
  });

  describe('loading a form', () => {
    let expectedValues, wrapper;

    beforeAll(() => {
      expectedValues = {
        title: '',
        content: '',
      };
      wrapper = mount(CreateComponent, {
        plugins: [testingPinia],
      });
    });

    it('should load a form with an empty title', () => {
      const title = wrapper.find('#title').text();

      expect(title).toBe(expectedValues.title);
    });

    it('should load a form with empty content', () => {
      const content = wrapper.find('#content').text();

      expect(content).toBe(expectedValues.content);
    });
  });

  describe('adding an article', () => {
    let articleStore;

    beforeEach(() => {
      articleStore = useArticleStore(testingPinia);
    });

    it('should trigger the adding of an article when the add article button is clicked', async () => {
      const expectedValues = {
        title: 'title',
        content: 'content',
      };

      const wrapper = mount(CreateComponent, { plugins: [testingPinia] });

      wrapper.get('#title').setValue(expectedValues.title);
      wrapper.get('#content').setValue(expectedValues.content);

      vi.spyOn(articleStore, 'addArticle');

      wrapper.get('button').trigger('click');

      expect(articleStore.addArticle).toHaveBeenCalled();
    });
  });
});
