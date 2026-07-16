// Asociaciones personaje-acción (estilo PAO / Magnetic Bridging Figure, ver memory.md
// secc. 11) usando personajes muy conocidos de franquicias mainstream, en vez de un
// palacio espacial. Solo se usan nombres y rasgos ampliamente públicos de cada personaje
// (ej. "Yoda es sabio y habla invertido") para armar una escena mnemónica ORIGINAL — no se
// reproduce diálogo, trama ni arte de ninguna obra.
//
// Técnica de ENCADENADO (link method): la acción de cada personaje no queda aislada — se
// la hace directamente al personaje del SIGUIENTE concepto en el orden de esta lista. Así,
// recordar la escena de un concepto evoca naturalmente al personaje siguiente, que evoca su
// propia escena, y así sucesivamente. Toda la fase 0-8 es UNA sola cadena continua de 96
// eslabones que termina cerrando el círculo: el último concepto (aivat-paper/Sai) le hace
// su acción de vuelta a Yoda, el primero — la historia completa es un loop.
//
// Un franquicia por fase (como antes un palacio por fase), para mantener consistencia:
// Fase 0 = Star Wars · Fase 1 = Game of Thrones · Fase 2 = Dragon Ball ·
// Fase 3 y 6 = House of the Dragon · Fase 4 = Naruto (Fase 8 también, otros personajes) ·
// Fase 5 = Bleach · Fase 7 = Star Wars (otros personajes).

export type CharacterAssoc = {
  conceptId: string;
  franchise: string;
  character: string;
  scene: string;
};

