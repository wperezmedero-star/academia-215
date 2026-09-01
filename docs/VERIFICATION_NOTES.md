# PEARSON KILLER — NOTAS DE VERIFICACIÓN
# Este archivo documenta qué datos específicos (cifras, plazos, porcentajes)
# requieren confirmación contra fuentes oficiales antes de considerarse
# 100% verificados para el examen Florida 2-15.
#
# Los conceptos y mecánicas de producto (cómo funciona un Term Life,
# qué es Twisting, etc.) son estables y no cambian con la regulación.
# Lo que SÍ puede cambiar son: números de días, porcentajes, límites en
# dólares, y referencias a leyes específicas.

## MÓDULO: pk-data-underwriting.js

- susc_003 (Antedatación): "6 meses máximo" — cifra tradicional del curso 2-15.
  REQUIERE VERIFICACIÓN contra Florida Statute vigente (F.S. 627.460 aprox).

- susc_005 (Reemplazo): "3 días hábiles para notificar" — REQUIERE VERIFICACIÓN
  contra Florida Administrative Code Rule 69B-162 (Life Insurance Replacement).

## MÓDULO: pk-data-life.js

- vida_002 (Whole Life): "Madura a los 100 años (121 en modernas)" — Esto es
  convención de producto/industria, NO una ley. Varía por compañía y por
  tabla de mortalidad usada (CSO 1980 vs 2001 vs 2017). MARCAR COMO
  "generalmente" en vez de regla fija.

- vida_006 (Vida de Grupo): "$50,000 límite fiscal IRC Sec 79" — Este SÍ es
  ley federal (Internal Revenue Code Section 79) y es estable. CONFIRMADO.

- vida_007 (Viatical/HIPAA): "24 meses expectativa de vida para exención
  fiscal" — REQUIERE VERIFICACIÓN del texto exacto de HIPAA / IRC Sec 101(g).

## ESTÁNDAR PARA MÓDULOS FUTUROS

Para cada cifra específica (días, %, límites en $) que se use en una
pregunta, se agregará un comentario inline marcando su estado:
  // VERIFICADO: [fuente conceptual estable]
  // REQUIERE_VERIFICACION: [cifra específica que puede haber cambiado]

Esto permite que el usuario (William) sepa exactamente qué revisar contra
el manual oficial del curso 2-15 y el Florida Statutes actualizado antes
de confiar en el número al 100% para el examen real.
