

## Korrigering av kullordningen

Ordningen på kullarna i arrayen i `src/pages/Kullar.tsx` är fel. Alla befintliga kullar listas i omvänd alfabetisk ordning (nyast först): J, I, H, F, E, D, C, B, A.

De tre nya kullarna ska följa samma mönster och placeras i ordningen **N, M, L** överst i listan.

### Ändring

I filen `src/pages/Kullar.tsx`, flytta om de tre första objekten i `litters`-arrayen så ordningen blir:

1. **Kull N** (född 2025-10-23) - först
2. **Kull M** (född 2025-10-21) - andra
3. **Kull L** (född 2025-10-17) - tredje
4. Kull J, I, H, F, E, D, C, B, A (oförändrade)

Ingen annan data ändras - bara ordningen på de tre nya kullarna i arrayen.

