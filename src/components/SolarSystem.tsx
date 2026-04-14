import { Sun } from './Sun';
import { Planet } from './Planet';
import { OrbitLine } from './OrbitLine';

const PLANETS_DATA = [
  {
    name: 'Mercurio',
    radius: 0.2,
    color: '#8c8c8c',
    distance: 4,
    orbitSpeed: 0.8,
    rotationSpeed: 0.5,
    info: 'El planeta mas pequeno y cercano al Sol. Su temperatura varia de -180C a 430C. Un dia en Mercurio dura 59 dias terrestres.',
  },
  {
    name: 'Venus',
    radius: 0.35,
    color: '#e6c87a',
    distance: 6,
    orbitSpeed: 0.6,
    rotationSpeed: 0.3,
    info: 'El planeta mas caliente (465C) debido a su efecto invernadero. Rota en direccion opuesta a los demas planetas.',
  },
  {
    name: 'Tierra',
    radius: 0.4,
    color: '#6b93d6',
    distance: 8,
    orbitSpeed: 0.5,
    rotationSpeed: 1,
    info: 'Nuestro hogar! El unico planeta conocido con vida. Tiene un satelite natural: la Luna.',
  },
  {
    name: 'Marte',
    radius: 0.3,
    color: '#c1440e',
    distance: 10,
    orbitSpeed: 0.4,
    rotationSpeed: 0.9,
    info: 'El planeta rojo. Tiene el volcan mas grande del sistema solar: Olympus Mons (21km de altura).',
  },
  {
    name: 'Jupiter',
    radius: 1,
    color: '#d8ca9d',
    distance: 14,
    orbitSpeed: 0.2,
    rotationSpeed: 2,
    info: 'El planeta mas grande. Su Gran Mancha Roja es una tormenta que ha durado mas de 400 anos. Tiene 95 lunas conocidas.',
  },
  {
    name: 'Saturno',
    radius: 0.9,
    color: '#f4d59e',
    distance: 18,
    orbitSpeed: 0.15,
    rotationSpeed: 1.8,
    rings: true,
    info: 'Famoso por sus anillos de hielo y roca. Es tan ligero que flotaria en agua si hubiera un oceano suficientemente grande.',
  },
  {
    name: 'Urano',
    radius: 0.5,
    color: '#c9eeff',
    distance: 22,
    orbitSpeed: 0.1,
    rotationSpeed: 1.5,
    info: 'Rota de lado! Su eje esta inclinado 98 grados. Tiene 27 lunas nombradas como personajes de Shakespeare.',
  },
  {
    name: 'Neptuno',
    radius: 0.5,
    color: '#5b5ddf',
    distance: 26,
    orbitSpeed: 0.08,
    rotationSpeed: 1.3,
    info: 'El planeta mas ventoso. Sus vientos alcanzan 2100 km/h. Fue el primer planeta descubierto mediante calculos matematicos.',
  },
];

export function SolarSystem() {
  return (
    <group>
      <Sun />

      {PLANETS_DATA.map((planet) => (
        <group key={planet.name}>
          <OrbitLine radius={planet.distance} />
          <Planet {...planet} />
        </group>
      ))}
    </group>
  );
}
