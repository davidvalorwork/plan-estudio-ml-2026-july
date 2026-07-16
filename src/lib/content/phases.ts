// Contenido del plan: fases y conceptos. Fuente: ../../../plan-estudio-ml-transformers-rl.md
// Cada concepto se cuenta con un id estable (no cambiar al editar el texto).
//
// `lesson`   = el texto corto que hay que LEER y entender antes de intentar memorizarlo.
// `example`  = un ejemplo concreto/operacional (números, un caso de uso) para ver el
//              concepto funcionando, no solo la definición abstracta.
// `relation` = cómo se conecta este concepto con otros del plan (para que nada quede
//              aislado — ver también el "Mapa de interconexión" en plan-estudio-ml-transformers-rl.md).
// `prompt`   = pregunta corta para autoevaluarte en el quiz.
// `synthesis` (a nivel de Phase) = cómo funcionan todos los conceptos de la fase juntos,
//              como un flujo, no como una lista de definiciones sueltas.
// Todo es redacción propia — no un resumen de ningún libro puntual.

export type Concept = {
  id: string;
  name: string;
  lesson: string;
  example: string;
  relation: string;
  prompt: string;
};

export type Phase = {
  id: string;
  order: number;
  title: string;
  palaceId: string;
  synthesis: string;
  concepts: Concept[];
};

