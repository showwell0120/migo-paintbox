import { Channel } from './channel';

describe('Channel', () => {
  it('should work', () => {
    const channel = new Channel({ id: '123' });
    expect(channel).toHaveProperty('id', '123');
  });
});
