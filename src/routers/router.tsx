import { Route, Routes} from "react-router";
import { Navigation } from "../pages/navigate/Naviagation.page";
import { HomePage } from "../pages/home/Home.page";
import { ResearchPage } from "../pages/research/Research.page";
import { LaboratoriesPage } from "../pages/laboratories/Laboratories.page";
import { LaboratoryPage } from "../pages/laboratories/Laboratory.page";
import {MemberLaboratoryPartPage} from "../pages/laboratories/part/body/MemberLaboratory.part.page";
import {ResearchListLaboratoryPartPage} from "../pages/laboratories/part/body/ResearchListLaboratory.part.page";
import { ModResearchLaboratoryPartPage } from "../pages/laboratories/part/body/ModResearch.part.page";
import { ModLaboratoryPartPage } from "../pages/laboratories/part/body/Mod.part.page";

const Router = () => {

  return (
    <Routes>
        <Route path="/*" element={<Navigation />} >
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
              <Route path={"modMember"} element={<ModLaboratoryPartPage/>} />
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
      {/*<Route>*/}
        {/*<Route path="/login" element= {<AuthenticationSignIn />} />*/}
        {/*<Route path ="/signUp/*" element = {<AuthenticationSignUp />} >*/}
        {/*  <Route path= "registration" element = {<Registration />} />*/}
        {/*  <Route path= "reform" element={<Reform />} />*/}
        {/*  <Route path="confirm" element={<Confirm/>} />*/}
        {/*</Route>*/}
      {/*</Route>*/}
    </Routes>
  )

}


export default Router;
