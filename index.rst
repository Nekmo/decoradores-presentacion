
.. toctree::
   :glob:
   :hidden:

   *

.. _intro:

##############################
Todo sobre los **decoradores**
##############################

.. revealjs-section::
    :data-background-color: #333333
    :data-transition: none
    :data-transition-speed: slow

.. image:: images/python-logo.*
  :width: 200

.. revealjs-notes::

  Hola a todos.



👋
==

.. revealjs-section::
    :data-background-color: #4973ff
    :data-transition-speed: slow
    :data-transition: fade

.. revealjs-notes::

  Quiero dar ante todo las gracias a la organización por estar un año más aquí con todos vosotros.



OpenSouthCode
=============

.. image:: images/opensouthcode-logo-white.*
  :width: 800

.. revealjs-section::
    :data-background-color: #4973ff
    :data-transition-speed: default
    :data-transition: fade

.. revealjs-notes::

  Son ya más de 10 años, en los cuales he podido asistir y participar en la mayoría de ellos. Es posible que algunos
  me conozcáis ya, aunque me presento por si acaso.



Sobre mí **Nekmo**
==================

.. revealjs-section::
    :data-background-color: #333333
    :data-transition-speed: default
    :data-transition: fade

+------------------------------------+
|                                    |
| .. image:: images/cara.svg         |
|   :width: 200px                    |
|                                    |
| *Programador Python*               |
|                                    |
+------------------------------------+

.. revealjs-notes::

  Soy Juan José, más conocido en redes como Nekmo, y llevo programando en Python más de media vida.


Python
======

.. revealjs-section::
    :data-background-color: #333333
    :data-transition-speed: default
    :data-transition: fade

.. image:: images/python-logo.*
  :width: 400

.. revealjs-notes::

    Es por ello que es costumbre que hable aquí de Python, como en esta ocasión. La verdad, llevo ya varios años
    pensando en hacer la charla sobre el tema de hoy...


Decoradores
===========

.. revealjs-section::
    :data-background-color: #4973ff
    :data-transition-speed: default
    :data-transition: fade

.. code-block:: python

    @decorator
    def function():
        pass

.. revealjs-notes::

   Porque, ¿cuántos de vosotros sabríais explicar claramente cómo es un decorador? (PAUSA) ¿y cómo se crean? (PAUSA).
   Como imaginaba, mucha gente, a pesar de utilizarlos, no sabrían explicar su funcionamiento, el cual es como una
   caja negra.



¿Qué son los **decoradores**?
-----------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: zoom

.. revealjs-notes::

   Pero antes de ello, vamos a ver la definición oficial de decorador.



Definición
----------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

Definición

  Una función que devuelve otra función, normalmente aplicando una transformación de función usando la sintaxis
  @wrapper.

  --`Python.org Glosary <https://docs.python.org/3/glossary.html>`_

.. revealjs-notes::

   Según la definición oficial de Python, un decorador es una función que devuelve otra función, utilizando el nombre
   ``@wrapper``. Vale, es posible que esta definición no os haya aclarado mucho...



Definición 2
------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-auto-animate:

Definición

  Un decorador es una "función" que encapsula a otra "función" para modificar o extiender su comportamiento sin modificar
  su código.

  --`Yo mismo <https://github.com/Nekmo/decoradores-presentacion/>`_

.. revealjs-notes::

    Es por ello, que he preferido traer aquí esta otra (LEER). La parte clave de esta definición, es la de encapsular.
    Es decir, que la rodea sin alterar su código.


Definición 3
------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-auto-animate:

Definición

  Un decorador es una "función" que encapsula a otra "función" para modificar o extiender su comportamiento sin modificar
  su código.

  --`Yo mismo <https://github.com/Nekmo/decoradores-presentacion/>`_

.. revealjs-code-block:: python
   :data-line-numbers: 1-3|1|2-3

    @decorator
    def function():
        pass

