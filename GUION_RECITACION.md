# Guion de recitación — Plan ML / Transformers / RL

Guion para grabarte en voz alta explicando cada concepto, en el mismo orden de la cadena de personajes (fase 0 → fase 8). Técnica: por cada concepto, primero intentá recitar de memoria la lección y el ejemplo usando solo el título y la escena del personaje como pista (recuerdo activo / active recall); recién después leé el texto completo para corregirte. Grabarte y escucharte luego es una forma de repetición espaciada adicional.

## Fase 0 — Matemática base

_Síntesis de la fase:_ En la práctica, estos conceptos se combinan así: representás los datos como vectores/matrices, definís una función de pérdida (a menudo derivada de MLE bajo una distribución de probabilidad), calculás su gradiente (derivadas + regla de la cadena), y usás descenso de gradiente para minimizarla — chequeando con el Hessiano/convexidad si ese mínimo es confiable. Todo esto es el motor detrás de cualquier modelo de ML que viene después.

### 1/96. Vectores y espacios vectoriales

**Pista (Star Wars — Yoda):** Yoda levanta su bastón y con la Fuerza empuja a Obi-Wan Kenobi en una dirección precisa con una magnitud exacta — le aplica un vector de impulso directo.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un vector es una lista ordenada de números que representa una magnitud con dirección (o, en ML, un punto de datos con varias features). Un espacio vectorial es el conjunto de todos los vectores posibles de ese tamaño, junto con dos operaciones que se pueden hacer sin salirse del conjunto: sumar dos vectores y multiplicar un vector por un escalar.
- Ejemplo: v=(3,4) tiene norma ‖v‖=√(3²+4²)=5. Sumar (3,4)+(1,2)=(4,6). Escalar 2·(3,4)=(6,8).
- Relación con lo demás: Base de todo lo que sigue: una fila de una matriz, un dato de entrenamiento y un embedding de Transformer son todos, matemáticamente, vectores.
- Pregunta de autoevaluación: ¿Qué es un espacio vectorial?

### 2/96. Matrices y operaciones

**Pista (Star Wars — Obi-Wan Kenobi):** Obi-Wan gira su sable láser y con ese giro TRANSFORMA a Luke Skywalker de granjero a piloto de combate — lo rota, lo escala, lo proyecta hacia una nueva vida.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una matriz es una tabla de números, pero lo importante en ML es verla como una función: multiplicar un vector por una matriz transforma ese vector (lo rota, lo escala, lo proyecta). Una capa de una red neuronal, sin la activación, es literalmente una multiplicación de matrices.
- Ejemplo: La matriz de rotación 90° [[0,-1],[1,0]] aplicada al vector (1,0) da (0,1) — rotó el vector 90° en sentido antihorario.
- Relación con lo demás: Una capa de red neuronal es una multiplicación de matrices (Fase 2); una tabla completa de datos es una matriz sobre la que se calculan autovalores, SVD o PCA.
- Pregunta de autoevaluación: ¿Qué representa una matriz como transformación?

### 3/96. Autovalores / autovectores

**Pista (Star Wars — Luke Skywalker):** Luke levanta a C-3PO del pantano con la Fuerza sin cambiarle la orientación, solo estirándolo hacia arriba: esa dirección que no cambia, aplicada sobre 3PO, es el autovector.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un autovector de una matriz es un vector que, al ser transformado por esa matriz, no cambia de dirección — solo se estira o encoge. Ese factor de estiramiento es el autovalor asociado. Encontrar los autovectores de una matriz es encontrar las 'direcciones naturales' de la transformación que representa.
- Ejemplo: Para A=[[2,0],[0,3]], los autovectores son (1,0) y (0,1), con autovalores 2 y 3 — A estira el eje x por 2 y el eje y por 3, sin rotar ninguno de los dos.
- Relación con lo demás: Su cálculo es el corazón de PCA (Fase 1) y de los métodos espectrales sobre grafos (Fase 3, vía el Laplaciano).
- Pregunta de autoevaluación: ¿Qué es un autovector de una matriz?

### 4/96. SVD (descomposición en valores singulares)

**Pista (Star Wars — C-3PO):** C-3PO se desarma en tres piezas (rotar, escalar, rotar) y las reensambla directamente sobre Han Solo, vistiéndolo pieza por pieza con la factorización completa.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: La SVD factoriza cualquier matriz (incluso no cuadrada) en tres matrices: una rotación, un escalado por ejes, y otra rotación (M = U·Σ·Vᵀ). Es la base matemática de PCA, de la compresión de datos y de los sistemas de recomendación (factorización de matrices).
- Ejemplo: Para una matriz que solo estira el eje x por 3 y deja el eje y igual, Σ = diag(3,1) — los valores singulares son directamente los factores de escala.
- Relación con lo demás: Generaliza los autovalores a matrices no cuadradas; es la matemática detrás de PCA (Fase 1) y de los modelos de bajo rango (Fase 6).
- Pregunta de autoevaluación: ¿Qué factoriza la SVD?

### 5/96. Derivadas

**Pista (Star Wars — Han Solo):** Han Solo acelera el Halcón Milenario y le muestra a Leia el velocímetro en el instante exacto — la derivada es esa tasa de cambio que él le señala a ella.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: La derivada de una función en un punto mide qué tan rápido cambia el valor de la función cuando cambiás un poquito la entrada — es la pendiente de la recta tangente. En ML, la derivada de la función de pérdida respecto a un parámetro te dice hacia dónde y cuánto mover ese parámetro para reducir el error.
- Ejemplo: Si f(x)=x², f'(x)=2x. En x=3, la pendiente es 6: la función crece ~6 unidades por cada unidad que aumenta x, localmente.
- Relación con lo demás: Es el bloque atómico de la regla de la cadena, que a su vez es el bloque atómico de backpropagation (Fase 2).
- Pregunta de autoevaluación: ¿Qué mide una derivada?

### 6/96. Regla de la cadena

**Pista (Star Wars — Leia Organa):** Leia manda su mensaje encadenado (R2 → Obi-Wan → Luke) y la última posta del mensaje termina llegando directo a Darth Vader — la cadena de derivadas se cierra sobre él.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Si una función es la composición de otras dos (primero aplicás f, después g), la derivada del total es el producto de las derivadas de cada parte: (g∘f)'(x) = g'(f(x))·f'(x). Backpropagation no es más que aplicar esta regla capa por capa en una red neuronal.
- Ejemplo: Si y=(3x+1)², con u=3x+1 y y=u²: dy/dx = dy/du · du/dx = 2u · 3 = 6(3x+1).
- Relación con lo demás: Aplicada capa por capa es literalmente backpropagation (Fase 2); aplicada dentro de self-attention es cómo se entrena un Transformer (Fase 4).
- Pregunta de autoevaluación: ¿Cómo se deriva una composición de funciones?

### 7/96. Gradiente

**Pista (Star Wars — Darth Vader):** Vader siente con la Fuerza la dirección exacta de mayor perturbación y avanza directo hacia R2-D2 — el gradiente lo guía justo hacia el androide.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El gradiente de una función con varias variables es el vector formado por todas sus derivadas parciales. Apunta en la dirección donde la función crece más rápido — por eso, para minimizar una pérdida, te movés en la dirección contraria al gradiente.
- Ejemplo: Para f(x,y)=x²+y², ∇f=(2x,2y). En el punto (1,1), el gradiente es (2,2) — esa es la dirección de crecimiento más rápido desde ahí.
- Relación con lo demás: Es lo que calcula backprop (Fase 2) y lo que siguen el descenso de gradiente, SGD, Adam, y hasta policy gradients en RL (Fase 5).
- Pregunta de autoevaluación: ¿Qué dirección indica el gradiente?

### 8/96. Jacobiano

**Pista (Star Wars — R2-D2):** R2-D2 proyecta un holograma con varias salidas a la vez (mapas, mensajes, diagnósticos) apuntando directamente al Emperador Palpatine — todas sus derivadas parciales, dirigidas hacia él.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Cuando una función toma varias entradas y devuelve varias salidas (no un solo número), el Jacobiano es la matriz que contiene todas las derivadas parciales de cada salida respecto a cada entrada. Es la generalización del gradiente a funciones vectoriales.
- Ejemplo: Para f(x,y)=(x+y, x·y), el Jacobiano es [[1,1],[y,x]] — la primera fila son las derivadas de x+y, la segunda las de x·y.
- Relación con lo demás: Aparece en el análisis de estabilidad de RNNs (Fase 2) y en la teoría de criticidad de inicialización de redes (Fase 6).
- Pregunta de autoevaluación: ¿Qué es la matriz Jacobiana?

### 9/96. Hessiano

**Pista (Star Wars — Emperador Palpatine):** Palpatine no solo siente hacia dónde se mueve el poder, siente cómo se curva — y usa esa curvatura para tenderle una trampa exacta a Chewbacca.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El Hessiano es la matriz de segundas derivadas de una función — te dice cómo cambia la curvatura, no solo la pendiente. Se usa para saber si un punto crítico es un mínimo, un máximo o un punto de silla, y en métodos de optimización de segundo orden.
- Ejemplo: Para f(x,y)=x²+y², el Hessiano es [[2,0],[0,2]] — ambos autovalores positivos, lo que confirma que (0,0) es un mínimo (no un punto de silla).
- Relación con lo demás: Se conecta con por qué algunas inicializaciones de red son 'críticas' (Fase 6) — analizan la curvatura de la pérdida cerca del inicio del entrenamiento.
- Pregunta de autoevaluación: ¿Para qué se usa la matriz Hessiana?

### 10/96. Distribuciones de probabilidad

**Pista (Star Wars — Chewbacca):** Chewbacca ruge con distinta probabilidad de reacción, y ese rugido aleatorio es justo lo que alerta a Boba Fett — una distribución de reacciones que Boba tiene que leer.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una distribución de probabilidad describe qué tan probable es cada valor posible de una variable aleatoria. En ML aparecen constantemente: la Normal/Gaussiana (para ruido y pesos), la Bernoulli/Binomial (para clasificación binaria) y la Categórica (para clasificación multiclase, vía softmax).
- Ejemplo: Lanzar una moneda es Bernoulli(p=0.5). Elegir una clase entre 10 con softmax produce una distribución Categórica sobre esas 10 opciones.
- Relación con lo demás: La Categórica es la que produce softmax, usada en clasificación (Fase 1), en atención (Fase 4) y en políticas de RL (Fase 5).
- Pregunta de autoevaluación: Nombrá 3 distribuciones comunes en ML.

### 11/96. Esperanza y varianza

**Pista (Star Wars — Boba Fett):** Boba Fett calcula el valor esperado de capturar a Qui-Gon Jinn y cuánto puede variar el resultado antes de aceptar el contrato sobre él.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: La esperanza (valor esperado) es el promedio ponderado por probabilidad de una variable aleatoria. La varianza mide qué tan dispersos están los valores respecto a esa esperanza. Para variables independientes, la varianza de la suma es la suma de las varianzas (no así la esperanza, que siempre es lineal).
- Ejemplo: Si X e Y son dos dados independientes (Var=35/12 cada uno), Var(X+Y) = 35/12 + 35/12 = 35/6.
- Relación con lo demás: La varianza es la mitad del dilema sesgo-varianza (Fase 1) y es justamente lo que CRN busca reducir al comparar agentes de RL (Fase 5).
- Pregunta de autoevaluación: ¿Cómo se calcula la varianza de una suma de independientes?

### 12/96. Teorema de Bayes

**Pista (Star Wars — Qui-Gon Jinn):** Qui-Gon actualiza su creencia sobre Anakin con cada nueva evidencia, y le presenta esa creencia posterior ya actualizada directamente a Mace Windu.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: P(A|B) = P(B|A)·P(A) / P(B). Te deja actualizar una creencia previa (P(A), el prior) con nueva evidencia (B) para obtener una creencia posterior (P(A|B)). Es la base de la inferencia bayesiana y de clasificadores como Naive Bayes.
- Ejemplo: Test médico con 99% de sensibilidad, en una enfermedad con 1% de prevalencia: P(enfermo|positivo) termina siendo mucho menor a 99%, por el peso del denominador (falsos positivos de la mayoría sana).
- Relación con lo demás: Base de la inferencia bayesiana en redes de ancho infinito (Fase 6) y de clasificadores probabilísticos en general.
- Pregunta de autoevaluación: Escribí el teorema de Bayes.

### 13/96. Máxima verosimilitud (MLE)

