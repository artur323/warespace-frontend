import LightLogo from "@/assets/img/light-logo.png";
import DarkLogo from "@/assets/img/dark-logo.webp";
import LightModeSvg from "@/assets/icons/light-mode.svg";
import DarkModeSvg from "@/assets/icons/dark-mode.svg";
import { darkMode } from "@/theme";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid';

const lightTupleSVG = "https://tailwindui.com/img/logos/tuple-logo-gray-900.svg";
const lightReformSVG = "https://tailwindui.com/img/logos/reform-logo-gray-900.svg";
const lightSavvycalSVG = "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg";
const lightLaravelSVG = "https://tailwindui.com/img/logos/laravel-logo-gray-900.svg";
const lightTransistorSVG = "https://tailwindui.com/img/logos/transistor-logo-gray-900.svg";
const lightStatamicSVG = "https://tailwindui.com/img/logos/statamic-logo-gray-900.svg";

const darkTupleSVG = "https://tailwindui.com/img/logos/tuple-logo-white.svg";
const darkReformSVG = "https://tailwindui.com/img/logos/reform-logo-white.svg";
const darkSavvycalSVG = "https://tailwindui.com/img/logos/savvycal-logo-white.svg";
const darkLaravelSVG = "https://tailwindui.com/img/logos/laravel-logo-white.svg";
const darkTransistorSVG = "https://tailwindui.com/img/logos/transistor-logo-white.svg";
const darkStatamicSVG = "https://tailwindui.com/img/logos/statamic-logo-white.svg";

export const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export const features = [
  {
    name: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export const logos = [
  { light: "https://tailwindui.com/img/logos/tuple-logo-gray-900.svg", dark: "https://tailwindui.com/img/logos/tuple-logo-white.svg", alt: "Tuple" },
  { light: "https://tailwindui.com/img/logos/reform-logo-gray-900.svg", dark: "https://tailwindui.com/img/logos/reform-logo-white.svg", alt: "Reform" },
  { light: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg", dark: "https://tailwindui.com/img/logos/savvycal-logo-white.svg", alt: "SavvyCal" },
  { light: "https://tailwindui.com/img/logos/laravel-logo-gray-900.svg", dark: "https://tailwindui.com/img/logos/laravel-logo-white.svg", alt: "Laravel" },
  { light: "https://tailwindui.com/img/logos/transistor-logo-gray-900.svg", dark: "https://tailwindui.com/img/logos/transistor-logo-white.svg", alt: "Transistor" },
  { light: "https://tailwindui.com/img/logos/statamic-logo-gray-900.svg", dark: "https://tailwindui.com/img/logos/statamic-logo-white.svg", alt: "Statamic" },
];

export const lightLogo = LightLogo;
export const darkLogo = DarkLogo;
export const lightModeSvg = LightModeSvg;
export const darkModeSvg = DarkModeSvg;

export const logoRows = [
  { dark: darkTransistorSVG, light : lightTransistorSVG, alt: 'Transistor', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { dark: darkReformSVG, light : lightReformSVG, alt: 'Reform', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { dark: darkTupleSVG, light : lightTupleSVG, alt: 'Tuple', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { dark: darkSavvycalSVG, light : lightSavvycalSVG, alt: 'SavvyCal', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1' },
  { dark: darkStatamicSVG, light : lightStatamicSVG, alt: 'Statamic', width: '158', height: '48', class: 'col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' }
];

export const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
];


