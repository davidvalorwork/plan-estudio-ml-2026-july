# Plan de estudio: Machine Learning, Transformers y Reinforcement Learning (julio 2026)

Plan personal para aprender ML/Transformers/RL desde 0, con matemática incluida, preparación para entrevistas de trabajo, y las técnicas de memoria (palacio de la memoria + ciencia del aprendizaje) aplicadas a cada fase. Incluye una app de seguimiento (Next.js) con los palacios, las fases del plan, progreso guardado, gamificación y quizzes con repetición espaciada.

## Archivos de contenido

- **[`plan-estudio-ml-transformers-rl.md`](./plan-estudio-ml-transformers-rl.md)** — el plan completo: 7 fases + preparación de entrevistas, certificaciones online, sueldos 2026 por rol, mapa de interconexión de conceptos, y asignación de palacios de memoria por fase.
- **[`memory.md`](./memory.md)** — la investigación de base sobre técnicas de memoria: method of loci, ciencia cognitiva del aprendizaje, técnicas de competidores de memoria, y *The Victorious Mind* (Anthony Metivier).
- **[`plantilla-palacio-memoria.md`](./plantilla-palacio-memoria.md)** — plantilla reutilizable para armar un palacio de memoria por tema.

## La app (Next.js)

Dashboard de progreso + palacios de memoria + quizzes con repetición espaciada y gamificación. Corre 100% local — el progreso se guarda en un archivo SQLite local (`data/progress.db`, gitignorado), no hay backend externo.

**Nota sobre los palacios de GTA San Andreas / Counter-Strike:** la app referencia las zonas de estos juegos por **nombre** (Grove Street, Idlewood, Dust2 Mid, Mirage A site, etc.) porque el usuario ya las conoce de memoria — no incluye ni descarga capturas, texturas o renders oficiales de los mapas (son assets con copyright de Rockstar/Valve). Si la app muestra algo visual del palacio, es un esquema propio simple (cajas/círculos con el nombre de la zona), no arte del juego.

### Correr en local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Estructura de la app

```
src/
├── app/            # rutas (dashboard, fase/[id], palacio/[id], quiz)
├── lib/
│   ├── content/    # datos de fases, conceptos y asignación de palacios (TS/JSON)
│   └── db/         # acceso a SQLite (progreso, repetición espaciada, XP)
└── components/     # UI compartida (tarjetas de concepto, esquema de palacio, quiz)
```

## Estado

- Plan y mapa de interconexión: completos.
- Palacios de memoria: asignados por fase (incluye la opción de usar GTA San Andreas / mapas de CS como fuente de loci, ya que el usuario los conoce de memoria) — las estaciones puntuales dentro de cada uno se completan en la app.
- App de seguimiento: en construcción en este mismo repo.
- Proyecto propio de referencia (RL aplicado, fuera de este repo): `../pokemon-tcg-ai` — PTCG AI Battle Challenge (Kaggle), rank #145/4027 al momento de escribir esto.

## Registro de avance

Ver la tabla "Registro de avance" al final de `plan-estudio-ml-transformers-rl.md`, o el dashboard de la app una vez corriendo.
