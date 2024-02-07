import {ResearchType, Theme, ThemeProps, UserProfile} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {AutomotiveIcon, HealthIcon} from "../../components/icon";
import React, {ChangeEvent, LegacyRef, useCallback, useRef, useState} from "react";
import {SideBar} from "../../components/sideBar/SideBar.component";
import {useParams} from "react-router";
import {PostProfileUser} from "../../components/postItem/PostItemProfileUser.component";
import MDEditor, {title} from '@uiw/react-md-editor';
import {ButtonShape} from "../../components/button/ButtonShape.component";
import  Markdown  from 'react-markdown';
import { fadeStart} from "../../styles/styles.animation";
import { useTranslation } from "../../hook";
import { PostLaboratory } from "../../components/postItem/PostItemLaboratory.component";
import { Upload, PencilCircle, FilePlus  } from "phosphor-react";

interface Props extends ThemeProps {};

const content : ResearchType = {
  title: 'Định luật bảo toàn khối lượng',
  subTitle: 'As semiconductor devices are increasingly functionalized and miniaturized, the film materials used in them have reached the thickness of several nanometers. In this tiny world, we witness strange physical phenomena unthinkable in the ordinary world, such as particles piercing through walls. Our laboratory conducts research with the aim to use the phenomenon known as “quantum effects” to develop new functional materials.',
  link : '123',
  image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
  research : <><HealthIcon /><AutomotiveIcon /></>,
  activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
  description : 'some thing like that',
  admin : 'Thien',
  laboratory : {
    logo : 'https://i.stack.imgur.com/nxdU4.png',
    nameLab: 'SEEE lab',
    location : '1 Đại Cồ Việt st, Hai Ba Trung',
    country: 'Viet Nam'
  },
}

const user: UserProfile = {
  image : 'https://avatars.githubusercontent.com/u/139972251?s=400&v=4',
  name: 'Thiendekaco',
  location : '1 Đại Cồ Việt st, Hai Ba Trung',
  createAt : '06/10/2023',
  school : 'HUST',
  country : 'Hanoi, VietName',
  social : {
    facebook: 'ahsbdhabsdas.com',
    telegram: 'asbdhasbhasbd.com'
  }
}

