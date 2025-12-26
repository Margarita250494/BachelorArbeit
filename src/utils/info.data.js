import {HeartPulse, MedicalTruck, Tooth} from './icons'

export const infoData = [
  {
    title: 'Emergency Care',
    description: 'Our Emergency Care service is designed to be your reliable support\n' +
      '            in critical situations. Whether it\'s a sudden illness, injury, or\n' +
      '            any medical concern that requires immediate attention, our team of\n' +
      '            dedicated healthcare professionals is available 24/7 to provide\n' +
      '            prompt and efficient care.',
    icon: <MedicalTruck
      className="info-fa-icon-big"
    />
  },
  {
    title: 'Heart Disease',
    description: "Our team of experienced cardiologists and medical experts use " +
      "state-of-the-art technology to assess your cardiovascular health and design " +
      "personalized treatment plans. From comprehensive screenings to advanced " +
      "interventions, we are committed to helping you maintain a healthy heart " +
      "and lead a fulfilling life.",
    icon: <HeartPulse
      className="info-fa-icon"

    />
  },
  {
    title: 'Dental Care',
    description: "Smile with confidence as our Dental Care services cater to all " +
      "your oral health needs. Our skilled dentists provide a wide range of " +
      "treatments, from routine check-ups and cleanings to cosmetic procedures " +
      "and restorative treatments.",
    icon: <Tooth
      className="info-fa-icon"

    />
  }
]