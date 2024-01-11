import {Theme, ThemeProps} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {BaseModal} from "./baseModal.component";
import { useTranslation } from "../../hook";
import MDEditor from "@uiw/react-md-editor";
import React, {ChangeEvent, useCallback, useState} from "react";
import {ButtonShape} from "../button/ButtonShape.component";
import {FilePlus, PencilCircle, Upload} from "phosphor-react";
import {fadeDown, fadeEnd, fadeStart} from "../../styles/styles.animation";


interface Props extends ThemeProps {};

enum FormItemEnum {
  TITLE_INPUT = 'input.title',
  SUB_TITLE_INPUT = 'input.sub_title',
  CONTENT_INPUT = 'input.content',
  RESEARCH_FIELD_INPUT = 'input.research_field',
  IMAGE_INPUT = 'input.image',

}

const defaultValue : Record<FormItemEnum, string | string[]> = {
  [FormItemEnum.TITLE_INPUT] : '',
  [FormItemEnum.SUB_TITLE_INPUT]: '',
  [FormItemEnum.RESEARCH_FIELD_INPUT]: [],
  [FormItemEnum.CONTENT_INPUT]: '',
  [FormItemEnum.IMAGE_INPUT] : ''
}

function Component ({className} : Props) {
  const { t } = useTranslation();
  const [ valueForm , setValueForm ] = useState<Record<FormItemEnum, string | string[]>>(defaultValue);
  const { token } = useTheme() as Theme;
  const [ isOpenOption, setIsOpenOption ] = useState(false);

  const onOpenOptionField = useCallback(()=>{
    setIsOpenOption(!isOpenOption)
  }, [isOpenOption])
  const onChangeValue = useCallback((e : React.ChangeEvent<HTMLInputElement>)=>{
    setValueForm({...valueForm, [e.currentTarget.id]: e.target.value})
  }, [valueForm])

  const onChangeValueContentResearch = useCallback((text ?: string) => {
    text && setValueForm({...valueForm, [FormItemEnum.CONTENT_INPUT] : text})
  }, [valueForm])

  const onUploadFile = useCallback((e : ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.item(0);
    if(file){
      setValueForm( {...valueForm, [FormItemEnum.CONTENT_INPUT] : valueForm[FormItemEnum.CONTENT_INPUT] + `![${'image'}](${'https://www.shibaura-it.ac.jp/faculty/laboratory/img/8333649c05cec7b04bff638e58273fa4_lab_img_1.jpg'})`})
    }
  },[valueForm])

  const onAddFieldResearch = useCallback((e : React.ChangeEvent<HTMLInputElement>)=>{
    e.target.checked && setValueForm({...valueForm, [FormItemEnum.RESEARCH_FIELD_INPUT]
        : [...(valueForm[FormItemEnum.RESEARCH_FIELD_INPUT] as string[]), e.target.id ]})
  }, [valueForm])


  return (
    <BaseModal className={className}>
      <div className={'new-lab-modal'}>
        <h1 className={'__modal-title'}>
          {t('Create new Laboratory')}
        </h1>
        <form className={'__form-container'}>
          <div className={'__form-group'}>
            <label className={'__form-label'}>{t('Your title research')}</label>
            <input type={'text'}
                   className={'__form-input'}
                   placeholder={'Enter your title'}
                   id={FormItemEnum.TITLE_INPUT}
                   value={valueForm[FormItemEnum.TITLE_INPUT]}
                   onChange={(e) => onChangeValue(e)}
            />
          </div>
          <div className={'__form-group'}>
            <label className={'__form-label'}>{t('Your subtitle research')}</label>
            <input type={'text'}
                   className={'__form-input'}
                   placeholder={'Enter your subtitle'}
                   id={FormItemEnum.SUB_TITLE_INPUT}
                   value={valueForm[FormItemEnum.SUB_TITLE_INPUT]}
                   onChange={(e) => onChangeValue(e)}
            />
          </div>
          <div className={'__form-group'}>
            <MDEditor value={valueForm[FormItemEnum.CONTENT_INPUT] as string}
                      height={'400px'}
                      autoFocus={true}
                      id={FormItemEnum.CONTENT_INPUT}
                      className={CN('__research-paper' ,'-editor')}
                      onChange={(text) => onChangeValueContentResearch(text)}
            />
          </div>
          <div className={'__form-group'}>
            <label className={'__form-label'}>{t('Your field research')}</label>
            <ButtonShape label={'...'} className={'__button-option-field'} type={'button'} onClick={()=>{onOpenOptionField()}}/>
            {isOpenOption && <div className='checkbox_container'>
              <div>
                <input type="checkbox" id='Health' className='form_checkBox'/>
                Health
              </div>
              <div>
                <input type="checkbox" id='Automotive' className='form_checkBox'/>
                Automotive
              </div>
              <div>
                <input type="checkbox" id='Medical' className='form_checkBox'/>
                Medical
              </div>
            </div>}
          </div>
          <div className={'__button-group'}>
            <ButtonShape
              className={'__research-file-button-upload'}
              label={<><Upload size={32}/>
                <input className="__research-file-upload" type="file"
                       accept=".jpg, .jpeg, .png"
                       id={FormItemEnum.IMAGE_INPUT}
                       onChange={(e) => onUploadFile(e)}/> </>}
              backgroundColor={token.colorBgGreen}
              color={token.colorTextLight}

            />
            <ButtonShape label={<><FilePlus size={32}/>Save</>}
                         className={'__button-shape-save'}
                         backgroundColor={token.colorBgGreen}
                         type={'submit'}
                         color={token.colorTextLight}
            />
            <ButtonShape label={'Cancle'}
                         className={'__button-shape-save'}
            />

          </div>

        </form>
      </div>
    </BaseModal>
  )
}


 const CreateNewResearchModal_nonAnimation = styled(Component)(({theme: {token}})=>{

  return({
    '.new-lab-modal': {
      display: 'flex',
      flex: '0 1 800px',
      padding: token.paddingLG,
      flexDirection: 'column',
      backgroundColor: token.colorBgLight,
      borderRadius: 20,

      '.__form-group': {
        display: 'flex',
        gap: token.paddingMD,
        alignItems: 'center'
      },

      '.__form-label': {
        width: '25%',
        fontWeight: token.fontWeightLG,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      },

      '.__form-input': {
        width: 500,
        height: 40,
        borderRadius: 10,
        paddingLeft: token.paddingMD,
        border: `1px solid ${token.borderColor}`,

        '&:focus': {
          outline: 'none'
        },

        '&:hover': {
          borderColor: token.colorBgGreen
        }
      },

      '.__research-paper': {
        width : '100%'
      },

      '.__form-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: token.paddingMD
      },
      '.__button-group': {
        display: 'flex',
        gap: token.paddingMD
      },

      '.__button-shape-save': {
        width: '50%'
      },
      '.__research-file-button-upload': {
        width: '25%',
        float: 'left'
      },
      '.__research-file-upload': {
        cursor: 'pointer',
      },
      '.__research-file-upload::-webkit-file-upload-button' : {
        visibility: 'hidden',
        width: '1%',
      },
      '.__research-file-upload::before' : {
        content: 'Upload image',
        cursor: 'pointer',
        display: 'inline-block',
        background: 'linear-gradient(top, #f9f9f9, #e3e3e3)',
        border: '1px solid #999',
        borderRadius: 3,
        outline: 'none',
        '-webkit-user-select': 'none',
      },

      '.checkbox_container': {
        display: 'block',
        position: 'absolute',
        zIndex: '1',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
        backgroundColor: token.colorBgLight,
        borderRadius: 10,
        overflow: 'auto',
        padding: 10,
        height: 130,
        left: '42%',
        top: '70%'
      },

      '.__button-option-field': {
        backgroundColor: token.colorBgSecondary,
        color: token.colorTextDark,
        width: 40,
        marginLeft: '0px'
      }

    }
  })
});

export const CreateNewResearchModal = styled(CreateNewResearchModal_nonAnimation)`
  .new-lab-modal {
    animation:  ${fadeStart} .3s ease-in-out;
  }


  .checkbox_container{
    animation: ${fadeDown} .3s ease-in-out;
  }



`
