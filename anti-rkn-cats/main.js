const RUSSIAN_CAT_FACTS = [
  {
    text: "Коты могут слышать ультразвук. Наши котофредоны слышат даже шаги цензоров за километр!",
    source: "Лаборатория цифровой свободы"
  },
  {
    text: "Кошка Мистер Бигглсворт стала первым кибер-котом в 2007 году. Сегодня его потомки взламывают DPI!",
    source: "Кошачий архив хакерства"
  },
  {
    text: "Коты проводят 70% жизни во сне. Но наши котофредоны работают 24/7 в защите свободы!",
    source: "Отдел котостатистики"
  },
  {
    text: "У котов 32 мышцы в каждом ухе. Наши слушают шёпот свободы даже сквозь firewall!",
    source: "Биологическая лаборатория"
  },
  {
    text: "Кот Шрёдингера мог быть одновременно жив и мёртв. Наши зеркала могут быть одновременно доступны и заблокированы!",
    source: "Квантовая кошачья физика"
  },
  {
    text: "Коты могут видеть в 8 раз лучше человека в темноте. В темноте цензуры наш зрение ещё острее!",
    source: "Ночной отдел разведки"
  },
  {
    text: "Кошка по имени Табби стала первым животным-криминалистом. Наши коты стали первыми животными-хактивистами!",
    source: "Исторический архив"
  },
  {
    text: "Коты мьют в диапазоне 25-150 Герц. Наши частоты зашифрованы от РКН!",
    source: "Акустическая криптография"
  },
  {
    text: "Коты имеют уникальные отпечатки носа, как люди - отпечатки пальцев. У каждого нашего отзеркаливания - уникальный цифровой след!",
    source: "Биометрический отдел"
  },
  {
    text: "Кот может прыгать в 6 раз выше своего роста. Наши прыгают через любую блокировку в 666 раз выше!",
    source: "Отдел спортивных достижений"
  },
  {
    text: "Кошка по имени Фелислла стала первой кошкой в космосе. Наши котофредоны покоряют цифровые высоты!",
    source: "Космическая программа котов"
  },
  {
    text: "Коты спят 15-20 часов в день, но сохраняют бдительность. Наши системы мониторинга активны 24/7!",
    source: "Служба безопасности котов"
  }
];

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

class AntiRknCats {
  constructor() {
    this.konamiProgress = 0;
    this.secretMode = false;
    this.init();
  }

  init() {
    this.setupLoading();
    this.setupCounters();
    this.setupHeroCat();
    this.setupKonamiCode();
    this.setupMatrix();
    this.loadRandomFact();
    this.setupAccessibility();
  }

  setupLoading() {
    const loading = document.getElementById('loading');
    const app = document.getElementById('app');
    
    setTimeout(() => {
      loading.classList.add('hidden');
      app.classList.remove('hidden');
      
      if ('performance' in window) {
        const loadTime = performance.now();
        console.log(`Страница загружена за ${loadTime.toFixed(2)}ms`);
      }
    }, 1000);
  }

  setupCounters() {
    const startDate = new Date('2022-03-04');
    const daysCounter = document.getElementById('daysCounter');
    
    const updateDays = () => {
      const now = new Date();
      const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
      this.animateCounter(daysCounter, diff);
    };
    
    const catsCounter = document.getElementById('catsCounter');
    const baseCats = 1337;
    
    const updateCats = () => {
      const variation = Math.floor(Math.random() * 100) - 50;
      this.animateCounter(catsCounter, baseCats + variation);
    };
    
    updateDays();
    updateCats();
    
    setInterval(updateDays, 60000);
    setInterval(updateCats, 5000);
  }

