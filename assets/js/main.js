
(function(){
  const mobileBtn = document.getElementById('menuToggle');
  const mobile = document.getElementById('mobileMenu');
  if (mobileBtn && mobile) {
    mobileBtn.addEventListener('click', ()=>{
      mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // theme toggle
  const key = 'labican-theme';
  const toggle = document.getElementById('themeToggle');
  const root = document.body;
  function applyTheme(t){
    root.dataset.theme = t;
    if(t==='light'){
      root.style.setProperty('--bg','#f8fafc');
      root.style.setProperty('--bg-soft','#ffffff');
      root.style.setProperty('--panel','#ffffff');
      root.style.setProperty('--text','#0f172a');
      root.style.setProperty('--muted','#475569');
      root.style.setProperty('--card','#ffffff');
      root.style.setProperty('--border','rgba(15,23,42,.12)');
    } else {
      root.style.removeProperty('--bg'); // let css vars default
      root.style.removeProperty('--bg-soft');
      root.style.removeProperty('--panel');
      root.style.removeProperty('--text');
      root.style.removeProperty('--muted');
      root.style.removeProperty('--card');
      root.style.removeProperty('--border');
    }
  }
  const saved = localStorage.getItem(key) || 'dark';
  applyTheme(saved);
  if (toggle) {
    toggle.addEventListener('click', ()=>{
      const next = (root.dataset.theme==='light') ? 'dark' : 'light';
      localStorage.setItem(key, next);
      applyTheme(next);
    });
  }

  // Init Simple Jekyll Search (if present)
  try {
    if (window.SimpleJekyllSearch) {
      window.SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
        noResultsText: 'Nenhum resultado encontrado',
        limit: 8
      });
    }
  } catch(e){}
})();
