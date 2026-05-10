## Uppdatera titlar för Cat, Jes och Caspian överallt

Ändra titlarna konsekvent på hela hemsidan (alla flikar, inklusive historiska utställningsresultat):

- **At Heart Cat**: `GIC` → `SC`
- **At Heart Jes**: `JCH KCH` / `KCH JCH` / `JC KCH` / `JCH, KCH` → `CH JCH KCH`
- **Wingardiums Caspian**: `JCH KCH` / `KCH` / `JCH, KCH` → `CH JCH KCH`

### Filer som uppdateras

**`src/pages/Utstallning.tsx`** (alla utställningsposter, även äldre)
- Rad 61: `JCH KCH SE* Wingardiums Caspian` → `CH JCH KCH SE* Wingardiums Caspian`
- Rad 73, 87, 100: `GIC SE* At Heart Cat` → `SC SE* At Heart Cat`
- Rad 74, 88, 101, 114, 118: `KCH JCH SE* At Heart Jes` → `CH JCH KCH SE* At Heart Jes`
- Rad 75, 89, 102, 115, 119: `KCH SE* Wingardiums Caspian` → `CH JCH KCH SE* Wingardiums Caspian`

**`src/pages/Kullar.tsx`**
- Rad 54, 94, 130: `GIC SE*At Heart Cat` / `GIC SE* At Heart Cat` → `SC SE*At Heart Cat` / `SC SE* At Heart Cat`
- Rad 55: `JCH KCH SE*Wingardiums Caspian` → `CH JCH KCH SE*Wingardiums Caspian`
- Rad 66: `JCH, KCH SE*At Heart Jes` → `CH JCH KCH SE*At Heart Jes`
- Rad 67: `JCH, KCH SE*Wingardiums Caspian` → `CH JCH KCH SE*Wingardiums Caspian`

**`src/pages/Avelshonor.tsx`**
- Rad 17, 30, 40: `GIC SE*At Heart Cat` → `SC SE*At Heart Cat`
- Rad 37: `JC KCH SE*At Heart Jes` → `CH JCH KCH SE*At Heart Jes`

**`src/pages/Avelshanar.tsx`**
- Rad 54: `JCH KCH SE Wingardiums Caspian` → `CH JCH KCH SE Wingardiums Caspian`

Inga andra ändringar — endast titelprefix uppdateras. Översättningsfiler (`src/i18n/translations.ts`) påverkas inte eftersom dessa namn lagras direkt i komponenterna.