export const characters: CharacterAssoc[] = [
  // Fase 0 — Star Wars
  { conceptId: "vectores", franchise: "Star Wars", character: "Yoda", scene: "Yoda levanta su bastón y con la Fuerza empuja a Obi-Wan Kenobi en una dirección precisa con una magnitud exacta — le aplica un vector de impulso directo." },
  { conceptId: "matrices", franchise: "Star Wars", character: "Obi-Wan Kenobi", scene: "Obi-Wan gira su sable láser y con ese giro TRANSFORMA a Luke Skywalker de granjero a piloto de combate — lo rota, lo escala, lo proyecta hacia una nueva vida." },
  { conceptId: "autovalores", franchise: "Star Wars", character: "Luke Skywalker", scene: "Luke levanta a C-3PO del pantano con la Fuerza sin cambiarle la orientación, solo estirándolo hacia arriba: esa dirección que no cambia, aplicada sobre 3PO, es el autovector." },
  { conceptId: "svd", franchise: "Star Wars", character: "C-3PO", scene: "C-3PO se desarma en tres piezas (rotar, escalar, rotar) y las reensambla directamente sobre Han Solo, vistiéndolo pieza por pieza con la factorización completa." },
  { conceptId: "derivadas", franchise: "Star Wars", character: "Han Solo", scene: "Han Solo acelera el Halcón Milenario y le muestra a Leia el velocímetro en el instante exacto — la derivada es esa tasa de cambio que él le señala a ella." },
  { conceptId: "regla-cadena", franchise: "Star Wars", character: "Leia Organa", scene: "Leia manda su mensaje encadenado (R2 → Obi-Wan → Luke) y la última posta del mensaje termina llegando directo a Darth Vader — la cadena de derivadas se cierra sobre él." },
  { conceptId: "gradiente", franchise: "Star Wars", character: "Darth Vader", scene: "Vader siente con la Fuerza la dirección exacta de mayor perturbación y avanza directo hacia R2-D2 — el gradiente lo guía justo hacia el androide." },
  { conceptId: "jacobiano", franchise: "Star Wars", character: "R2-D2", scene: "R2-D2 proyecta un holograma con varias salidas a la vez (mapas, mensajes, diagnósticos) apuntando directamente al Emperador Palpatine — todas sus derivadas parciales, dirigidas hacia él." },
  { conceptId: "hessiano", franchise: "Star Wars", character: "Emperador Palpatine", scene: "Palpatine no solo siente hacia dónde se mueve el poder, siente cómo se curva — y usa esa curvatura para tenderle una trampa exacta a Chewbacca." },
  { conceptId: "distribuciones", franchise: "Star Wars", character: "Chewbacca", scene: "Chewbacca ruge con distinta probabilidad de reacción, y ese rugido aleatorio es justo lo que alerta a Boba Fett — una distribución de reacciones que Boba tiene que leer." },
  { conceptId: "esperanza-varianza", franchise: "Star Wars", character: "Boba Fett", scene: "Boba Fett calcula el valor esperado de capturar a Qui-Gon Jinn y cuánto puede variar el resultado antes de aceptar el contrato sobre él." },
  { conceptId: "bayes", franchise: "Star Wars", character: "Qui-Gon Jinn", scene: "Qui-Gon actualiza su creencia sobre Anakin con cada nueva evidencia, y le presenta esa creencia posterior ya actualizada directamente a Mace Windu." },
  { conceptId: "mle", franchise: "Star Wars", character: "Mace Windu", scene: "Mace Windu elige, mirando a Anakin, la explicación que mejor explica TODA la evidencia observada sobre él — la máxima verosimilitud aplicada a un solo sospechoso." },
  { conceptId: "descenso-gradiente", franchise: "Star Wars", character: "Anakin Skywalker", scene: "Anakin avanza paso a paso reduciendo su frustración, acercándose cada vez más a Padmé, hasta que un paso de más lo hace caer al lado oscuro (diverger) frente a ella." },
  { conceptId: "convexidad", franchise: "Star Wars", character: "Padmé Amidala", scene: "Padmé negocia en el Senado un acuerdo con forma de 'tazón' (convexo) que termina obligando al General Grievous a aceptar la única mejor solución posible." },
  { conceptId: "lagrange", franchise: "Star Wars", character: "General Grievous", scene: "Grievous pelea con 4 sables pero con la restricción de usar solo 2 brazos por turno — ese mismo principio de optimizar bajo restricción es el que, de otro mundo, termina aplicando Ned Stark al defender su casa con recursos limitados." },

  // Fase 1 — Game of Thrones
  { conceptId: "regresion-lineal", franchise: "Game of Thrones", character: "Ned Stark", scene: "Ned Stark traza una línea recta de honor y se la muestra directamente a Varys — la predicción más simple y directa, sin curvas ni ambigüedad." },
  { conceptId: "regresion-logistica", franchise: "Game of Thrones", character: "Varys", scene: "Varys nunca da una respuesta binaria a Cersei, siempre le susurra una probabilidad entre 0 y 1 — la salida sigmoide de su información." },
  { conceptId: "overfitting", franchise: "Game of Thrones", character: "Cersei Lannister", scene: "Cersei memoriza cada insulto específico recibido en Desembarco del Rey y arma con ellos su lista de venganza — la misma lista que después Arya toma y expande con la suya propia." },
  { conceptId: "reg-l1", franchise: "Game of Thrones", character: "Arya Stark", scene: "Arya tacha nombres de su lista uno por uno hasta dejar solo los esenciales, y le entrega esa lista ya podada — dispersa, con la mayoría en cero — a Sansa." },
  { conceptId: "reg-l2", franchise: "Game of Thrones", character: "Sansa Stark", scene: "Sansa no elimina a nadie de su círculo, pero reduce la influencia de todos un poco, con cautela — y aplica ese mismo encogimiento suave sobre la posición de Tyrion en la corte." },
  { conceptId: "validacion-cruzada", franchise: "Game of Thrones", character: "Tyrion Lannister", scene: "Tyrion prueba su estrategia en distintos consejos rotativos y presenta el resultado ya promediado directamente ante Tywin." },
  { conceptId: "arboles", franchise: "Game of Thrones", character: "Tywin Lannister", scene: "Tywin decide en cada bifurcación familiar quién hereda qué, partiendo el árbol por la pregunta que más separa el poder — y la rama que más lo amenaza termina señalando a Daenerys." },
  { conceptId: "pca", franchise: "Game of Thrones", character: "Daenerys Targaryen", scene: "Daenerys reduce todos sus títulos a la única dirección que más varianza explica sobre quién es, y proyecta esa dirección condensada directamente sobre Jon Snow." },
  { conceptId: "kmeans", franchise: "Game of Thrones", character: "Jon Snow", scene: "Jon agrupa salvajes y hombres de la Guardia de la Noche alrededor de un centroide común (sobrevivir al invierno), y recalcula ese centroide incluyendo ahora a Jaime Lannister." },
  { conceptId: "sesgo-varianza", franchise: "Game of Thrones", character: "Jaime Lannister", scene: "Jaime, reducido a 'el Rey Slayer' (alto sesgo), le cuenta su propia historia completa y cambiante (alta varianza) a Krillin — el mismo dilema, contado de un mundo a otro." },

  // Fase 2 — Dragon Ball
  { conceptId: "perceptron", franchise: "Dragon Ball", character: "Krillin", scene: "Krillin lanza un solo Kienzan en línea recta directo hacia Goku — separa con un golpe lineal, no puede resolver curvas como XOR." },
  { conceptId: "activaciones", franchise: "Dragon Ball", character: "Goku", scene: "Goku pasa de calma a Super Saiyajin frente a Piccolo — sin ese salto no lineal, apilar poder sería solo una suma lineal que Piccolo podría anticipar fácilmente." },
  { conceptId: "backprop", franchise: "Dragon Ball", character: "Piccolo", scene: "Piccolo corrige a Gohan de atrás hacia adelante, técnica por técnica, y ese mismo error corregido en cadena termina siendo la lección que le enseña a Vegeta." },
  { conceptId: "sgd", franchise: "Dragon Ball", character: "Vegeta", scene: "Vegeta entrena contra un solo oponente a la vez, no contra todos juntos — actualiza rápido y ruidoso, y ese ritmo se lo transmite directamente a Trunks." },
  { conceptId: "momentum", franchise: "Dragon Ball", character: "Trunks", scene: "Trunks acumula el impulso de sus viajes en el tiempo anteriores y le entrega ese impulso acumulado a Bulma para acelerar su próximo invento en la misma dirección." },
  { conceptId: "adam", franchise: "Dragon Ball", character: "Bulma", scene: "Bulma combina el impulso de sus inventos anteriores con un ajuste fino automático, y calibra con esa combinación el traje de entrenamiento de Gohan." },
  { conceptId: "init-pesos", franchise: "Dragon Ball", character: "Gohan", scene: "Gohan no empieza entrenando en cero — Piccolo lo inicializa con un mínimo de habilidad para romper la simetría del miedo, y ese entrenamiento inicial es justo lo que enfrenta después a Cell." },
  { conceptId: "batchnorm", franchise: "Dragon Ball", character: "Cell", scene: "Cell se normaliza absorbiendo androides en dosis controladas antes de reescalar su propio poder, y ese poder ya reescalado es el que usa para medirse contra Frieza." },
  { conceptId: "convolucion", franchise: "Dragon Ball", character: "Frieza", scene: "Frieza escanea el poder de pelea con el mismo escáner sin importar en qué parte del planeta esté el objetivo, deslizando ese mismo filtro sobre todo Namek." },
  { conceptId: "pooling", franchise: "Dragon Ball", character: "Namek (planeta)", scene: "Namek resume regiones enteras de energía en un solo valor máximo detectado por el scouter, y ese valor resumido es el que finalmente le reporta a Whis." },
  { conceptId: "rnn", franchise: "Dragon Ball", character: "Whis", scene: "Whis recuerda la secuencia completa de eventos para revertirlos y le narra paso a paso esa secuencia a Beerus, aunque cuanto más lejos en el pasado, más se diluye el detalle." },
  { conceptId: "lstm", franchise: "Dragon Ball", character: "Beerus", scene: "Beerus tiene una memoria selectiva — decide qué destruir y qué preservar entre eones, con compuertas de olvido muy deliberadas — y decide deliberadamente preservar a Majin Buu en vez de olvidarlo." },
  { conceptId: "vanishing-exploding", franchise: "Dragon Ball", character: "Majin Buu", scene: "Buu se multiplica sin control (exploding) o se encoge hasta casi desaparecer (vanishing), y en una de esas transformaciones termina cruzándose con la mirada calculadora de Rhaenyra Targaryen." },

  // Fase 3 — House of the Dragon
  { conceptId: "cnn-extrinseca", franchise: "House of the Dragon", character: "Rhaenyra Targaryen", scene: "Rhaenyra ve el Trono de Hierro desde afuera, como una posición en el espacio de la corte, y le señala esa vista extrínseca del poder directamente a Daemon." },
  { conceptId: "cnn-intrinseca", franchise: "House of the Dragon", character: "Daemon Targaryen", scene: "Daemon entiende el poder caminando literalmente sobre Rocadragón, sintiendo la superficie real del terreno, y le trae ese conocimiento de primera mano a Viserys." },
  { conceptId: "metodos-espectrales", franchise: "House of the Dragon", character: "Viserys Targaryen", scene: "Viserys ve la Canción de Hielo y Fuego como un patrón subyacente que atraviesa toda la familia, y le confía esa visión del patrón completo a Alicent." },
  { conceptId: "laplaciano-grafo", franchise: "House of the Dragon", character: "Alicent Hightower", scene: "Alicent mapea quién está conectado con quién en la corte y le entrega ese mapa de conexiones — su Laplaciano social — directamente a su padre Otto." },
  { conceptId: "atencion-como-conv", franchise: "House of the Dragon", character: "Otto Hightower", scene: "Otto no mira solo a su vecino más cercano en la corte — atiende a TODO el consejo a la vez, pesando cada uno según su influencia real — y esa forma de repartir atención es la que termina inspirando, de otro mundo, a Naruto Uzumaki." },

  // Fase 4 — Naruto
  { conceptId: "self-attention", franchise: "Naruto", character: "Naruto Uzumaki", scene: "Naruto siente el chakra de todos a su alrededor y decide a quién prestarle atención según cuán relevante es cada uno, y usa exactamente esa atención repartida para coordinar a sus propios Kage Bunshin." },
  { conceptId: "multi-head", franchise: "Naruto", character: "Kage Bunshin (clones de sombra)", scene: "Cada clon de sombra atiende una parte distinta del campo de batalla en paralelo, y todos esos resultados en paralelo se concatenan en el reporte final que le entregan a Kakashi." },
  { conceptId: "pos-encoding-sin", franchise: "Naruto", character: "Kakashi Hatake", scene: "Kakashi necesita el ORDEN exacto de los sellos de mano para un jutsu, y ese orden preciso es justo lo que estudia después al analizar el estilo de Itachi." },
  { conceptId: "rope", franchise: "Naruto", character: "Itachi Uchiha", scene: "El Sharingan de Itachi rota para leer la distancia relativa entre movimientos, no la posición absoluta, y esa lectura rotada de distancias se la transmite a Jiraiya durante su entrenamiento." },
  { conceptId: "encoder-decoder", franchise: "Naruto", character: "Jiraiya", scene: "Jiraiya observa el mundo entero y lo traduce paso a paso en las enseñanzas que le da a Naruto, quien a partir de ahí empieza a generar sus propias decisiones." },
  { conceptId: "decoder-only", franchise: "Naruto", character: "Naruto narrando su propia historia", scene: "Naruto genera su próxima acción mirando solo lo que ya dijo o hizo antes, sin traducir de otra fuente, y le anuncia esa decisión ya tomada directamente a Sakura." },
  { conceptId: "encoder-only", franchise: "Naruto", character: "Sakura Haruno", scene: "Sakura lee la situación médica completa de un paciente de una sola vez antes de diagnosticar, y usa esa misma lectura completa para detectar la manipulación de Orochimaru sobre el cuerpo del paciente." },
  { conceptId: "layer-norm", franchise: "Naruto", character: "Orochimaru", scene: "Orochimaru normaliza cada cuerpo que posee según SUS propias proporciones internas, y le impone esa misma normalización forzada al cuerpo de Gaara cuando intenta poseerlo." },
  { conceptId: "pre-post-norm", franchise: "Naruto", character: "Gaara", scene: "Gaara ordena su arena ANTES de que llegue el golpe, en vez de reordenarla después del impacto, y usa ese mismo reflejo anticipado para proteger a Hinata en batalla." },
  { conceptId: "residuales", franchise: "Naruto", character: "Hinata Hyuga", scene: "Hinata mantiene su identidad original intacta mientras le suma nueva confianza aprendida encima, y le muestra ese mismo camino de identidad preservada a Obito, ya tarde para él." },
  { conceptId: "finetuning-variantes", franchise: "Naruto", character: "Obito Uchiha", scene: "Obito se reescribe casi por completo tras Madara (como un SFT completo), y esa reescritura casi total termina proyectándose como advertencia en la mente de Ichigo Kurosaki." },

  // Fase 5 — Bleach
  { conceptId: "mdp", franchise: "Bleach", character: "Ichigo Kurosaki", scene: "Cada batalla de Ichigo es un estado con acciones posibles (atacar, defender, usar Bankai) y una recompensa (salvar el alma), y ese mismo marco de decisión se lo transmite a Rukia antes de cada combate." },
  { conceptId: "funcion-valor", franchise: "Bleach", character: "Rukia Kuchiki", scene: "Rukia evalúa qué tan buena es cada posición en la batalla antes de decidir qué hacer, y le comunica esa evaluación de valor directamente a Renji." },
  { conceptId: "funcion-q", franchise: "Bleach", character: "Renji Abarai", scene: "Renji evalúa cada movimiento específico posible desde su posición — Zabimaru versus retirada — y le muestra esa evaluación acción por acción a su capitán Byakuya." },
  { conceptId: "bellman", franchise: "Bleach", character: "Byakuya Kuchiki", scene: "Byakuya calcula el valor de este golpe en términos del daño inmediato más el valor descontado del combate que sigue, y reporta ese cálculo recursivo directamente a Yamamoto." },
  { conceptId: "prog-dinamica", franchise: "Bleach", character: "Yamamoto (Capitán Comandante)", scene: "Yamamoto conoce las reglas completas de la Sociedad de Almas y resuelve la estrategia entera de antemano, y le impone esa estrategia ya resuelta a Kenpachi Zaraki." },
  { conceptId: "monte-carlo", franchise: "Bleach", character: "Kenpachi Zaraki", scene: "Kenpachi solo aprende al final de la pelea completa cuánto valió la pena, y le cuenta ese resultado final, recién terminado el combate, a Shunsui." },
  { conceptId: "td-learning", franchise: "Bleach", character: "Shunsui Kyoraku", scene: "Shunsui ajusta su valoración de la situación en cada paso, sin esperar a que termine la pelea, y le pasa esa actualización paso a paso a Toshiro Hitsugaya." },
  { conceptId: "q-learning", franchise: "Bleach", character: "Toshiro Hitsugaya", scene: "Toshiro aprende la mejor jugada posible del rival aunque él mismo esté explorando otra táctica distinta, y le enseña esa lección off-policy a Ikkaku." },
  { conceptId: "sarsa", franchise: "Bleach", character: "Ikkaku Madarame", scene: "Ikkaku aprende del movimiento que él MISMO realmente va a hacer a continuación, no del ideal, y le muestra a Orihime exactamente esa jugada real, no la ideal." },
  { conceptId: "policy-gradients", franchise: "Bleach", character: "Orihime Inoue", scene: "Orihime ajusta directamente su forma de invocar, reforzando los gestos que llevaron a curaciones exitosas, y le enseña ese mismo ajuste directo a Ishida y Chad." },
  { conceptId: "actor-critico", franchise: "Bleach", character: "Uryu Ishida y Chad", scene: "Ishida (el actor) dispara la flecha; Chad (el crítico) evalúa qué tan buena fue esa decisión, y ambos le reportan esa evaluación a Urahara." },
  { conceptId: "dqn", franchise: "Bleach", character: "Urahara Kisuke", scene: "Urahara guarda un registro de experimentos pasados en su tienda y entrena nuevas técnicas revisando muestras al azar de ese archivo, compartiendo los resultados con Yoruichi." },
  { conceptId: "ppo", franchise: "Bleach", character: "Yoruichi Shihoin", scene: "Yoruichi nunca deja que su estilo cambie de golpe entre entrenamientos — ajustes limitados y controlados — y le impone ese mismo límite de cambio a Kenpachi antes de dejarlo entrenar solo." },
  { conceptId: "self-play", franchise: "Bleach", character: "Kenpachi Zaraki", scene: "Kenpachi busca rivales cada vez más fuertes, incluyendo versiones pasadas de sí mismo, y ese ciclo de automejora es justo lo que Aizen observa y calcula para superarlo." },
  { conceptId: "puct", franchise: "Bleach", character: "Sosuke Aizen", scene: "Aizen combina una búsqueda profunda de posibilidades con una intuición de qué camino explorar primero y una evaluación sin ver el final, y aplica exactamente esa búsqueda calculada sobre la traición de Gin." },
  { conceptId: "nash", franchise: "Bleach", character: "Gin Ichimaru y Aizen", scene: "Ninguno de los dos puede mejorar traicionando al otro sin que el otro ya lo haya anticipado — ese equilibrio inestable de desconfianza mutua es el mismo que arrastra a Tosen a unirse a ellos." },
  { conceptId: "cfr", franchise: "Bleach", character: "Kaname Tosen", scene: "Tosen recalcula iterativamente cuánto se arrepiente de decisiones pasadas en cada punto de su traición, y le confiesa ese arrepentimiento acumulado a Grimmjow." },
  { conceptId: "exploitability", franchise: "Bleach", character: "Grimmjow Jaggerjack", scene: "Grimmjow mide qué tan fácil sería para el rival perfecto explotar su estilo de pelea imprudente, y es justamente Unohana quien termina explotando esa debilidad medida." },
  { conceptId: "aivat", franchise: "Bleach", character: "Retsu Unohana", scene: "Unohana filtra el ruido aleatorio de cada combate para medir la habilidad REAL de un espadachín con menos peleas necesarias, y aplica ese mismo filtro de ruido al evaluar a Nel." },
  { conceptId: "crn", franchise: "Bleach", character: "Nelliel (Nel)", scene: "Nel compara sus dos versiones (niña y adulta) bajo exactamente las mismas condiciones de combate para que la diferencia sea real, y ese mismo experimento controlado es el que después estudia, de otro mundo, Aemond Targaryen." },

  // Fase 6 — House of the Dragon (continuación del elenco)
  { conceptId: "rg-flow", franchise: "House of the Dragon", character: "Aemond Targaryen", scene: "Aemond observa cómo el poder de Vhagar se transforma capa social tras capa social, y le explica ese flujo de transformación a Criston Cole." },
  { conceptId: "criticidad", franchise: "House of the Dragon", character: "Criston Cole", scene: "Criston se mantiene en un punto de lealtad crítico — ni se desborda de fervor ni colapsa en indiferencia — hasta que un evento lo saca de ese equilibrio frente a Rhaenys." },
  { conceptId: "bayesian-nn", franchise: "House of the Dragon", character: "Rhaenys Targaryen", scene: "Rhaenys sostiene en su cabeza una distribución de posibles herederos, no una sola certeza, y comparte esa distribución de posibilidades con su esposo Corlys." },
  { conceptId: "sparse-models", franchise: "House of the Dragon", character: "Corlys Velaryon", scene: "Corlys reduce su enorme flota a solo las rutas esenciales y dispersas que realmente generan valor, descartando el resto a cero, y esa flota ya podada es la que termina espiando Larys." },
  { conceptId: "compressed-sensing", franchise: "House of the Dragon", character: "Larys Strong", scene: "Larys reconstruye toda la intriga de la corte a partir de muy pocas piezas de información filtradas por debajo de la puerta, y le entrega esa reconstrucción completa a Aegon II." },
  { conceptId: "robust-pca", franchise: "House of the Dragon", character: "Aegon II Targaryen", scene: "Aegon II separa la estructura real del reino de la corrupción puntual de sus consejeros, y esa misma separación entre estructura real y ruido corrupto es la lección que, de otro mundo, aprende Ahsoka Tano." },

  // Fase 7 — Star Wars (otros personajes, distintos de la Fase 0)
  { conceptId: "sft-vs-rlhf", franchise: "Star Wars", character: "Ahsoka Tano", scene: "Ahsoka aprendió primero con entrenamiento supervisado directo de Anakin, y después ajustó su estilo con preferencias propias más sutiles — y es ese estilo ya refinado el que le transmite a Rey." },
  { conceptId: "reward-modeling", franchise: "Star Wars", character: "Rey", scene: "Rey aprende qué acciones aprueba la Fuerza comparando pares de decisiones pasadas, y le enseña a Finn a evaluar sus propias decisiones de la misma forma comparada." },
  { conceptId: "preference-modeling", franchise: "Star Wars", character: "Finn", scene: "Finn no puntúa una acción del 1 al 10, elige entre dos opciones cuál prefiere, y le presenta esa elección binaria simplificada a Poe Dameron." },
  { conceptId: "ml-system-design", franchise: "Star Wars", character: "Poe Dameron", scene: "Poe diseña la misión completa: inteligencia, plan de vuelo, ejecución en tiempo real y debrief posterior, y le delega el tramo de ejecución en tiempo real a Lando Calrissian." },
  { conceptId: "on-off-policy", franchise: "Star Wars", character: "Lando Calrissian", scene: "Lando aprende de la política que sigue Han mientras él mismo juega su propia jugada arriesgada, y esa misma jugada paralela termina cruzándose con la de Kylo Ren." },
  { conceptId: "exploracion-explotacion", franchise: "Star Wars", character: "Kylo Ren", scene: "Kylo explota su poder conocido la mayoría del tiempo, pero explora el lado luminoso ocasionalmente, y esa duda ocasional lo empuja directo hacia el campo de asteroides donde vuela el Halcón Milenario." },
  { conceptId: "quadratic-attention", franchise: "Star Wars", character: "El Halcón Milenario en un campo de asteroides", scene: "Cada asteroide debe compararse contra todos los demás para planear una ruta segura — con el doble de asteroides, el cálculo se cuadruplica — y esa navegación calculada termina llevando a la tripulación hasta Tsunade." },

  // Fase 8 — Naruto (otros personajes, distintos de la Fase 4)
  { conceptId: "alphago", franchise: "Naruto", character: "Tsunade", scene: "Tsunade combina lo aprendido de maestros anteriores con su propio juicio refinado en la práctica, y transmite esa combinación de datos previos y práctica propia a Might Guy." },
  { conceptId: "alphago-zero", franchise: "Naruto", character: "Might Guy", scene: "Guy entrena desde cero, sin copiar el estilo de nadie, solo mejorando contra sí mismo una y otra vez, y ese entrenamiento puro desde cero es el que inspira después a Minato." },
  { conceptId: "alphazero", franchise: "Naruto", character: "Minato Namikaze", scene: "El método de Minato es tan general que domina cualquier arte ninja con el mismo principio de velocidad y precisión, y le enseña ese mismo principio general a Shikamaru." },
  { conceptId: "cfr-original", franchise: "Naruto", character: "Shikamaru Nara", scene: "Shikamaru calcula, jugada por jugada, cuánto se arrepentiría de cada decisión pasada frente a otra estrategia posible, y comparte ese cálculo de arrepentimiento con Neji." },
  { conceptId: "deep-cfr", franchise: "Naruto", character: "Neji Hyuga", scene: "Neji reemplaza el cálculo exhaustivo de cada punto ciego con una estimación aprendida por su Byakugan entrenado, y usa esa estimación rápida para evaluar a Killer Bee." },
  { conceptId: "libratus", franchise: "Naruto", character: "Killer Bee", scene: "Bee es el primero en dominar completamente su Bijuu de forma decisiva, sentando el precedente que después sigue Naruto al liderar la Alianza Shinobi." },
  { conceptId: "pluribus", franchise: "Naruto", character: "Naruto liderando la Alianza Shinobi", scene: "A diferencia de un duelo 1 contra 1, Naruto coordina contra MUCHOS enemigos a la vez, y delega en Sai la tarea de evaluar objetivamente cómo va esa coordinación múltiple." },
  { conceptId: "aivat-paper", franchise: "Naruto", character: "Sai", scene: "Sai filtra sus propias emociones ausentes para evaluar objetivamente el verdadero desempeño de sus compañeros en batalla — y ese mismo filtro objetivo, cerrando el círculo completo de esta cadena, es el que le hace llegar de vuelta a Yoda, el primer personaje de toda esta historia." },
];

export function characterFor(conceptId: string): CharacterAssoc | undefined {
  return characters.find((c) => c.conceptId === conceptId);
}
