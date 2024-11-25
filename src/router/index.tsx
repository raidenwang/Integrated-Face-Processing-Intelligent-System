import { createHashRouter } from "react-router-dom";
import Directory from "../views/directory";
import App from "../App";
import FaceDetectionIntro from "../views/FaceDetection/intro";
import { Suspense } from "react";
import Description from "../views/Home";
import FaceDetection from "../views/FaceDetection";
import FaceRepairIntro from "../views/FaceRepair/intro";
import FaceRepair from "../views/FaceRepair";
import SkinEnhanceIntro from "../views/SkinEnhance/intro";
import SkinEnhance from "../views/SkinEnhance";
import FaceExpressionRecognition from "../views/FaceExpression";
import FaceExpressionIntro from "../views/FaceExpression/intro";
import FaceLivenessIntro from "../views/FaceLiveness/intro";
import FaceLivenessDetection from "../views/FaceLiveness";
import FeedbackPage from "../views/Feedback";


const router = createHashRouter([
    {
        path:"/",
        element:<App></App>
    },
    {
        path:"directory",
        element:<Directory></Directory>,
        children:[
            {
                index:true,
                element:<Suspense><Description/></Suspense>
            },
            {
                path:'FaceDetection-intro',
                element:<FaceDetectionIntro></FaceDetectionIntro>
            },
            {
                path:'FaceDetection',
                element:<FaceDetection></FaceDetection>
            },
            {
                path:'FaceRepair-intro',
                element:<FaceRepairIntro></FaceRepairIntro>
            },
            {
                path:'FaceRepair',
                element:<FaceRepair></FaceRepair>
            },
            {
                path:'SkinEnhance-intro',
                element:<SkinEnhanceIntro></SkinEnhanceIntro>
            },
            {
                path:'SkinEnhance',
                element:<SkinEnhance></SkinEnhance>
            },
            {
                path:'FaceExpression',
                element:<FaceExpressionRecognition></FaceExpressionRecognition>
            },
            {
                path:'FaceExpression-intro',
                element:<FaceExpressionIntro></FaceExpressionIntro>
            },
            {
                path:'FaceLiveness-intro',
                element:<FaceLivenessIntro></FaceLivenessIntro>
            },
            {
                path:'FaceLiveness',
                element:<FaceLivenessDetection></FaceLivenessDetection>
            },
            {
                path:'feedback',
                element:<FeedbackPage></FeedbackPage>
            }
        ]
    }
])

export default router;