.. revealjs-notes::

    En este ejemplo de aquí tenemos un decorador (1) que rodea a una
    función sin alterar su código (2). De esta forma, el decorador ya se está aplicando sobre la función.


Abraza
------

.. revealjs-section::
    :data-background-video: _static/gf-tacticalhug.mp4
    :data-background-video-loop: true

.. revealjs-notes::

    Podríamos decir, que es como que la abraza, pero no la toca.


Ejemplos de uso
---------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-fragments::

    * Un decorador ``@timeit`` que mide el tiempo de ejecución de una función, sin modificar su código.
    * Un decorador ``@retry`` que vuelve a ejecutar una función si falla, sin modificar su código.
    * Un decorador ``@login_required`` que comprueba si un usuario está autenticado, permitiendo sólo la ejecución de la
      función si lo está.
    * ... y **mucho más**.

.. revealjs-notes::

    ¿Y para qué podemos usar los decoradores? Algunos posibles casos son... (LEER)


¿Y qué es esto del **arroba**?
------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: zoom


.. revealjs-notes::

    Bueno, y puede que os estéis preguntando, ¿qué es esto del arroba que está delante del nombre del decorador?



Anotaciones de **Java 1.5**
---------------------------

.. revealjs-section::
    :data-background-color: #ffffff
    :data-background-image: _static/vintage-bg.jpg
    :data-transition: zoom

.. revealjs-notes::

    Su origen viene de Java 1.5, donde se introdujeron las anotaciones, los cuales eran un uso similar a lo que se
    pretendía con los decoradores de Python, y ya utilizaban el símbolo de arroba. Esto, sumado a que el arroba aún
    no estaba siendo utilizado en Python, se decidió utilizarlo para los decoradores. No obstante, hubo otras
    propuestas, como la barra vertical, similar a un pipe.


Ejecución **equivalente**
-------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-16|1-7|10-16|15|16

    # Forma con arroba

    @decorator
    def hello_world():
        print("Hello world!")

    hello_world()


    # Forma sin arroba

    def hello_world():
        print("Hello world!")

    hello_world = decorator(hello_world)
    hello_world()


.. revealjs-notes::

    En realidad, el arroba es simplemente azúcar sintáctico. ¿Recordáis que dijimos que un decorador es una función
    que devuelve otra función? Pues bien, eso es literalmente lo que hace. Así pues, (1) esta primera forma con el
    arroba es equivalente a (2) esta segunda forma sin el arroba. Como podéis ver, (3) el decorador recibe como
    argumento el nombre de la función a decorar, devolviendo una nueva función que reemplaza a la original, pero, y
    esto es importante, SIN LLAMAR A LA FUNCIÓN, (5) lo cual se hará en la última línea, pudiéndole pasar los
    parámetros que queramos.



Cómo **crear** un **decorador**
===============================

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-notes::

    Pero, ¿cómo funcionan los decoradores? Lo mejor para entenderlo, es creando nosotros uno propio.



Decorador **básico**
--------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-15|1-8|2-7|1,5|3-4|6-7|8|14|2,15

    def log(func):
        def wrapper(*args, **kwargs):
            print(f"La función {func.__name__} recibirá los argumentos {args} "
                  f"y los parámetros {kwargs}.")
            result = func(*args, **kwargs)
            print(f"La función {func.__name__} ha devuelto {result}.")
            return result
        return wrapper

    def hello(word):
        print(f"Hello {word}!")
        return True

    hello = log(hello)
    hello("word")

.. revealjs-notes::

    Bien, (1) aquí tenemos un decorador llamado log, (2) el cual no os asustéis por tener una función dentro de otra.
    Esta función interior, que llamaremos función anónima, es generada dinámicamente por el decorador. (3) Hacemos esto
    para que tenga acceso a la función original, (4) pudiendo hacer cosas antes, (5) o después de la ejecución de la
    función original. (6) Finalmente devolvemos la función anónima, (7) la cual sustituirá a hello (8) y ejecutaremos
    ya no la función hello original, sino la función anónima llamada wrapper.


