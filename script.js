const toggleContrast = document.getElementById('toggleContrast');
const form = document.getElementById('newsletterForm');
const formMessage = document.getElementById('formMessage');

if (toggleContrast) {
  toggleContrast.addEventListener('click', () => {
    const isHighContrast = document.body.classList.toggle('contrast');
    toggleContrast.setAttribute('aria-pressed', String(isHighContrast));
    toggleContrast.textContent = isHighContrast
      ? 'Desativar alto contraste'
      : 'Ativar alto contraste';
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Obrigado! Sua solicitação foi registrada com sucesso.';
    form.reset();
  });
}
