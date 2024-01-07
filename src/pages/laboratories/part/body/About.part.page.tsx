import {LaboratoryType, Theme, ThemeProps} from "../../../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../../../hook";
import {AchiveIcon, AutomotiveIcon, HealthIcon, MedicalIcon} from "../../../../components/icon";
import React, {useCallback, useMemo} from "react";
import PieDonutChart, { DataItem } from '@garvae/react-pie-donut-chart';
import {ProgressBar} from "../../../../components/progress/ProgressBar";

interface Props extends ThemeProps {
};

type ChartItem = DataItem & {
  label: string;
};




const x = <> <HealthIcon /> < AutomotiveIcon/> <MedicalIcon /> </>


function Component ( {className} : Props ) {
  const { t } = useTranslation();
  const content =  {
    image : 'https://i.stack.imgur.com/OTS4d.png?s=128',
    status : 'private',
    name: 'SEEE lab',
    location : '1 Đại Cồ Việt st, Hai Ba Trung',
    country: 'Viet Nam',
    createAt: '1/1/2023',
    top: [1,8, 3, 40 ],
    activity : [{
      image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_9_en_orig.svg',
      value: 'Industry'
    }, {
      image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_4_en_orig.svg',
      value: 'Education'
    }]
  }
  const { token } = useTheme() as Theme;

  const renderLegendItem = useCallback((item: ChartItem) => {
    return (
      <div
        className={'__legend-item'}
        key={item.id}
      >
        <div
          className='__legend-item-dot'
          style={{backgroundColor: item.color}}
        ></div>
        <div className='__legend-item-label'>
          {item.label}
        </div>
        <div className={'__legend-item-point'}>
          {item.value}%
        </div>
      </div>
    );

  }, []);

  const chartItems: ChartItem[] =  useMemo(()=> {
    return ([
      {
        id: 'first',
        value: 30,
        color: token.colorBgBlue,
        label: t('Bui Thanh Thien')
      },
      {
        id: 'second',
        value: 60,
        color: token.colorBgGreen,
        label: t('Bui Nhat Minh')
      },
      {
        id: 'Other',
        value: 10,
        color: token.colorBgPink,
        label: t('Other')
      }
    ])
  }, [t, token.colorBgBlue, token.colorBgGreen, token.colorBgPink])


  return (
    <div className={CN(className, 'about-wrap')}>
      <div className={CN('__about-content', '-description')}>
        <h1 className={'__about-content-label'}>
          {t('About')}
        </h1>
        <h4 className={'__lab-content-field'}>
          {t('Create at: ')}<span>{content.createAt}</span>
        </h4>
        <h4 className={'__lab-content-field'}>
          {t('Research field :')}<div className={'__lab-field-icon'}>{x}</div>
        </h4>
        { content.top && <h4 className={'__lab-content-field'}>
          {t('Achive: ')}<div className={'__lab-field-icon'}>{content.top.map((t) => <AchiveIcon top={t}/> )} </div>
        </h4> }
        <h2 className={CN('__lab-content-field', '-special')}>
          {t('Với sứ mệnh cống hiến cho khoa học')}
        </h2>
      </div>
      <div className={CN('__about-content', '-pie-donut-chart')}>
          <PieDonutChart
            animationSpeed={0}
            chartCenterSize={194}
            colors={{
              chartCenter: token.colorBgSecondary,
              text: 'transparent'
            }}
            data={chartItems}
            hoverScaleRatio={1.03}
            resizeReRenderDebounceTime={100}
            size={240}
          />

        <div className='__legend-area'>
          {chartItems.map(renderLegendItem)}
        </div>
      </div>
      <div className={CN('__about-content', '-progress-bar-list')}>
        <div className={'__progress-bar-item'}>
          <span className={'__progress-bar-label'}>
            {t('Membership rate')}
          </span>
          <ProgressBar percent={90} backgroundColor={token.colorBgBlue2} />
          <span className={'__progress-bar-value'}>
            90%
          </span>
        </div>
        <div className={'__progress-bar-item'}>
          <span className={'__progress-bar-label'}>
            {t('Completed projects')}
          </span>
          <ProgressBar percent={20} backgroundColor={token.colorBgBlue2} />
          <span className={'__progress-bar-value'}>
            20%
          </span>
        </div>
        <div className={'__progress-bar-item'}>
          <span className={'__progress-bar-label'}>
            {t('Lab funds used')}
          </span>
          <ProgressBar percent={70} backgroundColor={token.colorBgBlue2} />
          <span className={'__progress-bar-value'}>
            70%
          </span>
        </div>
      </div>
    </div>
  )
}


export const AboutLaboratoryPartPage = styled(Component)<Props>(({theme: {token}})=>{

  return({
    width: '90%',
    margin: 'auto',
    borderRadius: '10px 10px 0 0',
    display: 'flex',
    flexWrap : 'wrap',
    gap: token.paddingMD,

    '.__about-content': {
      flex : '1 1 45%',
      display: 'flex',
      padding: token.paddingMD,
      flexDirection: 'column',
      borderRadius: 20,
      border: '1px solid transparent',
      backgroundColor: "white",
      boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',

    },

    '.__lab-content-field': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: token.paddingMD,
      alignItems: 'center',

    },

    '.__lab-field-icon': {
      display : 'flex',
      justifyContent: 'space-around',
      gap: token.paddingMD
    },

    '.-description': {

    },

    '.-pie-donut-chart': {
      padding: 20,
      display: 'flex',
      flexWrap: 'wrap',

      'svg': {
        margin: 'auto',
        width: '300px !important',
        height: '300px !important'
      },

      '.PieDonutChart__segment': {
        transition: 'all .3s cubic-bezier(.65,0,.35,1) !important',
      }
    },

    '.-progress-bar-list': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingMD,
      height: 'fit-content ',
      padding: token.paddingLG
    },

    '.__progress-bar-item': {
      width: '100%',
      display: 'flex',
      gap: token.paddingMD,
      alignItems: 'center'
    },

    '.__progress-bar-label': {
      width: 200,
    },

    '.-special':{
      marginTop: token.marginXS,
      color: token.colorTextSecondary
    },

    '.__legend-area': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingMD,
      marginTop: token.marginXS,
    },

    '.__legend-item': {
      display: 'flex',
      alignItems: 'center'
    },

    '.__legend-item-dot': {
      width: 12,
      minWidth: 12,
      height: 12,
      borderRadius: '100%'
    },

    '.__legend-item-label': {
      marginLeft: token.marginSM,
      marginRight: token.marginSM,
      color: token.colorTextSecondary
    },



  })

})
