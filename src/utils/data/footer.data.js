import {Facebook, LinkedIn, Twitter} from '../icons'
import React from 'react'

export const footerServicesLinks = [
  {
    type: 'anchor',
    link: "#services",
    title: 'Emergency Care'
  },
  {
    type: 'anchor',
    link: "#services",
    title: 'Heart Disease'
  },
  {
    type: 'anchor',
    link: "#services",
    title: 'Dental Care'
  },
  {
    type: 'anchor',
    link: "#services",
    title: 'Prescription'
  },
  {
    type: 'anchor',
    link: "#services",
    title: 'Insights for doctors'
  }
]

export const footerLegalLinks = [
  {
    type: 'link',
    link: '/legal',
    title: 'General Info'
  },
  {
    type: 'link',
    link: '/legal',
    title: 'Privacy Policy'
  },
  {
    type: 'link',
    link: '/legal',
    title: 'Terms of Services'
  },
  {
    type: 'link',
    link: '/legal',
    title: 'Consultations'
  },
  {
    type: 'link',
    link: '/legal',
    title: 'How it Works'
  }
]

export const footerContactLinks = [
  {
    type: 'anchor',
    link: "mailto:support@healthplus.com",
    title: 'support@healthplus.com'
  },
  {
    type: 'anchor',
    link: "mailto:appointment@healthplus.com",
    title: 'appointment@healthplus.com'
  },
  {
    type: 'anchor',
    link: "tel:+022 5454 5252",
    title: '+022 5454 5252'
  },
  {
    type: 'anchor',
    link: "tel:+022 2326 6232",
    title: '+022 2326 6232'
  }
]
const styleIcon = 'w-6 h-6 p-px fill-gray-200 group-hover:fill-primary-500'
export const footerSocialLinks = [
  {
    link: 'https://linkedin.com/in/Alkaison/',
    title: 'LinkedIn',
    icon: <LinkedIn className={styleIcon} />
  },
  {
    link: 'https://facebook.com/',
    title: 'FaceBook',
    icon: <Facebook className={styleIcon} />
  },
  {
    link: 'https://x.com/Alkaison/',
    title: 'Twitter',
    icon: <Twitter className={styleIcon} />
  }
]