**Pista (Star Wars — Mace Windu):** Mace Windu elige, mirando a Anakin, la explicación que mejor explica TODA la evidencia observada sobre él — la máxima verosimilitud aplicada a un solo sospechoso.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: MLE busca los parámetros del modelo que hacen más probable haber observado los datos que realmente observaste. Minimizar el error cuadrático o la entropía cruzada (las pérdidas más comunes en ML) es, matemáticamente, hacer MLE bajo un supuesto de ruido Gaussiano o Categórico respectivamente.
- Ejemplo: Si tirás una moneda 10 veces y salen 7 caras, el MLE de p(cara) es 7/10 — el valor de p que maximiza la probabilidad de haber observado exactamente ese resultado.
- Relación con lo demás: Minimizar entropía cruzada (regresión logística en Fase 1, o entrenar un Transformer en Fase 4) es hacer MLE bajo un supuesto de ruido específico.
- Pregunta de autoevaluación: ¿Qué maximiza el estimador de máxima verosimilitud?

### 14/96. Descenso de gradiente

**Pista (Star Wars — Anakin Skywalker):** Anakin avanza paso a paso reduciendo su frustración, acercándose cada vez más a Padmé, hasta que un paso de más lo hace caer al lado oscuro (diverger) frente a ella.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Para minimizar una función, actualizás los parámetros restando una fracción (la tasa de aprendizaje) del gradiente: como el gradiente apunta hacia donde la función crece, restarlo te mueve hacia donde decrece. Repetido muchas veces, converge a un mínimo (local, en redes profundas).
- Ejemplo: Minimizar f(x)=x² desde x=5 con tasa 0.1: paso 1 → x=5-0.1·10=4; paso 2 → x=4-0.1·8=3.2; converge hacia x=0.
- Relación con lo demás: Es el motor de entrenamiento de prácticamente todo lo que sigue: regresión (Fase 1), redes neuronales (Fase 2) y policy gradients (Fase 5).
- Pregunta de autoevaluación: ¿Por qué se resta el gradiente y no se suma?

### 15/96. Convexidad

**Pista (Star Wars — Padmé Amidala):** Padmé negocia en el Senado un acuerdo con forma de 'tazón' (convexo) que termina obligando al General Grievous a aceptar la única mejor solución posible.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una función es convexa si el segmento que une dos puntos cualquiera de su gráfica queda siempre por encima (o sobre) la curva — tiene forma de 'tazón'. Si la función de pérdida es convexa, cualquier mínimo local es también el mínimo global, lo cual garantiza que el descenso de gradiente converja al mejor resultado posible.
- Ejemplo: f(x)=x² es convexa (un único mínimo global en 0). f(x)=x⁴-x² NO es convexa: tiene dos mínimos locales, y el descenso de gradiente puede quedar atrapado en cualquiera de ellos según dónde arranque.
- Relación con lo demás: La pérdida de regresión lineal/logística (Fase 1) es convexa; la de una red profunda (Fase 2) generalmente no — por eso ahí sí importa la inicialización (Fase 6).
- Pregunta de autoevaluación: ¿Qué garantiza la convexidad de una función de pérdida?

### 16/96. Multiplicadores de Lagrange

**Pista (Star Wars — General Grievous):** Grievous pelea con 4 sables pero con la restricción de usar solo 2 brazos por turno — ese mismo principio de optimizar bajo restricción es el que, de otro mundo, termina aplicando Ned Stark al defender su casa con recursos limitados.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Sirven para optimizar una función sujeta a una restricción (por ejemplo, minimizar el error con la condición de que los pesos sumen 1). Se introduce una variable extra (el multiplicador) que convierte el problema restringido en uno sin restricciones, más fácil de resolver con cálculo normal.
- Ejemplo: Minimizar x²+y² sujeto a x+y=1: L=x²+y²-λ(x+y-1). Derivando e igualando a cero da x=y=0.5 como solución.
- Relación con lo demás: Aparece al derivar formalmente la solución de PCA (Fase 1, maximizar varianza sujeta a norma 1) y en formulaciones restringidas de optimización.
- Pregunta de autoevaluación: ¿Para qué sirven los multiplicadores de Lagrange?

## Fase 1 — ML clásico

_Síntesis de la fase:_ El flujo típico: elegís un modelo (regresión lineal/logística o árboles), lo entrenás minimizando su pérdida, y usás regularización (L1/L2) + validación cruzada para controlar el trade-off sesgo-varianza y evitar overfitting. PCA/k-means son las herramientas cuando no tenés etiquetas (aprendizaje no supervisado).

### 17/96. Regresión lineal

**Pista (Game of Thrones — Ned Stark):** Ned Stark traza una línea recta de honor y se la muestra directamente a Varys — la predicción más simple y directa, sin curvas ni ambigüedad.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Modela la relación entre variables como una línea (o hiperplano): predicción = w·x + b. Se ajusta minimizando el error cuadrático medio entre la predicción y el valor real, y tiene solución exacta (ecuación normal) además de la solución iterativa por descenso de gradiente.
- Ejemplo: Con puntos (1,2),(2,4),(3,6), el mejor ajuste es y=2x (pendiente 2, intercepto 0) — error cuadrático total = 0, ajuste perfecto.
- Relación con lo demás: Es, matemáticamente, una red neuronal de una sola capa sin activación (Fase 2) — el caso más simple posible.
- Pregunta de autoevaluación: ¿Cuál es la función de pérdida de la regresión lineal?

### 18/96. Regresión logística

**Pista (Game of Thrones — Varys):** Varys nunca da una respuesta binaria a Cersei, siempre le susurra una probabilidad entre 0 y 1 — la salida sigmoide de su información.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: A pesar del nombre, es un modelo de clasificación: toma la misma combinación lineal w·x + b, pero la pasa por una función sigmoide para convertirla en una probabilidad entre 0 y 1. Se entrena minimizando la entropía cruzada, no el error cuadrático.
- Ejemplo: Si z=w·x+b=1.5, sigmoid(1.5)≈0.82 — el modelo predice 82% de probabilidad de la clase positiva.
- Relación con lo demás: Su sigmoid es la misma familia de funciones de activación de la Fase 2; su entropía cruzada es la pérdida estándar en clasificación con deep learning.
- Pregunta de autoevaluación: ¿Qué función de activación usa la regresión logística?

### 19/96. Overfitting / underfitting

**Pista (Game of Thrones — Cersei Lannister):** Cersei memoriza cada insulto específico recibido en Desembarco del Rey y arma con ellos su lista de venganza — la misma lista que después Arya toma y expande con la suya propia.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Overfitting es cuando el modelo memoriza el ruido de los datos de entrenamiento y rinde mal en datos nuevos (error de entrenamiento bajo, error de validación alto). Underfitting es cuando el modelo es demasiado simple para capturar el patrón real (error alto en ambos). Se detecta comparando las curvas de error de entrenamiento y validación a medida que entrena.
- Ejemplo: Un polinomio de grado 15 ajustado a 10 puntos pasa exactamente por todos (error de train=0) pero oscila salvajemente entre ellos (error de validación alto) — overfitting de manual.
- Relación con lo demás: El mismo concepto reaparece en deep learning (Fase 2, por qué se usan batchnorm/dropout) y en RL (Fase 5, sobreajustar a un oponente fijo de self-play).
- Pregunta de autoevaluación: ¿Cómo se detecta el overfitting con una curva de validación?

### 20/96. Regularización L1

**Pista (Game of Thrones — Arya Stark):** Arya tacha nombres de su lista uno por uno hasta dejar solo los esenciales, y le entrega esa lista ya podada — dispersa, con la mayoría en cero — a Sansa.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Suma a la pérdida el valor absoluto de los pesos (λ·Σ|w|). Su efecto característico es empujar muchos pesos exactamente a cero, produciendo modelos dispersos (sparse) — sirve también para selección automática de features.
- Ejemplo: Con L1 fuerte, pesos como [0.3, 0.0, 0.8, 0.0] son típicos — dos features quedaron en exactamente cero, efectivamente descartadas del modelo.
- Relación con lo demás: La misma matemática (norma ℓ1) es la base de los modelos dispersos y del compressed sensing de la Fase 6.
- Pregunta de autoevaluación: ¿Qué efecto tiene L1 sobre los pesos?

### 21/96. Regularización L2

**Pista (Game of Thrones — Sansa Stark):** Sansa no elimina a nadie de su círculo, pero reduce la influencia de todos un poco, con cautela — y aplica ese mismo encogimiento suave sobre la posición de Tyrion en la corte.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Suma a la pérdida el cuadrado de los pesos (λ·Σw²). A diferencia de L1, no lleva los pesos a cero exacto, sino que los encoge suavemente hacia valores pequeños — reduce la varianza del modelo sin eliminar features por completo.
- Ejemplo: Con L2 sobre los mismos datos, los pesos podrían quedar en [0.25, 0.05, 0.6, 0.1] — todos se achican, pero ninguno llega a cero exacto.
- Relación con lo demás: Es matemáticamente lo mismo que 'weight decay' en el entrenamiento de redes neuronales (Fase 2).
- Pregunta de autoevaluación: ¿Qué efecto tiene L2 sobre los pesos?

### 22/96. Validación cruzada

**Pista (Game of Thrones — Tyrion Lannister):** Tyrion prueba su estrategia en distintos consejos rotativos y presenta el resultado ya promediado directamente ante Tywin.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: En k-fold cross-validation dividís los datos en k partes, entrenás k veces usando k-1 partes y validás con la restante (rotando cuál es la de validación). Da una estimación más confiable del error real del modelo que una sola partición train/test, especialmente con pocos datos.
- Ejemplo: Con 5-fold CV sobre 100 datos: entrenás 5 veces con 80 datos, validás con los 20 restantes (rotando cuáles), y promediás el error de las 5 corridas.
- Relación con lo demás: El mismo principio de 'medir con datos que el modelo no vio' aparece en el 'replay gate' de evaluación real que se usa en RL aplicado (Fase 5, tu propio proyecto).
- Pregunta de autoevaluación: ¿Qué problema resuelve k-fold cross-validation?

### 23/96. Árboles de decisión

**Pista (Game of Thrones — Tywin Lannister):** Tywin decide en cada bifurcación familiar quién hereda qué, partiendo el árbol por la pregunta que más separa el poder — y la rama que más lo amenaza termina señalando a Daenerys.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un árbol de decisión parte los datos recursivamente eligiendo, en cada nodo, la feature y el umbral que mejor separan las clases (o reducen el error), usando criterios como impureza de Gini o ganancia de información. Es la base de Random Forest y Gradient Boosting.
- Ejemplo: Para clasificar frutas por peso y color, el árbol podría partir primero en 'peso > 150g' si esa pregunta separa mejor las clases que preguntar primero por el color.
- Relación con lo demás: Contraste directo con las redes neuronales (Fase 2): partición de reglas discretas vs. transformación continua de features.
- Pregunta de autoevaluación: ¿Cómo elige un árbol dónde partir un nodo?

### 24/96. PCA (Análisis de Componentes Principales)

**Pista (Game of Thrones — Daenerys Targaryen):** Daenerys reduce todos sus títulos a la única dirección que más varianza explica sobre quién es, y proyecta esa dirección condensada directamente sobre Jon Snow.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: PCA encuentra las direcciones (componentes principales) donde los datos varían más, y proyecta los datos sobre esas direcciones para reducir dimensiones perdiendo la menor información posible. La primera componente principal es, matemáticamente, el autovector con mayor autovalor de la matriz de covarianza — maximiza la varianza explicada.
- Ejemplo: En datos 2D con forma de elipse alargada en diagonal, la primera componente principal apunta a lo largo de esa diagonal; la segunda queda perpendicular a ella.
- Relación con lo demás: Usa directamente SVD/autovalores (Fase 0); se generaliza a PCA robusta (Fase 6) cuando hay outliers/corrupciones en los datos.
- Pregunta de autoevaluación: ¿Qué maximiza la primera componente principal?

### 25/96. K-means

**Pista (Game of Thrones — Jon Snow):** Jon agrupa salvajes y hombres de la Guardia de la Noche alrededor de un centroide común (sobrevivir al invierno), y recalcula ese centroide incluyendo ahora a Jaime Lannister.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: K-means agrupa datos en k clusters iterando dos pasos: (1) asignar cada punto al centroide más cercano, (2) recalcular cada centroide como el promedio de los puntos asignados a él. Repite hasta que los centroides dejan de moverse significativamente.
- Ejemplo: Con k=2: arrancás con 2 centroides al azar, asignás cada punto al más cercano, recalculás cada centroide como el promedio de sus puntos, y repetís hasta que no cambian.
- Relación con lo demás: Ejemplo de aprendizaje NO supervisado, para contrastar con la clasificación supervisada (regresión logística, árboles) de esta misma fase.
- Pregunta de autoevaluación: ¿Cómo se actualizan los centroides en k-means?

### 26/96. Sesgo-varianza

