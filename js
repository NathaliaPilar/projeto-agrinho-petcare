/script>

  // 1. Mensagem de boas-vindas ao carregar

  window.addEventListener('load', function () {

    setTimeout(function () {

      alert('🐾 Bem-vindo(a) ao PET CARE! Aqui você aprende a cuidar do seu pet com carinho 💖');

    }, 800); // aparece após 0.8s

  });

  // 2. Botão de voltar ao topo

  const backToTopBtn = document.createElement('button');

  backToTopBtn.textContent = '🔝 Voltar ao topo';

  backToTopBtn.style.position = 'fixed';

  backToTopBtn.style.bottom = '20px';

  backToTopBtn.style.right = '20px';

  backToTopBtn.style.padding = '10px 20px';

  backToTopBtn.style.fontSize = '16px';

  backToTopBtn.style.border = 'none';

  backToTopBtn.style.borderRadius = '25px';

  backToTopBtn.style.backgroundColor = '#d8436e';

  backToTopBtn.style.color = 'white';

  backToTopBtn.style.cursor = 'pointer';

  backToTopBtn.style.display = 'none';

  backToTopBtn.style.zIndex = '999';

  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function () {

    if (window.scrollY > 300) {

      backToTopBtn.style.display = 'block';

    } else {

      backToTopBtn.style.display = 'none';

    }

  });

  backToTopBtn.addEventListener('click', function () {

    window.scrollTo({ top: 0, behavior: 'smooth' });

  });

  // 3. Validação simples do formulário

  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {

    const nome = document.getElementById('nome').value.trim();

    const email = document.getElementById('email').value.trim();

    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {

      e.preventDefault();

      alert('Por favor, preencha todos os campos do formulário 💌');

    } else {

      alert('✅ Obrigado pelo seu contato! Retornaremos em breve 🐶🐱');

    }

  });

  // 4. Scroll suave nos links do menu

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function (e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {

        target.scrollIntoView({ behavior: 'smooth' });

      }

    });

  });

/script>