const demo = 'These Terms of Use (“Agreement”) set forth the general terms and conditions of your use of the SubWallet extension application, mobile application, and web dashboard application ("SubWallet Application") and any of its related products and services (collectively, “Services”). \n' +
  '\n' +
  'This Agreement is legally binding between you (“User”, “you” or “your”) and this application developer (“Operator”, “we”, “us” or “our”). If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such an entity to this Agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. \n' +
  '\n' +
  'If you do not have such authority, or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the SubWallet Application and Services. By accessing and using the SubWallet Application and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the SubWallet Application and Services.\n' +
  '\n' +
  'This Agreement is written in various languages. If there is any dispute, the English language shall prevail.\n' +
  '\n' +
  '#### **Accounts and membership**\n' +
  '\n' +
  'If you create a wallet in the SubWallet Application, you are responsible for maintaining the security of your wallet and you are fully responsible for all activities that occur with the wallet and any other actions taken in connection with it. You should understand that we do not have access to any wallet-related information on our side, nor are we able to send it to any other party. \n' +
  '\n' +
  'All such information is stored locally on your device(s) which we do not have access to and you bear full responsibility for its (their) safety. Your wallet private keys/seed phrases are not backed up along with other data so if you delete SubWallet Application, it will be impossible to restore your keys from a backup.\n' +
  '\n' +
  '#### **Privacy Policy**\n' +
  '\n' +
  'We respect your privacy and are committed to protecting it through our compliance with this privacy policy (“Policy”). This Policy describes the types of information we may collect from you or that you may provide on the SubWallet Application, SubWallet.App website, and any of their related products and services, and our practices for collecting, using, maintaining, protecting, and disclosing that information. By accessing and using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage. \n' +
  '\n' +
  '##### **Information category**\n' +
  '\n' +
  'For the purposes of the given document, we would like to classify information into the following categories: Data that is used for wallet creation, import, and export (i.e., seed phrase, private key, etc.) (“Sensitive information”), personally identifiable information (i.e., data that could potentially identify you as an individual) (“Personal information”), and Non-personally identifiable information (i.e., information that cannot be used to identify who you are) (“Non-personal information”). This Policy covers all the categories and will tell you how we might collect and use each type.\n' +
  '\n' +
  '*Sensitive information*\n' +
  '\n' +
  'Your Sensitive information is not collected or stored by us. In particular, it is not sent anywhere, is not stored anywhere except your device, and is not included in backups of the operating system. We are committed to making sure your information is protected and we employ several mechanisms to keep your information safe, including on-device encryption, verification and authentication by password or biometrics, and securing all network connections with industry-standard transport layer security. However, even with these precautions taken by us, the safety of your device and your seed phrase or backup data is solely your responsibility.\n' +
  '\n' +
  '*Personal information & Non-personal information*\n' +
  '\n' +
  'You can access and use the Services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. In other words, no Personal information is collected by our Services. This applies to all categories of users, including children under the age of 18. Please note that our extension and app have been uploaded to the Store on desktop browsers (Chrome, Brave, Edge & Firefox) and mobile (App Store and Play Store). These stores may track some of your information and activities including but not limited to log data, cookies, etc.\n' +
  '\n' +
  '##### **Disclosure of information**\n' +
  '\n' +
  'We do not share your information with anyone or for any reason.\n' +
  '\n' +
  '##### **Security Measures**\n' +
  '\n' +
  'In the event we become aware that the security of the Services has been compromised as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In such cases, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to them or if notice is otherwise required by law. When we do, we will post a notice on the Services.\n' +
  '\n' +
  '##### **Do Not Track signals**\n' +
  '\n' +
  'Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. The Services do not track its visitors over time and across third-party websites. However, some third-party websites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you.\n' +
  '\n' +
  '#### **Links to other resources**\n' +
  '\n' +
  'Although the SubWallet Application and Services may link to other resources (such as websites, other applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of any businesses or individuals or the content of their resources. \n' +
  '\n' +
  'We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource that you access through a link in the SubWallet Application. Your linking to any other off-site resources is at your own risk.\n' +
  '\n' +
  '#### **Prohibited uses**\n' +
  '\n' +
  'In addition to other terms as set forth in the Agreement, you are prohibited from using the SubWallet Application and Services:\n' +
  '\n' +
  '1. For any unlawful purpose\n' +
  '2. To solicit others to perform or participate in any unlawful acts\n' +
  '3. To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances\n' +
  '4. To infringe upon or violate our intellectual property rights or the intellectual property rights of others\n' +
  '5. To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability\n' +
  '6. To submit false or misleading information\n' +
  '7. To upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the SubWallet Application and Services, third-party products and services, or the Internet\n' +
  '8. To spam, phish, pharm, pretext, spider, crawl, or scrape\n' +
  '9. For any obscene or immoral purpose\n' +
  '10. To interfere with or circumvent the security features of the SubWallet Application and Services, third-party products and services, or the Internet.\n' +
  '    \n' +
  '#### **Intellectual property rights**\n' +
  '\n' +
  '“Intellectual Property Rights” means all present and future rights conferred by statute, common law, or equity in or in relation to any copyright and related rights, trademarks, designs, patents, inventions, goodwill, and the right to sue for passing off, rights to inventions, rights to use, and all other intellectual property rights, in each case whether registered or unregistered and including all applications and rights to apply for and be granted, rights to claim priority from, such rights and all similar or equivalent rights or forms of protection and any other results of intellectual activity which subsist or will subsist now or in the future in any part of the world.\n' +
  '\n' +
  'This Agreement does not transfer to you any intellectual property owned by the Operator or third parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with the Operator. All trademarks, service marks, graphics, and logos used in connection with the SubWallet Application and Services, are trademarks or registered trademarks of the Operator or its licensors.\n' +
  '\n' +
  'Other trademarks, service marks, graphics, and logos used in connection with the SubWallet Application and Services may be the trademarks of other third parties. Your use of the SubWallet Application and Services grants you no right or license to reproduce or otherwise use any of the Operator or third-party trademarks.\n' +
  '\n' +
  '#### **Limitation of liability**\n' +
  '\n' +
  'To the fullest extent permitted by applicable law, in no event will the Operator, its affiliates, directors, officers, employees, agents, suppliers, or licensors be liable to any person for any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use of content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if the liable party has been advised as to the possibility of such damages or could have foreseen such damages. \n' +
  '\n' +
  '#### **Indemnification**\n' +
  '\n' +
  'You agree to indemnify and hold the Operator and its affiliates, directors, officers, employees, agents, suppliers, and licensors harmless from and against any liabilities, losses, damages, or costs, including reasonable attorneys’ fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your use of the SubWallet Application and Services or any willful misconduct on your part.\n' +
  '\n' +
  '#### **Severability**\n' +
  '\n' +
  'All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid, or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid, or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their Agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.\n' +
  '\n' +
  '#### **Dispute resolution**\n' +
  '\n' +
  'The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of the United Nations Convention without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of the United Nations Convention. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the courts located in the United Nations Convention, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.\n' +
  '\n' +
  '#### **Changes and amendments**\n' +
  '\n' +
  'We reserve the right to modify this Agreement or its terms related to the SubWallet Application and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.\n' +
  '\n' +
  'An updated version of this Agreement will be effective immediately upon the posting of the revised Agreement unless otherwise specified. Your continued use of the SubWallet Application and Services after the effective date of the revised Agreement (or such other act specified at that time) will constitute your consent to those changes.\n' +
  '\n' +
  '#### **Acceptance of these terms**\n' +
  '\n' +
  'You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the SubWallet Application and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the SubWallet Application and Services.\n' +
  '\n' +
  '#### **Contacting us**\n' +
  '\n' +
  'If you have any questions, concerns, or complaints regarding this Agreement, we encourage you to contact us using the details below:\n' +
  '\n' +
  '**Email:** [**agent@subwallet.app**](mailto:agent@subwallet.app)\n' +
  '\n' +
  'Last modified Jan 10, 2024.'





