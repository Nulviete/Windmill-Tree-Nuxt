// composables/useA11y.ts
export const useA11y = () => {
  const font = useState<number>('a11y-font', () => 100);
  const contrast = useState<boolean>('a11y-contrast', () => false);

  const NORMAL = 100;
  const LARGE = 125;

  const isLarge = computed(() => font.value > NORMAL);
  const labelFont = computed(() => isLarge.value ? 'A−' : 'A+');

  const apply = () => {
    if (process.client) {
      document.documentElement.style.setProperty('--a11y-font', `${font.value}%`);
      document.documentElement.classList.toggle('a11y-contrast', contrast.value);
      localStorage.setItem('a11y', JSON.stringify({ font: font.value, contrast: contrast.value }));
    }
  };

  const toggleFont = () => {
    font.value = isLarge.value ? NORMAL : LARGE;
    apply();
  };

  const toggleContrast = () => { contrast.value = !contrast.value; apply(); };

  onMounted(() => {
    try {
      const raw = localStorage.getItem('a11y');
      if (raw) {
        const s = JSON.parse(raw);
        if (typeof s.font === 'number') font.value = s.font;
        if (typeof s.contrast === 'boolean') contrast.value = s.contrast;
      }
    } catch {}
    apply();
  });

  return { font, contrast, labelFont, toggleFont, toggleContrast };
};
