import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'


//h1 size 44
//h2 size 32
//h3 size 23
//h4 size 20
//h5 size 15
//h6 size 13
//paragraph 14
// sizeable text 14


const tamaguiConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    dark: {
      ...config.themes.dark,
      background: '#000',
    },
  },
  fonts: {
    heading: {
      ...config.fonts.heading,
      face: {
        300: { normal: "PoppinsLight" },
        400: { normal: "PoppinsRegular" },
        500: { normal: "PoppinsMedium" },
        600: { normal: "PoppinsSemiBold" },
        700: { normal: "PoppinsBold" },
      },
      weight: {
        3: "300",
        4: "400",
        5: "500",
        6: "600",
        7: "700",
      },
    },
  },
  tokens: {
    ...config.tokens,
    fontWeight: {
      3: "300",
      4: "400",
      5: "500",
      6: "600",
      7: "700",
    },
  },
})

export default tamaguiConfig
export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
