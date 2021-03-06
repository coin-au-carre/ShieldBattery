import styled, { css } from 'styled-components'

export const textSizeButton = '14px'

export const singleLine = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const robotoCondensed = css`
  font-family: 'Roboto Condensed', Roboto, sans-serif;
`

export const buttonText = css`
  font-size: ${textSizeButton};
  font-weight: 500;
  letter-spacing: 1.25px;
  line-height: 36px;
  text-transform: uppercase;
`

export const headline1 = css`
  font-size: 96px;
  font-weight: 300;
  letter-spacing: -1.5px;
  line-height: 96px;
  text-rendering: optimizeLegibility;
`

export const Headline1 = styled.div`
  ${headline1};
`

export const headline2 = css`
  font-size: 60px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 60px;
  text-rendering: optimizeLegibility;
`

export const Headline2 = styled.div`
  ${headline2};
`

export const headline3 = css`
  ${robotoCondensed};
  font-size: 48px;
  line-height: 56px;
  text-rendering: optimizeLegibility;
`

export const Headline3 = styled.div`
  ${headline3};
`

export const headline4 = css`
  font-size: 34px;
  letter-spacing: 0.25px;
  line-height: 40px;
  text-rendering: optimizeLegibility;
`

export const Headline4 = styled.div`
  ${headline4};
`

export const headline5 = css`
  font-size: 24px;
  line-height: 32px;
  text-rendering: optimizeLegibility;
`

export const Headline5 = styled.div`
  ${headline5};
`

export const headline6 = css`
  ${robotoCondensed};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.84px;
  line-height: 28px;
  text-rendering: optimizeLegibility;
`

export const Headline6 = styled.div`
  ${headline6};
`

export const subtitle1 = css`
  font-size: 16px;
  letter-spacing: 0.15px;
  line-height: 24px;
  text-rendering: optimizeLegibility;
`

export const Subtitle1 = styled.div`
  ${subtitle1};
`

export const subtitle2 = css`
  ${robotoCondensed};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.56px;
  line-height: 24px;
  text-rendering: optimizeLegibility;
`

export const Subtitle2 = styled.div`
  ${subtitle2};
`

export const body1 = css`
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 20px;
`

export const Body1 = styled.div`
  ${body1};
`

export const body2 = css`
  ${robotoCondensed};
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.84px;
  line-height: 20px;
`

export const Body2 = styled.div`
  ${body2};
`

export const caption = css`
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 20px;
`

export const Caption = styled.div`
  ${caption};
`

export const overline = css`
  ${robotoCondensed};
  font-feature-settings: 'liga' off;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.48px;
  line-height: 36px;
`

export const Overline = styled.div`
  ${overline};
`

// =============================================================================
// EVERYTHING BELOW HERE WILL BE DELETED SOON!!! DO NOT ADD MORE USAGES!!!
// =============================================================================

const textSizeSubheadOld = '16px'
const textSizeTitleOld = '20px'
const textSizeHeadlineOld = '24px'
const textSizeDisplay1Old = '34px'
const textSizeDisplay3Old = '56px'
const textSizeDisplay4Old = '112px'
const textSizeCaptionOld = '12px'

export const Display4Old = styled.h1`
  text-rendering: optimizeLegibility;
  font-size: ${textSizeDisplay4Old};
  font-weight: 300;
  letter-spacing: -0.01em;
  line-height: ${textSizeDisplay4Old};
`

export const Display3Old = styled.h1`
  text-rendering: optimizeLegibility;
  font-size: ${textSizeDisplay3Old};
  font-weight: 400;
  letter-spacing: -0.005em;
  line-height: ${textSizeDisplay3Old};
`

export const Display1Old = styled.h2`
  text-rendering: optimizeLegibility;
  font-size: ${textSizeDisplay1Old};
  font-weight: 400;
  line-height: 40px;
`

export const HeadlineOld = styled.h3`
  text-rendering: optimizeLegibility;
  font-size: ${textSizeHeadlineOld};
  font-weight: 400;
  line-height: 32px;
`

export const TitleOld = styled.h4`
  text-rendering: optimizeLegibility;
  font-size: ${textSizeTitleOld};
  font-weight: 500;
  letter-spacing: 0.005em;
`

export const SubheadingOld = styled.h5`
  text-rendering: optimizeLegibility;
  font-size: ${textSizeSubheadOld};
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 24px;
`

export const CaptionOld = styled.h6`
  font-weight: 400;
  font-size: ${textSizeCaptionOld};
  letter-spacing: 0.02em;
`

export const Body2Old = styled.span`
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 24px;
`

export const Body1Old = styled.span`
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 20px;
`