**Pista (Game of Thrones — Jaime Lannister):** Jaime, reducido a 'el Rey Slayer' (alto sesgo), le cuenta su propia historia completa y cambiante (alta varianza) a Krillin — el mismo dilema, contado de un mundo a otro.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El error total de un modelo se descompone en sesgo (qué tan mal se ajusta el modelo en promedio, por ser demasiado simple) y varianza (qué tanto cambian las predicciones si cambiás los datos de entrenamiento, por ser demasiado complejo). Bajar uno típicamente sube el otro — regularización y complejidad del modelo mueven ese dial.
- Ejemplo: Un modelo lineal sobre datos con curva real tiene alto sesgo (error de train ya alto). Un árbol muy profundo con pocos datos tiene baja sesgo pero alta varianza (cambia mucho entre distintos subconjuntos de entrenamiento).
- Relación con lo demás: El mismo trade-off reaparece formalmente en la teoría de generalización de redes de ancho infinito (Fase 6, kernel learning).
- Pregunta de autoevaluación: ¿Qué trade-off describe el dilema sesgo-varianza?

## Fase 2 — Redes neuronales / Deep Learning

_Síntesis de la fase:_ Una red se entrena así: inicializás los pesos (sin romper la simetría), hacés un forward pass con capas + activaciones no lineales (convolución/pooling para imágenes, o RNN/LSTM para secuencias), calculás la pérdida, corrés backprop (regla de la cadena) para obtener gradientes, y actualizás los pesos con SGD/Adam — usando batchnorm y cuidando el vanishing/exploding gradient para que esto funcione a muchas capas.

### 27/96. Perceptrón

**Pista (Dragon Ball — Krillin):** Krillin lanza un solo Kienzan en línea recta directo hacia Goku — separa con un golpe lineal, no puede resolver curvas como XOR.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El perceptrón es la neurona artificial más simple: una suma ponderada de entradas más un sesgo, pasada por una función escalón. Un solo perceptrón solo puede separar clases con una línea recta (frontera lineal) — no puede resolver problemas no linealmente separables como XOR, de ahí la necesidad de apilar capas.
- Ejemplo: Para la función AND (1 solo si ambas entradas son 1), un perceptrón simple funciona. Para XOR (1 solo si difieren), no hay línea recta que separe las clases — el perceptrón simple falla.
- Relación con lo demás: Apilar muchos, con no linealidades entre medio, es lo que da una red neuronal profunda — el resto de esta fase.
- Pregunta de autoevaluación: ¿Qué no puede resolver un perceptrón simple?

### 28/96. Funciones de activación (ReLU = Unidad Lineal Rectificada / sigmoid / tanh / GELU = Unidad Lineal de Error Gaussiano)

**Pista (Dragon Ball — Goku):** Goku pasa de calma a Super Saiyajin frente a Piccolo — sin ese salto no lineal, apilar poder sería solo una suma lineal que Piccolo podría anticipar fácilmente.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Sin una función no lineal entre capas, apilar capas lineales seguiría siendo solo una transformación lineal. Sigmoid/tanh se saturan (su derivada tiende a cero) para entradas grandes, lo que frena el aprendizaje en redes profundas; ReLU (max(0,x)) no se satura del lado positivo, por eso ayuda con el vanishing gradient. GELU es una versión suave de ReLU usada en Transformers.
- Ejemplo: ReLU(-2)=0, ReLU(3)=3. Sigmoid(10)≈0.9999 (ya casi saturada, gradiente≈0). tanh(0)=0, tanh(2)≈0.96.
- Relación con lo demás: Su elección afecta directamente la criticidad de la inicialización (Fase 6); GELU es la que usan los Transformers (Fase 4).
- Pregunta de autoevaluación: ¿Por qué ReLU ayuda con el vanishing gradient?

### 29/96. Backpropagation

**Pista (Dragon Ball — Piccolo):** Piccolo corrige a Gohan de atrás hacia adelante, técnica por técnica, y ese mismo error corregido en cadena termina siendo la lección que le enseña a Vegeta.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Backprop calcula el gradiente de la pérdida respecto a cada peso de la red aplicando la regla de la cadena desde la salida hacia la entrada, reutilizando los cálculos intermedios (por eso es mucho más eficiente que calcular cada derivada por separado).
- Ejemplo: Con pérdida L=(y-ŷ)² y ŷ=w·x: dL/dw = dL/dŷ · dŷ/dw = -2(y-ŷ)·x — dos pasos de regla de la cadena encadenados.
- Relación con lo demás: Es la regla de la cadena (Fase 0) aplicada recursivamente; es lo que hace posible entrenar tanto CNNs/RNNs (esta fase) como Transformers (Fase 4).
- Pregunta de autoevaluación: ¿Qué regla matemática usa backprop?

### 30/96. SGD (Descenso de Gradiente Estocástico)

**Pista (Dragon Ball — Vegeta):** Vegeta entrena contra un solo oponente a la vez, no contra todos juntos — actualiza rápido y ruidoso, y ese ritmo se lo transmite directamente a Trunks.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El descenso de gradiente 'batch' calcula el gradiente exacto usando todos los datos antes de cada paso — preciso pero lento. SGD (stochastic) actualiza los pesos usando solo un ejemplo (o un mini-batch) por paso: el gradiente es ruidoso, pero se dan muchos más pasos en el mismo tiempo, y en la práctica converge mejor y generaliza mejor.
- Ejemplo: Con 1000 ejemplos y mini-batches de 32, una época hace ~31 actualizaciones de pesos, en vez de 1 sola actualización usando los 1000 datos juntos.
- Relación con lo demás: Es el descenso de gradiente (Fase 0) con ruido de mini-batch; su versión sobre una red de política es policy gradients (Fase 5).
- Pregunta de autoevaluación: ¿En qué se diferencia SGD de descenso de gradiente batch?

### 31/96. Momentum

**Pista (Dragon Ball — Trunks):** Trunks acumula el impulso de sus viajes en el tiempo anteriores y le entrega ese impulso acumulado a Bulma para acelerar su próximo invento en la misma dirección.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Momentum acumula un promedio móvil de los gradientes anteriores y lo usa para actualizar los pesos, en vez de usar solo el gradiente actual. Esto amortigua el zigzagueo en superficies de pérdida alargadas y acelera la convergencia en la dirección consistente.
- Ejemplo: Con β=0.9: v = 0.9·v_anterior + gradiente_actual, y el paso se da con v, no con el gradiente puro — como una bola que acumula velocidad rodando cuesta abajo.
- Relación con lo demás: Es un componente de Adam (siguiente concepto); conceptualmente similar a por qué PPO (Fase 5) evita saltos bruscos en la política.
- Pregunta de autoevaluación: ¿Qué problema de SGD ataca momentum?

### 32/96. Adam

**Pista (Dragon Ball — Bulma):** Bulma combina el impulso de sus inventos anteriores con un ajuste fino automático, y calibra con esa combinación el traje de entrenamiento de Gohan.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Adam combina momentum (promedio móvil del gradiente) con una tasa de aprendizaje adaptativa por parámetro (basada en un promedio móvil del gradiente al cuadrado, como RMSProp). Es el optimizador por defecto en la mayoría de proyectos de deep learning porque converge rápido sin mucho ajuste manual.
- Ejemplo: Adam mantiene, para cada peso, un promedio del gradiente Y un promedio del gradiente al cuadrado — combina ambos en cada paso para decidir tamaño y dirección del ajuste.
- Relación con lo demás: El optimizador por defecto tanto para CNNs/RNNs (esta fase) como para Transformers (Fase 4) y redes de política en RL (Fase 5).
- Pregunta de autoevaluación: ¿Qué combina el optimizador Adam?

### 33/96. Inicialización de pesos

**Pista (Dragon Ball — Gohan):** Gohan no empieza entrenando en cero — Piccolo lo inicializa con un mínimo de habilidad para romper la simetría del miedo, y ese entrenamiento inicial es justo lo que enfrenta después a Cell.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Si todos los pesos empiezan en cero, todas las neuronas de una capa calculan exactamente lo mismo y reciben el mismo gradiente — la red nunca rompe esa simetría y no puede aprender. Por eso se inicializan con valores aleatorios pequeños (esquemas como Xavier/Glorot o He, calibrados según el tamaño de la capa y la activación usada).
- Ejemplo: Inicialización He para ReLU escala los pesos por √(2/fan_in) — para una capa con 100 entradas, los pesos iniciales rondan ±0.14.
- Relación con lo demás: Se conecta directo con 'criticidad' (Fase 6): la inicialización ideal es la que mantiene la varianza estable capa a capa.
- Pregunta de autoevaluación: ¿Por qué no se inicializan los pesos en cero?

### 34/96. Batch normalization

**Pista (Dragon Ball — Cell):** Cell se normaliza absorbiendo androides en dosis controladas antes de reescalar su propio poder, y ese poder ya reescalado es el que usa para medirse contra Frieza.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: BatchNorm normaliza las activaciones de una capa (resta la media, divide por la desviación estándar del mini-batch actual) antes de pasarlas a la siguiente, y luego permite reescalarlas con parámetros aprendidos. Estabiliza y acelera el entrenamiento al evitar que la distribución de activaciones cambie demasiado entre capas y a lo largo del entrenamiento.
- Ejemplo: Activaciones de un mini-batch [2,4,6,8] (media 5, desv.≈2.24) se normalizan a [-1.34,-0.45,0.45,1.34] antes de reescalarlas con los parámetros aprendidos.
- Relación con lo demás: Contraste directo con layer norm (Fase 4), que resuelve el mismo problema pero normalizando por ejemplo en vez de por batch.
- Pregunta de autoevaluación: ¿Qué normaliza BatchNorm y en qué punto de la red?

### 35/96. Convolución (CNN)

**Pista (Dragon Ball — Frieza):** Frieza escanea el poder de pelea con el mismo escáner sin importar en qué parte del planeta esté el objetivo, deslizando ese mismo filtro sobre todo Namek.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una convolución desliza un mismo filtro pequeño (con los mismos pesos) sobre toda la imagen, explotando la invarianza traslacional: un patrón (como un borde) se puede reconocer sin importar en qué posición de la imagen aparezca, usando muchos menos parámetros que una capa totalmente conectada.
- Ejemplo: Un filtro de bordes 3x3 como [[-1,0,1],[-1,0,1],[-1,0,1]] deslizado sobre una imagen resalta los cambios bruscos de intensidad horizontal (bordes verticales).
- Relación con lo demás: Es el caso 'grilla' de la idea general de deep learning geométrico (Fase 3): una operación local con pesos compartidos.
- Pregunta de autoevaluación: ¿Qué invarianza explota la convolución?

### 36/96. Pooling

**Pista (Dragon Ball — Namek (planeta)):** Namek resume regiones enteras de energía en un solo valor máximo detectado por el scouter, y ese valor resumido es el que finalmente le reporta a Whis.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una capa de pooling (max-pooling o average-pooling) reduce el tamaño espacial de los mapas de activación resumiendo pequeñas regiones en un solo valor. Baja el costo computacional y da algo de invarianza a pequeñas traslaciones de la entrada.
- Ejemplo: Max-pooling 2x2 sobre [[1,3],[2,4]] da un único valor: 4 (el máximo de esa región).
- Relación con lo demás: Ejemplo de cómo las CNN ganan invarianza — contrastalo con Transformers (Fase 4), que no tienen esto y necesitan positional encoding.
- Pregunta de autoevaluación: ¿Qué logra una capa de pooling?

### 37/96. RNN (Red Neuronal Recurrente)

**Pista (Dragon Ball — Whis):** Whis recuerda la secuencia completa de eventos para revertirlos y le narra paso a paso esa secuencia a Beerus, aunque cuanto más lejos en el pasado, más se diluye el detalle.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una RNN procesa una secuencia paso a paso, manteniendo un estado oculto que se actualiza en cada paso y resume lo visto hasta el momento. El problema: al hacer backprop a través de muchos pasos (backprop through time), el gradiente tiende a desvanecerse o explotar, por lo que las RNN simples 'olvidan' dependencias muy lejanas en la secuencia.
- Ejemplo: Al procesar 'el gato negro corre', el estado oculto tras 'el' se combina con 'gato' para el siguiente estado, y así sucesivamente — la info de 'el' se va diluyendo capa a capa.
- Relación con lo demás: Se contrasta directamente con self-attention (Fase 4): la RNN procesa secuencial, la atención procesa todo en paralelo.
- Pregunta de autoevaluación: ¿Qué limitación tienen las RNN simples con secuencias largas?

### 38/96. LSTM (Memoria de Largo-Corto Plazo)

**Pista (Dragon Ball — Beerus):** Beerus tiene una memoria selectiva — decide qué destruir y qué preservar entre eones, con compuertas de olvido muy deliberadas — y decide deliberadamente preservar a Majin Buu en vez de olvidarlo.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: LSTM agrega una 'celda de memoria' separada del estado oculto, controlada por compuertas (de olvido, de entrada, de salida) que aprenden cuándo mantener, actualizar o descartar información. Ese camino de memoria con menos transformaciones no lineales es lo que mitiga el vanishing gradient de las RNN simples.
- Ejemplo: Al leer una oración larga, la compuerta de olvido puede 'cerrarse' al terminar una idea y 'abrirse' para la siguiente, preservando información relevante por muchos pasos sin diluirla.
- Relación con lo demás: Resuelve el mismo problema (vanishing gradient) que las conexiones residuales resuelven en redes muy profundas (Fase 4).
- Pregunta de autoevaluación: ¿Qué mecanismo usa LSTM para mitigar el vanishing gradient?

