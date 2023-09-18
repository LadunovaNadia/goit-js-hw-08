import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

const saveCurrentTime = throttle(async () => {
try {
   const currentTime = await player.getCurrentTime();
   localStorage.setItem('videoplayer-current-time', currentTime.toString());
} catch (error) {
   console.error('Помилка при збереженні часу відтворення:', error);
}
}, 1000); 

player.on('timeupdate', saveCurrentTime);

window.addEventListener('load', async () => {
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
   try {
      await player.setCurrentTime(parseFloat(savedTime));
   } catch (error) {
      console.error('Помилка при відновленні часу відтворення:', error);
   }
}
});
