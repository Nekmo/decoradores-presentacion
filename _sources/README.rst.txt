.. image:: https://raw.githubusercontent.com/Nekmo/decoradores-presentacion/master/logo.png
    :width: 100%

|

.. image:: https://img.shields.io/github/actions/workflow/status/Nekmo/decoradores-presentacion/build.yml?style=flat-square&branch=master
  :target: https://github.com/Nekmo/decoradores-presentacion/actions?query=workflow%3ABuild
  :alt: Latest CI build status


====================================
Todo sobre los decoradores de Python
====================================
En esta presentación vengo a hablar sobre decoradores de Python. Todo. Absolutamente todo lo que puedas saber. Lo que
querías conocer y lo que no. Desde su historia a sus entresijos. Da igual tu nivel, de aquí saldrás sabiendo cómo
funcionan, cómo se usan y cómo crear tus propios decoradores.

La presentación está `disponible online <https://nekmo.github.io/decoradores-presentacion/>`_ ya compilada
para su visualización.

Requisitos y contenido
----------------------
El único requisito para charla es conocer lo básico de Python, pero profundizaremos bastante en la materia, por lo que
también es ideal para aquellos interesados en ampliar sus conocimientos. En esta presentación veremos:

* Definición de decorador.
* El origen del símbolo arroba de los decoradores.
* El origen del nombre decorador.
* Uso alternativo de los decoradores.
* Casos de uso.
* Encadenar decoradores.
* Creación de un decorador básico.
* El decorador wraps.
* Ejemplos prácticos con código.
* Aplicación en clases y métodos.
* Crear decoradores usando una clase.
* Decorador con parámetros.
* Decorador con parámetros opcionales.

Motivación
----------
Los decoradores son una característica del lenguaje que aunque muy utilizada, no muchos entienden su funcionamiento.
Con esta presentación se pretende que tanto los usuarios más nuevos como los más veteranos aprendan algo nuevo. Es
adecuada para todos los niveles:

* Los que están comenzando en el lenguaje descubrirán esta funcionalidad y cómo funciona.
* Aquellos con un nivel intermedio aprenderán nuevas formas de hacer decoradores.
* Los más avanzados aprenderán curiosidades sobre el origen de los mismos.

No son necesarios conocimientos previos para acudir a la charla, más que conocer lo básico del lenguaje. Ni siquiera es
necesario conocer los decoradores. Al ser una funcionalidad tan utilizada pero tan poco entendida (para muchos, su
funcionamiento es similar a la magia), propongo esta charla para ahondar en su uso.

Acerca de
---------
Presentación para `OpenSouthCode <https://www.opensouthcode.org/>`_ el día 21 de junio de 2024. Puedes
utilizar esta misma presentación, íntegra o con modificaciones para cualquiera de los usos descritos en la licencia
MIT adjunta en este proyecto.

Compilación
-----------
Para compilar desde el código fuente se requiere Python 3 instalado, estando probado sólo bajo Python 3.12. Se
recomienda ejecutar los siguientes pasos en un
`virtualenv <https://nekmo.com/es/blog/python-virtualenvs-y-virtualenvwrapper/>`_::

    # Clonar proyecto
    git clone https://github.com/Nekmo/decoradores-presentacion.git
    cd decoradores-presentacion
    # Instalar dependencias
    pip install -r requirements.txt
    # Compilar ficheros de estilos
    sassc _static/theme.scss _static/theme.css
    # Compilar presentación
    make revealjs

Tras la compilación puede verse los ficheros resultantes en el directorio ``_build``.


Copyright
=========
Licencia MIT. Ver fichero ``LICENSE.txt``.

Nekmo 2024.

