import {Member, MemberType, Theme, ThemeProps, UserProfile} from "../../types";
import styled, {useTheme} from "styled-components";
import {useCallback, useMemo, useState} from "react";
import CN from "classnames";
import { useTranslation } from "../../hook";
import { ButtonShape } from "../button/ButtonShape.component";
import { Buildings,
        GlobeHemisphereWest,
        FacebookLogo,
        TelegramLogo,
        Backpack,
        Link,
        Calendar
} from "phosphor-react";
import { fadeStart} from "../../styles/styles.animation";

interface Props extends ThemeProps {
  content : Member;
  isShowEdit : boolean
};

enum FormItemEnum {
  NAME_ITEM = 'name',
  SCHOOL_ITEM = 'school',
  ADDRESS = 'address',
  COUNTRY = 'country',
  SOCIAL_FACEBOOK = 'social_facebook',
  SOCIAL_TELEGRAM =  'socail_telegram',
  SOCIAL_CUSTOM_1 = 'social_custom_1',
  SOCIAL_CUSTOM_2 = 'social_custom_2'
}

interface FormInterface {
  [FormItemEnum.NAME_ITEM] : string,
  [FormItemEnum.SCHOOL_ITEM] ?: string,
  [FormItemEnum.ADDRESS] ?: string,
  [FormItemEnum.COUNTRY] ?: string,
  [FormItemEnum.SOCIAL_FACEBOOK] ?: string,
  [FormItemEnum.SOCIAL_TELEGRAM] ?:  string,
  [FormItemEnum.SOCIAL_CUSTOM_1] ?: string,
  [FormItemEnum.SOCIAL_CUSTOM_2] ?: string
}