function Component({ className } : Props){
  const { research } = useParams();
  const [ valueEditResearch , setValueEditResearch] = useState(demo);
  const [ editState, setEditState ] = useState(false);
  const { t } = useTranslation();
  const { token } = useTheme() as Theme;

  const onClickToEdit = useCallback(()=>{
    setEditState(!editState);
  }, [editState])
  const onChange = useCallback(( textMD ?: string) => {
    setValueEditResearch(textMD || '')
    console.log(textMD)
  }, [])

  const onUploadFile = useCallback((e : ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.item(0);

    if(file){
      setValueEditResearch(valueEditResearch + `![${'https://www.shibaura-it.ac.jp/faculty/laboratory/img/8333649c05cec7b04bff638e58273fa4_lab_img_1.jpg'}](${'https://www.shibaura-it.ac.jp/faculty/laboratory/img/8333649c05cec7b04bff638e58273fa4_lab_img_1.jpg'})`)
    }
  },[valueEditResearch])


  return(
    <div className={CN(className, 'research-wrapper')} >
      <div className={'__research-content'}>
        {content.title && <h1 className={'__research-title'}>
          {t(content.title)}
        </h1>}
        {
          content.subTitle && <h4 className={'__research-sub-title'}>
            {content.subTitle}
            </h4>
        }
        <div className={'__research-page-wrapper'}>
          {editState ? <MDEditor value={valueEditResearch}
                                 height={'400px'}
                                 autoFocus={true}
                                 className={CN('__research-paper' ,'-editor')}
                                 onChange={(e) => onChange(e)}
          /> : <Markdown className={CN('__research-paper', '-content')}>{valueEditResearch}</Markdown> }
        </div>
        <div className={'__button-group'}>
          <ButtonShape label={editState ? <><FilePlus size={32}/>Save</> : <><PencilCircle size={16}/>Edit</>}
                       className={'__button-shape-save'}
                       backgroundColor={token.colorBgGreen}
                       onClick={onClickToEdit}
                       color={token.colorTextLight}
          />

          {editState && <ButtonShape label={<><Upload size={32}/> <input className="__research-file-upload" type="file"
                                                                         accept=".jpg, .jpeg, .png"
                                                                         onChange={(e) => onUploadFile(e)}/> </>}
                        backgroundColor={token.colorBgGreen}
                        className={'__button-shape-save'}
                        color={token.colorTextLight}

          />}
        </div>

        <div className={'__research-author'}>
        <PostProfileUser content={user} />
        </div>
        <div className={'__research-laboratory'}>
          {content.laboratory && <PostLaboratory content={content.laboratory} />}
        </div>
        <div className={'__research-field'}>
          { content.research }
        </div>
      </div>
      <SideBar />
    </div>
  )
}


