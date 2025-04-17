const {
  setupModalDom,
  openModal,
  waitForAnimationFrame,
  getModalState
} = require('../testSetup/modalHelpers');

describe('Modal Open Tests', () => {
  beforeEach(() => {
    setupModalDom();
  });

  test('モーダルが正しく開く', async () => {
    openModal('modal_demo');
    await waitForAnimationFrame();

    const modalState = getModalState('modal_demo');
    expect(modalState.active).toBe('true');
    expect(modalState.open).toBe('open');
  });
});
