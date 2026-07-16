# Plan de estudio: Machine Learning, Transformers y Reinforcement Learning desde 0 (con matemática incluida)

**Objetivo:** entender ML/Transformers/RL desde los fundamentos matemáticos hasta poder leer papers e implementar arquitecturas desde cero, aplicando las técnicas de memoria de `info/other/brain/memory.md` y `info/other/brain/plantilla-palacio-memoria.md`.

**Cómo usar este plan:**
- Cada fase = copiar `plantilla-palacio-memoria.md` una vez por tema grande (no por fase entera — un palacio por tema específico, ej. "backpropagation" y "self-attention" son dos palacios distintos, no uno).
- Los conceptos declarativos (nombres, fórmulas, definiciones) van a un palacio. Los procedimientos (cómo derivar, cómo programar) se aprenden con worked examples + autoexplicación + variación, no con el palacio.
- Repaso espaciado obligatorio en todos los temas (Rule of Five: inmediato / 24h / 1 semana / 1 mes / 3 meses).

---

## Nota sobre los 3 libros que pasaste

Los revisé (tabla de contenidos + estructura, no el texto completo) para ubicarlos bien en el plan:

1. **El PDF de `pageplace.de`** no es *Mathematics for Machine Learning* (Deisenroth/Faisal/Ong) como sugería el link — es una *preview* de **"High-Dimensional Data Analysis with Low-Dimensional Models"** (Wright & Ma, Cambridge 2022): un libro de posgrado sobre modelos dispersos (sparse) y de bajo rango, compressed sensing, PCA robusta. Es matemática real y rigurosa, pero **no es el libro introductorio que el nombre del archivo sugiere** — lo ubico como electivo avanzado (Fase 6), no como base.
2. **El PDF de USC (`GEOMETRIC DEEP LEARNING.pdf`)** tampoco es el survey general de Bronstein et al. ("Grids, Groups, Graphs, Geodesics and Gauges") — son notas de un curso enfocado en **deep learning geométrico para formas 3D** (CNNs extrínsecas/intrínsecas sobre mallas, métodos espectrales). Muy útil como puente conceptual hacia "atención como generalización de convolución sobre un grafo", pero no es un tutorial de Transformers.
3. **"The Principles of Deep Learning Theory"** (Roberts, Yaida & Han) sí es lo que parece — un tratamiento de teoría de campos efectiva aplicada a redes neuronales (RG flow, NTK, criticidad). Es **posgrado puro**, no apto para "desde 0" — lo ubico como capstone teórico al final.

Ninguno de los tres cubre Transformers ni RL directamente, así que para esas fases uso las referencias estándar gratuitas más citadas del campo (abajo, cada una con su fuente real).

---

## Roadmap

| Fase | Tema | Duración estimada | Recurso principal |
|---|---|---|---|
| 0 | Matemática base | 4-6 semanas | 3Blue1Brown + mml-book.github.io |
| 1 | ML clásico | 3-4 semanas | mml-book.github.io (parte II) |
| 2 | Redes neuronales / Deep Learning | 4-6 semanas | Karpathy "Neural Networks: Zero to Hero" + deeplearningbook.org |
| 3 | Deep learning geométrico / GNNs | 2 semanas | tus notas de USC |
| 4 | Transformers | 3-4 semanas | Vaswani et al. 2017 + Illustrated Transformer + nanoGPT |
| 5 | Reinforcement Learning | 4-6 semanas | Sutton & Barto + Spinning Up (OpenAI) |
| 6 | Electivos avanzados (teoría + sparse/low-rank) | opcional, sin límite | Roberts & Yaida + Wright & Ma |
| 7 | Preparación para entrevistas | en paralelo desde la Fase 2, intensivo después de la Fase 5 | ver sección dedicada abajo |

---

## Qué puestos piden esto realmente (investigación de ofertas reales)

Busqué ofertas y guías de entrevista reales (julio 2026) para ver qué exigen en la práctica, no en teoría:

**Roles que combinan Transformers + RL específicamente** — este es el combo que más te conviene apuntar, porque es más nicho que "ML Engineer" genérico y coincide exacto con lo que estás estudiando:
- **RLHF Engineer / Post-Training Engineer / Research Scientist (Post-Training)** — el rol que más pide exactamente esta combinación. Trabajan en SFT, RLHF, DPO, GRPO, RLAIF y "Constitutional AI" para ajustar LLMs después del preentrenamiento. Piden entender el trade-off de cada técnica en calidad de razonamiento, seguridad, latencia, costo y confiabilidad — no alcanza con saber qué es PPO, hay que saber cuándo usar PPO vs. DPO vs. GRPO.
- **Machine Learning Engineer (general, con foco LLM)** — piden despliegue de LLMs (GPT/LLaMA/BERT o arquitecturas basadas en Transformer), tokenización y embeddings, y conocimiento de RL con mención explícita de librerías concretas: **Gymnasium/Gym, RLlib, Stable Baselines**.
- **Reinforcement Learning Engineer / Researcher** (dedicado) — más orientado a robótica, juegos o sistemas de recomendación; acá sí pueden pedir diseñar o adaptar algoritmos de RL, no solo aplicarlos.