  animateCounter(element, targetValue) {
    const currentValue = parseInt(element.textContent) || 0;
    const increment = (targetValue - currentValue) / 20;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const newValue = Math.floor(currentValue + (increment * step));
      element.textContent = newValue.toLocaleString();
      
      if (step >= 20) {
        element.textContent = targetValue.toLocaleString();
        clearInterval(timer);
      }
    }, 30);
  }

  setupHeroCat() {
    const heroCat = document.getElementById('heroCat');
    
    heroCat.addEventListener('click', (e) => {
      e.preventDefault();
      heroCat.classList.add('evading');
      
      setTimeout(() => {
        heroCat.classList.remove('evading');
      }, 500);
      
      const messages = [
        'Хватай VPN-капюшон!',
        'Клонирую зеркала...',
        'Рою туннель...',
        'Активирую ниндзя-режим...',
        'Шифрую связь...'
      ];
      
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      heroCat.querySelector('span:last-child').textContent = randomMessage;
      
      setTimeout(() => {
        heroCat.querySelector('span:last-child').textContent = 'Хватай VPN-капюшон!';
      }, 3000);
    });
  }

  setupKonamiCode() {
    document.addEventListener('keydown', (e) => {
      if (e.key === KONAMI_CODE[this.konamiProgress]) {
        this.konamiProgress++;
        
        if (this.konamiProgress === KONAMI_CODE.length) {
          this.activateSecretMode();
          this.konamiProgress = 0;
        }
      } else {
        this.konamiProgress = 0;
      }
    });
  }

  activateSecretMode() {
    if (this.secretMode) return;
    
    this.secretMode = true;
    document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
    
    const secretAgents = [
      { name: 'Агент Пушистик', alias: 'THE_WHISKER', specialty: 'Ключевые обмены' },
      { name: 'Агент Мурзик', alias: 'SHADOW_PAW', specialty: 'Шифрование' },
      { name: 'Агент Котофей', alias: 'MIRROR_MASTER', specialty: 'Репликация' },
      { name: 'Агент Барсик', alias: 'TUNNEL_DIGGER', specialty: 'VPN туннели' }
    ];
    
    const agentInfo = secretAgents
      .map(agent => `🕵️ ${agent.name} | ${agent.alias} | ${agent.specialty}`)
      .join('\n');
    
    console.log(`
🐱🐱🐱 СЕКРЕТНЫЙ ОТРЯД КОТОАГЕНТОВ РАСКРЫТ 🐱🐱🐱

${agentInfo}

⚠️ ЭТА ИНФОРМАЦИЯ САМОУНИЧТОЖИТСЯ ЧЕРЕЗ 30 СЕКУНД...`);
    
    setTimeout(() => {
      document.body.style.filter = '';
      this.secretMode = false;
      console.clear();
    }, 30000);
  }

  setupMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "КОТЬІРКНVPNMIRRORPROXYTUNNELFREEDOM".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = new Array(Math.floor(columns)).fill(1);
    
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff88';
      ctx.font = `${fontSize}px Fira Code`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const matrixInterval = setInterval(drawMatrix, 35);
    
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  loadRandomFact() {
    const factElement = document.getElementById('factText');
    if (!factElement) return;
    
    const randomFact = RUSSIAN_CAT_FACTS[Math.floor(Math.random() * RUSSIAN_CAT_FACTS.length)];
    
    factElement.textContent = randomFact.text;
    
    const sourceElement = document.querySelector('.fact-source');
    if (sourceElement) {
      sourceElement.textContent = `— ${randomFact.source}`;
    }
    
    const reloadFact = () => {
      const newFact = RUSSIAN_CAT_FACTS[Math.floor(Math.random() * RUSSIAN_CAT_FACTS.length)];
      factElement.style.opacity = '0';
      
      setTimeout(() => {
        factElement.textContent = newFact.text;
        if (sourceElement) {
          sourceElement.textContent = `— ${newFact.source}`;
        }
        factElement.style.opacity = '1';
      }, 300);
    };
    
    setInterval(reloadFact, 15000);
  }

  setupAccessibility() {
    const copyButtons = document.querySelectorAll('.cta-button');
    copyButtons.forEach(button => {
      if (button.textContent.includes('Скопировать')) {
        button.addEventListener('click', async () => {
          const codeBlock = button.previousElementSibling;
          if (codeBlock && codeBlock.classList.contains('deploy-code')) {
            try {
              await navigator.clipboard.writeText(codeBlock.textContent);
              const originalText = button.textContent;
              button.textContent = 'Скопировано!';
              button.style.background = 'var(--color-success)';
              
              setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'var(--color-accent)';
              }, 2000);
            } catch (err) {
              console.error('Не удалось скопировать:', err);
            }
          }
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AntiRknCats();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('SW зарегистрирован:', registration);
    })
    .catch(error => {
      console.log('SW регистрация не удалась:', error);
    });
}