### 39/96. Vanishing / exploding gradient

**Pista (Dragon Ball — Majin Buu):** Buu se multiplica sin control (exploding) o se encoge hasta casi desaparecer (vanishing), y en una de esas transformaciones termina cruzándose con la mirada calculadora de Rhaenyra Targaryen.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Al hacer backprop en una red muy profunda, el gradiente se calcula multiplicando muchas derivadas parciales en cadena. Si esos factores son sistemáticamente menores a 1, el producto tiende a cero (vanishing); si son mayores a 1, tiende a infinito (exploding) — en ambos casos, las capas más tempranas casi no aprenden o el entrenamiento se vuelve inestable.
- Ejemplo: Si cada capa multiplica el gradiente por 0.5 y hay 20 capas, el gradiente que llega a la primera capa es 0.5²⁰ ≈ 0.000001 — prácticamente cero.
- Relación con lo demás: El mismo fenómeno se analiza formalmente con 'criticidad' en la Fase 6 (teoría de inicialización de redes).
- Pregunta de autoevaluación: ¿Por qué ocurre el vanishing gradient en redes profundas?

## Fase 3 — Deep learning geométrico / GNNs

_Síntesis de la fase:_ La idea que atraviesa toda la fase: tomás una operación local con pesos compartidos (como la convolución) y la generalizás a estructuras no-euclidianas (mallas 3D, grafos) usando el Laplaciano/métodos espectrales — sentando las bases conceptuales para entender la atención como el caso más general de todos (grafo completo).

### 40/96. CNN (Red Neuronal Convolucional) extrínseca (sobre formas 3D)

**Pista (House of the Dragon — Rhaenyra Targaryen):** Rhaenyra ve el Trono de Hierro desde afuera, como una posición en el espacio de la corte, y le señala esa vista extrínseca del poder directamente a Daemon.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: 'Extrínseca' significa que el método procesa la forma 3D en relación al espacio ambiente donde está embebida (por ejemplo, una representación voxel o una nube de puntos con coordenadas x,y,z), en vez de trabajar con la superficie en sí misma.
- Ejemplo: Representar una silla 3D como una grilla de vóxeles (como píxeles pero en 3D) y aplicarle convoluciones 3D estándar es un enfoque extrínseco.
- Relación con lo demás: Caso particular del framework general de deep learning geométrico, que también incluye grillas (CNN, Fase 2) y grafos completos (atención, Fase 4).
- Pregunta de autoevaluación: ¿Qué significa 'extrínseca' en este contexto?

### 41/96. CNN (Red Neuronal Convolucional) intrínseca

**Pista (House of the Dragon — Daemon Targaryen):** Daemon entiende el poder caminando literalmente sobre Rocadragón, sintiendo la superficie real del terreno, y le trae ese conocimiento de primera mano a Viserys.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una CNN intrínseca opera directamente sobre la superficie de la forma (la malla/manifold), usando propiedades geométricas propias de esa superficie (distancias geodésicas, curvatura) — es invariante a cómo la forma está rotada o embebida en el espacio 3D, a diferencia de los métodos extrínsecos.
- Ejemplo: En la malla de una cara humana, medir distancias 'caminando sobre la superficie' (geodésicas): la nariz y la mejilla están cerca en línea recta por el aire, pero lejos caminando sobre la piel.
- Relación con lo demás: Usa el Laplaciano de grafo/malla (más adelante en esta fase) para definir operaciones invariantes a la forma.
- Pregunta de autoevaluación: ¿Qué diferencia a una CNN intrínseca de una extrínseca?

### 42/96. Métodos espectrales sobre grafos

**Pista (House of the Dragon — Viserys Targaryen):** Viserys ve la Canción de Hielo y Fuego como un patrón subyacente que atraviesa toda la familia, y le confía esa visión del patrón completo a Alicent.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Se diagonaliza el operador Laplaciano del grafo (o de la malla) para obtener sus autovalores y autovectores — un equivalente de la transformada de Fourier pero para datos con estructura de grafo. Esto permite definir filtros/convoluciones en el 'dominio de frecuencia' del grafo.
- Ejemplo: Los autovectores del Laplaciano de un grafo de red social pueden usarse para detectar comunidades (grupos de nodos muy conectados entre sí).
- Relación con lo demás: Usa directamente los autovalores/autovectores de la Fase 0, aplicados a un grafo en vez de a una matriz cualquiera.
- Pregunta de autoevaluación: ¿Qué operador se diagonaliza en métodos espectrales?

### 43/96. Laplaciano de grafo

**Pista (House of the Dragon — Alicent Hightower):** Alicent mapea quién está conectado con quién en la corte y le entrega ese mapa de conexiones — su Laplaciano social — directamente a su padre Otto.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El Laplaciano de un grafo (L = D − A, grado menos adyacencia) captura cómo se conecta cada nodo con sus vecinos. Sus autovectores generalizan las funciones seno/coseno de Fourier a un grafo, y sus autovalores indican qué tan 'suave' o 'oscilante' es un patrón sobre esa estructura.
- Ejemplo: Para un grafo triángulo (3 nodos, todos conectados entre sí): L = [[2,-1,-1],[-1,2,-1],[-1,-1,2]] — cada nodo tiene grado 2 en la diagonal.
- Relación con lo demás: Sus autovectores son la base de los métodos espectrales; conceptualmente es el puente hacia pensar la atención (Fase 4) como una operación sobre un grafo.
- Pregunta de autoevaluación: ¿Qué información captura el Laplaciano de un grafo?

### 44/96. Atención como convolución generalizada

**Pista (House of the Dragon — Otto Hightower):** Otto no mira solo a su vecino más cercano en la corte — atiende a TODO el consejo a la vez, pesando cada uno según su influencia real — y esa forma de repartir atención es la que termina inspirando, de otro mundo, a Naruto Uzumaki.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una convolución es una operación local con pesos compartidos sobre una grilla (cada píxel mira a sus vecinos fijos). La idea unificadora de deep learning geométrico es que la self-attention es la misma clase de operación pero sobre un grafo completo (todos los tokens conectados con todos), con pesos que además se calculan dinámicamente según el contenido, no fijos.
- Ejemplo: En una oración de 10 palabras, self-attention permite que la palabra 'lo' atienda directamente a la palabra 8 posiciones atrás a la que se refiere — algo que una convolución de ventana chica no logra en un solo paso.
- Relación con lo demás: Es el puente directo hacia el self-attention de la Fase 4 — la misma idea de 'operación local con pesos compartidos' generalizada al extremo.
- Pregunta de autoevaluación: ¿Sobre qué estructura 'convoluciona' la atención?

## Fase 4 — Transformers

_Síntesis de la fase:_ Un Transformer combina: self-attention multi-cabeza (con positional encoding/RoPE para saber el orden) + conexiones residuales + layer norm (en pre-norm o post-norm) apiladas muchas veces, en arquitectura encoder-decoder, decoder-only o encoder-only según la tarea. Después de preentrenado, se ajusta con SFT/LoRA/RLHF según qué tan sutil sea el comportamiento que se busca lograr.

### 45/96. Self-attention (Q/K/V)

**Pista (Naruto — Naruto Uzumaki):** Naruto siente el chakra de todos a su alrededor y decide a quién prestarle atención según cuán relevante es cada uno, y usa exactamente esa atención repartida para coordinar a sus propios Kage Bunshin.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Cada token genera tres vectores: Query (qué estoy buscando), Key (qué ofrezco) y Value (el contenido que aporto si me prestan atención). La atención de un token hacia otro se calcula comparando su Query con la Key del otro (producto punto, escalado por √d y pasado por softmax), y el resultado pondera los Values de todos los tokens.
- Ejemplo: En 'el banco estaba cerrado', el token 'banco' compara su Query con las Keys de las demás palabras (alta similitud con 'cerrado') y pondera los Values para desambiguar que es una institución, no un asiento.
- Relación con lo demás: Generaliza la convolución (Fase 2/3) a un grafo completo; su softmax es la misma familia de funciones que en regresión logística (Fase 1) y en políticas de RL (Fase 5).
- Pregunta de autoevaluación: ¿Qué representan Query, Key y Value?

### 46/96. Atención multi-cabeza

**Pista (Naruto — Kage Bunshin (clones de sombra)):** Cada clon de sombra atiende una parte distinta del campo de batalla en paralelo, y todos esos resultados en paralelo se concatenan en el reporte final que le entregan a Kakashi.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: En vez de calcular una sola atención, se calculan varias en paralelo ('cabezas'), cada una con sus propias proyecciones de Q/K/V, y después se concatenan los resultados. Cada cabeza puede aprender a atender a un tipo distinto de relación (sintáctica, semántica, posicional) en paralelo.
- Ejemplo: Con 8 cabezas, una podría especializarse en relaciones sujeto-verbo y otra en correferencia de pronombres, ambas calculadas en paralelo sobre la misma entrada.
- Relación con lo demás: Extensión directa de self-attention; conceptualmente similar a tener varios filtros en paralelo en una capa convolucional (Fase 2).
- Pregunta de autoevaluación: ¿Por qué usar varias cabezas de atención en vez de una?

### 47/96. Positional encoding sinusoidal

**Pista (Naruto — Kakashi Hatake):** Kakashi necesita el ORDEN exacto de los sellos de mano para un jutsu, y ese orden preciso es justo lo que estudia después al analizar el estilo de Itachi.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: La self-attention por sí sola no distingue el orden de los tokens (es una operación simétrica sobre el conjunto). El encoding posicional sinusoidal suma a cada token un vector hecho de funciones seno/coseno de distinta frecuencia según su posición, para inyectar esa información de orden.
- Ejemplo: Sin encoding posicional, 'perro muerde hombre' y 'hombre muerde perro' generarían la misma representación de atención — el encoding es lo que distingue la posición de cada palabra.
- Relación con lo demás: Resuelve un problema que las RNN (Fase 2) no tienen, porque ahí el orden viene gratis por la recurrencia secuencial.
- Pregunta de autoevaluación: ¿Por qué un Transformer necesita codificación posicional?

### 48/96. RoPE (Rotary Position Embedding — incrustación posicional rotatoria)

**Pista (Naruto — Itachi Uchiha):** El Sharingan de Itachi rota para leer la distancia relativa entre movimientos, no la posición absoluta, y esa lectura rotada de distancias se la transmite a Jiraiya durante su entrenamiento.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: RoPE (Rotary Position Embedding) codifica la posición rotando los vectores Query/Key en función de su posición, en vez de sumarles un vector fijo. Esto hace que la atención dependa naturalmente de la distancia relativa entre tokens, y generaliza mejor a secuencias más largas que las vistas en entrenamiento — por eso lo prefieren los LLMs modernos de contexto largo.
- Ejemplo: RoPE rota el vector Query de un token por un ángulo proporcional a su posición; la atención entre dos tokens termina dependiendo del ángulo relativo entre ellos (la distancia), no de sus posiciones absolutas.
- Relación con lo demás: Evolución del positional encoding sinusoidal — hoy el estándar en casi cualquier LLM decoder-only moderno.
- Pregunta de autoevaluación: ¿Qué ventaja tiene RoPE sobre el encoding sinusoidal original?

### 49/96. Arquitectura encoder-decoder

**Pista (Naruto — Jiraiya):** Jiraiya observa el mundo entero y lo traduce paso a paso en las enseñanzas que le da a Naruto, quien a partir de ahí empieza a generar sus propias decisiones.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El encoder procesa toda la secuencia de entrada con self-attention completa (cada token ve a todos). El decoder genera la salida token por token, con self-attention 'enmascarada' (cada token solo ve los anteriores) más una capa de atención cruzada que consulta las representaciones del encoder.
- Ejemplo: Para traducir 'the cat' → 'el gato': el encoder procesa 'the cat' completo; el decoder genera 'el' consultando al encoder, y después 'gato' viendo 'el' + consultando al encoder de nuevo.
- Relación con lo demás: Generaliza la idea de las RNN encoder-decoder (secuencia a secuencia) previas a los Transformers, reemplazando la recurrencia por atención.
- Pregunta de autoevaluación: ¿Qué hace distinto al decoder del encoder?

### 50/96. Decoder-only (estilo GPT)

**Pista (Naruto — Naruto narrando su propia historia):** Naruto genera su próxima acción mirando solo lo que ya dijo o hizo antes, sin traducir de otra fuente, y le anuncia esa decisión ya tomada directamente a Sakura.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un modelo decoder-only elimina el encoder por completo: solo tiene self-attention enmascarada (cada token ve únicamente los anteriores) y se entrena a predecir el siguiente token. Alcanza para generación de texto porque no necesita 'traducir' de una secuencia de entrada a otra — genera directamente, condicionado en todo lo anterior.
- Ejemplo: Dado 'El cielo es', un modelo decoder-only predice el siguiente token ('azul') mirando solo las palabras anteriores, y repite el proceso token por token.
- Relación con lo demás: Es la arquitectura que se ajusta con RLHF/PPO (Fase 5) para producir asistentes conversacionales.
- Pregunta de autoevaluación: ¿Por qué un modelo decoder-only basta para generación de texto?

