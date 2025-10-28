const emojiId = ['emoji-easy', 'emoji-fast', 'emoji-quality'];

emojiId.forEach(id => {
  const img = document.getElementById(id);
  img.addEventListener('mouseover', () => {
    img.src = `/images/gif/${id}.gif`;
  });

  img.addEventListener('mouseout', () => {
    img.src = `/images/smile/${id}.png`;
  });
});