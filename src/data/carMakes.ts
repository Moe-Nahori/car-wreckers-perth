interface CarMakeGroup {
  name: string;
  makes: Array<{
    name: string;
    path: string;
    models: Array<{
      name: string;
      path: string;
      years: string;
    }>;
  }>;
}

export const carMakeGroups: CarMakeGroup[] = [
  {
    name: "Popular Japanese",
    makes: [
      {
        name: "Toyota",
        path: "/cars/toyota",
        models: [
          { name: "Corolla", path: "/cars/toyota/corolla", years: "2000-2024" },
          { name: "Camry", path: "/cars/toyota/camry", years: "2000-2024" },
          { name: "HiLux", path: "/cars/toyota/hilux", years: "2000-2024" },
          { name: "RAV4", path: "/cars/toyota/rav4", years: "2000-2024" },
          { name: "Prado", path: "/cars/toyota/prado", years: "2000-2024" },
          { name: "LandCruiser", path: "/cars/toyota/landcruiser", years: "2000-2024" }
        ]
      },
      {
        name: "Mazda",
        path: "/cars/mazda",
        models: [
          { name: "Mazda3", path: "/cars/mazda/mazda3", years: "2004-2024" },
          { name: "CX-5", path: "/cars/mazda/cx-5", years: "2012-2024" },
          { name: "BT-50", path: "/cars/mazda/bt-50", years: "2006-2024" },
          { name: "Mazda2", path: "/cars/mazda/mazda2", years: "2002-2024" },
          { name: "CX-3", path: "/cars/mazda/cx-3", years: "2015-2024" }
        ]
      },
      {
        name: "Nissan",
        path: "/cars/nissan",
        models: [
          { name: "X-Trail", path: "/cars/nissan/x-trail", years: "2001-2024" },
          { name: "Navara", path: "/cars/nissan/navara", years: "1997-2024" },
          { name: "Patrol", path: "/cars/nissan/patrol", years: "1997-2024" },
          { name: "Qashqai", path: "/cars/nissan/qashqai", years: "2007-2024" },
          { name: "Pulsar", path: "/cars/nissan/pulsar", years: "1995-2017" }
        ]
      },
      {
        name: "Mitsubishi",
        path: "/cars/mitsubishi",
        models: [
          { name: "Triton", path: "/cars/mitsubishi/triton", years: "2006-2024" },
          { name: "Pajero", path: "/cars/mitsubishi/pajero", years: "1997-2024" },
          { name: "ASX", path: "/cars/mitsubishi/asx", years: "2010-2024" },
          { name: "Outlander", path: "/cars/mitsubishi/outlander", years: "2003-2024" },
          { name: "Lancer", path: "/cars/mitsubishi/lancer", years: "1996-2019" }
        ]
      }
    ]
  },
  {
    name: "Korean",
    makes: [
      {
        name: "Hyundai",
        path: "/cars/hyundai",
        models: [
          { name: "i30", path: "/cars/hyundai/i30", years: "2007-2024" },
          { name: "Tucson", path: "/cars/hyundai/tucson", years: "2004-2024" },
          { name: "Santa Fe", path: "/cars/hyundai/santa-fe", years: "2000-2024" },
          { name: "Accent", path: "/cars/hyundai/accent", years: "2000-2024" },
          { name: "Elantra", path: "/cars/hyundai/elantra", years: "1990-2024" }
        ]
      },
      {
        name: "Kia",
        path: "/cars/kia",
        models: [
          { name: "Cerato", path: "/cars/kia/cerato", years: "2003-2024" },
          { name: "Sportage", path: "/cars/kia/sportage", years: "2005-2024" },
          { name: "Carnival", path: "/cars/kia/carnival", years: "2006-2024" },
          { name: "Rio", path: "/cars/kia/rio", years: "2000-2024" },
          { name: "Sorento", path: "/cars/kia/sorento", years: "2002-2024" }
        ]
      }
    ]
  },
  {
    name: "Australian",
    makes: [
      {
        name: "Holden",
        path: "/cars/holden",
        models: [
          { name: "Commodore", path: "/cars/holden/commodore", years: "1997-2020" },
          { name: "Cruze", path: "/cars/holden/cruze", years: "2009-2020" },
          { name: "Captiva", path: "/cars/holden/captiva", years: "2006-2018" },
          { name: "Colorado", path: "/cars/holden/colorado", years: "2008-2020" },
          { name: "Astra", path: "/cars/holden/astra", years: "1996-2020" }
        ]
      },
      {
        name: "Ford",
        path: "/cars/ford",
        models: [
          { name: "Ranger", path: "/cars/ford/ranger", years: "2006-2024" },
          { name: "Falcon", path: "/cars/ford/falcon", years: "1997-2016" },
          { name: "Territory", path: "/cars/ford/territory", years: "2004-2016" },
          { name: "Focus", path: "/cars/ford/focus", years: "2002-2024" },
          { name: "Mustang", path: "/cars/ford/mustang", years: "2015-2024" }
        ]
      }
    ]
  },
  {
    name: "European",
    makes: [
      {
        name: "Volkswagen",
        path: "/cars/volkswagen",
        models: [
          { name: "Golf", path: "/cars/volkswagen/golf", years: "1997-2024" },
          { name: "Polo", path: "/cars/volkswagen/polo", years: "2002-2024" },
          { name: "Tiguan", path: "/cars/volkswagen/tiguan", years: "2008-2024" },
          { name: "Passat", path: "/cars/volkswagen/passat", years: "1997-2024" },
          { name: "Amarok", path: "/cars/volkswagen/amarok", years: "2010-2024" }
        ]
      },
      {
        name: "BMW",
        path: "/cars/bmw",
        models: [
          { name: "3 Series", path: "/cars/bmw/3-series", years: "1997-2024" },
          { name: "5 Series", path: "/cars/bmw/5-series", years: "1997-2024" },
          { name: "X3", path: "/cars/bmw/x3", years: "2003-2024" },
          { name: "X5", path: "/cars/bmw/x5", years: "2000-2024" },
          { name: "M3", path: "/cars/bmw/m3", years: "1997-2024" }
        ]
      },
      {
        name: "Mercedes-Benz",
        path: "/cars/mercedes",
        models: [
          { name: "C-Class", path: "/cars/mercedes/c-class", years: "1997-2024" },
          { name: "E-Class", path: "/cars/mercedes/e-class", years: "1997-2024" },
          { name: "A-Class", path: "/cars/mercedes/a-class", years: "1998-2024" },
          { name: "GLC", path: "/cars/mercedes/glc", years: "2015-2024" },
          { name: "GLE", path: "/cars/mercedes/gle", years: "2015-2024" }
        ]
      }
    ]
  },
  {
    name: "Chinese",
    makes: [
      {
        name: "Great Wall",
        path: "/cars/great-wall",
        models: [
          { name: "Cannon", path: "/cars/great-wall/cannon", years: "2020-2024" },
          { name: "Steed", path: "/cars/great-wall/steed", years: "2016-2021" }
        ]
      },
      {
        name: "MG",
        path: "/cars/mg",
        models: [
          { name: "ZS", path: "/cars/mg/zs", years: "2017-2024" },
          { name: "HS", path: "/cars/mg/hs", years: "2020-2024" },
          { name: "3", path: "/cars/mg/3", years: "2016-2024" }
        ]
      },
      {
        name: "Haval",
        path: "/cars/haval",
        models: [
          { name: "H6", path: "/cars/haval/h6", years: "2017-2024" },
          { name: "Jolion", path: "/cars/haval/jolion", years: "2021-2024" }
        ]
      }
    ]
  },
  {
    name: "American & Electric",
    makes: [
      {
        name: "Tesla",
        path: "/cars/tesla",
        models: [
          { name: "Model 3", path: "/cars/tesla/model-3", years: "2019-2024" },
          { name: "Model Y", path: "/cars/tesla/model-y", years: "2021-2024" },
          { name: "Model S", path: "/cars/tesla/model-s", years: "2014-2024" },
          { name: "Model X", path: "/cars/tesla/model-x", years: "2016-2024" }
        ]
      },
      {
        name: "Chevrolet",
        path: "/cars/chevrolet",
        models: [
          { name: "Silverado", path: "/cars/chevrolet/silverado", years: "2020-2024" },
          { name: "Camaro", path: "/cars/chevrolet/camaro", years: "2018-2024" }
        ]
      }
    ]
  }
];