**Requisitos técnicos que se repiten en las ofertas:**
- Python (mencionado en más de 2/3 de las ofertas), y al menos un framework: PyTorch, TensorFlow, Keras o JAX.
- Arquitecturas de deep learning: FCN, CNN, RNN, Transformers, GANs.
- Para roles de post-training/investigación: título de Maestría o PhD suele pedirse; para MLE general, Bachelor's + 5+ años de experiencia también califica.

**Fuentes:** Indeed (descripción de puesto MLE 2026), 365 Data Science (análisis de 1000+ ofertas), Glassdoor, ZipRecruiter, Sundeep Teki (guía de post-training LLMs 2026).

---

## Mapa de interconexión de conceptos

La idea de esta sección es que ningún concepto se estudie aislado — cada uno es la razón de ser del siguiente. Es la aplicación directa de "generalización" (variation theory, `memory.md` secc. 1): la misma idea reaparece en contextos distintos, y verla así es lo que la hace transferible en vez de memorística.

**El hilo troncal (de matemática pura a tu proyecto real):**

```
Regla de la cadena (Fase 0)
   └─→ Backpropagation (Fase 2) = la regla de la cadena aplicada capa por capa
          └─→ Descenso de gradiente / SGD / Adam (Fase 0 → Fase 2)
                 └─→ Policy gradients (Fase 5) = el mismo descenso de gradiente,
                      pero sobre una red de política en vez de una de clasificación
                        └─→ PPO (Fase 5) = policy gradient con un freno para no
                             desviarse de golpe de la política anterior
                               └─→ RLHF / fine-tuning de LLMs (Fase 4) = PPO aplicado
                                    a un Transformer preentrenado
                                      └─→ FocusNet + self-play en `pokemon-tcg-ai`
                                           = policy+value net entrenada con la misma
                                             familia de ideas, en tu propio proyecto
```

**Otros hilos que conectan fases no consecutivas:**

| Concepto A | Se conecta con | Por qué |
|---|---|---|
| Autovalores / SVD (Fase 0) | PCA (Fase 1), sparse/low-rank de Wright & Ma (Fase 6) | PCA **es** una descomposición en autovalores; low-rank recovery es la misma matemática con una restricción de dispersión. |
| Regularización L1/L2 (Fase 1) | ℓ1 minimization de Wright & Ma (Fase 6) | Es literalmente la misma penalización — Fase 1 la usa para evitar sobreajuste, Fase 6 la usa para recuperar señales dispersas. |
| Convolución (CNN, Fase 2) | Self-attention (Fase 4), vía Fase 3 | Bronstein et al. (la idea detrás del PDF de USC): la convolución es una operación con simetría de traslación sobre una grilla; la atención es la misma idea generalizada a un grafo completo. Por eso la Fase 3 va *antes* de Transformers. |
| Softmax (regresión logística, Fase 1) | Atención (Fase 4), cabeza de política en RL (Fase 5) | El mismo softmax aparece three veces: para clasificar, para ponderar qué token mirar, y para elegir una acción. |
| Residual connections + layer norm (ResNets, Fase 2) | Transformers (Fase 4), y su análisis formal en Roberts & Yaida (Fase 6, capítulo "Residual Learning") | El mismo truco de estabilización de entrenamiento, reanalizado con más rigor matemático en la Fase 6. |
| MDP / ecuación de Bellman (Fase 5) | Programación dinámica (optimización, Fase 0) | Bellman es, en esencia, un problema de optimización recursivo — mismo tipo de razonamiento que ya viste en Fase 0. |
| Q-learning con aproximación de funciones (Fase 5) | Redes neuronales (Fase 2) | Deep Q-learning = Q-learning tabular + una red neuronal de la Fase 2 haciendo de aproximador. |
| Self-play, PUCT, Nash/CFR, exploitability, AIVAT (todo esto ya en `pokemon-tcg-ai`) | Fase 5 completa + un salto por delante de la Fase 5 | Tu proyecto ya cubre el núcleo de RL y además teoría de juegos multi-agente (CFR/Nash), que ni siquiera está en el temario base de la Fase 5 — es un nivel más. |

---

## Estado de los palacios — qué está listo y qué falta

**No están armados todavía.** Lo que sigue es la asignación de palacio + semilla de imagen para que vos completes las estaciones puntuales — necesito que vos pongas el layout real de cada lugar (dónde entrás, qué hay a la izquierda, etc.), porque yo no conozco el interior de tus lugares reales, y la ciencia (secc. 6 de `memory.md`) es clara en que la imagen que generás vos misma es la que se queda, no la que te doy hecha.

**Asignación sugerida de tus palacios reales (de `memorizacion.md`) por fase** — ajustala si algún lugar no te resulta suficientemente detallado o si conocés mejor otro:

