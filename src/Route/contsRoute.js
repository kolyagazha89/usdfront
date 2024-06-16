import Main from "../pages/main";
import Calendar from "../pages/calendarPage";
import Result from "../componets/result/result";
import Record from "../componets/record/record";
import Album from "../componets/album/album";
import Partners from "../componets/partner/partners";
import Rules from "../componets/rule/rules";
import Live from "../componets/live/live";
import Sportmens from "../componets/sportmens/sportmens";
import News from "../componets/news/news";
import Lk from "../componets/lk/lk";
import MainAdmin from "../componetsAdmin/main/mainAdmin";
import Stages from "../componetsAdmin/stage/stages";
import PartnersAdmin from "../componetsAdmin/partner/partnersAdmin";
import StageElem from "../componetsAdmin/stage/stageElem";
import NewsPart from "../componetsAdmin/partner/newsPart";
import ChangeProfile from "../componets/lk/changeProfile";
import Register from "../componets/calendar/register";
import Newss from "../componetsAdmin/news/news"
import React from "react";
import MainRtc from "../componetsAdmin/rtc/mainRtc";

export const ROUTING= [
    { path:"/",component:<Main/>},
    { path:"/calendar",component:<Calendar/>},
    { path:"/results",component:<Result/>},
    { path:"/records",component:<Record/>},
    { path:"/album",component:<Album/>},
    { path:"/partners",component:<Partners/>},
    { path:"/rules",component:<Rules/>},
    { path:"/live",component:<Live/>},
    { path:"/news",component:<News/>},
    { path:"/sportmens",component:<Sportmens/>},
    { path:"/lk",component:<Lk/>},
    { path:"/lk/changeprofile",component:<ChangeProfile/>},
    { path:"/register/:id",component:<Register/>},
]
export const ROUTINGADMIN=[
    {path: "/admin/main", component:<MainAdmin/>},
    {path: "/admin/stage", component:<Stages/>},
    {path: "/admin/stage/add", component:<StageElem/>},
    {path: `/admin/stage/add/:id`, component:<StageElem/>},
    {path: "/admin/partner", component:<PartnersAdmin/>},
    {path: "/admin/partner/np", component:<NewsPart/>},
    {path: "/admin/news", component:<Newss/>},
    {path: "/admin/rtc", component:<MainRtc/>},
]