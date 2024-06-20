// lib/fontawesome.ts
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS

library.add(faWhatsapp);