| Fase | Palacio sugerido | Por qué ese | # de conceptos aprox. |
|---|---|---|---|
| 0 — Matemática base | **Unicasa** o **Super lider** (supermercado — muchos pasillos = muchos loci) | Volumen alto de definiciones sueltas (autovalor, rango, norma, Bayes, gradiente...) | ~15-20 |
| 1 — ML clásico | **Liceo Edith Stein** o **Liceo San Antonio** | Un colegio tiene aulas bien diferenciadas — ideal para conceptos medianos en cantidad | ~10 |
| 2 — Deep Learning | **Blu** o **Retro bar** | Un bar suele tener zonas bien distintas (entrada, barra, mesas, baño, terraza) — encaja con activaciones/backprop/CNN/RNN | ~12-15 |
| 3 — Geometric DL / GNNs | **Errefe** o **Kamila** | Puente conceptual corto, pocos conceptos, no necesita un palacio grande | ~5 |
| 4 — Transformers | **La casona** | Nombre sugiere varias habitaciones — encaja con QKV, multi-head, positional encoding, pre/post-norm, variantes de fine-tuning | ~10 |
| 5 — Reinforcement Learning (+ lo que ya hiciste en tu proyecto) | **Apartamento** | Tu espacio más conocido en detalle — para el bloque más grande y más importante (RL clásico + PUCT + Nash/CFR de tu propio proyecto) | ~15+ |
| 6 — Electivos avanzados | **Fyr louis** o **Paladars** | Opcional, pocos conceptos, baja prioridad | ~5 |
| 7 — Vocabulario de entrevistas | **Estación Plaza Venezuela** | Un lugar de tránsito — metáfora útil para "conceptos que tenés que poder sacar rápido" | ~10 |

**Journey chaining del plan completo:** para que quede realmente interconectado como un solo recorrido (no 8 palacios sueltos), encadená la salida de cada palacio con la entrada del siguiente en el orden de la tabla — así recorrer el journey completo de punta a punta es, literalmente, recorrer el roadmap entero.

**Semillas de imagen para los conceptos-bisagra** (los que conectan dos fases — armá tu propia escena final, esto es solo el punto de partida):

| Concepto puente | Semilla de imagen (de arranque, no la versión final) |
|---|---|
| Regla de la cadena → Backprop | Una cadena literal que vas desarmando eslabón por eslabón, y cada eslabón "empuja" al anterior hacia atrás. |
| Convolución → Self-attention | Una linterna que en la Fase 2 solo ilumina un círculo fijo a su alrededor (convolución), y en la Fase 4 se convierte en un reflector que decide, cada vez, a quién apuntar entre todos los presentes (atención). |
| Policy gradient → PPO | Alguien que ajusta el rumbo de un barco, pero con un ancla que no lo deja girar más de X grados por vez (el "clip" de PPO). |
| PPO → RLHF/fine-tuning de Transformers | El mismo barco con ancla, ahora navegando adentro de un Transformer gigante en vez de en mar abierto. |
| MDP/Bellman → Q-learning | Un mapa de tesoro (los estados) donde cada casilla tiene escrito a lápiz "cuánto vale seguir desde acá" — Q-learning es ir corrigiendo ese número a lápiz cada vez que pasás de nuevo. |

**Qué hacer ahora:** andá fase por fase (empezando por la 0), y para cada concepto de la lista de esa fase: elegí una estación real dentro del palacio asignado, y convertí la semilla (si hay) o inventá una imagen propia siguiendo KAVE COGS. Si querés, pedime ayuda concepto por concepto cuando llegues ahí — ahí sí puedo ayudarte a afinar la imagen a algo vívido, una vez que me digas qué hay realmente en esa estación de tu palacio.

---

## Proyecto propio ya en marcha: `pokemon-tcg-ai`

Revisé el repo (`C:\Users\David\projects\pokemon-tcg-ai`) — esto **no es un ejercicio de práctica**, es una entrada activa y competitiva en el **PTCG AI Battle Challenge** (The Pokémon Company × Kaggle), con premio real ($30k a cada Top 8 en la división Strategy) y una posición real en el leaderboard: **rank #145/4027 (top 3.6%)**. Esto cambia el plan: varios checkpoints de abajo ya están superados por este proyecto, con evidencia mejor que un ejercicio de juguete.

