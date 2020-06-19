import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Josefin Sans",
    "sans-serif",
  ],
  headerWeight: "200",
  bodyFontFamily: ["Josefin Sans", "sans-serif"],
  googleFonts: [
    {
      name: 'Josefin Sans',
      styles: [
        '100', '200', '400', '700'
      ],
    }
  ]
})

export default typography