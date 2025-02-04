interface LocalContentProps {
  suburb: string
}

const getSuburbKey = (suburb: string) => suburb.toLowerCase().replace(' ', '-')

const suburbContent: Record<string, { intro: string; details: string }> = {
  'bibra-lake': {
    intro: `Bibra Lake is a thriving industrial and residential suburb in Perth's southern region, strategically located near major transport routes and the Kwinana Freeway. The area is home to numerous businesses and a beautiful natural lake that gives the suburb its name.`,
    details: `Our car wrecking service has been a trusted name in Bibra Lake for many years, offering top dollar for vehicles to both local residents and businesses. With our location providing easy access to Stock Road and North Lake Road, we can provide rapid response times and efficient car removal services throughout Bibra Lake and its neighboring suburbs. We pride ourselves on our strong relationships with local automotive businesses and our commitment to environmentally responsible vehicle recycling.`
  },
  'morley': {
    intro: `Morley is a major commercial hub in Perth's northeastern suburbs, known for its bustling shopping precincts, diverse community, and excellent transport links.`,
    details: `Our car wrecking service has been operating in Morley for over a decade, providing top cash for cars to local residents and businesses. Located just minutes away, we offer quick response times and same-day pickup services throughout Morley and its surrounding areas including Embleton, Bedford, and Dianella.`
  },
  'perth-metro': {
    intro: `We provide comprehensive car wrecking services throughout the entire Perth Metropolitan area, from the northern suburbs to the southern corridor.`,
    details: `Our centrally located facility and mobile service allows us to offer prompt car removal services across all Perth metro regions, ensuring you get the best value for your vehicle no matter where you are in Perth.`
  },
  'bellevue': {
    intro: `Located in the heart of Perth's eastern suburbs, Bellevue is a growing industrial and residential area.`,
    details: `Our Bellevue car wrecking service has been operating for over 15 years, providing top cash for cars to local residents and businesses.`
  },
  'midland': {
    intro: `Midland is a major commercial and residential hub in Perth's eastern region.`,
    details: `We've been serving the Midland community for many years, offering competitive prices for all types of vehicles.`
  },
  'malaga': {
    intro: `Malaga is one of Perth's key industrial and business areas in the northern suburbs.`,
    details: `Our car removal service covers all of Malaga and surrounding areas, providing quick and efficient vehicle collection.`
  },
  'welshpool': {
    intro: `Welshpool is a major industrial suburb located in the City of Canning.`,
    details: `We offer same-day car removal services throughout Welshpool, with instant cash payments for all vehicle types.`
  },
  'osborne-park': {
    intro: `Osborne Park is one of Perth's largest industrial areas, known for its diverse business community.`,
    details: `Our experienced team provides professional car wrecking services to businesses and residents in Osborne Park.`
  },
  'cannington': {
    intro: `Cannington is a bustling suburban center in Perth's southeastern metropolitan area.`,
    details: `We service all of Cannington with our professional car removal and wrecking services, offering top dollar for your vehicles.`
  },
  'joondalup': {
    intro: `Joondalup is a major urban centre in Perth's northern suburbs.`,
    details: `Our car wrecking service extends throughout Joondalup, providing convenient and reliable vehicle collection.`
  },
  'fremantle': {
    intro: `Fremantle is a historic port city known for its maritime heritage and vibrant community.`,
    details: `We offer comprehensive car wrecking services to Fremantle residents, with competitive prices and professional service.`
  },
  'rockingham': {
    intro: `Rockingham is a coastal city located in Perth's southern metropolitan area.`,
    details: `Our car removal service covers all of Rockingham, offering quick collection and top cash for all vehicle types.`
  },
  'armadale': {
    intro: `Armadale is a growing residential and commercial hub in Perth's southeastern region.`,
    details: `We provide reliable car wrecking services throughout Armadale, with instant quotes and same-day pickup available.`
  }
}

export const LocalContent = ({ suburb }: LocalContentProps) => {
  const key = getSuburbKey(suburb)
  const content = suburbContent[key] || {
    intro: `${suburb} is an important part of Perth's metropolitan area.`,
    details: `We provide comprehensive car wrecking services throughout ${suburb}, offering top cash payments and same-day collection.`
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Car Wreckers {suburb}
        </h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            {content.intro}
          </p>
          <p className="text-lg leading-relaxed">
            {content.details}
          </p>
          <p className="text-lg leading-relaxed">
            As your trusted car wreckers in {suburb}, we pride ourselves on offering:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Instant cash payments up to $9,999</li>
            <li>Free car removal service</li>
            <li>Same-day pickup available</li>
            <li>All vehicle types accepted</li>
            <li>Professional and licensed service</li>
            <li>Environmentally responsible recycling</li>
          </ul>
          <p className="text-lg leading-relaxed">
            Contact us today for an instant quote and experience our premium car wrecking service in {suburb}.
          </p>
        </div>
      </div>
    </section>
  )
}