**Lo que ya cubre, mapeado a las fases:**
- **Fase 2 (redes neuronales desde cero):** `FocusNet` es un MLP de 2 capas ocultas con cabeza de política y cabeza de valor separadas — implementado a mano en NumPy puro (inicialización Kaiming/He, forward pass manual, sin `nn.Module` de PyTorch). Es literalmente la arquitectura policy+value de AlphaZero, hecha desde cero. Esto **supera** el checkpoint que proponía la Fase 2 (backprop a mano en un MLP de 2 capas) — ya está hecho, en un contexto de producción real.
- **Fase 5 (RL):** self-play (framework "DRSF"), búsqueda PUCT (el algoritmo de AlphaZero/AlphaGo), y — más allá de lo que cubre el plan base — **teoría de juegos aplicada de verdad**: equilibrio de Nash (portafolios de estrategias mixtas), Best Response vía min-max + **CFR (Counterfactual Regret Minimization** — la familia de algoritmos detrás de Libratus/Pluribus en poker), cálculo de exploitability, y **AIVAT** (una técnica de reducción de varianza de la literatura de IA para juegos). Esto es más avanzado que el contenido estándar de Sutton & Barto — es multi-agent RL / teoría de juegos computacional a nivel de investigación aplicada.
- **Rigor experimental real** (altamente valorado en entrevistas de Applied Scientist): CRN (common random numbers) para A/B pareados, regla de "confirmar en N=1000" antes de confiar en cualquier resultado de N chico, chequeo de intervalos de confianza disjuntos antes de decidir un ship — literalmente la disciplina que preguntan en las rondas de "ML fundamentals" de la Fase 7.
- **Behavioral Cloning** desde datos reales (93,445 episodios ingestados del ladder de Kaggle) comparado empíricamente contra la política heurística — ida y vuelta entre imitation learning y RL.

**Lo que NO cubre (hueco real, seguí necesitando la Fase 4 tal cual):** `FocusNet` es un MLP, no usa atención ni arquitectura Transformer en ningún lado del pipeline. El checkpoint de Transformers (self-attention + nanoGPT) sigue siendo necesario aparte — este proyecto no lo reemplaza.

**Para la Fase 7 (entrevistas):** este proyecto es tu mejor respuesta lista para "contame de un proyecto de RL/ML que hayas hecho" — tiene stakes reales (dinero de premio, leaderboard público), decisiones de ingeniería documentadas (`CLAUDE.md`, `docs/WRITEUP.md` de 886 líneas) y already tiene un hallazgo negativo honesto documentado (DRSF de RL puro cerrado por "scale-insufficient at CPU" — saber contar un experimento que no funcionó y por qué es exactamente lo que buscan los entrevistadores de research).

---

## Fase 0 — Matemática base (4-6 semanas)

**Temas:** álgebra lineal (vectores, matrices, autovalores/autovectores, SVD, espacios vectoriales), cálculo (derivadas, regla de la cadena, gradiente, jacobiano, hessiano), probabilidad y estadística (distribuciones, esperanza, varianza, Bayes, máxima verosimilitud), optimización (descenso de gradiente, convexidad, multiplicadores de Lagrange).

**Recursos:**
- 3Blue1Brown, series "Essence of Linear Algebra" y "Essence of Calculus" (YouTube) — para la intuición visual/geométrica antes de la notación.
- *Mathematics for Machine Learning* (Deisenroth, Faisal, Ong) — el libro gratuito real, en mml-book.github.io. Cubre exactamente los 4 bloques de arriba con la ML como hilo conductor.

**Worked examples clave a dominar** (no solo mirar, resolver a mano): derivar el gradiente de una función cuadrática; SVD de una matriz 3x3 a mano; regla de la cadena multivariable; demostrar que la varianza de una suma de variables independientes es la suma de varianzas.

**Palacio de memoria sugerido:** uno para "definiciones de álgebra lineal" (autovalor, rango, norma, ortogonalidad...) y otro para "identidades de probabilidad" (Bayes, ley de la probabilidad total, linealidad de la esperanza). Los procedimientos (derivar, resolver un sistema) NO van al palacio — se aprenden con worked examples + fading.

**Checkpoint:** derivar a mano el gradiente de la pérdida de mínimos cuadrados y programarlo en NumPy sin librerías de autodiff.

---

## Fase 1 — Machine Learning clásico (3-4 semanas)

**Temas:** regresión lineal/logística, overfitting/underfitting, regularización (L1/L2), validación cruzada, árboles de decisión, PCA, clustering (k-means), sesgo-varianza.

**Recursos:** mml-book.github.io (parte II, donde conectan la matemática de la Fase 0 con estos modelos) + cualquier curso práctico con scikit-learn para implementar en paralelo.

**Aplicando la ciencia del aprendizaje (de `memory.md` secc. 1):** esta fase es puro terreno de *worked examples con fading* y *variación* (contraste: mismo problema con L1 vs. L2; generalización: la misma idea de sesgo-varianza en regresión y en árboles). El palacio de memoria sirve para las fórmulas de regularización y las definiciones (sesgo, varianza, sobreajuste), no para "entender por qué" — eso es autoexplicación.

**Checkpoint:** implementar regresión logística con descenso de gradiente desde cero (sin sklearn), y explicar en voz alta por qué L2 reduce varianza a costa de sesgo.

---

## Fase 2 — Redes neuronales y Deep Learning (4-6 semanas)

