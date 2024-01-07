import { Route, Routes} from "react-router";
import { Navigation } from "../pages/navigate/Naviagation.page";
import { HomePage } from "../pages/home/Home.page";
import { ResearchPage } from "../pages/research/Research.page";
import { LaboratoriesPage } from "../pages/laboratories/Laboratories.page";
import { LaboratoryPage } from "../pages/laboratories/Laboratory.page";
import {MemberLaboratoryPartPage} from "../pages/laboratories/part/body/MemberLaboratory.part.page";
import {ResearchListLaboratoryPartPage} from "../pages/laboratories/part/body/ResearchListLaboratory.part.page";
import { AboutLaboratoryPartPage} from "../pages/laboratories/part/body/About.part.page";
import { ModLaboratoryPartPage } from "../pages/laboratories/part/body/Mod.part.page";
import {AuthenticationSignIn} from "../pages/authentication/SignIn.pages";
import {ConfirmPart} from "../pages/authentication/part/Confirm.part.page";
import {ReformPart} from "../pages/authentication/part/Reform.part.page";
import {AuthenticationSignUp} from "../pages/authentication/SignUp.pages";
import {RegistrationPart} from "../pages/authentication/part/Registration.part.page";

const Router = () => {

  return (
    <Routes>
        <Route path="/home/*" element={<Navigation />} >
          <Route index={true} element={<HomePage />} />
          {/*<Route path={"headline/*"} element={<Headline />} >*/}
          {/*  /!*<Route path={"postItem"} element={<New />} />*!/*/}
          {/*</Route>*/}
          <Route path={"research/*"} element={<ResearchPage />} >
          {/*  <Route path={"detail"} element={<DetailResearch />} />*/}
          {/*  <Route path={"modResearch"} element={<ModResearch />} />*/}
          </ Route>
          <Route path={"laboratories/*"}>
            <Route index element={<LaboratoriesPage />} />
            <Route path={":laboratory/*"} element={<LaboratoryPage />} >
              <Route path={"member"} element={<MemberLaboratoryPartPage />} />
              <Route index element={<ResearchListLaboratoryPartPage />} />
              <Route path={"mod"} element={<ModLaboratoryPartPage/>} />
              <Route path={"about"} element={<AboutLaboratoryPartPage/>} />
            </Route>
          </Route>
        {/*  <Route path={"/profile/*"} element={<Profile />} >*/}
        {/*    <Route path={"detail"} element={<DetailProfile />} />*/}
        {/*    <Route path={"research"} element={<ProfileResearch />} />*/}
        {/*    <Route path={"follow"} element={<Follow />} />*/}
        {/*  </Route>*/}

        {/*  <Route path={"/ranked/*"} element={<Ranked />} >*/}
        {/*    <Route path={"authorRanked"} element={<AuthorRanked />} />*/}
        {/*    <Route path={"researchRanked"} element={<reSearchRanked />} />*/}
        {/*    <Route path={"laboratoryRanked"} element={<LaboratoryRanked />} />*/}
        {/*  </Route>*/}

        {/*  <Route path={"/admin"} element={<Admin />} >*/}
        {/*    <Route path={"/addAchiveLaboratory"} element={<AchiveLaboratory/>} />*/}
        {/*    <Route path={"/roleList"} element={<RoleList />} />*/}
        {/*  </Route>*/}
        </Route>
      <Route>
        <Route path="/signIn" element= {<AuthenticationSignIn />} />
        <Route path ="/signUp/*" element = {<AuthenticationSignUp />} >
          <Route path= "registration" element = {<RegistrationPart />} />
          <Route path= "reform" element={<ReformPart />} />
          <Route path="confirm" element={<ConfirmPart/>} />
        </Route>
      </Route>
    </Routes>
  )

}


export default Router;
