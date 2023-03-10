// @flow
import React, { useEffect, useState } from 'react';
import { theme } from '@/utils/mui/breakpoints';
import { Box, Button, IconButton, styled } from '@mui/material';
import closeIcon from '/assets/pages/result/closeIcon.png';
import CustomSelectModal from '@/components/user/CustomSelectModal';
import { width } from '@mui/system';
import { useLocation } from 'react-router-dom';
import resultFilter from '@/utils/method/resultFilter';

type Props = {
  onChangeCustom: () => void;
  info: any;
  setInfo: any;
};
export const CustomBox = ({ onChangeCustom, info, setInfo }: Props) => {
  const StyleDescibe = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    // justifyContent: 'center',
    // paddingLeft: '10%',
    height: '30%',
    width: '77%',
    maxWidth: '450px' /* 화면에 따라 수정 예정 */,
    borderRadius: '10%',
    background: '#FFBA75',
    whiteSpace: 'pre-line',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    marginBottom: '50px',
    [theme.breakpoints.down('desktop')]: {
      maxWidth: '557px',
    },
    [theme.breakpoints.up('desktop')]: {
      maxWidth: '477px',
    },
  }));

  const HeaderLayout = {
    height: '15%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'bottom',
    paddingRight: '10px',
    paddingTop: '10px',
  };

  const okBtn = {
    minWidth: '40px',
    minHeight: '40px',
    position: 'absolute',
    right: 0,
    zIndex: 20,
  };

  const styleOkIcon = {
    width: '100%',
    height: '70%',
    color: '#FFFFFF',
    filter: 'drop-shadow(4px 2px rgba(0, 0, 0, 0.25))',
  };

  const mainLayout = {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const subLayout = {
    // height: '100%',
    position: 'relative',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '50px',
    gridTemplateColumns: `1fr 1fr 1fr`,
  };

  const styleBtn = {
    // p: '6px',
    // pr: ratioBtn ? '6px' : 0,

    height: '100px',

    // minWidth: '58px',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(135deg, #E9E9E9, #FFFFFF)',
    fontSize: 'inherit',
  };

  const [titleIconBtn, setTitleIconBtn] = useState(false);
  const [title, setTitle] = useState('hair');
  return (
    <StyleDescibe theme={theme}>
      <Button sx={okBtn}>
        {titleIconBtn ? (
          <Box
            onClick={() => {
              setTitleIconBtn(false);
            }}
            component="img"
            src={'/assets/pages/result/1_1.png'}
            sx={styleOkIcon}
          />
        ) : (
          <Box
            onClick={onChangeCustom}
            component="img"
            src={closeIcon}
            sx={styleOkIcon}
          />
        )}
      </Button>

      <Box className="mainLayout" sx={mainLayout}>
        {titleIconBtn ? (
          <CustomSelectModal
            info={info}
            setInfo={setInfo}
            select={title}
          ></CustomSelectModal>
        ) : (
          <Box className="firstLayout" sx={subLayout}>
            {['gender', 'hair', 'background', 'top', 'inner', 'bottom'].map(
              (title) => (
                <IconButton
                  sx={styleBtn}
                  onClick={() => {
                    setTitleIconBtn(true);
                    setTitle(title);
                  }}
                >
                  <Box
                    component="img"
                    alt={title}
                    src={`/assets/pages/result/${title}Icon.png`}
                    sx={{ height: '50%' }}
                  />
                </IconButton>
              ),
            )}
          </Box>
        )}
      </Box>
    </StyleDescibe>
  );
};