**Temas:** perceptrón, funciones de activación (sigmoid, tanh, ReLU, GELU), backpropagation, descenso de gradiente estocástico y sus variantes (momentum, Adam), inicialización de pesos, batch normalization, CNNs (convolución, pooling), RNNs/LSTMs, el problema del gradiente que se desvanece/explota.

**Recursos:**
- Andrej Karpathy, serie **"Neural Networks: Zero to Hero"** (YouTube) — construye backprop, un MLP y un mini-GPT desde cero, literalmente el enfoque de "worked example completo" aplicado a código.
- *Deep Learning* (Goodfellow, Bengio, Courville) — gratis en deeplearningbook.org, como referencia de texto para profundizar cualquier tema de la serie de Karpathy.
- CS231n (Stanford) para la parte de CNNs específicamente.

**Palacio de memoria sugerido:** uno para "funciones de activación y sus derivadas" (fórmula + forma + dónde se usa cada una), otro para "arquitecturas" (qué diferencia a un CNN de un RNN de un MLP — como conceptos, no como código).

**Codificación dual (secc. 2 de `memory.md`):** para backprop específicamente, no memorices la fórmula sola — necesitás la representación visual del grafo computacional AL MISMO TIEMPO que la fórmula (regla de la cadena). Si tenés a mano una herramienta que anime esto en vivo (tipo CNN Explainer), mejor que un diagrama estático.

**Checkpoint:** implementar backpropagation a mano en un MLP de 2 capas (sin PyTorch/TensorFlow), y luego reimplementarlo con un framework para comparar.

---

## Fase 3 — Deep Learning geométrico y GNNs (2 semanas, puente conceptual)

**Por qué esta fase antes de Transformers:** la idea unificadora (de Bronstein et al., aunque no sea el PDF que tenés) es que CNNs, RNNs, GNNs y Transformers son todos casos particulares de "aplicar una operación con ciertas simetrías/invarianzas sobre una estructura de datos" — una convolución es una operación local sobre una grilla; la atención de un Transformer es, conceptualmente, una convolución generalizada sobre un **grafo completo** (todos los tokens conectados con todos). Entender esto antes de Transformers hace que la atención se sienta menos "mágica".

**Temas (de tus notas de USC):** redes convolucionales extrínsecas vs. intrínsecas sobre formas 3D, métodos espectrales sobre grafos/variedades (autovalores del Laplaciano), CNNs geodésicas.

**Uso:** no hace falta dominar la parte de gráficos 3D en profundidad — el objetivo es quedarte con la idea de "convolución generalizada a estructuras no-euclidianas" antes de entrar a atención. Si el tiempo aprieta, esta fase se puede comprimir a una sola sesión de lectura conceptual sin implementar nada.

---

## Fase 4 — Transformers (3-4 semanas)

**Temas:** self-attention (query/key/value), atención multi-cabeza, positional encoding, arquitectura encoder-decoder original, variantes decoder-only (estilo GPT) y encoder-only (estilo BERT), layer norm, conexiones residuales en el contexto de Transformers.

**Recursos (ninguno de tus 3 PDFs cubre esto, así que van las referencias estándar):**
- Vaswani et al., **"Attention Is All You Need"** (2017, arXiv:1706.03762) — el paper original. Leerlo recién después de tener la intuición de abajo, no antes.
- Jay Alammar, **"The Illustrated Transformer"** (jalammar.github.io) — la explicación visual estándar de la industria, ideal para dual coding (diagrama + texto juntos, como pide Mayer en `memory.md` secc. 2).
- Andrej Karpathy, continuación de "Zero to Hero": construir GPT desde cero (nanoGPT) — el worked example completo, línea por línea.

**Mnemotecnia concreta para self-attention** (aplicando `memory.md` secc. 7 — "concept textualization"): convertí Query/Key/Value en una escena: alguien (Query) pregunta algo, revisa un fichero de etiquetas (Keys) para ver qué tan relevante es cada uno, y se lleva el contenido (Value) ponderado por esa relevancia. Ancla esa escena a un locus, pero la fórmula matemática (softmax(QK^T/√d)V) se aprende con worked example + autoexplicación, no memorizando el palacio.

**Checkpoint:** implementar self-attention desde cero en NumPy/PyTorch puro (sin `nn.MultiheadAttention`), y entrenar un Transformer chico (nanoGPT) sobre un dataset de texto pequeño.

---

## Fase 5 — Reinforcement Learning (4-6 semanas)

**Temas:** procesos de decisión de Markov (MDP), función de valor y función de valor-acción (Q), ecuación de Bellman, programación dinámica, métodos de Monte Carlo, diferencias temporales (TD), Q-learning, SARSA, gradientes de política (policy gradients), actor-crítico, Deep Q-Networks (DQN), PPO.

**Recursos:**
- Sutton & Barto, **"Reinforcement Learning: An Introduction"** (2ª edición) — el libro de texto canónico del campo, gratis en el sitio del propio Richard Sutton (incompleteideas.net).
- **"Spinning Up in Deep RL"** (OpenAI) — gratis, con implementaciones de referencia en código de los algoritmos modernos (DQN, PPO, etc.), pensado justo para pasar de la teoría del libro a código real.

