import { Spin } from 'antd';
import {
    createBrowserRouter,
    Link,
    Outlet,
    useNavigation,
} from "react-router-dom";

import IM from '../pages/im';


function Root() {
    const navigation = useNavigation();
    return <div>
        {navigation.state === "loading" && <Spin />}
        <div>
            <Link to="im">IM</Link>
            <Link to="abount">abount</Link>
        </div>
        <div><Outlet/></div>
        </div>
}

const router = 
  
  // Or use plain objects
  createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "im",
          element: <IM/>,
        },
        {
            path: "abount",
            element: <div>abount</div>,
          },
      ],
    },
  ]);
export default router;

