import LightLogo from "@/assets/img/light-logo.png";
import DarkLogo from "@/assets/img/dark-logo.webp";
import LightModeSvg from "@/assets/icons/light-mode.svg";
import DarkModeSvg from "@/assets/icons/dark-mode.svg";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid';

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