function Component ({ className, content, isShowEdit } : Props){
  const [ isEdit, setIsEdit ] = useState<boolean>(false);
  const { name, university, age, logo, laboratories} = content;
  const { t } = useTranslation();
  const { token } = useTheme() as Theme;

  const initilaValue = useMemo(()=>{
    return {
      [FormItemEnum.NAME_ITEM] : name || '',
      [FormItemEnum.SCHOOL_ITEM] : university,
      [FormItemEnum.ADDRESS] : 'Hanoi',
      [FormItemEnum.COUNTRY] : 'VietNam',
      [FormItemEnum.SOCIAL_FACEBOOK] : 'https:www.facebook.com',
      [FormItemEnum.SOCIAL_TELEGRAM] :  'https:www.facebook.com',
      [FormItemEnum.SOCIAL_CUSTOM_1] : 'https:www.facebook.com',
      [FormItemEnum.SOCIAL_CUSTOM_2] : 'https:www.facebook.com'
    }

  }, [name, university])

  const [ valueForm , setValueForm ] = useState<FormInterface>(initilaValue);
  const [ valueSave, setValueSave ] = useState<FormInterface>(initilaValue);
  const onChangeValue = useCallback((e : React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    const key = e.target.id as FormItemEnum;
    setValueForm({...valueForm, [key] : value})
  }, [valueForm])

  const onClickToEditProfile = useCallback(()=>{
    setIsEdit(!isEdit);
  }, [isEdit])

  const onSubmitForm = useCallback((e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setValueSave(valueForm);
    setIsEdit(!isEdit)
  }, [isEdit, valueForm])

  return(
    <div className={CN(className)}>
      {isEdit ? <>
        <form  className={'form-container'} onSubmit={(e) => onSubmitForm(e)} >
          <div className={'__form-group'}>
            <div className={'__form-label'}>{ t('Name') }</div>
            <div className={'__group-input'}>
              <input type={'text'}
                     className={'__form-input'}
                     placeholder={t('Name')}
                     value={valueForm[FormItemEnum.NAME_ITEM]}
                     onChange={(e)=> onChangeValue(e)}
                     id={FormItemEnum.NAME_ITEM}/>
            </div>
          </div>
          <div className={'__form-group'}>
            <div className={'__form-label'}>{ t('Information') }</div>
            <div className={'__group-input'}>
              <Calendar weight={'fill'} size={32} color={token.colorBgGreen}/>
              <input type={'text'}
                     className={'__form-input'}
                     value={'20020-10-11'}
                     disabled={true}
             />
            </div>
            <div className={'__group-input'}>
              <Backpack weight={'fill'} size={32} color={token.colorBgGreen}/>
              <input type={'text'}
                     className={'__form-input'}
                     placeholder={t('School')}
                     onChange={(e)=> onChangeValue(e)}
                     value={valueForm[FormItemEnum.SCHOOL_ITEM]}
                     id={FormItemEnum.SCHOOL_ITEM}/>
            </div>
            <div className={'__group-input'}>
              <Buildings weight={'fill'} size={32} color={token.colorBgGreen}/>
              <input type={'text'}
                     className={'__form-input'}
                     placeholder={t('Address')}
                     onChange={(e)=> onChangeValue(e)}
                     value={valueForm[FormItemEnum.ADDRESS]}
                     id={FormItemEnum.ADDRESS}/>
            </div>
            <div className={'__group-input'}>
              <GlobeHemisphereWest weight={'fill'} size={32} color={token.colorBgGreen}/>
              <input type={'text'}
                     className={'__form-input'}
                     placeholder={t('Country')}
                     onChange={(e)=> onChangeValue(e)}
                     value={valueForm[FormItemEnum.COUNTRY]}
                     id={FormItemEnum.COUNTRY}/>
            </div>
          </div>
          <div className={'__form-group'}>
            <div className={'__form-label'}>{t('Social Account')}</div>
            <div className={'__group-input'}>
              <FacebookLogo weight={'fill'} size={32} color={'#0866ff'}/>
              <input type={'text'}
                     className={'__form-input'}
                     onChange={(e)=> onChangeValue(e)}
                     value={valueForm[FormItemEnum.SOCIAL_FACEBOOK]}
                     placeholder={t('Link to social profile')}
                     id={FormItemEnum.SOCIAL_FACEBOOK}/>
            </div>
            <div className={'__group-input'}>
              <TelegramLogo weight={'fill'} size={32} color={'#25a4e2'}/>
              <input type={'text'}
                     className={'__form-input'}
                     placeholder={t('Link to social profile')}
                     onChange={(e)=> onChangeValue(e)}
                     value={valueForm[FormItemEnum.SOCIAL_TELEGRAM]}
                     id={FormItemEnum.SOCIAL_TELEGRAM}/>
            </div>
            <div className={'__group-input'}>
              <Link weight={'fill'} size={32} color={token.colorBgGreen}/>
              <input type={'text'}
                     className={'__form-input'}
                     placeholder={t('Link to social profile')}
                     onChange={(e)=> onChangeValue(e)}
                     value={valueForm[FormItemEnum.SOCIAL_CUSTOM_1]}
                     id={FormItemEnum.SOCIAL_CUSTOM_1}/>
            </div>
            <div className={'__group-input'}>
              <Link weight={'fill'} size={32} color={token.colorBgGreen}/>
              <input type={'text'}
                     className={'__form-input'}
                     placeholder={t('Link to social profile')}
                     onChange={(e)=> onChangeValue(e)}
                     value={valueForm[FormItemEnum.SOCIAL_CUSTOM_2]}
                     id={FormItemEnum.SOCIAL_CUSTOM_2}/>
            </div>
          </div>
          <div className={'__button-form-group'}>
            <ButtonShape className={'__button-form'} type={'submit'} label={t('Save')} backgroundColor={token.colorBgGreen} color={token.colorTextLight} />
            <ButtonShape className={'__button-form'} label={t('Cancle')} backgroundColor={token.colorBgSecondary}  onClick={onClickToEditProfile}/>
          </div>

        </form>
      </>: <>
        { isShowEdit && <ButtonShape label={t('Edit Profile')} className={'__button-edit-profile'} onClick={onClickToEditProfile}/>}
          <div className={'__information-group'}>
              <h3 className={'__information-content'}>{ valueSave[FormItemEnum.NAME_ITEM] }</h3>
          </div>
          <div className={'__information-group'}>
            <div className={'__information-label'}>{ t('Information') }</div>
            <div className={'__information-group-content'}>
              <Calendar weight={'fill'} size={32} color={token.colorBgGreen}/>
              <div className={'__information-content'}>{ '2020-10-11' }</div>
            </div>
            <div className={'__information-group-content'}>
              <Backpack weight={'fill'} size={32} color={token.colorBgGreen}/>
              <div className={'__information-content'}>{ valueSave[FormItemEnum.SCHOOL_ITEM] }</div>
            </div>
            <div className={'__information-group-content'}>
              <Buildings weight={'fill'} size={32} color={token.colorBgGreen}/>
              <div className={'__information-content'}>{ valueSave[FormItemEnum.ADDRESS] }</div>
            </div>
            <div className={'__information-group-content'}>
              <GlobeHemisphereWest weight={'fill'} size={32} color={token.colorBgGreen}/>
              <div className={'__information-content'}>{ valueSave[FormItemEnum.COUNTRY] }</div>
            </div>
          </div>
          <div className={'__information-group'}>
            <div className={'__information-label'}>{ t('Information') }</div>
            <div className={'__information-group-content'}>
              <FacebookLogo weight={'fill'} size={32} color={'#0866ff'}/>
              <div className={'__information-content'}>{ valueSave[FormItemEnum.SOCIAL_FACEBOOK] }</div>
            </div>
            <div className={'__information-group-content'}>
              <TelegramLogo weight={'fill'} size={32} color={'#25a4e2'}/>
              <div className={'__information-content'}>{ valueSave[FormItemEnum.SOCIAL_TELEGRAM] }</div>
            </div>
            {!!valueSave[FormItemEnum.SOCIAL_CUSTOM_1] &&<div className={'__information-group-content'}>
              <Link weight={'fill'} size={32} color={token.colorBgGreen}/>
              <div className={'__information-content'}>{valueSave[FormItemEnum.SOCIAL_CUSTOM_1]}</div>
            </div>}
            {!!valueSave[FormItemEnum.SOCIAL_CUSTOM_2] && <div className={'__information-group-content'}>
              <Link weight={'fill'} size={32} color={token.colorBgGreen}/>
              <div className={'__information-content'}>{valueSave[FormItemEnum.SOCIAL_CUSTOM_2]}</div>
            </div>}
          </div>
      </>}
    </div>
  )
}



const ProfileEdit_nonAnimation = styled(Component)<Props>(({ theme: {token}})=>{

  return({
    marginTop: token.marginMD,

    '.form-container': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingMD
    },

    '.__form-label, .__information-label': {
      fontWeight: token.fontWeightMD,
      color: token.colorTextDark,
      fontSize: 14,
      marginBottom: token.marginMD
    },

    '.__form-input': {
      width: '90%',
      borderRadius: 10,
      padding: '5px 12px',
      lineHeight: '20px',
      border: '1px solid #d0d7de',
      height: 50,
      outline: "none",
      marginBottom: token.marginMD
    },

    '.__information-group': {
      marginBottom: token.marginMD
    },

    '.__group-input, .__information-group-content': {
      display: 'flex',
      flexDirection: 'row',
      gap: token.padding,
      alignItems: 'center'
    },

    '.__button-form-group': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap :"wrap"
    },
    '.__button-form': {
      flex: '0 1 45%'
    },

    '.__button-edit-profile': {
      width: '100%'
    }


  })
});

export const ProfileEdit = styled(ProfileEdit_nonAnimation)`
  .__group-input, .__information-group-content {
    animation: ${fadeStart} .3s ease-in-out;
  }


`