Resultado
---------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-3|1|2|3

        La función hello recibirá los argumentos ('word',) y los parámetros {}.
        Hello word!
        La función hello ha devuelto True.

.. revealjs-notes::

    Bueno, y por si había alguna duda, el decorador (1) mostrará esta primera línea antes de ejecutar ``func``, o lo que
    es lo mismo, la función hello original, (2) la cual imprimirá "Hello word!", ya que no hemos alterado su código, (3)
    y finalmente el decorador mostrará la salida de la función original tras su ejecución.



Confusión
---------

.. revealjs-section::
    :data-background-video: _static/confused.mp4
    :data-background-video-loop: true

.. revealjs-notes::

    Es posible que todavía estéis un poco confusos. Es normal. Seguiremos viéndolo mediante ejemplo, aunque vamos a
    profundizar en la parte que tal vez sea la más complicada, que es la de la función anónima.


Función **anónima**
-------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 2-6|2|2-6|1,4|7|9

    def log(func):
        def wrapper(*args, **kwargs):
            ...
            result = func(*args, **kwargs)
            ...
            return result
        return wrapper

    hello_wrapped = log(hello)
    hello_wrapped("world")


.. revealjs-notes::

    La primera gran duda que surge, (1) es el por qué del nombre. Bien, en realidad se podría llamar wrapper, o de
    cualquier otra forma, es sólo una convención. (2) ¿Por qué la estamos creando dentro de otra función? (3) Esto es
    porque queremos que la función anónima tenga acceso a la función original, llamada func, la cual tomará por contexto
    (4) ¿Por qué devolvemos wrapped tal cual, en vez de ejecutarlo? (5) Porque queremos que se devuelva la función
    wrapper tal cual sin ejecutar (6) para que sea ejecutada con los argumentos que le pasemos.


¿Por qué se llaman **decoradores**?
===================================

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-notes::

    Ahora que ya sabemos crear decoradores, vamos a hacer una pequeña pausa, tomar un poco de aire, y ver por qué se
    llaman así. Pues bien, la verdad es que no tiene mucho misterio, ya que se llaman así por el Patrón de Diseño
    Decorador, que hace esto mismo. Añadir funcionalidades a un objeto sin modificar su código.



Quejas sobre **el nombre**
--------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

Cita

  Ha habido varias quejas sobre la elección del nombre "decorador" para esta función.
  El principal es que el nombre no concuerda con su uso en el libro de GoF. [...]
  **Es muy posible que aparezca un nombre mejor.**

  -- `PEP 318 <https://peps.python.org/pep-0318/>`_

.. revealjs-notes::

    Lo gracioso de esto, es que ya cuando se introdujeron los decoradores en Python, hubo quejas sobre el nombre, ya
    que no concordaba con el uso del patrón de diseño que les da nombre; esto, según el principal libro de patrones de
    diseño. Es por ello, que ya en su día se dijo que probablemente apareciese un nombre mejor. Spoiler: no ocurrió.



**Usos** decoradores
====================

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

1. **Alterar** los parámetros de **entrada** a la función.
2. **Modificar el resultado** de la función.
3. **Condicionar**, **repetir** o **alterar** la forma de ejecución de la función.
4. Realizar **acciones antes** o/y **después** de la ejecución de la función.

.. revealjs-notes::

    Vamos a seguir viendo los decoradores mediante algunos ejemplos prácticos, los cuales, según su uso, he clasificado
    de la siguiente forma (LEER).


**Alterar** parámetros de **entrada**
-------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-5|2|3|4|

    def int_args(func):
        def wrapper(*numbers):
            numbers = [int(number) for number in numbers]
            return func(*numbers)
        return wrapper

