import HomePageContainer from '@src/common/HomePageContainer';
import dBgUrl from '@src/assets/images/desktop/about.png';
import mBgUrl from '@src/assets/images/mobile/about.png';
import { Box, Stack, Typography, styled, useMediaQuery, useTheme } from '@mui/material';

const DesktopWrap = styled('div')(({ theme }) => ({
  width: '1044px',
  height: '672px',
  top: '200px',
  padding: '80px',
  borderRadius: '80px 80px 0px 80px',
  background: 'linear-gradient(180deg, rgba(20, 15, 10, 0.8) 0%, rgba(190, 156, 124, 0.8) 100%)',
  borderWidth: '0px 0px 1px 1px',
  borderStyle: 'solid',
  borderColor: theme.palette.neutral[0],
  position: 'relative',
  backdropFilter: 'blur(8px)',
}));

const MobileWrap = styled(DesktopWrap)(() => ({
  width: '315px',
  height: '594px',
  top: '120px',
  padding: '24px',
  borderRadius: '40px 40px 0px 40px',
}));

const Heading = () => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));

  const variant = isDesktop ? 'H1_48px_B' : 'H3_32px_B';
  return (
    <Stack direction={'row'} alignItems={'center'} gap={5}>
      <Box>
        <Typography variant={variant} color={palette.neutral[0]}>
          關於
          <br />
          我們
        </Typography>
      </Box>
      <Box width={{ md: '165px', xs: '161px' }} height={'2px'} bgcolor={palette.neutral[0]} />
    </Stack>
  );
};

const Intro = () => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));

  const variant = isDesktop ? 'Body_16px_R' : 'Body2_14px_R';

  return (
    <Stack gap={{ md: 5, xs: 2 }} mt={{ md: 10, xs: 5 }}>
      <Typography variant={variant} color={palette.neutral[0]}>
        享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
        <br />
        我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
      </Typography>
      <Typography variant={variant} color={palette.neutral[0]}>
        我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
        <br />
        我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
      </Typography>
      <Typography variant={variant} color={palette.neutral[0]}>
        在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
      </Typography>
      <Typography variant={variant} color={palette.neutral[0]}>
        享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
      </Typography>
    </Stack>
  );
};

const SectionAbout = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  const AboutWrap = isDesktop ? DesktopWrap : MobileWrap;

  return (
    <Box
      component={'section'}
      sx={{
        minHeight: {md: '992px', xs: '794px'},
        backgroundImage: { md: `url(${dBgUrl})`, xs: `url(${mBgUrl})` },
        backgroundSize: 'auto 672px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: { md: 'center 120px', xs: 'center 80px' },
      }}
    >
      <HomePageContainer
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { md: 'row-reverse', xs: 'row' },
          justifyContent: { md: 'flex-start', xs: 'center' },
        }}
      >
        <AboutWrap>
          <Heading />
          <Intro />
        </AboutWrap>
      </HomePageContainer>
    </Box>
  );
};

export default SectionAbout;