### 51/96. Encoder-only (estilo BERT)

**Pista (Naruto — Sakura Haruno):** Sakura lee la situación médica completa de un paciente de una sola vez antes de diagnosticar, y usa esa misma lectura completa para detectar la manipulación de Orochimaru sobre el cuerpo del paciente.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un modelo encoder-only usa self-attention completa (cada token ve a todos, incluso los que vienen después) y se entrena con tareas como predecir palabras enmascaradas. Conviene para tareas de comprensión/clasificación (análisis de sentimiento, extracción de respuestas) donde tenés toda la entrada disponible de una vez, no para generar texto secuencialmente.
- Ejemplo: BERT recibe 'el gato [MASK] en la alfombra' viendo la oración COMPLETA (incluso lo que sigue al hueco) para predecir 'duerme'.
- Relación con lo demás: Contraste directo con decoder-only: ve toda la secuencia a la vez, por eso no sirve para generar texto token por token.
- Pregunta de autoevaluación: ¿Para qué tareas conviene un encoder-only?

### 52/96. Layer normalization

**Pista (Naruto — Orochimaru):** Orochimaru normaliza cada cuerpo que posee según SUS propias proporciones internas, y le impone esa misma normalización forzada al cuerpo de Gaara cuando intenta poseerlo.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: A diferencia de BatchNorm (que normaliza a través del batch, para cada feature), layer norm normaliza a través de las features, para cada ejemplo individual. Esto la hace independiente del tamaño del batch, lo cual es clave para Transformers que suelen entrenarse con secuencias de longitud variable.
- Ejemplo: Para el vector de activaciones de UN token [2,4,6,8] (media 5), layer norm lo normaliza usando esa media/desviación de ESE vector — sin mirar qué otros ejemplos hay en el batch.
- Relación con lo demás: Reemplaza a batchnorm (Fase 2) en Transformers, precisamente porque no depende del tamaño del batch.
- Pregunta de autoevaluación: ¿Qué normaliza layer norm, a diferencia de batch norm?

### 53/96. Pre-norm vs. post-norm

**Pista (Naruto — Gaara):** Gaara ordena su arena ANTES de que llegue el golpe, en vez de reordenarla después del impacto, y usa ese mismo reflejo anticipado para proteger a Hinata en batalla.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: En post-norm (arquitectura original del paper de Transformers), la normalización va después de sumar la conexión residual. En pre-norm, va antes, dentro de cada sub-bloque. Pre-norm mantiene gradientes más estables en redes muy profundas porque el camino residual queda 'limpio' (sin pasar por la normalización), lo que evita que el entrenamiento se vuelva inestable a muchas capas.
- Ejemplo: Pre-norm calcula x + Atención(Norm(x)); post-norm calcula Norm(x + Atención(x)) — la diferencia parece chica pero cambia mucho la estabilidad a 100+ capas.
- Relación con lo demás: Interactúa directamente con las conexiones residuales (siguiente concepto) — analizado con rigor matemático en la Fase 6 (Residual Learning).
- Pregunta de autoevaluación: ¿Por qué pre-norm ayuda en redes muy profundas?

### 54/96. Conexiones residuales

**Pista (Naruto — Hinata Hyuga):** Hinata mantiene su identidad original intacta mientras le suma nueva confianza aprendida encima, y le muestra ese mismo camino de identidad preservada a Obito, ya tarde para él.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una conexión residual suma la entrada de un bloque directamente a su salida (salida = entrada + F(entrada)), en vez de solo devolver F(entrada). Esto le da al gradiente un 'atajo' para fluir directo hacia atrás sin atravesar todas las transformaciones no lineales, lo que permite entrenar redes mucho más profundas sin que el gradiente se desvanezca.
- Ejemplo: Si un bloque no aprendió nada útil, F(x)≈0 y la salida x+F(x)≈x — la red puede 'saltarse' bloques inútiles en vez de perder el gradiente a través de ellos.
- Relación con lo demás: El mismo mecanismo que en ResNets (Fase 2, implícito); su análisis matemático riguroso está en la Fase 6 (Residual Learning, Roberts & Yaida).
- Pregunta de autoevaluación: ¿Qué problema resuelven las conexiones residuales?

### 55/96. SFT (Ajuste Fino Supervisado) / LoRA (Adaptación de Bajo Rango) / QLoRA (LoRA Cuantizado) / RLHF (Aprendizaje por Refuerzo con Feedback Humano)

**Pista (Naruto — Obito Uchiha):** Obito se reescribe casi por completo tras Madara (como un SFT completo), y esa reescritura casi total termina proyectándose como advertencia en la mente de Ichigo Kurosaki.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: SFT (supervised fine-tuning) reentrena todos o casi todos los pesos del modelo con ejemplos etiquetados. LoRA congela los pesos originales y solo entrena matrices pequeñas de bajo rango que se suman a ellos — mucho más barato en memoria. QLoRA hace lo mismo pero con el modelo base cuantizado (menos precisión numérica) para bajar aún más el costo. RLHF ajusta el modelo con aprendizaje por refuerzo usando una señal de recompensa aprendida de preferencias humanas.
- Ejemplo: Para adaptar un LLM de 7B parámetros a un dominio específico con una sola GPU chica, LoRA podría entrenar solo ~0.1% de los parámetros (matrices pequeñas) en vez de los 7B completos.
- Relación con lo demás: RLHF conecta directo con toda la Fase 5 (policy gradients, PPO) — es RL aplicado a ajustar un Transformer ya entrenado.
- Pregunta de autoevaluación: ¿Cuándo elegirías LoRA en vez de fine-tuning completo?

## Fase 5 — Reinforcement Learning

_Síntesis de la fase:_ El ciclo completo de RL: definís el MDP, y aprendés V/Q resolviendo Bellman — con programación dinámica si conocés el modelo, o con Monte Carlo/TD si aprendés de experiencia (Q-learning off-policy, SARSA on-policy). Con espacios grandes, aproximás Q con una red (DQN) o parametrizás la política directamente (policy gradients, actor-crítico, PPO). En juegos multi-agente, self-play + búsqueda (PUCT) generan al oponente, y Nash/CFR/exploitability/AIVAT/CRN son las herramientas para medir qué tan buena es tu política de verdad — exactamente el combo que usa tu proyecto pokemon-tcg-ai.

### 56/96. Proceso de decisión de Markov (MDP)

**Pista (Bleach — Ichigo Kurosaki):** Cada batalla de Ichigo es un estado con acciones posibles (atacar, defender, usar Bankai) y una recompensa (salvar el alma), y ese mismo marco de decisión se lo transmite a Rukia antes de cada combate.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un MDP se define por: un conjunto de estados, un conjunto de acciones, una función de transición (probabilidad de llegar a un estado dado el estado y acción actuales) y una función de recompensa. La propiedad de Markov dice que el futuro solo depende del estado actual, no de cómo llegaste ahí.
- Ejemplo: En una grilla 4x4: estados = las 16 celdas; acciones = {arriba,abajo,izq,der}; transición determinística (moverse en esa dirección); recompensa = +1 al llegar a la meta, 0 en el resto.
- Relación con lo demás: El framework base sobre el que se construyen Q-learning, policy gradients y todo lo que sigue en esta fase.
- Pregunta de autoevaluación: ¿Qué componentes definen un MDP?

### 57/96. Función de valor

**Pista (Bleach — Rukia Kuchiki):** Rukia evalúa qué tan buena es cada posición en la batalla antes de decidir qué hacer, y le comunica esa evaluación de valor directamente a Renji.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: V(s) estima la recompensa total esperada (descontada en el tiempo) que vas a obtener a partir del estado s, si seguís una política dada. Es una forma de resumir 'qué tan bueno es estar en este estado' sin tener que simular todo el futuro cada vez.
- Ejemplo: En la grilla, V(celda pegada a la meta) es alto (cerca de +1 descontado); V(celda lejana) es más bajo porque la recompensa llega descontada por muchos pasos.
- Relación con lo demás: Se relaciona con Q (siguiente concepto): V(s) es, en esencia, el valor esperado de Q sobre las acciones que tomaría la política.
- Pregunta de autoevaluación: ¿Qué mide la función de valor de un estado?

### 58/96. Función Q (valor-acción)

**Pista (Bleach — Renji Abarai):** Renji evalúa cada movimiento específico posible desde su posición — Zabimaru versus retirada — y le muestra esa evaluación acción por acción a su capitán Byakuya.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Q(s,a) estima la recompensa total esperada si tomás la acción a en el estado s y de ahí en adelante seguís la política. A diferencia de V(s), Q te dice directamente qué acción conviene tomar en cada estado, sin necesitar un modelo de las transiciones.
- Ejemplo: En un cruce donde podés ir 'recto' o 'doblar', Q(estado,recto) y Q(estado,doblar) te dicen directamente cuál acción da más recompensa futura, sin comparar V de los estados resultantes.
- Relación con lo demás: Es lo que aprenden Q-learning y DQN; su versión con red neuronal es exactamente aplicar deep learning (Fase 2) a RL.
- Pregunta de autoevaluación: ¿En qué se diferencia Q de la función de valor V?

### 59/96. Ecuación de Bellman