const ResearchDetailPage_nonAnimation = styled(Component)(({theme: {token}})=>{


  return({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 200,
    padding: token.paddingXS,
    gap: token.paddingXS,


    '.__research-content': {
      display: 'flex',
      flexDirection : 'column',
      width: '100%',
      gap: token.paddingMD,
    },

    '.__research-editor': {
      width : '90%',
      margin: 'auto'
    },


    '.__research-page-wrapper': {
      width :'100%',
      borderRadius: 20,
      padding: token.paddingMD,
      transition: 'all .3s ease-in-out',
      boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',
      marginBottom: token.marginXS
    },

    '.__research-field': {
      display: 'flex',
      gap: token.paddingMD,
      alignItems: 'center',
      width: '100%'
    },

      '.icon-wrapper': {
        display: 'flex',
        flexDirection : 'column',
        border: '1px solid',
        width: '25.9145299145%',
        borderRadius: 20,
        backgroundColor: token.colorBgSecondary,
        borderColor : token.borderColor,
        transition: 'box-shadow .3s ease-in-out',

        '&:hover': {
          boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',
        }
      },

      '._icon-logo-wrap': {
        borderRadius: '6px 6px 0 0',
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: `80px 0px`,
        alignItems:'center',
      },

      '._icon-logo': {
        margin: 'auto',
        width: 78,
        height: 78,
      },

      '._icon-label':{
        color: token.colorTextSecondary,
        fontSize: token.fontSize,
        fontWeight: token.fontWeightXS,
        display: "flex",
        alignItems: 'center',
        backgroundColor: token.colorBgLight,
        padding: token.paddingMD,
        cursor: 'pointer',
        borderRadius: '0 0 20px 20px ',
      },

    '.post-item': {
      borderRadius: 20,
      width: '100%',
      transition: 'box-shadow .3s ease-in-out',
      border: '1px solid',
      borderColor: token.borderColor,

      '&:hover': {
        boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',
      }
    },

    '.__button-group': {
      display: 'flex',
      width :'30%',
      gap: token.paddingMD,
      justifyContent: 'flex-start'
    },

    '.__research-sub-title': {
      backgroundColor: token.colorBgSecondary,
      borderRadius: 20,
      padding: token.paddingMD
    },

    '.__research-file-upload': {
      cursor: 'pointer'
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

      }
  })
})

export const ResearchDetailPage = styled(ResearchDetailPage_nonAnimation)`
  
  .-editor {
    animation: ${fadeStart} .3s cubic-bezier(.65,0,.35,1) forwards; 
  }
  
`
