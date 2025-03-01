import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
    semantic: {
        primary: {
            50: '#FAF8EB',
            100: '#F5F2E0',
            200: '#E3DDB0',
            300: '#EBE5C2',
            400: '#D0C89E',
            500: '#B9B28A',
            600: '#8F8769',
            700: '#504B38',
            800: '#3A3628',
            900: '#27231A',
            950: '#18150F'
        }
    }
});

export { MyPreset };