**Aplicando la ciencia del aprendizaje:** RL tiene mucha más carga de "entender el mecanismo" que de memorizar hechos sueltos — priorizá worked examples resolviendo la ecuación de Bellman a mano en un MDP de juguete (una grilla de 4x4) antes de tocar código de deep RL. El palacio de memoria acá rinde poco; sirve solo para el vocabulario (política, retorno descontado, exploración vs. explotación, on-policy vs. off-policy).

**Checkpoint:** implementar Q-learning tabular en un entorno de grilla simple desde cero (esto sí conviene hacerlo igual, es rápido y asienta la base) — el checkpoint de self-play/deep RL más ambicioso **ya está cubierto por `pokemon-tcg-ai`** (ver sección dedicada arriba), no hace falta un DQN de juguete en Gymnasium aparte salvo que quieras la repetición extra.

---

## Fase 6 — Electivos avanzados (sin límite de tiempo, para después de las fases 0-5)

Estos dos libros son de investigación/posgrado — no son para "aprender ML", son para entender POR QUÉ funciona a un nivel más profundo, una vez que ya sabés usarlo.

- **"The Principles of Deep Learning Theory"** (Roberts, Yaida & Han): trata las redes neuronales como sistemas físicos y usa herramientas de teoría de campos efectiva (flujo de grupo de renormalización, kernel tangente neuronal/NTK) para explicar matemáticamente qué pasa durante el entrenamiento — por qué ciertas inicializaciones evitan gradientes que explotan/desaparecen, cómo emerge el aprendizaje de representaciones en redes de ancho finito. Requiere probabilidad y álgebra lineal sólidas (Fase 0) y haber entrenado redes de verdad (Fase 2) para que tenga sentido intuitivo.
- **"High-Dimensional Data Analysis with Low-Dimensional Models"** (Wright & Ma): modelos dispersos y de bajo rango — compressed sensing, recuperación de matrices de bajo rango, PCA robusta. Conecta con representation learning, autoencoders y por qué la "estructura de baja dimensión" en los datos es la razón de que el deep learning generalice tan bien en la práctica. Requiere sólida base de álgebra lineal y optimización convexa.

**No son electivos aleatorios** — ambos iluminan preguntas que probablemente te vas a hacer después de la Fase 2-4 ("¿por qué esta inicialización funciona mejor?", "¿por qué los embeddings terminan viviendo en un subespacio de baja dimensión?"). Volvé a ellos cuando la pregunta te surja naturalmente, no antes.

---

## Fase 7 — Preparación para entrevistas

**Cuándo hacerla:** no es una fase aislada al final — la parte de coding empieza en paralelo desde la Fase 2 (igual que en tu plan de 2022, donde ya tenías un track paralelo de LeetCode). La parte de ML system design y las preguntas específicas de Transformers/RL recién tienen sentido después de las Fases 4-5. Los simulacros de entrevista completos van al final, cuando ya tengas los checkpoints de todas las fases superados.

### Estructura típica del proceso (loop) en 2026

Confirmado en guías de Google, Meta e IGotAnOffer: la mayoría de las empresas usan 4 rondas —
1. **Coding** (algoritmos/estructuras de datos, no específico de ML).
2. **ML fundamentals / dominio** — en 2026 el foco cambió de trivia ("¿qué es el descenso de gradiente?") a intuición matemática aplicada y debugging de producción bajo fallas.
3. **ML system design** — diseñar un pipeline end-to-end (ingesta de datos, entrenamiento, inferencia online, monitoreo, reentrenamiento). Desde 2026, muchas empresas agregan un componente de diseño de sistemas basado en LLMs, retrieval y agentes.
4. **Behavioral.**

Algunas empresas (Meta, desde 2025) agregaron una ronda de **"AI-assisted coding"** — resolver un problema usando un asistente de IA como Copilot/Claude, evaluando cómo lo usás, no si podés prescindir de él.

### Checklist de preguntas de Transformers (para practicar explicando en voz alta, no memorizando)

- [ ] Por qué un Transformer reemplaza recurrencia/convolución por self-attention, y qué gana en paralelización y dependencias de largo alcance.
- [ ] Mecánica de self-attention: Query/Key/Value, por qué se escala por √d.
- [ ] Estructura del encoder: multi-head attention + feed-forward, con layer norm y conexiones residuales en cada sub-capa.
- [ ] Pre-norm vs. post-norm y por qué pre-norm es casi obligatorio en redes muy profundas.
- [ ] Positional encoding: seno/coseno original vs. RoPE, y por qué RoPE rinde mejor en contextos largos.
- [ ] Limitación conocida: complejidad cuadrática de la atención con la longitud de secuencia.
- [ ] Opciones de fine-tuning y cuándo usar cada una: SFT, LoRA, QLoRA, fine-tuning completo, RLHF.