**Pista (Bleach — Byakuya Kuchiki):** Byakuya calcula el valor de este golpe en términos del daño inmediato más el valor descontado del combate que sigue, y reporta ese cálculo recursivo directamente a Yamamoto.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Expresa el valor de un estado como la recompensa inmediata más el valor descontado del estado siguiente: V(s) = E[r + γ·V(s')]. Es una relación recursiva — el valor de todo el futuro se puede calcular en términos del valor 'un paso más adelante', lo cual es la base de casi todos los algoritmos de RL.
- Ejemplo: Si estás a un paso de la meta con recompensa 10 y γ=0.9: V(s) = 10 + 0.9·V(meta).
- Relación con lo demás: La ecuación detrás de programación dinámica, Q-learning, SARSA y DQN — todo lo que sigue en esta fase es una forma distinta de resolverla.
- Pregunta de autoevaluación: ¿Qué relación recursiva expresa Bellman?

### 60/96. Programación dinámica

**Pista (Bleach — Yamamoto (Capitán Comandante)):** Yamamoto conoce las reglas completas de la Sociedad de Almas y resuelve la estrategia entera de antemano, y le impone esa estrategia ya resuelta a Kenpachi Zaraki.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Requiere conocer el modelo completo del MDP (las probabilidades de transición y recompensa) para resolver la ecuación de Bellman exactamente, iterando sobre todos los estados. Monte Carlo y TD, en cambio, aprenden solo a partir de experiencia (episodios simulados o reales), sin necesitar ese modelo.
- Ejemplo: Con las probabilidades de transición de la grilla conocidas, podés resolver el sistema de ecuaciones de Bellman para las 16 celdas directamente, sin simular ni un solo episodio.
- Relación con lo demás: Requiere el modelo completo del MDP; Monte Carlo y TD (siguientes conceptos) son las alternativas cuando no lo tenés.
- Pregunta de autoevaluación: ¿Qué requiere programación dinámica que Monte Carlo no?

### 61/96. Métodos de Monte Carlo

**Pista (Bleach — Kenpachi Zaraki):** Kenpachi solo aprende al final de la pelea completa cuánto valió la pena, y le cuenta ese resultado final, recién terminado el combate, a Shunsui.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Monte Carlo actualiza el valor de un estado recién al final de un episodio completo, usando la recompensa total realmente obtenida desde ese estado en adelante. Es simple y sin sesgo, pero tiene que esperar a que termine el episodio y tiene alta varianza.
- Ejemplo: Jugás un episodio completo de la grilla, anotás la recompensa total obtenida desde cada estado visitado, y promediás esos retornos sobre muchos episodios para estimar V(s).
- Relación con lo demás: Se combina con TD (siguiente concepto) para dar los métodos modernos; compará con cómo self-play (más adelante) genera esos episodios de entrenamiento.
- Pregunta de autoevaluación: ¿Cuándo actualiza Monte Carlo el valor de un estado?

### 62/96. Diferencias temporales (TD)

**Pista (Bleach — Shunsui Kyoraku):** Shunsui ajusta su valoración de la situación en cada paso, sin esperar a que termine la pelea, y le pasa esa actualización paso a paso a Toshiro Hitsugaya.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: TD actualiza el valor de un estado usando la recompensa inmediata más la estimación actual del valor del siguiente estado (bootstrapping), sin esperar a que termine el episodio — combina la actualización paso a paso de programación dinámica con el aprendizaje a partir de experiencia de Monte Carlo.
- Ejemplo: TD(0): V(s) ← V(s) + α·[r + γ·V(s') − V(s)] — se actualiza apenas se da un paso, usando tu propia estimación de V(s'), sin esperar el final del episodio.
- Relación con lo demás: Es la base de Q-learning y SARSA (siguientes dos conceptos) — ambos son variantes de TD aplicadas a la función Q.
- Pregunta de autoevaluación: ¿Qué combina TD de Monte Carlo y programación dinámica?

### 63/96. Q-learning

**Pista (Bleach — Toshiro Hitsugaya):** Toshiro aprende la mejor jugada posible del rival aunque él mismo esté explorando otra táctica distinta, y le enseña esa lección off-policy a Ikkaku.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Q-learning aprende Q(s,a) actualizando hacia la mejor acción posible en el siguiente estado, sin importar qué acción realmente tomó el agente ahí (max sobre a'). Por eso es off-policy: puede aprender la política óptima mientras se comporta de forma exploratoria/distinta.
- Ejemplo: Q(s,a) ← Q(s,a) + α·[r + γ·max_a' Q(s',a') − Q(s,a)] — usa el MEJOR Q del siguiente estado, sin importar la acción que realmente se vaya a tomar ahí.
- Relación con lo demás: Al ser off-policy, se puede combinar con un replay buffer (ver DQN, más adelante) — cosa que un algoritmo on-policy como SARSA no puede hacer tan directamente.
- Pregunta de autoevaluación: ¿Q-learning es on-policy u off-policy?

### 64/96. SARSA (State-Action-Reward-State-Action)

**Pista (Bleach — Ikkaku Madarame):** Ikkaku aprende del movimiento que él MISMO realmente va a hacer a continuación, no del ideal, y le muestra a Orihime exactamente esa jugada real, no la ideal.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: SARSA actualiza Q(s,a) usando la acción que el agente realmente va a tomar a continuación (según su propia política, incluyendo exploración), no la mejor acción posible. Por eso es on-policy — aprende el valor de la política que efectivamente está siguiendo, no de la política óptima.
- Ejemplo: Q(s,a) ← Q(s,a) + α·[r + γ·Q(s',a') − Q(s,a)] — usa el Q de la acción a' que realmente se va a tomar (con exploración incluida), no el máximo posible.
- Relación con lo demás: Contraste directo con Q-learning; PPO (más adelante en esta fase) también es on-policy, por la misma razón estructural.
- Pregunta de autoevaluación: ¿En qué se diferencia SARSA de Q-learning?

### 65/96. Policy gradients

**Pista (Bleach — Orihime Inoue):** Orihime ajusta directamente su forma de invocar, reforzando los gestos que llevaron a curaciones exitosas, y le enseña ese mismo ajuste directo a Ishida y Chad.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: En vez de aprender valores y derivar una política de ellos, policy gradients parametriza la política directamente (por ejemplo, con una red neuronal) y ajusta sus parámetros con descenso de gradiente para maximizar la recompensa esperada — subiendo la probabilidad de las acciones que llevaron a buena recompensa.
- Ejemplo: Si la acción 'derecha' llevó a buena recompensa, se sube directamente la probabilidad de elegir 'derecha' en ese estado, sin pasar por estimar Q o V primero.
- Relación con lo demás: Es el fundamento de actor-crítico y PPO (siguientes conceptos); usa el mismo descenso de gradiente de la Fase 0/2, pero sobre una red de política.
- Pregunta de autoevaluación: ¿Qué se optimiza directamente en policy gradients?

### 66/96. Actor-crítico

**Pista (Bleach — Uryu Ishida y Chad):** Ishida (el actor) dispara la flecha; Chad (el crítico) evalúa qué tan buena fue esa decisión, y ambos le reportan esa evaluación a Urahara.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El 'actor' es la política que elige acciones; el 'crítico' es una función de valor que evalúa qué tan buena fue esa elección, dando una señal con menos varianza que usar solo el retorno total de Monte Carlo. El actor se actualiza usando esa evaluación del crítico en vez de esperar el resultado final del episodio.
- Ejemplo: El actor propone 'ir a la izquierda'; el crítico evalúa 'esa acción vale +2 más que el promedio de este estado' — esa ventaja es la que ajusta al actor.
- Relación con lo demás: Combina policy gradients con una función de valor (Q o V, conceptos anteriores) — el crítico reutiliza directamente Bellman/TD de esta misma fase.
- Pregunta de autoevaluación: ¿Qué rol cumple el 'crítico'?

### 67/96. Deep Q-Networks (DQN)

**Pista (Bleach — Urahara Kisuke):** Urahara guarda un registro de experimentos pasados en su tienda y entrena nuevas técnicas revisando muestras al azar de ese archivo, compartiendo los resultados con Yoruichi.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: DQN aproxima Q(s,a) con una red neuronal en vez de una tabla, para poder manejar espacios de estados enormes (como píxeles de un videojuego). El replay buffer guarda transiciones pasadas y entrena con muestras aleatorias de ahí (no solo la última), rompiendo la correlación temporal entre pasos consecutivos y estabilizando el entrenamiento.
- Ejemplo: Para jugar Breakout desde píxeles, DQN guarda millones de transiciones (estado,acción,recompensa,siguiente estado) y entrena con mini-batches aleatorios de ahí, no con la jugada recién ocurrida.
- Relación con lo demás: Aplica deep learning (Fase 2) a Q-learning; el replay buffer funciona precisamente porque Q-learning es off-policy.
- Pregunta de autoevaluación: ¿Para qué sirve el replay buffer en DQN?

### 68/96. PPO (Optimización de Política Proximal)

**Pista (Bleach — Yoruichi Shihoin):** Yoruichi nunca deja que su estilo cambie de golpe entre entrenamientos — ajustes limitados y controlados — y le impone ese mismo límite de cambio a Kenpachi antes de dejarlo entrenar solo.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: PPO es un método de policy gradient que limita ('clippea') cuánto puede cambiar la política en cada actualización respecto a la política anterior. Esto evita pasos demasiado grandes que colapsen el entrenamiento, manteniéndolo estable sin necesitar la matemática más compleja de métodos como TRPO.
- Ejemplo: Si la nueva política querría subir 5x la probabilidad de una acción, PPO la limita (clip) a un rango como 1.2x, para evitar un salto que descarrile el entrenamiento.
- Relación con lo demás: El algoritmo detrás de RLHF (Fase 4) — así es como se ajustan los LLMs modernos con feedback humano.
- Pregunta de autoevaluación: ¿Qué limita PPO para estabilizar el entrenamiento?

### 69/96. Self-play

**Pista (Bleach — Kenpachi Zaraki):** Kenpachi busca rivales cada vez más fuertes, incluyendo versiones pasadas de sí mismo, y ese ciclo de automejora es justo lo que Aizen observa y calcula para superarlo.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El agente entrena jugando contra versiones de sí mismo (pasadas o actuales). A medida que mejora, su oponente (él mismo) también mejora, generando automáticamente un currículum de dificultad creciente sin necesidad de un oponente externo diseñado a mano.
- Ejemplo: En pokemon-tcg-ai, el framework DRSF entrena a FocusNet jugando contra versiones anteriores de sí mismo, en vez de un oponente fijo — el desafío sube automáticamente con el agente.
- Relación con lo demás: Se usa junto con PUCT (siguiente concepto) en pokemon-tcg-ai para entrenar sin un oponente externo diseñado a mano.
- Pregunta de autoevaluación: ¿Por qué el self-play genera un curriculum automático?

### 70/96. Búsqueda PUCT (Predictor + Upper Confidence bound aplicado a Árboles)

**Pista (Bleach — Sosuke Aizen):** Aizen combina una búsqueda profunda de posibilidades con una intuición de qué camino explorar primero y una evaluación sin ver el final, y aplica exactamente esa búsqueda calculada sobre la traición de Gin.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: PUCT (usado en AlphaZero) combina búsqueda en árbol tipo MCTS (Monte Carlo Tree Search — búsqueda en árbol de Monte Carlo) con una red neuronal que aporta dos cosas: una política previa (qué jugadas explorar primero) y una estimación de valor (para no tener que simular hasta el final del juego). Eso hace la búsqueda mucho más eficiente que MCTS puro con simulaciones aleatorias.
- Ejemplo: En pokemon-tcg-ai, la búsqueda PUCT usa FocusNet para sugerir qué jugadas explorar primero (cabeza de política) y para evaluar posiciones sin jugar hasta el final (cabeza de valor).
- Relación con lo demás: Combina deep learning (Fase 2, la red da política+valor) con búsqueda en árbol — el corazón técnico de tu proyecto pokemon-tcg-ai.
- Pregunta de autoevaluación: ¿Qué combina PUCT (a diferencia de MCTS puro)?

### 71/96. Equilibrio de Nash

**Pista (Bleach — Gin Ichimaru y Aizen):** Ninguno de los dos puede mejorar traicionando al otro sin que el otro ya lo haya anticipado — ese equilibrio inestable de desconfianza mutua es el mismo que arrastra a Tosen a unirse a ellos.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un conjunto de estrategias (una por jugador) está en equilibrio de Nash si ningún jugador puede mejorar su resultado cambiando solo su propia estrategia, dado que los demás mantienen la suya. Es el concepto de 'estabilidad' central en teoría de juegos multi-agente.
- Ejemplo: En piedra-papel-tijera, jugar cada opción con probabilidad 1/3 es el equilibrio de Nash — cualquier estrategia fija distinta puede ser explotada por el oponente.
- Relación con lo demás: Es el objetivo que CFR (siguiente concepto) busca alcanzar de forma iterativa, y que exploitability (más adelante) mide qué tan lejos estás de lograr.
- Pregunta de autoevaluación: ¿Qué condición define un equilibrio de Nash?

### 72/96. CFR (Counterfactual Regret Minimization)

**Pista (Bleach — Kaname Tosen):** Tosen recalcula iterativamente cuánto se arrepiente de decisiones pasadas en cada punto de su traición, y le confiesa ese arrepentimiento acumulado a Grimmjow.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: CFR minimiza iterativamente el 'arrepentimiento contrafactual' — cuánto mejor le habría ido a un jugador en el pasado si hubiera jugado distinto en cada punto de decisión, asumiendo que el resto del juego no cambia. Minimizar ese arrepentimiento acumulado converge, en promedio, a un equilibrio de Nash. Es la familia de algoritmos detrás de los mejores bots de póker (Libratus, Pluribus).
- Ejemplo: En pokemon-tcg-ai se usó Best Response + deep CFR para medir qué tan lejos está la política heurística del equilibrio de Nash — encontraron un gap real de +0.157 en exploitability.
- Relación con lo demás: Herramienta para acercarse al equilibrio de Nash; en tu proyecto se usó junto con Best Response para medir el gap real a Nash.
- Pregunta de autoevaluación: ¿Qué minimiza CFR iterativamente?

### 73/96. Exploitability

**Pista (Bleach — Grimmjow Jaggerjack):** Grimmjow mide qué tan fácil sería para el rival perfecto explotar su estilo de pelea imprudente, y es justamente Unohana quien termina explotando esa debilidad medida.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Mide cuánto podría ganarle un oponente perfecto (que juega la mejor respuesta posible) a tu política, comparado con el equilibrio. Una exploitability de cero significa que estás jugando un equilibrio de Nash exacto — nadie puede explotarte.
- Ejemplo: Si tu política tiene exploitability de 0.15, un oponente perfecto te ganaría en promedio 0.15 unidades de recompensa más de lo que un jugador en equilibrio te ganaría.
- Relación con lo demás: La métrica que resume si CFR/Nash se alcanzaron o no; se usó en tu proyecto para confirmar dónde el agente heurístico se queda corto.
- Pregunta de autoevaluación: ¿Qué mide la exploitability de una política?

### 74/96. AIVAT (técnica de reducción de varianza para evaluar agentes — el nombre no es una sigla de expansión estándar, viene del título del paper)

**Pista (Bleach — Retsu Unohana):** Unohana filtra el ruido aleatorio de cada combate para medir la habilidad REAL de un espadachín con menos peleas necesarias, y aplica ese mismo filtro de ruido al evaluar a Nel.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: AIVAT es una técnica de reducción de varianza para evaluar agentes en juegos con mucho azar (como el póker): resta una 'variable de control' calculada a partir del valor esperado bajo un modelo del juego, de forma que el resultado observado se limpia de parte del ruido aleatorio sin sesgar la estimación. Permite comparar dos agentes con muchas menos partidas de las que harían falta sin esa corrección.
- Ejemplo: En pokemon-tcg-ai, AIVAT-Nash se usó para comparar dos variantes de mazo con muchas menos partidas simuladas de las que harían falta sin esa reducción de varianza.
- Relación con lo demás: Se apoya en CRN (siguiente concepto) y en un modelo del juego para limpiar ruido al comparar agentes.
- Pregunta de autoevaluación: ¿Para qué se usa AIVAT en evaluación de agentes?

### 75/96. Common Random Numbers (CRN)

**Pista (Bleach — Nelliel (Nel)):** Nel compara sus dos versiones (niña y adulta) bajo exactamente las mismas condiciones de combate para que la diferencia sea real, y ese mismo experimento controlado es el que después estudia, de otro mundo, Aemond Targaryen.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Al comparar dos variantes de un agente, CRN usa exactamente la misma secuencia de números aleatorios (mismas cartas, mismos eventos de azar) para ambas simulaciones. Así, la diferencia observada entre los dos resultados se debe solo a la diferencia real entre los agentes, no a que a uno le tocó mejor suerte — reduce muchísimo la varianza de la comparación (A/B pareado).
- Ejemplo: En pokemon-tcg-ai, CRN redujo el error estándar (SEM) entre 15-20% en comparaciones reales de matchups — mismas cartas repartidas para ambas variantes comparadas.
- Relación con lo demás: Se usa junto con AIVAT para evaluar variantes de agente con menos partidas — la base estadística de cualquier comparación seria de A/B en RL.
- Pregunta de autoevaluación: ¿Por qué CRN reduce la varianza al comparar dos variantes?

## Fase 6 — Electivos avanzados

_Síntesis de la fase:_ Estos electivos comparten una pregunta: ¿por qué funciona el deep learning? RG flow/criticidad explican la inicialización; Bayesian learning explica la generalización en el límite de ancho infinito; sparse models/compressed sensing/PCA robusta explican por qué los datos de alta dimensión suelen tener estructura de baja dimensión aprovechable.

### 76/96. RG flow (Flujo de Grupo de Renormalización) / NTK (Núcleo Tangente Neuronal)

**Pista (House of the Dragon — Aemond Targaryen):** Aemond observa cómo el poder de Vhagar se transforma capa social tras capa social, y le explica ese flujo de transformación a Criston Cole.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: El flujo de grupo de renormalización (tomado de la física estadística) describe cómo las estadísticas de las activaciones de una red se transforman capa a capa, como si cada capa fuera un 'paso' de renormalización. El NTK (Neural Tangent Kernel) describe cómo evoluciona la función que calcula la red durante el entrenamiento, en el límite de redes muy anchas.
- Ejemplo: En una red con muchas capas, el RG flow describe cómo la varianza de las preactivaciones (antes de la no-linealidad) se transforma capa a capa, de forma análoga a cómo un sistema físico cambia de escala.
- Relación con lo demás: Explica formalmente por qué la inicialización 'crítica' (siguiente concepto) evita vanishing/exploding gradient — la versión rigurosa de un problema ya visto en Fase 2.
- Pregunta de autoevaluación: ¿Qué describe el flujo de grupo de renormalización en redes?

### 77/96. Criticidad (inicialización)

**Pista (House of the Dragon — Criston Cole):** Criston se mantiene en un punto de lealtad crítico — ni se desborda de fervor ni colapsa en indiferencia — hasta que un evento lo saca de ese equilibrio frente a Rhaenys.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Una inicialización 'crítica' es aquella donde la varianza de las activaciones (y del gradiente) ni crece ni decrece sistemáticamente al pasar por las capas — se mantiene estable. Alejarse de ese punto crítico es justamente lo que causa vanishing o exploding gradients en redes muy profundas.
- Ejemplo: Con inicialización crítica, la varianza de las activaciones se mantiene ~1 en la capa 1, la 50 y la 100. Fuera de ese punto, podría caer a 0.0001 hacia la capa 100 (vanishing).
- Relación con lo demás: Es la versión formal, con matemática de teoría de campos, de la regla práctica 'no inicialices los pesos en cero' de la Fase 2.
- Pregunta de autoevaluación: ¿Por qué la criticidad en la inicialización evita gradientes que explotan/desaparecen?

### 78/96. Bayesian learning en redes neuronales

**Pista (House of the Dragon — Rhaenys Targaryen):** Rhaenys sostiene en su cabeza una distribución de posibles herederos, no una sola certeza, y comparte esa distribución de posibilidades con su esposo Corlys.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: En vez de aprender un solo valor óptimo para cada peso, el enfoque bayesiano mantiene una distribución de probabilidad sobre los pesos posibles. 'Ancho infinito' se refiere al resultado teórico de que una red con infinitas neuronas por capa, bajo inicialización aleatoria, se comporta como un proceso Gaussiano — un objeto matemático mucho más tratable analíticamente.
- Ejemplo: Una red de ancho infinito con pesos al azar se comporta, antes de entrenar, exactamente como un Proceso Gaussiano — su comportamiento se calcula con álgebra lineal, sin entrenar nada.
- Relación con lo demás: Conecta la probabilidad/Bayes de la Fase 0 con redes neuronales; el límite de ancho infinito es lo que hace tratable ese análisis.
- Pregunta de autoevaluación: ¿Qué significa 'ancho infinito' en este contexto?

### 79/96. Modelos dispersos (sparse)

**Pista (House of the Dragon — Corlys Velaryon):** Corlys reduce su enorme flota a solo las rutas esenciales y dispersas que realmente generan valor, descartando el resto a cero, y esa flota ya podada es la que termina espiando Larys.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Encontrar la solución más dispersa (con menos valores distintos de cero) que explica los datos es, en su forma exacta, un problema combinatorio muy difícil (minimizar la norma ℓ0). Se relaja a minimizar la norma ℓ1 (suma de valores absolutos), que es convexa y, bajo ciertas condiciones, da la misma solución dispersa que buscabas con ℓ0.
- Ejemplo: De una señal con 1000 valores donde solo 10 son distintos de cero: resolver 'minimizar ℓ0' es NP-duro; resolver el mismo problema con ℓ1 (convexo) recupera la misma solución dispersa bajo condiciones razonables.
- Relación con lo demás: Usa la misma relajación ℓ0→ℓ1 que la regularización L1 de la Fase 1, pero aplicada a recuperación de señales, no a evitar overfitting.
- Pregunta de autoevaluación: ¿Qué norma se relaja de ℓ0 a ℓ1 en recuperación dispersa?

### 80/96. Compressed sensing

**Pista (House of the Dragon — Larys Strong):** Larys reconstruye toda la intriga de la corte a partir de muy pocas piezas de información filtradas por debajo de la puerta, y le entrega esa reconstrucción completa a Aegon II.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Permite reconstruir una señal dispersa a partir de muchas menos mediciones de las que dicta el muestreo clásico (Nyquist), siempre que la matriz de medición cumpla la Restricted Isometry Property (RIP): que preserve aproximadamente las distancias entre vectores dispersos, sin colapsarlos entre sí.
- Ejemplo: Una imagen de resonancia magnética dispersa en cierta base puede reconstruirse con muchas menos mediciones de las que pide el muestreo clásico, si la matriz de medición cumple RIP.
- Relación con lo demás: Aplica sparse-models (concepto anterior) al problema concreto de reconstruir señales con pocas mediciones.
- Pregunta de autoevaluación: ¿Qué propiedad debe cumplir una matriz para garantizar recuperación (RIP)?

### 81/96. PCA robusta

**Pista (House of the Dragon — Aegon II Targaryen):** Aegon II separa la estructura real del reino de la corrupción puntual de sus consejeros, y esa misma separación entre estructura real y ruido corrupto es la lección que, de otro mundo, aprende Ahsoka Tano.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: La PCA clásica asume que todos los datos siguen la estructura de baja dimensión — un solo dato corrupto puede arruinar la estimación. La PCA robusta descompone la matriz de datos en una parte de bajo rango (la estructura real) más una parte dispersa (outliers/corrupciones), recuperando ambas por separado.
- Ejemplo: En un video de vigilancia con fondo fijo (bajo rango) y una persona moviéndose (dispersa), PCA robusta separa automáticamente el fondo estático de la persona en movimiento.
- Relación con lo demás: Generaliza la PCA de la Fase 1 combinando bajo rango + disperso — las dos ideas centrales de esta misma fase, en un solo método.
- Pregunta de autoevaluación: ¿Qué descompone la PCA robusta, a diferencia de la PCA clásica?

## Fase 7 — Preparación de entrevistas

_Síntesis de la fase:_ En una entrevista, estos conceptos se combinan en preguntas de diseño: te van a pedir que decidas entre SFT/DPO/RLHF/GRPO según el objetivo, que expliques el pipeline de ML end-to-end, y que manejes el vocabulario de on/off-policy y exploración/explotación con soltura — no que recites definiciones sueltas.

### 82/96. SFT (Ajuste Fino Supervisado) vs. RLHF (Aprendizaje por Refuerzo con Feedback Humano) vs. DPO (Optimización Directa de Preferencias) vs. GRPO (Optimización de Política Relativa de Grupo) vs. RLAIF (Aprendizaje por Refuerzo con Feedback de IA)

**Pista (Star Wars — Ahsoka Tano):** Ahsoka aprendió primero con entrenamiento supervisado directo de Anakin, y después ajustó su estilo con preferencias propias más sutiles — y es ese estilo ya refinado el que le transmite a Rey.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: SFT entrena con pares (prompt, respuesta ideal) etiquetados por humanos. RLHF entrena un modelo de recompensa a partir de preferencias humanas y después optimiza el modelo con RL (típicamente PPO) contra esa recompensa. DPO logra un efecto similar a RLHF pero optimizando directamente sobre pares de preferencias, sin entrenar un modelo de recompensa ni correr RL — más simple y estable. GRPO evita necesitar una red de valor separada, comparando un grupo de respuestas entre sí. RLAIF reemplaza el feedback humano por feedback de otro modelo de IA.
- Ejemplo: Para enseñar el FORMATO de una respuesta, SFT alcanza. Para afinar sutilezas de qué respuesta prefiere la gente entre varias igual de correctas, hace falta preference modeling + DPO o RLHF.
- Relación con lo demás: RLHF es exactamente PPO (Fase 5) aplicado a un Transformer (Fase 4); DPO logra un efecto similar sin correr RL de verdad.
- Pregunta de autoevaluación: ¿Cuándo preferirías DPO sobre RLHF clásico?

### 83/96. Reward modeling

**Pista (Star Wars — Rey):** Rey aprende qué acciones aprueba la Fuerza comparando pares de decisiones pasadas, y le enseña a Finn a evaluar sus propias decisiones de la misma forma comparada.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un modelo de recompensa se entrena a partir de comparaciones humanas (esta respuesta es mejor que esa otra) para predecir qué tan 'buena' es una respuesta según preferencia humana. Esa señal aprendida es la que después se usa como recompensa para optimizar el modelo principal con RL.
- Ejemplo: Se le muestran al modelo de recompensa 2 respuestas a la misma pregunta con la etiqueta 'A fue preferida por el humano' — el modelo aprende a puntuar A más alto que B.
- Relación con lo demás: Es el primer paso de RLHF (Fase 5/4) — sin un buen modelo de recompensa, PPO no tiene contra qué optimizar.
- Pregunta de autoevaluación: ¿Qué aprende un modelo de recompensa?

### 84/96. Preference modeling

**Pista (Star Wars — Finn):** Finn no puntúa una acción del 1 al 10, elige entre dos opciones cuál prefiere, y le presenta esa elección binaria simplificada a Poe Dameron.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: En vez de pedirle a un humano que puntúe una respuesta con un número (difícil de calibrar de forma consistente), se le pide comparar dos respuestas y elegir cuál prefiere. Ese dato de preferencia par-a-par es más fácil de recolectar de forma confiable y es la entrada típica tanto para reward modeling como para DPO.
- Ejemplo: En vez de 'puntuá esta respuesta del 1 al 10', se pregunta 'de estas dos, ¿cuál preferís?' — mucho más consistente entre distintos evaluadores humanos.
- Relación con lo demás: El dato de entrada tanto para reward modeling (concepto anterior) como para DPO (dentro de SFT vs RLHF).
- Pregunta de autoevaluación: ¿Qué tipo de dato de entrenamiento usa preference modeling?

### 85/96. ML system design end-to-end

**Pista (Star Wars — Poe Dameron):** Poe diseña la misión completa: inteligencia, plan de vuelo, ejecución en tiempo real y debrief posterior, y le delega el tramo de ejecución en tiempo real a Lando Calrissian.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un pipeline de ML en producción típico tiene 4 etapas: ingesta/preparación de datos, entrenamiento (incluyendo validación y selección de modelo), inferencia online (serving, con foco en latencia y costo) y monitoreo/reentrenamiento (detectar degradación del modelo y actualizarlo). En una entrevista, lo que se evalúa es que sepas razonar los trade-offs entre etapas, no que memorices un diagrama.
- Ejemplo: Sistema de recomendación: (1) ingesta = logs de clics; (2) entrenamiento = reentrenar cada noche; (3) inferencia = servir en <100ms; (4) monitoreo = alertar si el CTR (Click-Through Rate — tasa de clics) real cae respecto al offline.
- Relación con lo demás: Aplica a cualquier cosa construida en las fases anteriores — CNN, Transformer o agente de RL, todos necesitan este mismo pipeline para llegar a producción.
- Pregunta de autoevaluación: Nombrá las 4 etapas de un pipeline de ML en producción.

### 86/96. On-policy vs. off-policy

**Pista (Star Wars — Lando Calrissian):** Lando aprende de la política que sigue Han mientras él mismo juega su propia jugada arriesgada, y esa misma jugada paralela termina cruzándose con la de Kylo Ren.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Un algoritmo on-policy aprende sobre la política que efectivamente está usando para actuar (ejemplo: SARSA, PPO). Uno off-policy puede aprender sobre una política distinta a la que usa para explorar/actuar (ejemplo: Q-learning, DQN) — por eso puede reutilizar experiencia vieja guardada en un replay buffer.
- Ejemplo: SARSA (on-policy) aprende sobre la política que explora con ε-greedy; Q-learning (off-policy) puede aprender la política óptima usando datos grabados de cualquier política pasada.
- Relación con lo demás: La misma distinción de Q-learning (off) vs. SARSA (on) de la Fase 5, ahora encuadrada como pregunta típica de entrevista.
- Pregunta de autoevaluación: Dá un ejemplo de algoritmo on-policy y uno off-policy.

### 87/96. Exploración vs. explotación

**Pista (Star Wars — Kylo Ren):** Kylo explota su poder conocido la mayoría del tiempo, pero explora el lado luminoso ocasionalmente, y esa duda ocasional lo empuja directo hacia el campo de asteroides donde vuela el Halcón Milenario.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Explotar es tomar la acción que hoy creés que es mejor; explorar es probar otras acciones para averiguar si hay algo mejor que todavía no sabés. Dos estrategias comunes: ε-greedy (explorar al azar una fracción ε de las veces) y muestreo de Thompson (elegir según una distribución de creencia sobre qué tan buena es cada acción, afinada con la evidencia).
- Ejemplo: Con ε-greedy y ε=0.1, el agente elige la mejor acción conocida el 90% de las veces y una acción al azar el 10% restante, para seguir descubriendo posibles mejores opciones.
- Relación con lo demás: El mismo dilema que resuelven ε-greedy en Q-learning y el ruido de la política en policy gradients (Fase 5).
- Pregunta de autoevaluación: Nombrá 2 estrategias para manejar este trade-off.

### 88/96. Complejidad cuadrática de la atención

**Pista (Star Wars — El Halcón Milenario en un campo de asteroides):** Cada asteroide debe compararse contra todos los demás para planear una ruta segura — con el doble de asteroides, el cálculo se cuadruplica — y esa navegación calculada termina llevando a la tripulación hasta Tsunade.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: Cada token debe calcular su atención contra todos los demás tokens de la secuencia, así que el costo (en tiempo y memoria) crece con el cuadrado de la longitud de la secuencia (O(n²)). Duplicar el largo del contexto cuadruplica el costo — por eso existen variantes de atención más eficientes (dispersa, lineal, con ventanas) para contextos muy largos.
- Ejemplo: Con 1000 tokens, la matriz de atención tiene 1,000,000 de entradas; con 10,000 tokens (10x más), tiene 100,000,000 — el costo se multiplicó por 100, no por 10.
- Relación con lo demás: Limitación directa de self-attention (Fase 4) — la razón por la que existen variantes de atención eficiente para contexto largo.
- Pregunta de autoevaluación: ¿Por qué la atención escala mal con secuencias largas?

## Fase 8 — Los papers detrás de pokemon-tcg-ai

_Síntesis de la fase:_ Esta fase no es teoría nueva — es el linaje de papers real detrás de las técnicas que ya usaste en la Fase 5. AlphaGo → AlphaGo Zero → AlphaZero establecieron el patrón 'red de política+valor + PUCT + self-play'. En paralelo, CFR → Deep CFR → Libratus → Pluribus establecieron cómo acercarse a un equilibrio de Nash en juegos de información imperfecta a escala real. AIVAT es la pieza de evaluación que conecta ambos mundos. pokemon-tcg-ai combina ideas de las dos familias: la arquitectura de AlphaZero (FocusNet + PUCT) para jugar, y las herramientas de la familia CFR/AIVAT para medir qué tan cerca del equilibrio está.

### 89/96. AlphaGo (Silver et al., 2016, Nature)

**Pista (Naruto — Tsunade):** Tsunade combina lo aprendido de maestros anteriores con su propio juicio refinado en la práctica, y transmite esa combinación de datos previos y práctica propia a Might Guy.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "Mastering the game of Go with deep neural networks and tree search". Combinó por primera vez una red de política (preentrenada con partidas humanas, refinada con self-play) y una red de valor separada, guiando una búsqueda de árbol Monte Carlo (MCTS). Venció al campeón humano Lee Sedol en 2016.
- Ejemplo: AlphaGo usaba dos redes separadas (política y valor), entrenadas en etapas distintas y con datos humanos de arranque — a diferencia de FocusNet en pokemon-tcg-ai, que combina ambas cabezas en una sola red compartida, entrenada sin datos humanos.
- Relación con lo demás: Es el ancestro directo de AlphaGo Zero y AlphaZero (siguientes conceptos), y de la arquitectura policy+value que usa FocusNet en tu proyecto (Fase 5).
- Pregunta de autoevaluación: ¿Qué dos redes combinó AlphaGo, y de qué datos partió para entrenarlas?

### 90/96. AlphaGo Zero (Silver et al., 2017, Nature)

**Pista (Naruto — Might Guy):** Guy entrena desde cero, sin copiar el estilo de nadie, solo mejorando contra sí mismo una y otra vez, y ese entrenamiento puro desde cero es el que inspira después a Minato.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "Mastering the game of Go without human knowledge". Eliminó la necesidad de datos humanos por completo — aprendió desde cero jugando contra sí mismo (self-play puro), usando una búsqueda guiada por una única red de política+valor (lo que hoy llamamos PUCT). Superó a la versión original de AlphaGo.
- Ejemplo: Este paper introdujo formalmente la variante de búsqueda que hoy llamamos PUCT — la misma familia de algoritmo que usa pokemon-tcg-ai.
- Relación con lo demás: Introduce exactamente el algoritmo PUCT + self-play que ya estudiaste en la Fase 5, ahora con su fuente original.
- Pregunta de autoevaluación: ¿Qué eliminó AlphaGo Zero respecto a AlphaGo original?

### 91/96. AlphaZero (Silver et al., 2018, Science)

**Pista (Naruto — Minato Namikaze):** El método de Minato es tan general que domina cualquier arte ninja con el mismo principio de velocidad y precisión, y le enseña ese mismo principio general a Shikamaru.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "A general reinforcement learning algorithm that masters chess, shogi and Go through self-play". Generalizó AlphaGo Zero a un único algoritmo (sin conocimiento específico de un juego más allá de sus reglas) que dominó ajedrez, shogi y Go, todos entrenados con self-play puro desde cero.
- Ejemplo: El patrón genérico 'red neuronal (política+valor) + PUCT + self-play' de AlphaZero es exactamente el que replican FocusNet + el framework de self-play (DRSF) en pokemon-tcg-ai, aplicado al Pokémon TCG en vez de a un juego de mesa clásico.
- Relación con lo demás: Es el paper que formaliza el patrón general que tu proyecto adapta al Pokémon TCG.
- Pregunta de autoevaluación: ¿Qué generalizó AlphaZero respecto a AlphaGo Zero?

### 92/96. CFR original (Zinkevich, Johanson, Bowling & Piccione, 2007, NeurIPS)

**Pista (Naruto — Shikamaru Nara):** Shikamaru calcula, jugada por jugada, cuánto se arrepentiría de cada decisión pasada frente a otra estrategia posible, y comparte ese cálculo de arrepentimiento con Neji.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "Regret Minimization in Games with Incomplete Information". Introdujo el algoritmo CFR — la primera técnica práctica para acercarse a un equilibrio de Nash en juegos de información imperfecta (como el póker) mediante minimización iterativa de arrepentimiento contrafactual.
- Ejemplo: La versión clásica de CFR necesita recorrer y guardar valores para CADA punto de decisión del juego — inviable para un juego tan grande como el Pokémon TCG, de ahí la necesidad de Deep CFR (siguiente concepto).
- Relación con lo demás: Es el paper original detrás del concepto CFR que ya viste en la Fase 5 — ahí lo aplicaste, acá conocés de dónde salió.
- Pregunta de autoevaluación: ¿Qué problema resolvió por primera vez el CFR original?

### 93/96. Deep CFR (Brown, Lerer, Gross & Sandholm, 2019, ICML)

**Pista (Naruto — Neji Hyuga):** Neji reemplaza el cálculo exhaustivo de cada punto ciego con una estimación aprendida por su Byakugan entrenado, y usa esa estimación rápida para evaluar a Killer Bee.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "Deep Counterfactual Regret Minimization". Reemplaza las tablas gigantes de CFR clásico por redes neuronales que aproximan los valores de arrepentimiento, permitiendo aplicar CFR a juegos demasiado grandes para la versión tabular.
- Ejemplo: pokemon-tcg-ai usó específicamente deep CFR (no CFR tabular) para calcular exploitability — exactamente porque el Pokémon TCG es demasiado grande para CFR clásico.
- Relación con lo demás: Es la versión escalable de CFR que tu proyecto usó realmente — la Fase 5 ya te presentó el resultado concreto (gap de +0.157 en exploitability).
- Pregunta de autoevaluación: ¿Qué reemplaza Deep CFR respecto al CFR tabular clásico?

### 94/96. Libratus (Brown & Sandholm, 2017/2018, Science)

**Pista (Naruto — Killer Bee):** Bee es el primero en dominar completamente su Bijuu de forma decisiva, sentando el precedente que después sigue Naruto al liderar la Alianza Shinobi.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "Superhuman AI for heads-up no-limit poker: Libratus beats top professionals". Primera IA en vencer a profesionales humanos de forma decisiva en póker heads-up no-limit (2 jugadores), usando CFR a gran escala más una fase de 'resolución en tiempo real' durante la partida.
- Ejemplo: Demostró que CFR podía escalar a juegos con espacios de información gigantes — la motivación directa detrás de intentar las mismas ideas en otros juegos de cartas complejos como el Pokémon TCG.
- Relación con lo demás: Es uno de los dos hitos (junto con Pluribus) que demostraron que CFR funciona a escala superhumana — la motivación de usar CFR en tu proyecto.
- Pregunta de autoevaluación: ¿Qué logró Libratus por primera vez?

### 95/96. Pluribus (Brown & Sandholm, 2019, Science)

**Pista (Naruto — Naruto liderando la Alianza Shinobi):** A diferencia de un duelo 1 contra 1, Naruto coordina contra MUCHOS enemigos a la vez, y delega en Sai la tarea de evaluar objetivamente cómo va esa coordinación múltiple.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "Superhuman AI for multiplayer poker". Extendió las ideas de Libratus a póker de 6 jugadores (multi-agente, no solo 1 contra 1) — mucho más difícil porque la teoría de equilibrios de Nash es más débil con más de 2 jugadores — y aun así logró nivel superhumano con muchísimo menos cómputo que Libratus.
- Ejemplo: Relevante para pokemon-tcg-ai porque el TCG, como el póker multijugador, no tiene garantías teóricas tan limpias como los juegos de 2 jugadores — igual se puede medir exploitability de forma práctica.
- Relación con lo demás: Extiende las ideas de Libratus a más de 2 jugadores — recordatorio de que el equilibrio de Nash (Fase 5) es una meta más difícil de garantizar cuanto más jugadores hay.
- Pregunta de autoevaluación: ¿Por qué Pluribus fue más difícil de lograr que Libratus?

### 96/96. AIVAT (Burch, Schmid, Moravčík, Bowling et al.)

**Pista (Naruto — Sai):** Sai filtra sus propias emociones ausentes para evaluar objetivamente el verdadero desempeño de sus compañeros en batalla — y ese mismo filtro objetivo, cerrando el círculo completo de esta cadena, es el que le hace llegar de vuelta a Yoda, el primer personaje de toda esta historia.

**Recitá primero de memoria, luego corregí con esto:**

- Concepto: "AIVAT: A New Variance Reduction Technique for Agent Evaluation in Imperfect-Information Games". Propone restar una variable de control (calculada con un modelo del juego) al resultado observado de cada partida, para eliminar gran parte del ruido causado por el azar (las cartas repartidas) sin sesgar la estimación del verdadero desempeño del agente.
- Ejemplo: Es la técnica que pokemon-tcg-ai aplicó como 'AIVAT-Nash' para comparar variantes de mazo con muchas menos partidas simuladas de las que harían falta sin esa reducción de varianza.
- Relación con lo demás: Es el paper detrás de AIVAT, que ya viste en la Fase 5 — junto con CRN, la base estadística real de cómo se evaluó tu proyecto.
- Pregunta de autoevaluación: ¿Qué resta AIVAT al resultado observado de una partida, y para qué?

