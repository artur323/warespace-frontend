import LightLogo from "@/assets/img/light-logo.png";
import DarkLogo from "@/assets/img/dark-logo.webp";
import LightModeSvg from "@/assets/icons/light-mode.svg";
import DarkModeSvg from "@/assets/icons/dark-mode.svg";
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid';
import { defineComponent, h } from 'vue'

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
  { dark: darkTransistorSVG, light: lightTransistorSVG, alt: 'Transistor', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { dark: darkReformSVG, light: lightReformSVG, alt: 'Reform', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { dark: darkTupleSVG, light: lightTupleSVG, alt: 'Tuple', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { dark: darkSavvycalSVG, light: lightSavvycalSVG, alt: 'SavvyCal', width: '158', height: '48', class: 'col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1' },
  { dark: darkStatamicSVG, light: lightStatamicSVG, alt: 'Statamic', width: '158', height: '48', class: 'col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1' }
];

export const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
];

export const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export const cards = [
  {
    name: 'Sales',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
];

export const people = [
  {
    name: 'Sebastian Richter',
    role: 'Head of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Sebastian Richter Geschäftsführer der Warespace GmbH & Co. KG',
  },
  {
    name: 'Jonas Tritschallek',
    role: 'Head of Sales',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Jonas Tritschallek Geschäftsführer der Warespace GmbH & Co. KG',
  },
  {
    name: 'Bernd Schäflein',
    role: 'Beirat',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Bernd Schäflein Chief Operating Officers (COO) im Vorstand der Schäflein AG.',
  },
  {
    name: 'Uwe Fieselmann',
    role: 'Beirat',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Uwe Fieselmann Vorsitzender der Geschäftsführung von Heinrich Koch Internationale Spedition GmbH & Co. KG.',
  },
  {
    name: 'Marc-André Fritz',
    role: 'Beirat',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Marc-André Fritz Geschäftsführer der Fritz Logistik GmbH aus Heilbronn.',
  },
  {
    name: 'Bernard Motzko',
    role: 'Beirat',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Bernard Motzko Chief Operating Officers (COO) im Vorstand der Zumtobel Group AG.',
  },
];

export const footerNavigation = {
  solutions: {
    title: 'Solutions',
    items: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ]
  },
  support: {
    title: 'Support',
    items: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ]
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ]
  },
  legal: {
    title: 'Legal',
    items: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ]
  },
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'X',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
              }),
            ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
  ]
};