### Checklist de preguntas de RL (para roles de MLE/Applied Scientist — no esperan que diseñes un algoritmo nuevo, sí que entiendas los que existen)

- [ ] Diferencia entre Q-learning y métodos de Monte Carlo.
- [ ] Trade-off exploración vs. explotación, y al menos dos estrategias para manejarlo.
- [ ] On-policy vs. off-policy, con un ejemplo de cada uno.
- [ ] Policy gradients, actor-crítico, y qué problema resuelve PPO respecto a policy gradient "vanilla".
- [ ] Poder contar un proyecto propio donde aplicaste RL — **ya lo tenés: `pokemon-tcg-ai`** (self-play, PUCT, Nash/CFR, con posición real en leaderboard). Preparar 2-3 minutos de explicación clara: qué probaste, qué falló (el experimento de RL puro cerrado por límite de cómputo) y qué decisión tomaste con esa evidencia — eso es lo que se evalúa, no la anécdota en sí.

### Checklist específico de post-training/RLHF (el combo más pedido para roles que unen Transformers + RL)

- [ ] Diferencia práctica entre SFT, RLHF, DPO, GRPO y RLAIF — no solo qué son, sino cuándo elegir cada una según calidad de razonamiento, seguridad, latencia, costo y confiabilidad.
- [ ] Qué es el reward modeling y el preference modeling.
- [ ] Noción básica de por qué esto importa para la fase de inferencia (vLLM, TensorRT-LLM, cuantización son términos que van a aparecer aunque no sean el foco de la entrevista).

### Aplicando las técnicas de memoria a la prep de entrevistas

- El vocabulario de "qué es cada técnica" (SFT/RLHF/DPO/GRPO, on-policy/off-policy, pre-norm/post-norm) es terreno de palacio de memoria + Magnetic List — armá uno dedicado a "post-training techniques" con una Magnetic Bridging Figure que vaya recorriendo cada sigla.
- Las respuestas de ML system design NO van al palacio — se practican como worked examples: mirá 2-3 diseños resueltos de las guías (Exponent, IGotAnOffer), después resolvé el mismo tipo de problema vos con las mismas restricciones, después uno nuevo (variación).
- Recall Rehearsal de 5 direcciones aplica bien a simulacros: practicá explicando el mismo concepto (ej. self-attention) en distinto orden y con distinto nivel de detalle, no siempre el mismo guion memorizado — así no se te cae si te preguntan por una parte específica en vez de la explicación completa.

### Checkpoint de esta fase

Hacer al menos una entrevista simulada completa (coding + ML fundamentals + system design + behavioral) con alguien o con un servicio de mock interview, después de completar la Fase 5, y registrar qué preguntas te trabaron para volver a esa sección del plan.

---

## Certificaciones online (julio 2026) — cuál hacer y cuándo

Orden recomendado (confirmado por varias guías 2026): primero fundamentos propios (Fases 0-2), después certificaciones de plataforma/nube alineadas al stack que uses, después especializaciones avanzadas. Hacer una certificación de nube antes de tener los fundamentos sólidos es la forma más común de sacarla "de memoria" y olvidarla en 3 meses.

| Certificación | Cuándo hacerla | Qué certifica |
|---|---|---|
| DeepLearning.AI — **Deep Learning Specialization** (Andrew Ng, Coursera) | Al cerrar la Fase 2 | CNNs, RNNs/LSTMs y (en su curso 5 actualizado) Transformers — arquitectura, NER, question answering. |
| DeepLearning.AI — **PyTorch for Deep Learning Professional Certificate** | Al cerrar la Fase 4 | Construir Transformers desde los componentes base (multi-head attention, etc.) y una introducción a modelos generativos (diffusion). |
| DeepLearning.AI — curso de **reinforcement fine-tuning / reward functions para LLMs** | Al cerrar la Fase 5, antes de entrevistar para roles de post-training | Es lo más cercano a un certificado específico de RLHF/post-training — encaja directo con el rol más pedido que identificamos (RLHF Engineer). |
| **Reinforcement Learning Specialization** (University of Alberta, Coursera — 4 cursos: fundamentos, sample-based methods, predicción/control con aproximación de funciones, capstone) | En paralelo con la Fase 5 | El certificado de RL más reconocido y específico que existe hoy — dictado por el mismo grupo académico de Sutton (autor del libro base de la Fase 5). Dedicación: 2-3h/semana, 4-6 meses. |
| **Google Cloud Professional Machine Learning Engineer** | Después de la Fase 7 (ya con proyectos propios) | Ciclo de vida completo de ML en producción — preparación de datos, entrenamiento, despliegue, monitoreo. Actualizado en 2026 para incluir contenido de IA generativa. |
| **AWS Certified AI/ML** (ruta renovada por completo a inicios de 2026) | Alternativa a Google Cloud, según qué nube use tu empleador objetivo | Equivalente de AWS — empezar por el nivel de entrada, que hoy es su certificación "insignia". |
| **TensorFlow Developer Certificate** (DeepLearning.AI) o certificaciones de **IBM** | Opcional, si tu stack usa TensorFlow o si una oferta puntual lo pide | Aparecen listadas explícitamente en muchas ofertas de MLE — no imprescindibles si ya hacés los checkpoints con PyTorch, pero suman en el filtro automático de RRHH. |

