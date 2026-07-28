---
lang: 'ca'
title: "Els missatges d'error que obren portes"
pubDate: 2026-07-28
description: "Parlem sobre els missatges d'error que podem plantejar als/les usuaris/ies, com es poden convertir d'un carrer sense sortida a una forma d'acompanyament i guia per trobar una solució."
image:
    url: '/Users/adria/Downloads/IMG_20260211_103922.jpg'
    alt: "Títol d'aquesta entrada fet a mà. A la imatge es pot llegir Deixar espAI."
author: 'Irada'
tags: ["a11y"]
---

M'ha agradat molt [la publicació d'en Nat Tarnoff](https://tarnoff.info/2026/07/27/a11y-101-3-3-3-error-suggestion/) i comento una mica el que em sembla més destacat d'ella. 

Quan hagis de posar un missatge d'error a la pantalla d'un/a usuari/a intenta ensenyar el camí per arreglar-lo. "Invalid" és una porta tancada, "Email invalid: el email que has facilitat no és correcte, prova amb un altre afegint un domini correcte. Per exemple: nomusuari@exemple.com."

En els missatges d'error pots indicar:
* Problemes de format. Per exemple: El número de telèfon ha de tindre 9 xifres, prova amb algun número semblant a aquest: 654321987.
* Limitació de caracters. Per exemple: El teu nom d'usuari ha de tindre entre 3 i 20 caracters. El que has introduït en tenia 24.
* Valors ja assignats. Per exemplet: El email exemple@exemple.com ja està siguent utilitzat, prova un altre.
* Limitació de seguretat. Per exemple: La clau d'accés o password a de contindre com a mínim un caracter en majúscula.

És important que si a nivell de programació o tecnología no sabem quina suggerencia és la correcta no especifiquem molt si no que emprarem algun comentari més genèric. Si no podem validar el domini del correu, seguint l'exemple anterior, no cal que comentem aquest detall, si no que aniriem per una fòrmula més oberta. Per exemple: Prova a revisar el teu correu electrònic i indica'ns un correcte.

Els missatges d'error poden ser un bon acompanyant per la persona que fa servir la nostra aplicació, només cal tenir-la en compte.