.. revealjs-notes::

    Aquí tenemos un primer ejemplo, el cual nos permite alterar los parámetros de entrada de una función decorada,
    convirtiéndolos a enteros. (1) La función anónima recibe los parámetros de la función original, (2) los cuales
    convierte a enteros (4) antes de llamar a la función original con los nuevos parámetros ya convertidos. Podría
    sernos útil si nuestra función espera enteros, pero por alguna razón, los recibe como cadenas.


**Modificar la salida** de la función
-------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-5|3|4|

    def response_data(func):
        def wrapper(*args, **kwargs):
            data = func(*args, **kwargs)
            return Response(data=data, status=200)
        return wrapper

.. revealjs-notes::

    En este otro ejemplo, (1) tomamos la salida de la función original, la cual es una diccionario (2)
    y la envolvemos en un objeto Response, sin necesidad de modificar la función original para ello.


**Condicionar** la ejecución de la función
------------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-7|3-6|3-4|5-6|1-7

    def is_authenticated(func):
        def wrapper(request):
            if request.user.is_authenticated():
                return func(request)
            else:
                return Response(status=401)
        return wrapper

.. revealjs-notes::

    En este otro ejemplo, (1) estamos condicionando la ejecución de la función original, (2) la cual sólo se ejecutará
    si el usuario está autenticado, (3) devolviendo un error 401 en caso contrario.


Realizar **acciones antes** y **después**
-----------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-9|3|5-7|

    def timeit(func):
        def wrapper(*args, **kwargs):
            start = time.time()
            result = func(*args, **kwargs)
            end = time.time()
            print(f"La función {func.__name__} ha tardado "
                  f"{end - start} segundos.")
            return result
        return wrapper

.. revealjs-notes::

    Este otro ejemplo es un caso muy habitual con decoradores, en el cual medimos el tiempo de ejecución sin necesidad
    de alterar la función original. Para ello, (1) medimos el tiempo antes (2) y después de que se haya ejecutado la
    función, mostrando el tiempo que ha tardado en ejecutarse.


**Encadenar** decoradores
=========================

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-5|3|2|1|8-9|

    @retry
    @timeit
    @log
    def hello():
        print("Hello world!")


   # Forma alternativa
   hello = retry(timeit(log(hello)))

.. revealjs-notes::

    Y puede que os estéis preguntando, ¿es posible encadenar varios decoradores? Sí, por supuesto. Lo único, tened en
    cuenta el orden de aplicación, el cual es de abajo (1) (2) (3) hacia arriba. Si lo pensáis, esto tiene sentido,
    ya que estamos encapsulandola en ese orden, metiéndo la función dentro de otra. (4) Si lo miráis de la forma
    alternativa, como veis estamos aplicando primero log, luego timeit y finalmente retry, ya que vienen de dentro
    hacia fuera.



El decorador **wraps**
======================

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: |1-4|6-7|8-9|

   >>> @log
   >>> def hello_world():
   ...    """Prints 'Hello world!'."""
   ...    print("Hello world!")
   >>>
   >>> print(hello_world.__name__)
   'wrapper'
   >>> print(hello_world.__doc__)
   None

.. revealjs-notes::

    Como estáis viendo, los decoradores son la mar de útiles. Y dentro de Python se utilizan para infinidad de cosas,
    entre las cuales, está facilitar la creación de otros decoradores. El decorador wraps, que veremos a continuación,
    soluciona uno de los problemas de los decoradores. ¿Recordáis que dijimos que el decorador devuelve la función
    anónima wrapper? Pues bien, uno de los problemas (1) de aplicar un decorador, en este caso log, es que perdemos (2)
    el nombre de la función original (3) y su documentación. ¿Cómo podemos solucionar esto? Pues con el decorador wraps.



