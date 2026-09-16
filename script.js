// Add full case studies here as your project documentation becomes available.
const projects = {
  portfolio: { title: 'Portfolio Website', category: 'HTML / CSS / JavaScript', image: 'wireframe.png', description: 'A personal portfolio bringing together my design and development work. The original wireframe establishes the layout: a personal introduction, selected project rows, and direct contact links. This reference translates that structure into a responsive website.' },
  runnerworld: { title: 'Runnerworld', category: 'Wireframing / UI / UX · LMC 3710', image: 'runnerworld.png', description: 'A running tracker app UI/UX concept that reimagines fitness tracking as social and enjoyable rather than routine. Created as a class project for LMC 3710.' },
  coca: { title: 'Coca-Cola', category: 'Visual Design / UI / UX · Passion project', image: 'coca-cola.png', description: 'A passion project exploring a Coca-Cola can design, advertisement, and landing page. The cover features a winter concept with a polar bear and a snowy landscape.' },
  friendly: { title: 'Friendly', category: 'Wireframing / UI / UX · LMC 3710', image: 'friendly.png', description: 'A close-knit social app concept for friends and family. Friendly explores a more personal social experience without the emphasis on fame. Created for LMC 3710.' },
  mtoto: { title: 'Mtoto Africa', category: 'Client website redesign · Work in progress', description: 'An ongoing client project focused on cleaning up and refining an older nonprofit website. The aim is to modernize the experience and create clearer opportunities for people to learn about and support Mtoto Africa. The redesign is still in progress; this is not a completed case study.' }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-description').textContent = project.description;
  const imageContainer = document.querySelector('#dialog-image');
  imageContainer.replaceChildren();
  if (project.image) {
    const image = document.createElement('img');
    image.src = `assets/${project.image}`;
    image.alt = `${project.title} project artwork`;
    imageContainer.append(image);
  }
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => { document.body.style.overflow = ''; });