**Nota honesta:** ninguna de estas certificaciones reemplaza los checkpoints de código de cada fase — en las entrevistas reales (sección anterior) te van a pedir que expliques y programés, no que muestres un certificado. Tratalas como señal para el filtro de RRHH y como estructura de estudio, no como el objetivo en sí.

---

## Los puestos mejor pagados en 2026 (para saber hacia dónde apuntar)

| Rol | Compensación total 2026 (EE.UU., orden de magnitud) | Qué tenés que dominar de este plan |
|---|---|---|
| **AI Research Scientist** (labs de frontera: OpenAI, Anthropic, DeepMind) | Base $275K-$315K; total con equity a menudo >$700K, hasta $1.5M+ en roles senior | Todo el plan, incluyendo Fase 6 (teoría) — estos roles sí esperan que entiendas el "por qué" a nivel de investigación, no solo aplicarlo. |
| **Machine Learning Engineer** (big tech) | Mediana de compensación total >$260K; en empresas grandes, $300K-$500K | Fases 0-5 completas + Fase 7 (el loop de entrevista estándar que ya cubrimos). |
| **RLHF / Post-Training Engineer o Research Scientist** | Sueldos de investigación/ingeniería senior, dentro del rango de AI Research Scientist o MLE de big tech según seniority | Exactamente la combinación Fase 4 (Transformers) + Fase 5 (RL) + el checklist de post-training de la Fase 7 — es el rol más alineado 1:1 con lo que estás estudiando. |
| **AI Engineer** (rol más general, aplicado) | Mediana nacional ~$160K-$173K; en labs de frontera, hasta $795K+ | Fases 0-4 sólidas; menos énfasis en RL profundo que los roles anteriores. |
| **MLOps Engineer** | Base ~$130K | Fase 2 + fuerte foco en despliegue/infraestructura — un desvío posible si te interesa más la ingeniería que la investigación. |
| **Computer Vision Engineer** | Promedio ~$169K | Fase 2 (CNNs) + especialización específica en visión, fuera del foco central de este plan. |
| **NLP Engineer** | Promedio ~$115K (rango $90K-$132K) | Fases 2 y 4 — más bajo que los roles centrados en LLMs/RLHF porque "NLP" como categoría incluye muchos puestos no relacionados con LLMs de frontera. |

**Lectura del mercado (2026):** hay una bifurcación marcada — ingenieros de ML en empresas "normales" ganan $170K-$245K de compensación total, mientras que un grupo chico en labs de frontera (OpenAI, Anthropic, DeepMind) gana $600K-$1M+ por títulos de puesto similares. La diferencia no es el título, es la profundidad real en las Fases 4-6 de este plan y poder demostrarlo en la Fase 7.

---

## Repaso espaciado — calendario global

No repases cada tema por separado sin conexión: los temas de fases tempranas (álgebra lineal, cálculo) son prerequisito activo de todo lo que sigue, así que se auto-repasan al usarse. Aun así, mantené el calendario explícito para lo puramente declarativo (fórmulas, nombres, definiciones) de cada palacio:

| Repaso | Cuándo |
|---|---|
| Inmediato | al terminar la sesión de estudio del tema |
| +24 horas | |
| +1 semana | |
| +1 mes | |
| +3 meses | |

Regla de la sección 1 de `memory.md`: el efecto de retrieval practice en contenido matemático tarda 3-5 meses en manifestarse — no juzgues si "funcionó" antes de ese plazo.

## Regla para usarme (IA) como tutor en este plan

- Pedime que genere worked examples adicionales o variaciones (contraste/generalización) de un problema que no te cierre.
- Pedime que actúe como tutor socrático — pero avisame explícitamente cuándo estás confundido/a, no asumas que lo voy a detectar solo.
- No me pidas la implementación completa de un checkpoint y la copies — resolvé vos primero, usame para revisar o para destrabar un paso puntual. Copiar la respuesta es *cognitive offloading*, no aprendizaje (ver `memory.md` secc. 6, BeLEARN).

## Registro de avance

| Fase | Fecha inicio | Fecha fin | Checkpoint superado | Notas |
|---|---|---|---|---|
| 0 — Matemática base | | | | |
| 1 — ML clásico | | | | |
| 2 — Deep Learning | | | | |
| 3 — Geometric DL/GNNs | | | | |
| 4 — Transformers | | | | |
| 5 — Reinforcement Learning | | | | |
| 6 — Electivos avanzados | | | | |
| 7 — Preparación para entrevistas | | | | |