Decorador wraps
---------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-7|1|4|

    from functools import wraps

    def log(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            ...
        return wrapper


.. revealjs-notes::

    Este decorador, (1) que nos viene de la biblioteca estándar en su módulo functools, (2) nos permite copiar los
    metadatos de la función original a la función anónima, de forma que no perdamos ni su nombre ni su documentación.
    Es por ello, que os recomiendo que siempre que creéis un decorador lo utilicéis. Si hasta ahora no lo he mostrado,
    ha sido sólo por simplificar los ejemplos, pero en la práctica siempre lo utilizo.



No sólo **funciones**
=====================

.. revealjs-section::
    :data-background-color: #000000
    :data-background-video: _static/surprise.mp4
    :data-background-video-loop: true

.. revealjs-notes::

    En realidad, esta no ha sido la única cosa que os he estado ocultando. ¿Recordáis que definí un decorador como una
    función que se aplica a una función, usando "comillas"? Pues bien, esto es una simplificación, porque en realidad
    se puede aplicar y utilizar en cualquier cosa que sea invocable, que se pueda llamar. No sólo a funciones.



Aplicado a **clases**
---------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-4|1|

    @log
    class A:
        def __init__(self):
            print("Creando una instancia de A.")

.. revealjs-notes::

    Por ejemplo, en este caso, (1) estamos aplicando el decorador log a una clase. Si recordáis este decorador de antes,
    imprimía un mensaje antes y después de la función. En este caso, (1) el mensaje se mostrará antes y después del
    método __init__ de la clase A. Tened en cuenta eso sí, que la salida de la ejecución de  __init__ no será lo que
    devuelve la misma, lo cual siempre es None, sino la instancia de la clase. Esto podría utilizarse para hacer cosas
    como registrar la creación de una instancia, devolver otra instancia en su lugar, o cualquier otra cosa que se os
    ocurra.



Aplicado a **métodos**
----------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-4|2|3|

    class A:
        @log
        def foo(self):
            print("Ejecutando foo.")

.. revealjs-notes::

    Por supuesto, (1) también podemos aplicar el decorador a métodos, comportándose de forma muy similar a como lo
    haría con una función. (2) Tened en cuenta, que entre los parámetros que recibe la función anónima, se encuentra la
    instancia de la clase, la cual se suele llamar self. Esto nos permite acceder a la instancia entera de la clase
    desde el decorador, pudiendo hacer lo que queramos en la clase desde el decorador.



**Decorador** creado usando una **clase**
-----------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-13|1-9|2-3|5-9|11-13|

   >>> class Log:
   ...    def __init__(self, func):
   ...        self.func = func
   ...
   ...    def __call__(self, *args, **kwargs):
   ...        ...
   ...        result = self.func(*args, **kwargs)
   ...        ...
   ...        return result
   ...
   >>> @Log
   ... def hello_world():
   ...    print("Hello world!")


.. revealjs-notes::

    Y por último, tal, y como adelanté antes, (1) podemos crear un decorador utilizando una clase, ya que la única
    condición es que sea invocable. En este caso, (2) el init se comporta como la función más por fuera del decorador,
    (3) y el call como la función anónima más por dentro del decorador. Para quienes no lo conozcáis, el método mágico
    call se ejecuta al invocar la instancia de la clase; es decir, cuando utilizamos paréntesis después de ya haber
    usado paréntesis para instanciar la clase. (4) Y ya como podéis ver, se utiliza exactamente igual que el decorador
    de antes.


Decorador con **argumentos**
============================

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-notes::

    Vale, si me habéis seguido hasta aquí, ante todo enhorabuena. Sé que son muchas cosas en poco tiempo, y que es
    difícil tanto de asimilar. Sólo os pido un pequeño esfuerzo adicional, porque vamos a complicarlo un poco más.
    Si hasta ahora puede que os liase un poco la función anónima, ahora vamos a añadirle una capa adicional.



Ejemplo de decorador con argumentos
-----------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-3|1|

    @repeat(num_times=5)
    def hello(word):
        print(f"Hello {word}!")

.. revealjs-notes::

    Poder poner parámetros a un decorador es una necesidad habitual, que no hemos visto hasta el momento. En este
    ejemplo, (1) estamos usando el parámetro para definir cuántas veces se va a repetir la ejecución de la función. De
    esta manera estaremos dando la libertad al usuario de decidir cuántas veces se va a ejecutar la función.



Código del decorador con argumentos
-----------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-8|1|4|2-7|3-6|

    def repeat(num_times=3):
        def decorator(func):
            def wrapper(*args, **kwargs):
                for _ in range(num_times):
                    result = func(*args, **kwargs)
                return result
            return wrapper
        return decorator


.. revealjs-notes::

    Para ello, necesitamos crear una función que nos devuelva de forma dinámica el decorador con el parámetro que
    queramos. (1) En este caso, el decorador recibe el parámetro num_times, (2) y estará disponible en la función
    de más adentro. (3) Nuestra función creará una función anónima igual que lo hemos hecho hasta ahora, (4) teniendo
    a su vez otra función anónima, que si os fijáis es exactamente igual que la que hemos estado utilizando hasta
    ahora. Sé que es un poco lioso, ya que tenemos varias funciones dentro de otras...


**Decorador** con argumentos usando **una clase**
-------------------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-12|2-3|5-7|9-12|7|

    class Repeat:
        def __init__(self, num_times=3):
            self.num_times = num_times

        def __call__(self, func):
            self.func = func
            return self.wrapper

        def wrapper(self, *args, **kwargs):
            for _ in range(self.num_times):
                result = self.func(*args, **kwargs)
            return result

.. revealjs-notes::

    Es por esto, que en ocasiones puede ser preferible usar una clase, ya que nos permite tener un estado interno y
    separar la lógica en diferentes métodos. (1) Nuestro init es el equivalente a la función más exterior que recibe
    la configuración del decorador, (2) el call sería la función intermedia, que recibe la función a decorar, y (3) el
    wrapper sería la función anónima más interna, que recibe los argumentos de la función original.



Decorador con parámetros **opcionales**
---------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-8|1-3|6-8|

    @repeat
    def hello(word):
        print(f"Hello {word}!")


    @repeat(num_times=5)
    def hello(word):
        print(f"Hello {word}!")


.. revealjs-notes::

    Ahora llega la parte más complicada, y os prometo que será la última. Con esto, ya sabréis todo lo que necesitáis
    saber de los decoradores. Sólo os pido un último esfuerzo, porque vamos a ver cómo hacer que los parámetros del
    decorador se puedan poner o no. (1) Aunque esto no es realmente tan importante, a nivel de usuario, es un detalle
    que el decorador se pueda utilizar (1) tanto sin definir el parámetro, como (2) definiéndolo. ¿Y estaréis de acuerdo
    que queda más bonito y limpio, no?



**Con** y **sin** parámetros
----------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-auto-animate:


.. container:: twocol

    .. container:: leftside

        .. code-block:: python

            def repeat(func):
                def wrapper(*args, **kwargs):
                    for _ in range(3):
                        result = func(
                            *args, **kwargs
                        )
                    return result
                return wrapper
            #
            #

    .. container:: rightside

        .. code-block:: python

            def repeat(num_times=3):
                def decorator(func):
                    def wrapper(*args, **kwargs):
                        for _ in range(num_times):
                            result = func(
                                *args, **kwargs
                            )
                        return result
                    return wrapper
                return decorator


.. revealjs-notes::

    Para hacer esto, Python no nos lo pone fácil, ya que tenemos que soportar tanto el comportamiento sin parámetros,
    tal y como lo vimos al principio, y que tenemos a la izquierda, como la forma con parámetros, que está a la derecha.
    La diferencia principal entre ambos códigos, como podéis ver, es que a la izquierda tenemos 2 funciones anidadas, y
    a la derecha 3.



**Condicionar** parámetros
--------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-8|1,4|2,3,5|1,6|2,3,7|

    def repeat(_func=None, num_times=3):
        def decorator(func):
            ...
        if _func is None:
            return decorator
        else:
            return decorator(_func)

.. revealjs-notes::

    Para ello, tenemos que hacer un pequeño hack, tenemos que saber en qué situación estamos de las dos anteriores.
    (1) Si no nos están pasando directamente la función a decorar, es porque se está pasando el parámetro num_times,
    estamos en la situación con 3 funciones anidadas. (2) En tal caso devolvemos el decorador. (3) Si nos están pasando
    la función, tendremos el parámetro num_times por defecto; estamos en la situación con 2 funciones anidadas. (4) En
    tal caso, el truco que usamos es saltarnos un nivel de anidamiento llamando directamente al decorador con la
    función a decorar.



Código completo decorador con parámetros opcionales
---------------------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-11

    def repeat(_func=None, num_times=3):
        def decorator(func):
            def wrapper(*args, **kwargs):
                for _ in range(num_times):
                    result = func(*args, **kwargs)
                return result
            return wrapper
        if _func is None:
            return decorator
        else:
            return decorator(_func)


.. revealjs-notes::

    El código ya completo sería el siguiente. Como veis tenemos las 3 funciones anidadas, y el pequeño hack para
    saltarnos un nivel de anidamiento si nos están pasando la función a decorar.



Código decorador con parámetros opcionales usando una clase
-----------------------------------------------------------

.. revealjs-section::
    :data-background-color: #4e54c8
    :data-transition-speed: default
    :data-transition: slide

.. revealjs-code-block:: python
   :data-line-numbers: 1-16|2-4|6-11

    class Repeat:
        def __init__(self, func=None, num_times=3):
            self.func = func
            self.num_times = num_times

        def __call__(self, *args, **kwargs):
            if self.func is None:
                self.func = args[0]
                return self.wrapper
            else:
                return self.wrapper(*args, **kwargs)

        def wrapper(self, *args, **kwargs):
            for _ in range(self.num_times):
                result = self.func(*args, **kwargs)
            return result

.. revealjs-notes::

    Por supuesto, también lo podemos hacer usando una clase, aunque el código es un poco diferente. (1) Ya que no
    podemos poner la condición de nuestro hack en el init, ya que un init no puede devolver nada, (2) por ello lo
    ponemos en el call, donde decidimos si estamos en la situación con 2 funciones anidadas o con 3 en función de si nos
    vino la función en el init o no.



**Expertos** en decoradores
===========================

.. revealjs-section::
    :data-background-color: #000000
    :data-background-video: _static/applause.mp4
    :data-background-video-loop: true

.. revealjs-notes::

    Ahora, y por fin, con esto ya sabéis todo que queríais saber sobre decoradores, y lo que no. ¡Ya os podéis
    considerar unos expertos!



¡Muchas gracias a todos!
========================

.. revealjs-section::
    :data-background-gradient: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

.. revealjs-notes::

    ¡Muchas gracias a todos!


Código QR
=========


**Contactar**
-------------

.. revealjs-section::
    :data-background-color: #ffffff
    :data-background-image: _static/grid-bg.png
    :data-background-repeat: repeat-x
    :data-background-position: left top
    :data-background-size: auto
    :data-transition: zoom

* 🌐 **Sitio web:** `nekmo.com <https://nekmo.com>`_
* 📫 **Email:** `contacto@nekmo.com <mailto:contacto@nekmo.com>`_
* 🐦 **Twitter:** `@nekmocom <https://twitter.com/nekmocom>`_
* 📱 **Telegram:** `@nekmo <https://t.me/nekmo>`_
* 💡 **Jabber:** `nekmo@nekmo.org <xmpp://nekmo@nekmo.org>`_

.. revealjs-notes::

   Aquí tenéis mi contacto si queréis contactar conmigo.