export const phases: Phase[] = [
  {
    id: "fase-0",
    order: 0,
    title: "Matemática base",
    palaceId: "caracas-centro-historico",
    synthesis:
      "En la práctica, estos conceptos se combinan así: representás los datos como vectores/matrices, definís una función de pérdida (a menudo derivada de MLE bajo una distribución de probabilidad), calculás su gradiente (derivadas + regla de la cadena), y usás descenso de gradiente para minimizarla — chequeando con el Hessiano/convexidad si ese mínimo es confiable. Todo esto es el motor detrás de cualquier modelo de ML que viene después.",
    concepts: [
      {
        id: "vectores",
        name: "Vectores y espacios vectoriales",
        lesson:
          "Un vector es una lista ordenada de números que representa una magnitud con dirección (o, en ML, un punto de datos con varias features). Un espacio vectorial es el conjunto de todos los vectores posibles de ese tamaño, junto con dos operaciones que se pueden hacer sin salirse del conjunto: sumar dos vectores y multiplicar un vector por un escalar.",
        example: "v=(3,4) tiene norma ‖v‖=√(3²+4²)=5. Sumar (3,4)+(1,2)=(4,6). Escalar 2·(3,4)=(6,8).",
        relation: "Base de todo lo que sigue: una fila de una matriz, un dato de entrenamiento y un embedding de Transformer son todos, matemáticamente, vectores.",
        prompt: "¿Qué es un espacio vectorial?",
      },
      {
        id: "matrices",
        name: "Matrices y operaciones",
        lesson:
          "Una matriz es una tabla de números, pero lo importante en ML es verla como una función: multiplicar un vector por una matriz transforma ese vector (lo rota, lo escala, lo proyecta). Una capa de una red neuronal, sin la activación, es literalmente una multiplicación de matrices.",
        example: "La matriz de rotación 90° [[0,-1],[1,0]] aplicada al vector (1,0) da (0,1) — rotó el vector 90° en sentido antihorario.",
        relation: "Una capa de red neuronal es una multiplicación de matrices (Fase 2); una tabla completa de datos es una matriz sobre la que se calculan autovalores, SVD o PCA.",
        prompt: "¿Qué representa una matriz como transformación?",
      },
      {
        id: "autovalores",
        name: "Autovalores / autovectores",
        lesson:
          "Un autovector de una matriz es un vector que, al ser transformado por esa matriz, no cambia de dirección — solo se estira o encoge. Ese factor de estiramiento es el autovalor asociado. Encontrar los autovectores de una matriz es encontrar las 'direcciones naturales' de la transformación que representa.",
        example: "Para A=[[2,0],[0,3]], los autovectores son (1,0) y (0,1), con autovalores 2 y 3 — A estira el eje x por 2 y el eje y por 3, sin rotar ninguno de los dos.",
        relation: "Su cálculo es el corazón de PCA (Fase 1) y de los métodos espectrales sobre grafos (Fase 3, vía el Laplaciano).",
        prompt: "¿Qué es un autovector de una matriz?",
      },
      {
        id: "svd",
        name: "SVD (descomposición en valores singulares)",
        lesson:
          "La SVD factoriza cualquier matriz (incluso no cuadrada) en tres matrices: una rotación, un escalado por ejes, y otra rotación (M = U·Σ·Vᵀ). Es la base matemática de PCA, de la compresión de datos y de los sistemas de recomendación (factorización de matrices).",
        example: "Para una matriz que solo estira el eje x por 3 y deja el eje y igual, Σ = diag(3,1) — los valores singulares son directamente los factores de escala.",
        relation: "Generaliza los autovalores a matrices no cuadradas; es la matemática detrás de PCA (Fase 1) y de los modelos de bajo rango (Fase 6).",
        prompt: "¿Qué factoriza la SVD?",
      },
      {
        id: "derivadas",
        name: "Derivadas",
        lesson:
          "La derivada de una función en un punto mide qué tan rápido cambia el valor de la función cuando cambiás un poquito la entrada — es la pendiente de la recta tangente. En ML, la derivada de la función de pérdida respecto a un parámetro te dice hacia dónde y cuánto mover ese parámetro para reducir el error.",
        example: "Si f(x)=x², f'(x)=2x. En x=3, la pendiente es 6: la función crece ~6 unidades por cada unidad que aumenta x, localmente.",
        relation: "Es el bloque atómico de la regla de la cadena, que a su vez es el bloque atómico de backpropagation (Fase 2).",
        prompt: "¿Qué mide una derivada?",
      },
      {
        id: "regla-cadena",
        name: "Regla de la cadena",
        lesson:
          "Si una función es la composición de otras dos (primero aplicás f, después g), la derivada del total es el producto de las derivadas de cada parte: (g∘f)'(x) = g'(f(x))·f'(x). Backpropagation no es más que aplicar esta regla capa por capa en una red neuronal.",
        example: "Si y=(3x+1)², con u=3x+1 y y=u²: dy/dx = dy/du · du/dx = 2u · 3 = 6(3x+1).",
        relation: "Aplicada capa por capa es literalmente backpropagation (Fase 2); aplicada dentro de self-attention es cómo se entrena un Transformer (Fase 4).",
        prompt: "¿Cómo se deriva una composición de funciones?",
      },
      {
        id: "gradiente",
        name: "Gradiente",
        lesson:
          "El gradiente de una función con varias variables es el vector formado por todas sus derivadas parciales. Apunta en la dirección donde la función crece más rápido — por eso, para minimizar una pérdida, te movés en la dirección contraria al gradiente.",
        example: "Para f(x,y)=x²+y², ∇f=(2x,2y). En el punto (1,1), el gradiente es (2,2) — esa es la dirección de crecimiento más rápido desde ahí.",
        relation: "Es lo que calcula backprop (Fase 2) y lo que siguen el descenso de gradiente, SGD, Adam, y hasta policy gradients en RL (Fase 5).",
        prompt: "¿Qué dirección indica el gradiente?",
      },
      {
        id: "jacobiano",
        name: "Jacobiano",
        lesson:
          "Cuando una función toma varias entradas y devuelve varias salidas (no un solo número), el Jacobiano es la matriz que contiene todas las derivadas parciales de cada salida respecto a cada entrada. Es la generalización del gradiente a funciones vectoriales.",
        example: "Para f(x,y)=(x+y, x·y), el Jacobiano es [[1,1],[y,x]] — la primera fila son las derivadas de x+y, la segunda las de x·y.",
        relation: "Aparece en el análisis de estabilidad de RNNs (Fase 2) y en la teoría de criticidad de inicialización de redes (Fase 6).",
        prompt: "¿Qué es la matriz Jacobiana?",
      },
      {
        id: "hessiano",
        name: "Hessiano",
        lesson:
          "El Hessiano es la matriz de segundas derivadas de una función — te dice cómo cambia la curvatura, no solo la pendiente. Se usa para saber si un punto crítico es un mínimo, un máximo o un punto de silla, y en métodos de optimización de segundo orden.",
        example: "Para f(x,y)=x²+y², el Hessiano es [[2,0],[0,2]] — ambos autovalores positivos, lo que confirma que (0,0) es un mínimo (no un punto de silla).",
        relation: "Se conecta con por qué algunas inicializaciones de red son 'críticas' (Fase 6) — analizan la curvatura de la pérdida cerca del inicio del entrenamiento.",
        prompt: "¿Para qué se usa la matriz Hessiana?",
      },
      {
        id: "distribuciones",
        name: "Distribuciones de probabilidad",
        lesson:
          "Una distribución de probabilidad describe qué tan probable es cada valor posible de una variable aleatoria. En ML aparecen constantemente: la Normal/Gaussiana (para ruido y pesos), la Bernoulli/Binomial (para clasificación binaria) y la Categórica (para clasificación multiclase, vía softmax).",
        example: "Lanzar una moneda es Bernoulli(p=0.5). Elegir una clase entre 10 con softmax produce una distribución Categórica sobre esas 10 opciones.",
        relation: "La Categórica es la que produce softmax, usada en clasificación (Fase 1), en atención (Fase 4) y en políticas de RL (Fase 5).",
        prompt: "Nombrá 3 distribuciones comunes en ML.",
      },
      {
        id: "esperanza-varianza",
        name: "Esperanza y varianza",
        lesson:
          "La esperanza (valor esperado) es el promedio ponderado por probabilidad de una variable aleatoria. La varianza mide qué tan dispersos están los valores respecto a esa esperanza. Para variables independientes, la varianza de la suma es la suma de las varianzas (no así la esperanza, que siempre es lineal).",
        example: "Si X e Y son dos dados independientes (Var=35/12 cada uno), Var(X+Y) = 35/12 + 35/12 = 35/6.",
        relation: "La varianza es la mitad del dilema sesgo-varianza (Fase 1) y es justamente lo que CRN busca reducir al comparar agentes de RL (Fase 5).",
        prompt: "¿Cómo se calcula la varianza de una suma de independientes?",
      },
      {
        id: "bayes",
        name: "Teorema de Bayes",
        lesson:
          "P(A|B) = P(B|A)·P(A) / P(B). Te deja actualizar una creencia previa (P(A), el prior) con nueva evidencia (B) para obtener una creencia posterior (P(A|B)). Es la base de la inferencia bayesiana y de clasificadores como Naive Bayes.",
        example:
          "Test médico con 99% de sensibilidad, en una enfermedad con 1% de prevalencia: P(enfermo|positivo) termina siendo mucho menor a 99%, por el peso del denominador (falsos positivos de la mayoría sana).",
        relation: "Base de la inferencia bayesiana en redes de ancho infinito (Fase 6) y de clasificadores probabilísticos en general.",
        prompt: "Escribí el teorema de Bayes.",
      },
      {
        id: "mle",
        name: "Máxima verosimilitud (MLE)",
        lesson:
          "MLE busca los parámetros del modelo que hacen más probable haber observado los datos que realmente observaste. Minimizar el error cuadrático o la entropía cruzada (las pérdidas más comunes en ML) es, matemáticamente, hacer MLE bajo un supuesto de ruido Gaussiano o Categórico respectivamente.",
        example: "Si tirás una moneda 10 veces y salen 7 caras, el MLE de p(cara) es 7/10 — el valor de p que maximiza la probabilidad de haber observado exactamente ese resultado.",
        relation: "Minimizar entropía cruzada (regresión logística en Fase 1, o entrenar un Transformer en Fase 4) es hacer MLE bajo un supuesto de ruido específico.",
        prompt: "¿Qué maximiza el estimador de máxima verosimilitud?",
      },
      {
        id: "descenso-gradiente",
        name: "Descenso de gradiente",
        lesson:
          "Para minimizar una función, actualizás los parámetros restando una fracción (la tasa de aprendizaje) del gradiente: como el gradiente apunta hacia donde la función crece, restarlo te mueve hacia donde decrece. Repetido muchas veces, converge a un mínimo (local, en redes profundas).",
        example: "Minimizar f(x)=x² desde x=5 con tasa 0.1: paso 1 → x=5-0.1·10=4; paso 2 → x=4-0.1·8=3.2; converge hacia x=0.",
        relation: "Es el motor de entrenamiento de prácticamente todo lo que sigue: regresión (Fase 1), redes neuronales (Fase 2) y policy gradients (Fase 5).",
        prompt: "¿Por qué se resta el gradiente y no se suma?",
      },
      {
        id: "convexidad",
        name: "Convexidad",
        lesson:
          "Una función es convexa si el segmento que une dos puntos cualquiera de su gráfica queda siempre por encima (o sobre) la curva — tiene forma de 'tazón'. Si la función de pérdida es convexa, cualquier mínimo local es también el mínimo global, lo cual garantiza que el descenso de gradiente converja al mejor resultado posible.",
        example: "f(x)=x² es convexa (un único mínimo global en 0). f(x)=x⁴-x² NO es convexa: tiene dos mínimos locales, y el descenso de gradiente puede quedar atrapado en cualquiera de ellos según dónde arranque.",
        relation: "La pérdida de regresión lineal/logística (Fase 1) es convexa; la de una red profunda (Fase 2) generalmente no — por eso ahí sí importa la inicialización (Fase 6).",
        prompt: "¿Qué garantiza la convexidad de una función de pérdida?",
      },
      {
        id: "lagrange",
        name: "Multiplicadores de Lagrange",
        lesson:
          "Sirven para optimizar una función sujeta a una restricción (por ejemplo, minimizar el error con la condición de que los pesos sumen 1). Se introduce una variable extra (el multiplicador) que convierte el problema restringido en uno sin restricciones, más fácil de resolver con cálculo normal.",
        example: "Minimizar x²+y² sujeto a x+y=1: L=x²+y²-λ(x+y-1). Derivando e igualando a cero da x=y=0.5 como solución.",
        relation: "Aparece al derivar formalmente la solución de PCA (Fase 1, maximizar varianza sujeta a norma 1) y en formulaciones restringidas de optimización.",
        prompt: "¿Para qué sirven los multiplicadores de Lagrange?",
      },
    ],
  },
  {
    id: "fase-1",
    order: 1,
    title: "ML clásico",
    palaceId: "san-antonio-de-los-altos",
    synthesis:
      "El flujo típico: elegís un modelo (regresión lineal/logística o árboles), lo entrenás minimizando su pérdida, y usás regularización (L1/L2) + validación cruzada para controlar el trade-off sesgo-varianza y evitar overfitting. PCA/k-means son las herramientas cuando no tenés etiquetas (aprendizaje no supervisado).",
    concepts: [
      {
        id: "regresion-lineal",
        name: "Regresión lineal",
        lesson:
          "Modela la relación entre variables como una línea (o hiperplano): predicción = w·x + b. Se ajusta minimizando el error cuadrático medio entre la predicción y el valor real, y tiene solución exacta (ecuación normal) además de la solución iterativa por descenso de gradiente.",
        example: "Con puntos (1,2),(2,4),(3,6), el mejor ajuste es y=2x (pendiente 2, intercepto 0) — error cuadrático total = 0, ajuste perfecto.",
        relation: "Es, matemáticamente, una red neuronal de una sola capa sin activación (Fase 2) — el caso más simple posible.",
        prompt: "¿Cuál es la función de pérdida de la regresión lineal?",
      },
      {
        id: "regresion-logistica",
        name: "Regresión logística",
        lesson:
          "A pesar del nombre, es un modelo de clasificación: toma la misma combinación lineal w·x + b, pero la pasa por una función sigmoide para convertirla en una probabilidad entre 0 y 1. Se entrena minimizando la entropía cruzada, no el error cuadrático.",
        example: "Si z=w·x+b=1.5, sigmoid(1.5)≈0.82 — el modelo predice 82% de probabilidad de la clase positiva.",
        relation: "Su sigmoid es la misma familia de funciones de activación de la Fase 2; su entropía cruzada es la pérdida estándar en clasificación con deep learning.",
        prompt: "¿Qué función de activación usa la regresión logística?",
      },
      {
        id: "overfitting",
        name: "Overfitting / underfitting",
        lesson:
          "Overfitting es cuando el modelo memoriza el ruido de los datos de entrenamiento y rinde mal en datos nuevos (error de entrenamiento bajo, error de validación alto). Underfitting es cuando el modelo es demasiado simple para capturar el patrón real (error alto en ambos). Se detecta comparando las curvas de error de entrenamiento y validación a medida que entrena.",
        example: "Un polinomio de grado 15 ajustado a 10 puntos pasa exactamente por todos (error de train=0) pero oscila salvajemente entre ellos (error de validación alto) — overfitting de manual.",
        relation: "El mismo concepto reaparece en deep learning (Fase 2, por qué se usan batchnorm/dropout) y en RL (Fase 5, sobreajustar a un oponente fijo de self-play).",
        prompt: "¿Cómo se detecta el overfitting con una curva de validación?",
      },
      {
        id: "reg-l1",
        name: "Regularización L1",
        lesson:
          "Suma a la pérdida el valor absoluto de los pesos (λ·Σ|w|). Su efecto característico es empujar muchos pesos exactamente a cero, produciendo modelos dispersos (sparse) — sirve también para selección automática de features.",
        example: "Con L1 fuerte, pesos como [0.3, 0.0, 0.8, 0.0] son típicos — dos features quedaron en exactamente cero, efectivamente descartadas del modelo.",
        relation: "La misma matemática (norma ℓ1) es la base de los modelos dispersos y del compressed sensing de la Fase 6.",
        prompt: "¿Qué efecto tiene L1 sobre los pesos?",
      },
      {
        id: "reg-l2",
        name: "Regularización L2",
        lesson:
          "Suma a la pérdida el cuadrado de los pesos (λ·Σw²). A diferencia de L1, no lleva los pesos a cero exacto, sino que los encoge suavemente hacia valores pequeños — reduce la varianza del modelo sin eliminar features por completo.",
        example: "Con L2 sobre los mismos datos, los pesos podrían quedar en [0.25, 0.05, 0.6, 0.1] — todos se achican, pero ninguno llega a cero exacto.",
        relation: "Es matemáticamente lo mismo que 'weight decay' en el entrenamiento de redes neuronales (Fase 2).",
        prompt: "¿Qué efecto tiene L2 sobre los pesos?",
      },
      {
        id: "validacion-cruzada",
        name: "Validación cruzada",
        lesson:
          "En k-fold cross-validation dividís los datos en k partes, entrenás k veces usando k-1 partes y validás con la restante (rotando cuál es la de validación). Da una estimación más confiable del error real del modelo que una sola partición train/test, especialmente con pocos datos.",
        example: "Con 5-fold CV sobre 100 datos: entrenás 5 veces con 80 datos, validás con los 20 restantes (rotando cuáles), y promediás el error de las 5 corridas.",
        relation: "El mismo principio de 'medir con datos que el modelo no vio' aparece en el 'replay gate' de evaluación real que se usa en RL aplicado (Fase 5, tu propio proyecto).",
        prompt: "¿Qué problema resuelve k-fold cross-validation?",
      },
      {
        id: "arboles",
        name: "Árboles de decisión",
        lesson:
          "Un árbol de decisión parte los datos recursivamente eligiendo, en cada nodo, la feature y el umbral que mejor separan las clases (o reducen el error), usando criterios como impureza de Gini o ganancia de información. Es la base de Random Forest y Gradient Boosting.",
        example: "Para clasificar frutas por peso y color, el árbol podría partir primero en 'peso > 150g' si esa pregunta separa mejor las clases que preguntar primero por el color.",
        relation: "Contraste directo con las redes neuronales (Fase 2): partición de reglas discretas vs. transformación continua de features.",
        prompt: "¿Cómo elige un árbol dónde partir un nodo?",
      },
      {
        id: "pca",
        name: "PCA (Análisis de Componentes Principales)",
        lesson:
          "PCA encuentra las direcciones (componentes principales) donde los datos varían más, y proyecta los datos sobre esas direcciones para reducir dimensiones perdiendo la menor información posible. La primera componente principal es, matemáticamente, el autovector con mayor autovalor de la matriz de covarianza — maximiza la varianza explicada.",
        example: "En datos 2D con forma de elipse alargada en diagonal, la primera componente principal apunta a lo largo de esa diagonal; la segunda queda perpendicular a ella.",
        relation: "Usa directamente SVD/autovalores (Fase 0); se generaliza a PCA robusta (Fase 6) cuando hay outliers/corrupciones en los datos.",
        prompt: "¿Qué maximiza la primera componente principal?",
      },
      {
        id: "kmeans",
        name: "K-means",
        lesson:
          "K-means agrupa datos en k clusters iterando dos pasos: (1) asignar cada punto al centroide más cercano, (2) recalcular cada centroide como el promedio de los puntos asignados a él. Repite hasta que los centroides dejan de moverse significativamente.",
        example: "Con k=2: arrancás con 2 centroides al azar, asignás cada punto al más cercano, recalculás cada centroide como el promedio de sus puntos, y repetís hasta que no cambian.",
        relation: "Ejemplo de aprendizaje NO supervisado, para contrastar con la clasificación supervisada (regresión logística, árboles) de esta misma fase.",
        prompt: "¿Cómo se actualizan los centroides en k-means?",
      },
      {
        id: "sesgo-varianza",
        name: "Sesgo-varianza",
        lesson:
          "El error total de un modelo se descompone en sesgo (qué tan mal se ajusta el modelo en promedio, por ser demasiado simple) y varianza (qué tanto cambian las predicciones si cambiás los datos de entrenamiento, por ser demasiado complejo). Bajar uno típicamente sube el otro — regularización y complejidad del modelo mueven ese dial.",
        example: "Un modelo lineal sobre datos con curva real tiene alto sesgo (error de train ya alto). Un árbol muy profundo con pocos datos tiene baja sesgo pero alta varianza (cambia mucho entre distintos subconjuntos de entrenamiento).",
        relation: "El mismo trade-off reaparece formalmente en la teoría de generalización de redes de ancho infinito (Fase 6, kernel learning).",
        prompt: "¿Qué trade-off describe el dilema sesgo-varianza?",
      },
    ],
  },
  {
    id: "fase-2",
    order: 2,
    title: "Redes neuronales / Deep Learning",
    palaceId: "los-teques",
    synthesis:
      "Una red se entrena así: inicializás los pesos (sin romper la simetría), hacés un forward pass con capas + activaciones no lineales (convolución/pooling para imágenes, o RNN/LSTM para secuencias), calculás la pérdida, corrés backprop (regla de la cadena) para obtener gradientes, y actualizás los pesos con SGD/Adam — usando batchnorm y cuidando el vanishing/exploding gradient para que esto funcione a muchas capas.",
    concepts: [
      {
        id: "perceptron",
        name: "Perceptrón",
        lesson:
          "El perceptrón es la neurona artificial más simple: una suma ponderada de entradas más un sesgo, pasada por una función escalón. Un solo perceptrón solo puede separar clases con una línea recta (frontera lineal) — no puede resolver problemas no linealmente separables como XOR, de ahí la necesidad de apilar capas.",
        example: "Para la función AND (1 solo si ambas entradas son 1), un perceptrón simple funciona. Para XOR (1 solo si difieren), no hay línea recta que separe las clases — el perceptrón simple falla.",
        relation: "Apilar muchos, con no linealidades entre medio, es lo que da una red neuronal profunda — el resto de esta fase.",
        prompt: "¿Qué no puede resolver un perceptrón simple?",
      },
      {
        id: "activaciones",
        name: "Funciones de activación (ReLU = Unidad Lineal Rectificada / sigmoid / tanh / GELU = Unidad Lineal de Error Gaussiano)",
        lesson:
          "Sin una función no lineal entre capas, apilar capas lineales seguiría siendo solo una transformación lineal. Sigmoid/tanh se saturan (su derivada tiende a cero) para entradas grandes, lo que frena el aprendizaje en redes profundas; ReLU (max(0,x)) no se satura del lado positivo, por eso ayuda con el vanishing gradient. GELU es una versión suave de ReLU usada en Transformers.",
        example: "ReLU(-2)=0, ReLU(3)=3. Sigmoid(10)≈0.9999 (ya casi saturada, gradiente≈0). tanh(0)=0, tanh(2)≈0.96.",
        relation: "Su elección afecta directamente la criticidad de la inicialización (Fase 6); GELU es la que usan los Transformers (Fase 4).",
        prompt: "¿Por qué ReLU ayuda con el vanishing gradient?",
      },
      {
        id: "backprop",
        name: "Backpropagation",
        lesson:
          "Backprop calcula el gradiente de la pérdida respecto a cada peso de la red aplicando la regla de la cadena desde la salida hacia la entrada, reutilizando los cálculos intermedios (por eso es mucho más eficiente que calcular cada derivada por separado).",
        example: "Con pérdida L=(y-ŷ)² y ŷ=w·x: dL/dw = dL/dŷ · dŷ/dw = -2(y-ŷ)·x — dos pasos de regla de la cadena encadenados.",
        relation: "Es la regla de la cadena (Fase 0) aplicada recursivamente; es lo que hace posible entrenar tanto CNNs/RNNs (esta fase) como Transformers (Fase 4).",
        prompt: "¿Qué regla matemática usa backprop?",
      },
      {
        id: "sgd",
        name: "SGD (Descenso de Gradiente Estocástico)",
        lesson:
          "El descenso de gradiente 'batch' calcula el gradiente exacto usando todos los datos antes de cada paso — preciso pero lento. SGD (stochastic) actualiza los pesos usando solo un ejemplo (o un mini-batch) por paso: el gradiente es ruidoso, pero se dan muchos más pasos en el mismo tiempo, y en la práctica converge mejor y generaliza mejor.",
        example: "Con 1000 ejemplos y mini-batches de 32, una época hace ~31 actualizaciones de pesos, en vez de 1 sola actualización usando los 1000 datos juntos.",
        relation: "Es el descenso de gradiente (Fase 0) con ruido de mini-batch; su versión sobre una red de política es policy gradients (Fase 5).",
        prompt: "¿En qué se diferencia SGD de descenso de gradiente batch?",
      },
      {
        id: "momentum",
        name: "Momentum",
        lesson:
          "Momentum acumula un promedio móvil de los gradientes anteriores y lo usa para actualizar los pesos, en vez de usar solo el gradiente actual. Esto amortigua el zigzagueo en superficies de pérdida alargadas y acelera la convergencia en la dirección consistente.",
        example: "Con β=0.9: v = 0.9·v_anterior + gradiente_actual, y el paso se da con v, no con el gradiente puro — como una bola que acumula velocidad rodando cuesta abajo.",
        relation: "Es un componente de Adam (siguiente concepto); conceptualmente similar a por qué PPO (Fase 5) evita saltos bruscos en la política.",
        prompt: "¿Qué problema de SGD ataca momentum?",
      },
      {
        id: "adam",
        name: "Adam",
        lesson:
          "Adam combina momentum (promedio móvil del gradiente) con una tasa de aprendizaje adaptativa por parámetro (basada en un promedio móvil del gradiente al cuadrado, como RMSProp). Es el optimizador por defecto en la mayoría de proyectos de deep learning porque converge rápido sin mucho ajuste manual.",
        example: "Adam mantiene, para cada peso, un promedio del gradiente Y un promedio del gradiente al cuadrado — combina ambos en cada paso para decidir tamaño y dirección del ajuste.",
        relation: "El optimizador por defecto tanto para CNNs/RNNs (esta fase) como para Transformers (Fase 4) y redes de política en RL (Fase 5).",
        prompt: "¿Qué combina el optimizador Adam?",
      },
      {
        id: "init-pesos",
        name: "Inicialización de pesos",
        lesson:
          "Si todos los pesos empiezan en cero, todas las neuronas de una capa calculan exactamente lo mismo y reciben el mismo gradiente — la red nunca rompe esa simetría y no puede aprender. Por eso se inicializan con valores aleatorios pequeños (esquemas como Xavier/Glorot o He, calibrados según el tamaño de la capa y la activación usada).",
        example: "Inicialización He para ReLU escala los pesos por √(2/fan_in) — para una capa con 100 entradas, los pesos iniciales rondan ±0.14.",
        relation: "Se conecta directo con 'criticidad' (Fase 6): la inicialización ideal es la que mantiene la varianza estable capa a capa.",
        prompt: "¿Por qué no se inicializan los pesos en cero?",
      },
      {
        id: "batchnorm",
        name: "Batch normalization",
        lesson:
          "BatchNorm normaliza las activaciones de una capa (resta la media, divide por la desviación estándar del mini-batch actual) antes de pasarlas a la siguiente, y luego permite reescalarlas con parámetros aprendidos. Estabiliza y acelera el entrenamiento al evitar que la distribución de activaciones cambie demasiado entre capas y a lo largo del entrenamiento.",
        example: "Activaciones de un mini-batch [2,4,6,8] (media 5, desv.≈2.24) se normalizan a [-1.34,-0.45,0.45,1.34] antes de reescalarlas con los parámetros aprendidos.",
        relation: "Contraste directo con layer norm (Fase 4), que resuelve el mismo problema pero normalizando por ejemplo en vez de por batch.",
        prompt: "¿Qué normaliza BatchNorm y en qué punto de la red?",
      },
      {
        id: "convolucion",
        name: "Convolución (CNN)",
        lesson:
          "Una convolución desliza un mismo filtro pequeño (con los mismos pesos) sobre toda la imagen, explotando la invarianza traslacional: un patrón (como un borde) se puede reconocer sin importar en qué posición de la imagen aparezca, usando muchos menos parámetros que una capa totalmente conectada.",
        example: "Un filtro de bordes 3x3 como [[-1,0,1],[-1,0,1],[-1,0,1]] deslizado sobre una imagen resalta los cambios bruscos de intensidad horizontal (bordes verticales).",
        relation: "Es el caso 'grilla' de la idea general de deep learning geométrico (Fase 3): una operación local con pesos compartidos.",
        prompt: "¿Qué invarianza explota la convolución?",
      },
      {
        id: "pooling",
        name: "Pooling",
        lesson:
          "Una capa de pooling (max-pooling o average-pooling) reduce el tamaño espacial de los mapas de activación resumiendo pequeñas regiones en un solo valor. Baja el costo computacional y da algo de invarianza a pequeñas traslaciones de la entrada.",
        example: "Max-pooling 2x2 sobre [[1,3],[2,4]] da un único valor: 4 (el máximo de esa región).",
        relation: "Ejemplo de cómo las CNN ganan invarianza — contrastalo con Transformers (Fase 4), que no tienen esto y necesitan positional encoding.",
        prompt: "¿Qué logra una capa de pooling?",
      },
      {
        id: "rnn",
        name: "RNN (Red Neuronal Recurrente)",
        lesson:
          "Una RNN procesa una secuencia paso a paso, manteniendo un estado oculto que se actualiza en cada paso y resume lo visto hasta el momento. El problema: al hacer backprop a través de muchos pasos (backprop through time), el gradiente tiende a desvanecerse o explotar, por lo que las RNN simples 'olvidan' dependencias muy lejanas en la secuencia.",
        example: "Al procesar 'el gato negro corre', el estado oculto tras 'el' se combina con 'gato' para el siguiente estado, y así sucesivamente — la info de 'el' se va diluyendo capa a capa.",
        relation: "Se contrasta directamente con self-attention (Fase 4): la RNN procesa secuencial, la atención procesa todo en paralelo.",
        prompt: "¿Qué limitación tienen las RNN simples con secuencias largas?",
      },
      {
        id: "lstm",
        name: "LSTM (Memoria de Largo-Corto Plazo)",
        lesson:
          "LSTM agrega una 'celda de memoria' separada del estado oculto, controlada por compuertas (de olvido, de entrada, de salida) que aprenden cuándo mantener, actualizar o descartar información. Ese camino de memoria con menos transformaciones no lineales es lo que mitiga el vanishing gradient de las RNN simples.",
        example: "Al leer una oración larga, la compuerta de olvido puede 'cerrarse' al terminar una idea y 'abrirse' para la siguiente, preservando información relevante por muchos pasos sin diluirla.",
        relation: "Resuelve el mismo problema (vanishing gradient) que las conexiones residuales resuelven en redes muy profundas (Fase 4).",
        prompt: "¿Qué mecanismo usa LSTM para mitigar el vanishing gradient?",
      },
      {
        id: "vanishing-exploding",
        name: "Vanishing / exploding gradient",
        lesson:
          "Al hacer backprop en una red muy profunda, el gradiente se calcula multiplicando muchas derivadas parciales en cadena. Si esos factores son sistemáticamente menores a 1, el producto tiende a cero (vanishing); si son mayores a 1, tiende a infinito (exploding) — en ambos casos, las capas más tempranas casi no aprenden o el entrenamiento se vuelve inestable.",
        example: "Si cada capa multiplica el gradiente por 0.5 y hay 20 capas, el gradiente que llega a la primera capa es 0.5²⁰ ≈ 0.000001 — prácticamente cero.",
        relation: "El mismo fenómeno se analiza formalmente con 'criticidad' en la Fase 6 (teoría de inicialización de redes).",
        prompt: "¿Por qué ocurre el vanishing gradient en redes profundas?",
      },
    ],
  },
  {
    id: "fase-3",
    order: 3,
    title: "Deep learning geométrico / GNNs",
    palaceId: "chacao-altamira",
    synthesis:
      "La idea que atraviesa toda la fase: tomás una operación local con pesos compartidos (como la convolución) y la generalizás a estructuras no-euclidianas (mallas 3D, grafos) usando el Laplaciano/métodos espectrales — sentando las bases conceptuales para entender la atención como el caso más general de todos (grafo completo).",
    concepts: [
      {
        id: "cnn-extrinseca",
        name: "CNN (Red Neuronal Convolucional) extrínseca (sobre formas 3D)",
        lesson:
          "'Extrínseca' significa que el método procesa la forma 3D en relación al espacio ambiente donde está embebida (por ejemplo, una representación voxel o una nube de puntos con coordenadas x,y,z), en vez de trabajar con la superficie en sí misma.",
        example: "Representar una silla 3D como una grilla de vóxeles (como píxeles pero en 3D) y aplicarle convoluciones 3D estándar es un enfoque extrínseco.",
        relation: "Caso particular del framework general de deep learning geométrico, que también incluye grillas (CNN, Fase 2) y grafos completos (atención, Fase 4).",
        prompt: "¿Qué significa 'extrínseca' en este contexto?",
      },
      {
        id: "cnn-intrinseca",
        name: "CNN (Red Neuronal Convolucional) intrínseca",
        lesson:
          "Una CNN intrínseca opera directamente sobre la superficie de la forma (la malla/manifold), usando propiedades geométricas propias de esa superficie (distancias geodésicas, curvatura) — es invariante a cómo la forma está rotada o embebida en el espacio 3D, a diferencia de los métodos extrínsecos.",
        example: "En la malla de una cara humana, medir distancias 'caminando sobre la superficie' (geodésicas): la nariz y la mejilla están cerca en línea recta por el aire, pero lejos caminando sobre la piel.",
        relation: "Usa el Laplaciano de grafo/malla (más adelante en esta fase) para definir operaciones invariantes a la forma.",
        prompt: "¿Qué diferencia a una CNN intrínseca de una extrínseca?",
      },
      {
        id: "metodos-espectrales",
        name: "Métodos espectrales sobre grafos",
        lesson:
          "Se diagonaliza el operador Laplaciano del grafo (o de la malla) para obtener sus autovalores y autovectores — un equivalente de la transformada de Fourier pero para datos con estructura de grafo. Esto permite definir filtros/convoluciones en el 'dominio de frecuencia' del grafo.",
        example: "Los autovectores del Laplaciano de un grafo de red social pueden usarse para detectar comunidades (grupos de nodos muy conectados entre sí).",
        relation: "Usa directamente los autovalores/autovectores de la Fase 0, aplicados a un grafo en vez de a una matriz cualquiera.",
        prompt: "¿Qué operador se diagonaliza en métodos espectrales?",
      },
      {
        id: "laplaciano-grafo",
        name: "Laplaciano de grafo",
        lesson:
          "El Laplaciano de un grafo (L = D − A, grado menos adyacencia) captura cómo se conecta cada nodo con sus vecinos. Sus autovectores generalizan las funciones seno/coseno de Fourier a un grafo, y sus autovalores indican qué tan 'suave' o 'oscilante' es un patrón sobre esa estructura.",
        example: "Para un grafo triángulo (3 nodos, todos conectados entre sí): L = [[2,-1,-1],[-1,2,-1],[-1,-1,2]] — cada nodo tiene grado 2 en la diagonal.",
        relation: "Sus autovectores son la base de los métodos espectrales; conceptualmente es el puente hacia pensar la atención (Fase 4) como una operación sobre un grafo.",
        prompt: "¿Qué información captura el Laplaciano de un grafo?",
      },
      {
        id: "atencion-como-conv",
        name: "Atención como convolución generalizada",
        lesson:
          "Una convolución es una operación local con pesos compartidos sobre una grilla (cada píxel mira a sus vecinos fijos). La idea unificadora de deep learning geométrico es que la self-attention es la misma clase de operación pero sobre un grafo completo (todos los tokens conectados con todos), con pesos que además se calculan dinámicamente según el contenido, no fijos.",
        example: "En una oración de 10 palabras, self-attention permite que la palabra 'lo' atienda directamente a la palabra 8 posiciones atrás a la que se refiere — algo que una convolución de ventana chica no logra en un solo paso.",
        relation: "Es el puente directo hacia el self-attention de la Fase 4 — la misma idea de 'operación local con pesos compartidos' generalizada al extremo.",
        prompt: "¿Sobre qué estructura 'convoluciona' la atención?",
      },
    ],
  },
  {
    id: "fase-4",
    order: 4,
    title: "Transformers",
    palaceId: "plaza-venezuela",
    synthesis:
      "Un Transformer combina: self-attention multi-cabeza (con positional encoding/RoPE para saber el orden) + conexiones residuales + layer norm (en pre-norm o post-norm) apiladas muchas veces, en arquitectura encoder-decoder, decoder-only o encoder-only según la tarea. Después de preentrenado, se ajusta con SFT/LoRA/RLHF según qué tan sutil sea el comportamiento que se busca lograr.",
    concepts: [
      {
        id: "self-attention",
        name: "Self-attention (Q/K/V)",
        lesson:
          "Cada token genera tres vectores: Query (qué estoy buscando), Key (qué ofrezco) y Value (el contenido que aporto si me prestan atención). La atención de un token hacia otro se calcula comparando su Query con la Key del otro (producto punto, escalado por √d y pasado por softmax), y el resultado pondera los Values de todos los tokens.",
        example: "En 'el banco estaba cerrado', el token 'banco' compara su Query con las Keys de las demás palabras (alta similitud con 'cerrado') y pondera los Values para desambiguar que es una institución, no un asiento.",
        relation: "Generaliza la convolución (Fase 2/3) a un grafo completo; su softmax es la misma familia de funciones que en regresión logística (Fase 1) y en políticas de RL (Fase 5).",
        prompt: "¿Qué representan Query, Key y Value?",
      },
      {
        id: "multi-head",
        name: "Atención multi-cabeza",
        lesson:
          "En vez de calcular una sola atención, se calculan varias en paralelo ('cabezas'), cada una con sus propias proyecciones de Q/K/V, y después se concatenan los resultados. Cada cabeza puede aprender a atender a un tipo distinto de relación (sintáctica, semántica, posicional) en paralelo.",
        example: "Con 8 cabezas, una podría especializarse en relaciones sujeto-verbo y otra en correferencia de pronombres, ambas calculadas en paralelo sobre la misma entrada.",
        relation: "Extensión directa de self-attention; conceptualmente similar a tener varios filtros en paralelo en una capa convolucional (Fase 2).",
        prompt: "¿Por qué usar varias cabezas de atención en vez de una?",
      },
      {
        id: "pos-encoding-sin",
        name: "Positional encoding sinusoidal",
        lesson:
          "La self-attention por sí sola no distingue el orden de los tokens (es una operación simétrica sobre el conjunto). El encoding posicional sinusoidal suma a cada token un vector hecho de funciones seno/coseno de distinta frecuencia según su posición, para inyectar esa información de orden.",
        example: "Sin encoding posicional, 'perro muerde hombre' y 'hombre muerde perro' generarían la misma representación de atención — el encoding es lo que distingue la posición de cada palabra.",
        relation: "Resuelve un problema que las RNN (Fase 2) no tienen, porque ahí el orden viene gratis por la recurrencia secuencial.",
        prompt: "¿Por qué un Transformer necesita codificación posicional?",
      },
      {
        id: "rope",
        name: "RoPE (Rotary Position Embedding — incrustación posicional rotatoria)",
        lesson:
          "RoPE (Rotary Position Embedding) codifica la posición rotando los vectores Query/Key en función de su posición, en vez de sumarles un vector fijo. Esto hace que la atención dependa naturalmente de la distancia relativa entre tokens, y generaliza mejor a secuencias más largas que las vistas en entrenamiento — por eso lo prefieren los LLMs modernos de contexto largo.",
        example: "RoPE rota el vector Query de un token por un ángulo proporcional a su posición; la atención entre dos tokens termina dependiendo del ángulo relativo entre ellos (la distancia), no de sus posiciones absolutas.",
        relation: "Evolución del positional encoding sinusoidal — hoy el estándar en casi cualquier LLM decoder-only moderno.",
        prompt: "¿Qué ventaja tiene RoPE sobre el encoding sinusoidal original?",
      },
      {
        id: "encoder-decoder",
        name: "Arquitectura encoder-decoder",
        lesson:
          "El encoder procesa toda la secuencia de entrada con self-attention completa (cada token ve a todos). El decoder genera la salida token por token, con self-attention 'enmascarada' (cada token solo ve los anteriores) más una capa de atención cruzada que consulta las representaciones del encoder.",
        example: "Para traducir 'the cat' → 'el gato': el encoder procesa 'the cat' completo; el decoder genera 'el' consultando al encoder, y después 'gato' viendo 'el' + consultando al encoder de nuevo.",
        relation: "Generaliza la idea de las RNN encoder-decoder (secuencia a secuencia) previas a los Transformers, reemplazando la recurrencia por atención.",
        prompt: "¿Qué hace distinto al decoder del encoder?",
      },
      {
        id: "decoder-only",
        name: "Decoder-only (estilo GPT)",
        lesson:
          "Un modelo decoder-only elimina el encoder por completo: solo tiene self-attention enmascarada (cada token ve únicamente los anteriores) y se entrena a predecir el siguiente token. Alcanza para generación de texto porque no necesita 'traducir' de una secuencia de entrada a otra — genera directamente, condicionado en todo lo anterior.",
        example: "Dado 'El cielo es', un modelo decoder-only predice el siguiente token ('azul') mirando solo las palabras anteriores, y repite el proceso token por token.",
        relation: "Es la arquitectura que se ajusta con RLHF/PPO (Fase 5) para producir asistentes conversacionales.",
        prompt: "¿Por qué un modelo decoder-only basta para generación de texto?",
      },
      {
        id: "encoder-only",
        name: "Encoder-only (estilo BERT)",
        lesson:
          "Un modelo encoder-only usa self-attention completa (cada token ve a todos, incluso los que vienen después) y se entrena con tareas como predecir palabras enmascaradas. Conviene para tareas de comprensión/clasificación (análisis de sentimiento, extracción de respuestas) donde tenés toda la entrada disponible de una vez, no para generar texto secuencialmente.",
        example: "BERT recibe 'el gato [MASK] en la alfombra' viendo la oración COMPLETA (incluso lo que sigue al hueco) para predecir 'duerme'.",
        relation: "Contraste directo con decoder-only: ve toda la secuencia a la vez, por eso no sirve para generar texto token por token.",
        prompt: "¿Para qué tareas conviene un encoder-only?",
      },
      {
        id: "layer-norm",
        name: "Layer normalization",
        lesson:
          "A diferencia de BatchNorm (que normaliza a través del batch, para cada feature), layer norm normaliza a través de las features, para cada ejemplo individual. Esto la hace independiente del tamaño del batch, lo cual es clave para Transformers que suelen entrenarse con secuencias de longitud variable.",
        example: "Para el vector de activaciones de UN token [2,4,6,8] (media 5), layer norm lo normaliza usando esa media/desviación de ESE vector — sin mirar qué otros ejemplos hay en el batch.",
        relation: "Reemplaza a batchnorm (Fase 2) en Transformers, precisamente porque no depende del tamaño del batch.",
        prompt: "¿Qué normaliza layer norm, a diferencia de batch norm?",
      },
      {
        id: "pre-post-norm",
        name: "Pre-norm vs. post-norm",
        lesson:
          "En post-norm (arquitectura original del paper de Transformers), la normalización va después de sumar la conexión residual. En pre-norm, va antes, dentro de cada sub-bloque. Pre-norm mantiene gradientes más estables en redes muy profundas porque el camino residual queda 'limpio' (sin pasar por la normalización), lo que evita que el entrenamiento se vuelva inestable a muchas capas.",
        example: "Pre-norm calcula x + Atención(Norm(x)); post-norm calcula Norm(x + Atención(x)) — la diferencia parece chica pero cambia mucho la estabilidad a 100+ capas.",
        relation: "Interactúa directamente con las conexiones residuales (siguiente concepto) — analizado con rigor matemático en la Fase 6 (Residual Learning).",
        prompt: "¿Por qué pre-norm ayuda en redes muy profundas?",
      },
      {
        id: "residuales",
        name: "Conexiones residuales",
        lesson:
          "Una conexión residual suma la entrada de un bloque directamente a su salida (salida = entrada + F(entrada)), en vez de solo devolver F(entrada). Esto le da al gradiente un 'atajo' para fluir directo hacia atrás sin atravesar todas las transformaciones no lineales, lo que permite entrenar redes mucho más profundas sin que el gradiente se desvanezca.",
        example: "Si un bloque no aprendió nada útil, F(x)≈0 y la salida x+F(x)≈x — la red puede 'saltarse' bloques inútiles en vez de perder el gradiente a través de ellos.",
        relation: "El mismo mecanismo que en ResNets (Fase 2, implícito); su análisis matemático riguroso está en la Fase 6 (Residual Learning, Roberts & Yaida).",
        prompt: "¿Qué problema resuelven las conexiones residuales?",
      },
      {
        id: "finetuning-variantes",
        name: "SFT (Ajuste Fino Supervisado) / LoRA (Adaptación de Bajo Rango) / QLoRA (LoRA Cuantizado) / RLHF (Aprendizaje por Refuerzo con Feedback Humano)",
        lesson:
          "SFT (supervised fine-tuning) reentrena todos o casi todos los pesos del modelo con ejemplos etiquetados. LoRA congela los pesos originales y solo entrena matrices pequeñas de bajo rango que se suman a ellos — mucho más barato en memoria. QLoRA hace lo mismo pero con el modelo base cuantizado (menos precisión numérica) para bajar aún más el costo. RLHF ajusta el modelo con aprendizaje por refuerzo usando una señal de recompensa aprendida de preferencias humanas.",
        example: "Para adaptar un LLM de 7B parámetros a un dominio específico con una sola GPU chica, LoRA podría entrenar solo ~0.1% de los parámetros (matrices pequeñas) en vez de los 7B completos.",
        relation: "RLHF conecta directo con toda la Fase 5 (policy gradients, PPO) — es RL aplicado a ajustar un Transformer ya entrenado.",
        prompt: "¿Cuándo elegirías LoRA en vez de fine-tuning completo?",
      },
    ],
  },
  {
    id: "fase-5",
    order: 5,
    title: "Reinforcement Learning",
    palaceId: "la-panamericana",
    synthesis:
      "El ciclo completo de RL: definís el MDP, y aprendés V/Q resolviendo Bellman — con programación dinámica si conocés el modelo, o con Monte Carlo/TD si aprendés de experiencia (Q-learning off-policy, SARSA on-policy). Con espacios grandes, aproximás Q con una red (DQN) o parametrizás la política directamente (policy gradients, actor-crítico, PPO). En juegos multi-agente, self-play + búsqueda (PUCT) generan al oponente, y Nash/CFR/exploitability/AIVAT/CRN son las herramientas para medir qué tan buena es tu política de verdad — exactamente el combo que usa tu proyecto pokemon-tcg-ai.",
    concepts: [
      {
        id: "mdp",
        name: "Proceso de decisión de Markov (MDP)",
        lesson:
          "Un MDP se define por: un conjunto de estados, un conjunto de acciones, una función de transición (probabilidad de llegar a un estado dado el estado y acción actuales) y una función de recompensa. La propiedad de Markov dice que el futuro solo depende del estado actual, no de cómo llegaste ahí.",
        example: "En una grilla 4x4: estados = las 16 celdas; acciones = {arriba,abajo,izq,der}; transición determinística (moverse en esa dirección); recompensa = +1 al llegar a la meta, 0 en el resto.",
        relation: "El framework base sobre el que se construyen Q-learning, policy gradients y todo lo que sigue en esta fase.",
        prompt: "¿Qué componentes definen un MDP?",
      },
      {
        id: "funcion-valor",
        name: "Función de valor",
        lesson:
          "V(s) estima la recompensa total esperada (descontada en el tiempo) que vas a obtener a partir del estado s, si seguís una política dada. Es una forma de resumir 'qué tan bueno es estar en este estado' sin tener que simular todo el futuro cada vez.",
        example: "En la grilla, V(celda pegada a la meta) es alto (cerca de +1 descontado); V(celda lejana) es más bajo porque la recompensa llega descontada por muchos pasos.",
        relation: "Se relaciona con Q (siguiente concepto): V(s) es, en esencia, el valor esperado de Q sobre las acciones que tomaría la política.",
        prompt: "¿Qué mide la función de valor de un estado?",
      },
      {
        id: "funcion-q",
        name: "Función Q (valor-acción)",
        lesson:
          "Q(s,a) estima la recompensa total esperada si tomás la acción a en el estado s y de ahí en adelante seguís la política. A diferencia de V(s), Q te dice directamente qué acción conviene tomar en cada estado, sin necesitar un modelo de las transiciones.",
        example: "En un cruce donde podés ir 'recto' o 'doblar', Q(estado,recto) y Q(estado,doblar) te dicen directamente cuál acción da más recompensa futura, sin comparar V de los estados resultantes.",
        relation: "Es lo que aprenden Q-learning y DQN; su versión con red neuronal es exactamente aplicar deep learning (Fase 2) a RL.",
        prompt: "¿En qué se diferencia Q de la función de valor V?",
      },
      {
        id: "bellman",
        name: "Ecuación de Bellman",
        lesson:
          "Expresa el valor de un estado como la recompensa inmediata más el valor descontado del estado siguiente: V(s) = E[r + γ·V(s')]. Es una relación recursiva — el valor de todo el futuro se puede calcular en términos del valor 'un paso más adelante', lo cual es la base de casi todos los algoritmos de RL.",
        example: "Si estás a un paso de la meta con recompensa 10 y γ=0.9: V(s) = 10 + 0.9·V(meta).",
        relation: "La ecuación detrás de programación dinámica, Q-learning, SARSA y DQN — todo lo que sigue en esta fase es una forma distinta de resolverla.",
        prompt: "¿Qué relación recursiva expresa Bellman?",
      },
      {
        id: "prog-dinamica",
        name: "Programación dinámica",
        lesson:
          "Requiere conocer el modelo completo del MDP (las probabilidades de transición y recompensa) para resolver la ecuación de Bellman exactamente, iterando sobre todos los estados. Monte Carlo y TD, en cambio, aprenden solo a partir de experiencia (episodios simulados o reales), sin necesitar ese modelo.",
        example: "Con las probabilidades de transición de la grilla conocidas, podés resolver el sistema de ecuaciones de Bellman para las 16 celdas directamente, sin simular ni un solo episodio.",
        relation: "Requiere el modelo completo del MDP; Monte Carlo y TD (siguientes conceptos) son las alternativas cuando no lo tenés.",
        prompt: "¿Qué requiere programación dinámica que Monte Carlo no?",
      },
      {
        id: "monte-carlo",
        name: "Métodos de Monte Carlo",
        lesson:
          "Monte Carlo actualiza el valor de un estado recién al final de un episodio completo, usando la recompensa total realmente obtenida desde ese estado en adelante. Es simple y sin sesgo, pero tiene que esperar a que termine el episodio y tiene alta varianza.",
        example: "Jugás un episodio completo de la grilla, anotás la recompensa total obtenida desde cada estado visitado, y promediás esos retornos sobre muchos episodios para estimar V(s).",
        relation: "Se combina con TD (siguiente concepto) para dar los métodos modernos; compará con cómo self-play (más adelante) genera esos episodios de entrenamiento.",
        prompt: "¿Cuándo actualiza Monte Carlo el valor de un estado?",
      },
      {
        id: "td-learning",
        name: "Diferencias temporales (TD)",
        lesson:
          "TD actualiza el valor de un estado usando la recompensa inmediata más la estimación actual del valor del siguiente estado (bootstrapping), sin esperar a que termine el episodio — combina la actualización paso a paso de programación dinámica con el aprendizaje a partir de experiencia de Monte Carlo.",
        example: "TD(0): V(s) ← V(s) + α·[r + γ·V(s') − V(s)] — se actualiza apenas se da un paso, usando tu propia estimación de V(s'), sin esperar el final del episodio.",
        relation: "Es la base de Q-learning y SARSA (siguientes dos conceptos) — ambos son variantes de TD aplicadas a la función Q.",
        prompt: "¿Qué combina TD de Monte Carlo y programación dinámica?",
      },
      {
        id: "q-learning",
        name: "Q-learning",
        lesson:
          "Q-learning aprende Q(s,a) actualizando hacia la mejor acción posible en el siguiente estado, sin importar qué acción realmente tomó el agente ahí (max sobre a'). Por eso es off-policy: puede aprender la política óptima mientras se comporta de forma exploratoria/distinta.",
        example: "Q(s,a) ← Q(s,a) + α·[r + γ·max_a' Q(s',a') − Q(s,a)] — usa el MEJOR Q del siguiente estado, sin importar la acción que realmente se vaya a tomar ahí.",
        relation: "Al ser off-policy, se puede combinar con un replay buffer (ver DQN, más adelante) — cosa que un algoritmo on-policy como SARSA no puede hacer tan directamente.",
        prompt: "¿Q-learning es on-policy u off-policy?",
      },
      {
        id: "sarsa",
        name: "SARSA (State-Action-Reward-State-Action)",
        lesson:
          "SARSA actualiza Q(s,a) usando la acción que el agente realmente va a tomar a continuación (según su propia política, incluyendo exploración), no la mejor acción posible. Por eso es on-policy — aprende el valor de la política que efectivamente está siguiendo, no de la política óptima.",
        example: "Q(s,a) ← Q(s,a) + α·[r + γ·Q(s',a') − Q(s,a)] — usa el Q de la acción a' que realmente se va a tomar (con exploración incluida), no el máximo posible.",
        relation: "Contraste directo con Q-learning; PPO (más adelante en esta fase) también es on-policy, por la misma razón estructural.",
        prompt: "¿En qué se diferencia SARSA de Q-learning?",
      },
      {
        id: "policy-gradients",
        name: "Policy gradients",
        lesson:
          "En vez de aprender valores y derivar una política de ellos, policy gradients parametriza la política directamente (por ejemplo, con una red neuronal) y ajusta sus parámetros con descenso de gradiente para maximizar la recompensa esperada — subiendo la probabilidad de las acciones que llevaron a buena recompensa.",
        example: "Si la acción 'derecha' llevó a buena recompensa, se sube directamente la probabilidad de elegir 'derecha' en ese estado, sin pasar por estimar Q o V primero.",
        relation: "Es el fundamento de actor-crítico y PPO (siguientes conceptos); usa el mismo descenso de gradiente de la Fase 0/2, pero sobre una red de política.",
        prompt: "¿Qué se optimiza directamente en policy gradients?",
      },
      {
        id: "actor-critico",
        name: "Actor-crítico",
        lesson:
          "El 'actor' es la política que elige acciones; el 'crítico' es una función de valor que evalúa qué tan buena fue esa elección, dando una señal con menos varianza que usar solo el retorno total de Monte Carlo. El actor se actualiza usando esa evaluación del crítico en vez de esperar el resultado final del episodio.",
        example: "El actor propone 'ir a la izquierda'; el crítico evalúa 'esa acción vale +2 más que el promedio de este estado' — esa ventaja es la que ajusta al actor.",
        relation: "Combina policy gradients con una función de valor (Q o V, conceptos anteriores) — el crítico reutiliza directamente Bellman/TD de esta misma fase.",
        prompt: "¿Qué rol cumple el 'crítico'?",
      },
      {
        id: "dqn",
        name: "Deep Q-Networks (DQN)",
        lesson:
          "DQN aproxima Q(s,a) con una red neuronal en vez de una tabla, para poder manejar espacios de estados enormes (como píxeles de un videojuego). El replay buffer guarda transiciones pasadas y entrena con muestras aleatorias de ahí (no solo la última), rompiendo la correlación temporal entre pasos consecutivos y estabilizando el entrenamiento.",
        example: "Para jugar Breakout desde píxeles, DQN guarda millones de transiciones (estado,acción,recompensa,siguiente estado) y entrena con mini-batches aleatorios de ahí, no con la jugada recién ocurrida.",
        relation: "Aplica deep learning (Fase 2) a Q-learning; el replay buffer funciona precisamente porque Q-learning es off-policy.",
        prompt: "¿Para qué sirve el replay buffer en DQN?",
      },
      {
        id: "ppo",
        name: "PPO (Optimización de Política Proximal)",
        lesson:
          "PPO es un método de policy gradient que limita ('clippea') cuánto puede cambiar la política en cada actualización respecto a la política anterior. Esto evita pasos demasiado grandes que colapsen el entrenamiento, manteniéndolo estable sin necesitar la matemática más compleja de métodos como TRPO.",
        example: "Si la nueva política querría subir 5x la probabilidad de una acción, PPO la limita (clip) a un rango como 1.2x, para evitar un salto que descarrile el entrenamiento.",
        relation: "El algoritmo detrás de RLHF (Fase 4) — así es como se ajustan los LLMs modernos con feedback humano.",
        prompt: "¿Qué limita PPO para estabilizar el entrenamiento?",
      },
      {
        id: "self-play",
        name: "Self-play",
        lesson:
          "El agente entrena jugando contra versiones de sí mismo (pasadas o actuales). A medida que mejora, su oponente (él mismo) también mejora, generando automáticamente un currículum de dificultad creciente sin necesidad de un oponente externo diseñado a mano.",
        example: "En pokemon-tcg-ai, el framework DRSF entrena a FocusNet jugando contra versiones anteriores de sí mismo, en vez de un oponente fijo — el desafío sube automáticamente con el agente.",
        relation: "Se usa junto con PUCT (siguiente concepto) en pokemon-tcg-ai para entrenar sin un oponente externo diseñado a mano.",
        prompt: "¿Por qué el self-play genera un curriculum automático?",
      },
      {
        id: "puct",
        name: "Búsqueda PUCT (Predictor + Upper Confidence bound aplicado a Árboles)",
        lesson:
          "PUCT (usado en AlphaZero) combina búsqueda en árbol tipo MCTS (Monte Carlo Tree Search — búsqueda en árbol de Monte Carlo) con una red neuronal que aporta dos cosas: una política previa (qué jugadas explorar primero) y una estimación de valor (para no tener que simular hasta el final del juego). Eso hace la búsqueda mucho más eficiente que MCTS puro con simulaciones aleatorias.",
        example: "En pokemon-tcg-ai, la búsqueda PUCT usa FocusNet para sugerir qué jugadas explorar primero (cabeza de política) y para evaluar posiciones sin jugar hasta el final (cabeza de valor).",
        relation: "Combina deep learning (Fase 2, la red da política+valor) con búsqueda en árbol — el corazón técnico de tu proyecto pokemon-tcg-ai.",
        prompt: "¿Qué combina PUCT (a diferencia de MCTS puro)?",
      },
      {
        id: "nash",
        name: "Equilibrio de Nash",
        lesson:
          "Un conjunto de estrategias (una por jugador) está en equilibrio de Nash si ningún jugador puede mejorar su resultado cambiando solo su propia estrategia, dado que los demás mantienen la suya. Es el concepto de 'estabilidad' central en teoría de juegos multi-agente.",
        example: "En piedra-papel-tijera, jugar cada opción con probabilidad 1/3 es el equilibrio de Nash — cualquier estrategia fija distinta puede ser explotada por el oponente.",
        relation: "Es el objetivo que CFR (siguiente concepto) busca alcanzar de forma iterativa, y que exploitability (más adelante) mide qué tan lejos estás de lograr.",
        prompt: "¿Qué condición define un equilibrio de Nash?",
      },
      {
        id: "cfr",
        name: "CFR (Counterfactual Regret Minimization)",
        lesson:
          "CFR minimiza iterativamente el 'arrepentimiento contrafactual' — cuánto mejor le habría ido a un jugador en el pasado si hubiera jugado distinto en cada punto de decisión, asumiendo que el resto del juego no cambia. Minimizar ese arrepentimiento acumulado converge, en promedio, a un equilibrio de Nash. Es la familia de algoritmos detrás de los mejores bots de póker (Libratus, Pluribus).",
        example: "En pokemon-tcg-ai se usó Best Response + deep CFR para medir qué tan lejos está la política heurística del equilibrio de Nash — encontraron un gap real de +0.157 en exploitability.",
        relation: "Herramienta para acercarse al equilibrio de Nash; en tu proyecto se usó junto con Best Response para medir el gap real a Nash.",
        prompt: "¿Qué minimiza CFR iterativamente?",
      },
      {
        id: "exploitability",
        name: "Exploitability",
        lesson:
          "Mide cuánto podría ganarle un oponente perfecto (que juega la mejor respuesta posible) a tu política, comparado con el equilibrio. Una exploitability de cero significa que estás jugando un equilibrio de Nash exacto — nadie puede explotarte.",
        example: "Si tu política tiene exploitability de 0.15, un oponente perfecto te ganaría en promedio 0.15 unidades de recompensa más de lo que un jugador en equilibrio te ganaría.",
        relation: "La métrica que resume si CFR/Nash se alcanzaron o no; se usó en tu proyecto para confirmar dónde el agente heurístico se queda corto.",
        prompt: "¿Qué mide la exploitability de una política?",
      },
      {
        id: "aivat",
        name: "AIVAT (técnica de reducción de varianza para evaluar agentes — el nombre no es una sigla de expansión estándar, viene del título del paper)",
        lesson:
          "AIVAT es una técnica de reducción de varianza para evaluar agentes en juegos con mucho azar (como el póker): resta una 'variable de control' calculada a partir del valor esperado bajo un modelo del juego, de forma que el resultado observado se limpia de parte del ruido aleatorio sin sesgar la estimación. Permite comparar dos agentes con muchas menos partidas de las que harían falta sin esa corrección.",
        example: "En pokemon-tcg-ai, AIVAT-Nash se usó para comparar dos variantes de mazo con muchas menos partidas simuladas de las que harían falta sin esa reducción de varianza.",
        relation: "Se apoya en CRN (siguiente concepto) y en un modelo del juego para limpiar ruido al comparar agentes.",
        prompt: "¿Para qué se usa AIVAT en evaluación de agentes?",
      },
      {
        id: "crn",
        name: "Common Random Numbers (CRN)",
        lesson:
          "Al comparar dos variantes de un agente, CRN usa exactamente la misma secuencia de números aleatorios (mismas cartas, mismos eventos de azar) para ambas simulaciones. Así, la diferencia observada entre los dos resultados se debe solo a la diferencia real entre los agentes, no a que a uno le tocó mejor suerte — reduce muchísimo la varianza de la comparación (A/B pareado).",
        example: "En pokemon-tcg-ai, CRN redujo el error estándar (SEM) entre 15-20% en comparaciones reales de matchups — mismas cartas repartidas para ambas variantes comparadas.",
        relation: "Se usa junto con AIVAT para evaluar variantes de agente con menos partidas — la base estadística de cualquier comparación seria de A/B en RL.",
        prompt: "¿Por qué CRN reduce la varianza al comparar dos variantes?",
      },
    ],
  },
  {
    id: "fase-6",
    order: 6,
    title: "Electivos avanzados",
    palaceId: "caracas-parque-central",
    synthesis:
      "Estos electivos comparten una pregunta: ¿por qué funciona el deep learning? RG flow/criticidad explican la inicialización; Bayesian learning explica la generalización en el límite de ancho infinito; sparse models/compressed sensing/PCA robusta explican por qué los datos de alta dimensión suelen tener estructura de baja dimensión aprovechable.",
    concepts: [
      {
        id: "rg-flow",
        name: "RG flow (Flujo de Grupo de Renormalización) / NTK (Núcleo Tangente Neuronal)",
        lesson:
          "El flujo de grupo de renormalización (tomado de la física estadística) describe cómo las estadísticas de las activaciones de una red se transforman capa a capa, como si cada capa fuera un 'paso' de renormalización. El NTK (Neural Tangent Kernel) describe cómo evoluciona la función que calcula la red durante el entrenamiento, en el límite de redes muy anchas.",
        example: "En una red con muchas capas, el RG flow describe cómo la varianza de las preactivaciones (antes de la no-linealidad) se transforma capa a capa, de forma análoga a cómo un sistema físico cambia de escala.",
        relation: "Explica formalmente por qué la inicialización 'crítica' (siguiente concepto) evita vanishing/exploding gradient — la versión rigurosa de un problema ya visto en Fase 2.",
        prompt: "¿Qué describe el flujo de grupo de renormalización en redes?",
      },
      {
        id: "criticidad",
        name: "Criticidad (inicialización)",
        lesson:
          "Una inicialización 'crítica' es aquella donde la varianza de las activaciones (y del gradiente) ni crece ni decrece sistemáticamente al pasar por las capas — se mantiene estable. Alejarse de ese punto crítico es justamente lo que causa vanishing o exploding gradients en redes muy profundas.",
        example: "Con inicialización crítica, la varianza de las activaciones se mantiene ~1 en la capa 1, la 50 y la 100. Fuera de ese punto, podría caer a 0.0001 hacia la capa 100 (vanishing).",
        relation: "Es la versión formal, con matemática de teoría de campos, de la regla práctica 'no inicialices los pesos en cero' de la Fase 2.",
        prompt: "¿Por qué la criticidad en la inicialización evita gradientes que explotan/desaparecen?",
      },
      {
        id: "bayesian-nn",
        name: "Bayesian learning en redes neuronales",
        lesson:
          "En vez de aprender un solo valor óptimo para cada peso, el enfoque bayesiano mantiene una distribución de probabilidad sobre los pesos posibles. 'Ancho infinito' se refiere al resultado teórico de que una red con infinitas neuronas por capa, bajo inicialización aleatoria, se comporta como un proceso Gaussiano — un objeto matemático mucho más tratable analíticamente.",
        example: "Una red de ancho infinito con pesos al azar se comporta, antes de entrenar, exactamente como un Proceso Gaussiano — su comportamiento se calcula con álgebra lineal, sin entrenar nada.",
        relation: "Conecta la probabilidad/Bayes de la Fase 0 con redes neuronales; el límite de ancho infinito es lo que hace tratable ese análisis.",
        prompt: "¿Qué significa 'ancho infinito' en este contexto?",
      },
      {
        id: "sparse-models",
        name: "Modelos dispersos (sparse)",
        lesson:
          "Encontrar la solución más dispersa (con menos valores distintos de cero) que explica los datos es, en su forma exacta, un problema combinatorio muy difícil (minimizar la norma ℓ0). Se relaja a minimizar la norma ℓ1 (suma de valores absolutos), que es convexa y, bajo ciertas condiciones, da la misma solución dispersa que buscabas con ℓ0.",
        example: "De una señal con 1000 valores donde solo 10 son distintos de cero: resolver 'minimizar ℓ0' es NP-duro; resolver el mismo problema con ℓ1 (convexo) recupera la misma solución dispersa bajo condiciones razonables.",
        relation: "Usa la misma relajación ℓ0→ℓ1 que la regularización L1 de la Fase 1, pero aplicada a recuperación de señales, no a evitar overfitting.",
        prompt: "¿Qué norma se relaja de ℓ0 a ℓ1 en recuperación dispersa?",
      },
      {
        id: "compressed-sensing",
        name: "Compressed sensing",
        lesson:
          "Permite reconstruir una señal dispersa a partir de muchas menos mediciones de las que dicta el muestreo clásico (Nyquist), siempre que la matriz de medición cumpla la Restricted Isometry Property (RIP): que preserve aproximadamente las distancias entre vectores dispersos, sin colapsarlos entre sí.",
        example: "Una imagen de resonancia magnética dispersa en cierta base puede reconstruirse con muchas menos mediciones de las que pide el muestreo clásico, si la matriz de medición cumple RIP.",
        relation: "Aplica sparse-models (concepto anterior) al problema concreto de reconstruir señales con pocas mediciones.",
        prompt: "¿Qué propiedad debe cumplir una matriz para garantizar recuperación (RIP)?",
      },
      {
        id: "robust-pca",
        name: "PCA robusta",
        lesson:
          "La PCA clásica asume que todos los datos siguen la estructura de baja dimensión — un solo dato corrupto puede arruinar la estimación. La PCA robusta descompone la matriz de datos en una parte de bajo rango (la estructura real) más una parte dispersa (outliers/corrupciones), recuperando ambas por separado.",
        example: "En un video de vigilancia con fondo fijo (bajo rango) y una persona moviéndose (dispersa), PCA robusta separa automáticamente el fondo estático de la persona en movimiento.",
        relation: "Generaliza la PCA de la Fase 1 combinando bajo rango + disperso — las dos ideas centrales de esta misma fase, en un solo método.",
        prompt: "¿Qué descompone la PCA robusta, a diferencia de la PCA clásica?",
      },
    ],
  },
  {
    id: "fase-7",
    order: 7,
    title: "Preparación de entrevistas",
    palaceId: "chacao-centro",
    synthesis:
      "En una entrevista, estos conceptos se combinan en preguntas de diseño: te van a pedir que decidas entre SFT/DPO/RLHF/GRPO según el objetivo, que expliques el pipeline de ML end-to-end, y que manejes el vocabulario de on/off-policy y exploración/explotación con soltura — no que recites definiciones sueltas.",
    concepts: [
      {
        id: "sft-vs-rlhf",
        name: "SFT (Ajuste Fino Supervisado) vs. RLHF (Aprendizaje por Refuerzo con Feedback Humano) vs. DPO (Optimización Directa de Preferencias) vs. GRPO (Optimización de Política Relativa de Grupo) vs. RLAIF (Aprendizaje por Refuerzo con Feedback de IA)",
        lesson:
          "SFT entrena con pares (prompt, respuesta ideal) etiquetados por humanos. RLHF entrena un modelo de recompensa a partir de preferencias humanas y después optimiza el modelo con RL (típicamente PPO) contra esa recompensa. DPO logra un efecto similar a RLHF pero optimizando directamente sobre pares de preferencias, sin entrenar un modelo de recompensa ni correr RL — más simple y estable. GRPO evita necesitar una red de valor separada, comparando un grupo de respuestas entre sí. RLAIF reemplaza el feedback humano por feedback de otro modelo de IA.",
        example: "Para enseñar el FORMATO de una respuesta, SFT alcanza. Para afinar sutilezas de qué respuesta prefiere la gente entre varias igual de correctas, hace falta preference modeling + DPO o RLHF.",
        relation: "RLHF es exactamente PPO (Fase 5) aplicado a un Transformer (Fase 4); DPO logra un efecto similar sin correr RL de verdad.",
        prompt: "¿Cuándo preferirías DPO sobre RLHF clásico?",
      },
      {
        id: "reward-modeling",
        name: "Reward modeling",
        lesson:
          "Un modelo de recompensa se entrena a partir de comparaciones humanas (esta respuesta es mejor que esa otra) para predecir qué tan 'buena' es una respuesta según preferencia humana. Esa señal aprendida es la que después se usa como recompensa para optimizar el modelo principal con RL.",
        example: "Se le muestran al modelo de recompensa 2 respuestas a la misma pregunta con la etiqueta 'A fue preferida por el humano' — el modelo aprende a puntuar A más alto que B.",
        relation: "Es el primer paso de RLHF (Fase 5/4) — sin un buen modelo de recompensa, PPO no tiene contra qué optimizar.",
        prompt: "¿Qué aprende un modelo de recompensa?",
      },
      {
        id: "preference-modeling",
        name: "Preference modeling",
        lesson:
          "En vez de pedirle a un humano que puntúe una respuesta con un número (difícil de calibrar de forma consistente), se le pide comparar dos respuestas y elegir cuál prefiere. Ese dato de preferencia par-a-par es más fácil de recolectar de forma confiable y es la entrada típica tanto para reward modeling como para DPO.",
        example: "En vez de 'puntuá esta respuesta del 1 al 10', se pregunta 'de estas dos, ¿cuál preferís?' — mucho más consistente entre distintos evaluadores humanos.",
        relation: "El dato de entrada tanto para reward modeling (concepto anterior) como para DPO (dentro de SFT vs RLHF).",
        prompt: "¿Qué tipo de dato de entrenamiento usa preference modeling?",
      },
      {
        id: "ml-system-design",
        name: "ML system design end-to-end",
        lesson:
          "Un pipeline de ML en producción típico tiene 4 etapas: ingesta/preparación de datos, entrenamiento (incluyendo validación y selección de modelo), inferencia online (serving, con foco en latencia y costo) y monitoreo/reentrenamiento (detectar degradación del modelo y actualizarlo). En una entrevista, lo que se evalúa es que sepas razonar los trade-offs entre etapas, no que memorices un diagrama.",
        example: "Sistema de recomendación: (1) ingesta = logs de clics; (2) entrenamiento = reentrenar cada noche; (3) inferencia = servir en <100ms; (4) monitoreo = alertar si el CTR (Click-Through Rate — tasa de clics) real cae respecto al offline.",
        relation: "Aplica a cualquier cosa construida en las fases anteriores — CNN, Transformer o agente de RL, todos necesitan este mismo pipeline para llegar a producción.",
        prompt: "Nombrá las 4 etapas de un pipeline de ML en producción.",
      },
      {
        id: "on-off-policy",
        name: "On-policy vs. off-policy",
        lesson:
          "Un algoritmo on-policy aprende sobre la política que efectivamente está usando para actuar (ejemplo: SARSA, PPO). Uno off-policy puede aprender sobre una política distinta a la que usa para explorar/actuar (ejemplo: Q-learning, DQN) — por eso puede reutilizar experiencia vieja guardada en un replay buffer.",
        example: "SARSA (on-policy) aprende sobre la política que explora con ε-greedy; Q-learning (off-policy) puede aprender la política óptima usando datos grabados de cualquier política pasada.",
        relation: "La misma distinción de Q-learning (off) vs. SARSA (on) de la Fase 5, ahora encuadrada como pregunta típica de entrevista.",
        prompt: "Dá un ejemplo de algoritmo on-policy y uno off-policy.",
      },
      {
        id: "exploracion-explotacion",
        name: "Exploración vs. explotación",
        lesson:
          "Explotar es tomar la acción que hoy creés que es mejor; explorar es probar otras acciones para averiguar si hay algo mejor que todavía no sabés. Dos estrategias comunes: ε-greedy (explorar al azar una fracción ε de las veces) y muestreo de Thompson (elegir según una distribución de creencia sobre qué tan buena es cada acción, afinada con la evidencia).",
        example: "Con ε-greedy y ε=0.1, el agente elige la mejor acción conocida el 90% de las veces y una acción al azar el 10% restante, para seguir descubriendo posibles mejores opciones.",
        relation: "El mismo dilema que resuelven ε-greedy en Q-learning y el ruido de la política en policy gradients (Fase 5).",
        prompt: "Nombrá 2 estrategias para manejar este trade-off.",
      },
      {
        id: "quadratic-attention",
        name: "Complejidad cuadrática de la atención",
        lesson:
          "Cada token debe calcular su atención contra todos los demás tokens de la secuencia, así que el costo (en tiempo y memoria) crece con el cuadrado de la longitud de la secuencia (O(n²)). Duplicar el largo del contexto cuadruplica el costo — por eso existen variantes de atención más eficientes (dispersa, lineal, con ventanas) para contextos muy largos.",
        example: "Con 1000 tokens, la matriz de atención tiene 1,000,000 de entradas; con 10,000 tokens (10x más), tiene 100,000,000 — el costo se multiplicó por 100, no por 10.",
        relation: "Limitación directa de self-attention (Fase 4) — la razón por la que existen variantes de atención eficiente para contexto largo.",
        prompt: "¿Por qué la atención escala mal con secuencias largas?",
      },
    ],
  },
  {
    id: "fase-8",
    order: 8,
    title: "Los papers detrás de pokemon-tcg-ai",
    palaceId: "caracas-sabana-grande",
    synthesis:
      "Esta fase no es teoría nueva — es el linaje de papers real detrás de las técnicas que ya usaste en la Fase 5. AlphaGo → AlphaGo Zero → AlphaZero establecieron el patrón 'red de política+valor + PUCT + self-play'. En paralelo, CFR → Deep CFR → Libratus → Pluribus establecieron cómo acercarse a un equilibrio de Nash en juegos de información imperfecta a escala real. AIVAT es la pieza de evaluación que conecta ambos mundos. pokemon-tcg-ai combina ideas de las dos familias: la arquitectura de AlphaZero (FocusNet + PUCT) para jugar, y las herramientas de la familia CFR/AIVAT para medir qué tan cerca del equilibrio está.",
    concepts: [
      {
        id: "alphago",
        name: "AlphaGo (Silver et al., 2016, Nature)",
        lesson:
          "\"Mastering the game of Go with deep neural networks and tree search\". Combinó por primera vez una red de política (preentrenada con partidas humanas, refinada con self-play) y una red de valor separada, guiando una búsqueda de árbol Monte Carlo (MCTS). Venció al campeón humano Lee Sedol en 2016.",
        example: "AlphaGo usaba dos redes separadas (política y valor), entrenadas en etapas distintas y con datos humanos de arranque — a diferencia de FocusNet en pokemon-tcg-ai, que combina ambas cabezas en una sola red compartida, entrenada sin datos humanos.",
        relation: "Es el ancestro directo de AlphaGo Zero y AlphaZero (siguientes conceptos), y de la arquitectura policy+value que usa FocusNet en tu proyecto (Fase 5).",
        prompt: "¿Qué dos redes combinó AlphaGo, y de qué datos partió para entrenarlas?",
      },
      {
        id: "alphago-zero",
        name: "AlphaGo Zero (Silver et al., 2017, Nature)",
        lesson:
          "\"Mastering the game of Go without human knowledge\". Eliminó la necesidad de datos humanos por completo — aprendió desde cero jugando contra sí mismo (self-play puro), usando una búsqueda guiada por una única red de política+valor (lo que hoy llamamos PUCT). Superó a la versión original de AlphaGo.",
        example: "Este paper introdujo formalmente la variante de búsqueda que hoy llamamos PUCT — la misma familia de algoritmo que usa pokemon-tcg-ai.",
        relation: "Introduce exactamente el algoritmo PUCT + self-play que ya estudiaste en la Fase 5, ahora con su fuente original.",
        prompt: "¿Qué eliminó AlphaGo Zero respecto a AlphaGo original?",
      },
      {
        id: "alphazero",
        name: "AlphaZero (Silver et al., 2018, Science)",
        lesson:
          "\"A general reinforcement learning algorithm that masters chess, shogi and Go through self-play\". Generalizó AlphaGo Zero a un único algoritmo (sin conocimiento específico de un juego más allá de sus reglas) que dominó ajedrez, shogi y Go, todos entrenados con self-play puro desde cero.",
        example: "El patrón genérico 'red neuronal (política+valor) + PUCT + self-play' de AlphaZero es exactamente el que replican FocusNet + el framework de self-play (DRSF) en pokemon-tcg-ai, aplicado al Pokémon TCG en vez de a un juego de mesa clásico.",
        relation: "Es el paper que formaliza el patrón general que tu proyecto adapta al Pokémon TCG.",
        prompt: "¿Qué generalizó AlphaZero respecto a AlphaGo Zero?",
      },
      {
        id: "cfr-original",
        name: "CFR original (Zinkevich, Johanson, Bowling & Piccione, 2007, NeurIPS)",
        lesson:
          "\"Regret Minimization in Games with Incomplete Information\". Introdujo el algoritmo CFR — la primera técnica práctica para acercarse a un equilibrio de Nash en juegos de información imperfecta (como el póker) mediante minimización iterativa de arrepentimiento contrafactual.",
        example: "La versión clásica de CFR necesita recorrer y guardar valores para CADA punto de decisión del juego — inviable para un juego tan grande como el Pokémon TCG, de ahí la necesidad de Deep CFR (siguiente concepto).",
        relation: "Es el paper original detrás del concepto CFR que ya viste en la Fase 5 — ahí lo aplicaste, acá conocés de dónde salió.",
        prompt: "¿Qué problema resolvió por primera vez el CFR original?",
      },
      {
        id: "deep-cfr",
        name: "Deep CFR (Brown, Lerer, Gross & Sandholm, 2019, ICML)",
        lesson:
          "\"Deep Counterfactual Regret Minimization\". Reemplaza las tablas gigantes de CFR clásico por redes neuronales que aproximan los valores de arrepentimiento, permitiendo aplicar CFR a juegos demasiado grandes para la versión tabular.",
        example: "pokemon-tcg-ai usó específicamente deep CFR (no CFR tabular) para calcular exploitability — exactamente porque el Pokémon TCG es demasiado grande para CFR clásico.",
        relation: "Es la versión escalable de CFR que tu proyecto usó realmente — la Fase 5 ya te presentó el resultado concreto (gap de +0.157 en exploitability).",
        prompt: "¿Qué reemplaza Deep CFR respecto al CFR tabular clásico?",
      },
      {
        id: "libratus",
        name: "Libratus (Brown & Sandholm, 2017/2018, Science)",
        lesson:
          "\"Superhuman AI for heads-up no-limit poker: Libratus beats top professionals\". Primera IA en vencer a profesionales humanos de forma decisiva en póker heads-up no-limit (2 jugadores), usando CFR a gran escala más una fase de 'resolución en tiempo real' durante la partida.",
        example: "Demostró que CFR podía escalar a juegos con espacios de información gigantes — la motivación directa detrás de intentar las mismas ideas en otros juegos de cartas complejos como el Pokémon TCG.",
        relation: "Es uno de los dos hitos (junto con Pluribus) que demostraron que CFR funciona a escala superhumana — la motivación de usar CFR en tu proyecto.",
        prompt: "¿Qué logró Libratus por primera vez?",
      },
      {
        id: "pluribus",
        name: "Pluribus (Brown & Sandholm, 2019, Science)",
        lesson:
          "\"Superhuman AI for multiplayer poker\". Extendió las ideas de Libratus a póker de 6 jugadores (multi-agente, no solo 1 contra 1) — mucho más difícil porque la teoría de equilibrios de Nash es más débil con más de 2 jugadores — y aun así logró nivel superhumano con muchísimo menos cómputo que Libratus.",
        example: "Relevante para pokemon-tcg-ai porque el TCG, como el póker multijugador, no tiene garantías teóricas tan limpias como los juegos de 2 jugadores — igual se puede medir exploitability de forma práctica.",
        relation: "Extiende las ideas de Libratus a más de 2 jugadores — recordatorio de que el equilibrio de Nash (Fase 5) es una meta más difícil de garantizar cuanto más jugadores hay.",
        prompt: "¿Por qué Pluribus fue más difícil de lograr que Libratus?",
      },
      {
        id: "aivat-paper",
        name: "AIVAT (Burch, Schmid, Moravčík, Bowling et al.)",
        lesson:
          "\"AIVAT: A New Variance Reduction Technique for Agent Evaluation in Imperfect-Information Games\". Propone restar una variable de control (calculada con un modelo del juego) al resultado observado de cada partida, para eliminar gran parte del ruido causado por el azar (las cartas repartidas) sin sesgar la estimación del verdadero desempeño del agente.",
        example: "Es la técnica que pokemon-tcg-ai aplicó como 'AIVAT-Nash' para comparar variantes de mazo con muchas menos partidas simuladas de las que harían falta sin esa reducción de varianza.",
        relation: "Es el paper detrás de AIVAT, que ya viste en la Fase 5 — junto con CRN, la base estadística real de cómo se evaluó tu proyecto.",
        prompt: "¿Qué resta AIVAT al resultado observado de una partida, y para qué?",
      },
    ],
  },
];

export function allConcepts(): (Concept & { phaseId: string })[] {
  return phases.flatMap((p) => p.concepts.map((c) => ({ ...c, phaseId: p.id })));
}

export function getPhase(id: string): Phase | undefined {
  return phases.find((p) => p.id === id);
}
