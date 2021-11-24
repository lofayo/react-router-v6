/*
 * @Author: 罗方勇
 * @Description: V6 react-router
 * https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes
 * 优点：
 * 1、更精准的路由地址匹配；
 * 2、支持useNavigate方法导航路由；
 * 3、渲染路由参数:pathname，用useParams取值参数;
 * 4、嵌套路由里的相对路径；
 * 5、默认子路由（default child route）Index, index prop instead of path.That's because the index route share parent route path
 * 6、not found route
 * 重点：嵌套路由，想象场景：头部应用导航，左侧是应用下的菜单导航。路由必须是要用菜单链接到对应视图，因此将子路由用于父视图的一部分渲染很有必要
 * @Date: 2021-11-22 20:17:14
 */
import React from 'react'
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom'
import Invoices from './invoices';


const Index = () => (
  <div>
    <h2>Index</h2>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const NotFound = () => (
  <div>
    <h2>NotFound</h2>
  </div>
);

const IndexTopic = () => (
  <div>
    <h2>IndexTopic</h2>
  </div>
);

const ComponentRender = () => (
  <div>
    <h2>ComponentRender</h2>
  </div>
);

// 子路由用于父视图的一部分渲染
const Topics = () => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to='rendering'>Rendering with React</Link>
      </li>
      <li>
        <Link to='components'>Components</Link>
      </li>
      <li>
        <Link to='props-v-state'>Props v. State</Link>
      </li>
    </ul>
    <Routes>
      <Route index element={<IndexTopic />} />
      <Route path='components' element={<ComponentRender />} />
      <Route path=':topicId' element={<Topic />} />
    </Routes>
  </div>
);
const Topic = () => {
  const {topicId} = useParams() || {};
  return <div>
    <h3>{topicId}</h3>
  </div>
};
const BasicExample = () => (
  <div>
    <ul style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/invoices">Invoices</Link>
      </li>
    </ul>

    <hr />
    <Routes>
      <Route index element={<Index />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/topics/*" element={<Topics />} />
      <Route path="/invoices/*" element={<Invoices />} />
    </Routes>
  </div>
);

export default BasicExample;